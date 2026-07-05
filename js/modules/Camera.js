export class Camera {
    constructor(viewportElement, mapElement, levelIndicatorElement) {
        this.viewport = viewportElement;
        this.map = mapElement;
        this.levelIndicator = levelIndicatorElement;

        // Target States
        this.targetScale = 0.01;
        this.targetPanX = window.innerWidth / 2 - (100000 * this.targetScale) / 2;
        this.targetPanY = window.innerHeight / 2 - (100000 * this.targetScale) / 2;

        // Current States
        this.currentScale = this.targetScale;
        this.currentPanX = this.targetPanX;
        this.currentPanY = this.targetPanY;

        this.isDragging = false;
        this.isAnimating = false;
        this.startX = 0;
        this.startY = 0;
        this.snapTimeout = null;

        this.initEventListeners();
        this.renderLoop();

        // Expose zoomToBox globally so DOM onclick attributes still work
        window.zoomToBox = this.zoomToBox.bind(this);
    }

    initEventListeners() {
        this.viewport.addEventListener('mousedown', (e) => {
            if (e.target.closest('.entity') && e.target !== this.map) return;

            this.isAnimating = false;
            this.isDragging = true;
            this.targetScale = this.currentScale;
            this.targetPanX = this.currentPanX;
            this.targetPanY = this.currentPanY;

            this.startX = e.clientX - this.targetPanX;
            this.startY = e.clientY - this.targetPanY;
            this.viewport.style.cursor = 'grabbing';
            clearTimeout(this.snapTimeout);
        });

        window.addEventListener('mouseup', () => {
            if(this.isDragging) this.triggerSnapCheck();
            this.isDragging = false;
            this.viewport.style.cursor = 'grab';
        });

        window.addEventListener('mouseleave', () => {
            if(this.isDragging) this.triggerSnapCheck();
            this.isDragging = false;
            this.viewport.style.cursor = 'grab';
        });

        window.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;
            e.preventDefault();
            this.targetPanX = e.clientX - this.startX;
            this.targetPanY = e.clientY - this.startY;
        });

        this.viewport.addEventListener('click', (e) => {
            if(e.target === this.viewport || e.target === this.map) {
                const resetScale = 0.01;
                const resetPanX = window.innerWidth / 2 - (100000 * resetScale) / 2;
                const resetPanY = window.innerHeight / 2 - (100000 * resetScale) / 2;
                this.animateZoom(resetScale, resetPanX, resetPanY);
            }
        });

        this.viewport.addEventListener('wheel', (e) => {
            e.preventDefault();
            this.isAnimating = false;
            clearTimeout(this.snapTimeout);

            // Clamp deltaY to prevent massive jumps from high-resolution trackpads
            const clampedDeltaY = Math.min(Math.max(e.deltaY, -50), 50);

            // Decrease sensitivity for a more controlled zoom feel
            const zoomSensitivity = 0.0015;
            const delta = -clampedDeltaY * zoomSensitivity;

            // Calculate new scale
            const newScale = this.targetScale * Math.exp(delta);
            const clampedScale = Math.min(Math.max(0.002, newScale), 5);

            const rect = this.viewport.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            // Fix: Calculate pan offsets using the CURRENT visual position of the map,
            // not the target position. This ensures the zoom stays perfectly centered
            // on the user's cursor even if they are zooming rapidly.

            // Step 1: Find where the mouse is pointing relative to the unscaled map based on *current* visual state
            const mapCursorX = (mouseX - this.currentPanX) / this.currentScale;
            const mapCursorY = (mouseY - this.currentPanY) / this.currentScale;

            // Step 2: Set the new target scale
            this.targetScale = clampedScale;

            // Step 3: Shift the target pan so that specific unscaled map coordinate stays under the mouse
            this.targetPanX = mouseX - (mapCursorX * this.targetScale);
            this.targetPanY = mouseY - (mapCursorY * this.targetScale);

            this.triggerSnapCheck();
        }, { passive: false });
    }

    triggerSnapCheck() {
        clearTimeout(this.snapTimeout);
        // Increased delay slightly to prevent premature snapping while the user is still making micro-adjustments
        this.snapTimeout = setTimeout(() => this.attemptMagneticSnap(), 400);
    }

    attemptMagneticSnap() {
        if (this.isDragging || this.isAnimating) return;

        const entities = document.querySelectorAll('.entity:not(.object)');
        let closestEntity = null;
        let closestDistance = Infinity;
        let targetSnapScale = null;
        let targetSnapPanX = null;
        let targetSnapPanY = null;

        const viewportCenterX = window.innerWidth / 2;
        const viewportCenterY = window.innerHeight / 2;

        entities.forEach(el => {
            const rect = el.getBoundingClientRect();
            const mapRect = this.map.getBoundingClientRect();

            const unscaledWidth = rect.width / this.currentScale;
            const unscaledHeight = rect.height / this.currentScale;

            const elementCenterX = (rect.left - mapRect.left) / this.currentScale + unscaledWidth / 2;
            const elementCenterY = (rect.top - mapRect.top) / this.currentScale + unscaledHeight / 2;

            const padding = 0.75;
            const scaleX = (window.innerWidth * padding) / unscaledWidth;
            const scaleY = (window.innerHeight * padding) / unscaledHeight;
            let focusScale = Math.min(scaleX, scaleY);
            focusScale = Math.min(Math.max(0.002, focusScale), 5);

            const scaleDiff = Math.abs(this.targetScale - focusScale) / focusScale;

            if (scaleDiff <= 0.10) {
                const currentScreenX = elementCenterX * this.targetScale + this.targetPanX;
                const currentScreenY = elementCenterY * this.targetScale + this.targetPanY;

                const dist = Math.hypot(viewportCenterX - currentScreenX, viewportCenterY - currentScreenY);

                if (dist < window.innerWidth * 0.25 && dist < closestDistance) {
                    closestDistance = dist;
                    closestEntity = el;
                    targetSnapScale = focusScale;
                    targetSnapPanX = viewportCenterX - (elementCenterX * focusScale);
                    targetSnapPanY = viewportCenterY - (elementCenterY * focusScale);
                }
            }
        });

        if (closestEntity) {
            this.targetScale = targetSnapScale;
            this.targetPanX = targetSnapPanX;
            this.targetPanY = targetSnapPanY;
        }
    }

    zoomToBox(element, event) {
        if(event) event.stopPropagation();

        if(element.classList.contains('hazard-quad') || element.classList.contains('object')) return;

        const rect = element.getBoundingClientRect();
        const mapRect = this.map.getBoundingClientRect();

        const unscaledWidth = rect.width / this.currentScale;
        const unscaledHeight = rect.height / this.currentScale;

        const elementCenterX = (rect.left - mapRect.left) / this.currentScale + unscaledWidth / 2;
        const elementCenterY = (rect.top - mapRect.top) / this.currentScale + unscaledHeight / 2;

        const padding = 0.75;
        const scaleX = (window.innerWidth * padding) / unscaledWidth;
        const scaleY = (window.innerHeight * padding) / unscaledHeight;

        let focusScale = Math.min(scaleX, scaleY);
        focusScale = Math.min(Math.max(0.002, focusScale), 5);

        const focusPanX = window.innerWidth / 2 - (elementCenterX * focusScale);
        const focusPanY = window.innerHeight / 2 - (elementCenterY * focusScale);

        this.animateZoom(focusScale, focusPanX, focusPanY);
    }

    animateZoom(newTargetScale, newTargetPanX, newTargetPanY) {
        this.isAnimating = true;
        const duration = 1200;
        const startScale = this.currentScale;
        const startPanX = this.currentPanX;
        const startPanY = this.currentPanY;
        const startTime = performance.now();

        const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);

        const step = (currentTime) => {
            if (!this.isAnimating) return;

            let progress = (currentTime - startTime) / duration;
            if (progress > 1) progress = 1;

            const eased = easeOutQuint(progress);

            this.currentScale = startScale + (newTargetScale - startScale) * eased;
            this.currentPanX = startPanX + (newTargetPanX - startPanX) * eased;
            this.currentPanY = startPanY + (newTargetPanY - startPanY) * eased;

            this.applyTransforms();

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                this.targetScale = this.currentScale;
                this.targetPanX = this.currentPanX;
                this.targetPanY = this.currentPanY;
                this.isAnimating = false;
            }
        };
        requestAnimationFrame(step);
    }

    renderLoop() {
        if (!this.isAnimating) {
            // Decreased the lerp smoothing factor from 0.08 to 0.04 to give a much slower,
            // more cinematic and controllable gliding effect when catching up to the target.
            const lerpFactor = 0.04;
            this.currentScale += (this.targetScale - this.currentScale) * lerpFactor;
            this.currentPanX += (this.targetPanX - this.currentPanX) * lerpFactor;
            this.currentPanY += (this.targetPanY - this.currentPanY) * lerpFactor;

            if (Math.abs(this.targetScale - this.currentScale) > 0.00001 ||
                Math.abs(this.targetPanX - this.currentPanX) > 0.01) {
                this.applyTransforms();
            }
        }
        requestAnimationFrame(() => this.renderLoop());
    }

    applyTransforms() {
        this.map.style.transform = `translate(${this.currentPanX}px, ${this.currentPanY}px) scale(${this.currentScale})`;
        this.updateSemanticZoom();
    }

    updateSemanticZoom() {
        const effectiveHeight = window.innerHeight * 0.75;

        const roomScale = effectiveHeight / 6000;
        const houseScale = effectiveHeight / 14500;
        const countyScale = effectiveHeight / 18000;
        const countryScale = effectiveHeight / 30000;

        const objectThreshold = roomScale * 2;
        const roomThreshold = (roomScale + houseScale) / 2;
        const houseThreshold = (houseScale + countyScale) / 2;
        const countyThreshold = (countyScale + countryScale) / 2;
        const countryThreshold = countryScale * 0.4;

        let level = "world";
        if (this.currentScale >= objectThreshold) level = "object";
        else if (this.currentScale >= roomThreshold) level = "room";
        else if (this.currentScale >= houseThreshold) level = "house";
        else if (this.currentScale >= countyThreshold) level = "county";
        else if (this.currentScale >= countryThreshold) level = "country";

        this.viewport.setAttribute('data-level', level);
        if (this.levelIndicator) {
            this.levelIndicator.innerText = level.charAt(0).toUpperCase() + level.slice(1);
        }
    }
}
