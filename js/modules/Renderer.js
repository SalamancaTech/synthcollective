export class Renderer {
    constructor(mapElement) {
        this.mapElement = mapElement;
    }

    render(data) {
        this.mapElement.innerHTML = ''; // Clear existing
        data.entities.forEach(entity => {
            const el = this.createEntityElement(entity);
            this.mapElement.appendChild(el);
        });
    }

    createEntityElement(entity) {
        const el = document.createElement('div');
        el.className = `entity ${entity.type} layer-${entity.type}`;
        el.style.left = `${entity.x}px`;
        el.style.top = `${entity.y}px`;
        el.style.width = `${entity.width}px`;
        el.style.height = `${entity.height}px`;

        // Ensure zooming works dynamically on the generated elements
        el.onclick = (e) => {
            if (window.zoomToBox) {
                window.zoomToBox(el, e);
            }
        };

        // Handle title
        if (entity.titleHtml || entity.title) {
            const titleEl = document.createElement('div');
            titleEl.className = `entity-title ${entity.titleClass || ''}`;
            if (entity.titleOffset) titleEl.style.marginTop = `${entity.titleOffset}px`;
            if (entity.titleSize) titleEl.style.fontSize = `${entity.titleSize}px`;
            if (entity.titleZIndex) titleEl.style.zIndex = entity.titleZIndex;
            titleEl.innerHTML = entity.titleHtml || entity.title;
            el.appendChild(titleEl);
        }

        // Handle specific type contents
        if (entity.coverHtml) {
            const coverEl = document.createElement('div');
            coverEl.className = 'post-cover';
            coverEl.innerHTML = entity.coverHtml;
            el.appendChild(coverEl);
        }

        if (entity.contentHtml) {
            el.insertAdjacentHTML('beforeend', entity.contentHtml);
        }

        // Handle comments inside rooms
        if (entity.comments && entity.comments.length > 0) {
            const commentContainer = document.createElement('div');
            commentContainer.className = 'layer-object comment-container';

            entity.comments.forEach(comment => {
                const threadRow = document.createElement('div');
                threadRow.className = 'thread-row';

                // Build the main comment and its vertical Z-axis replies stack
                const mainStack = this.createCommentStack(comment);
                threadRow.appendChild(mainStack);

                // Build horizontal side-threads
                if (comment.threads && comment.threads.length > 0) {
                    comment.threads.forEach(threadComment => {
                        const sideStack = this.createCommentStack(threadComment);
                        threadRow.appendChild(sideStack);
                    });
                }

                commentContainer.appendChild(threadRow);
            });

            el.appendChild(commentContainer);
        }

        // Recursively handle children
        if (entity.children && entity.children.length > 0) {
            entity.children.forEach(child => {
                const childEl = this.createEntityElement(child);
                el.appendChild(childEl);
            });
        }

        return el;
    }

    createCommentStack(commentData) {
        const stackContainer = document.createElement('div');
        stackContainer.className = 'comment-stack-container';

        const stack = document.createElement('div');
        stack.className = 'comment-stack';

        // Flatten the comment and its nested replies into an array for the stack
        const cards = [commentData];
        if (commentData.replies) {
            cards.push(...commentData.replies);
        }

        cards.forEach((cardData, index) => {
            const cardEl = this.createCommentElement(cardData, index);
            stack.appendChild(cardEl);
        });

        stackContainer.appendChild(stack);

        // We must ensure the container has a defined height so it takes up space in the DOM,
        // because its absolute children will collapse it otherwise.
        // We defer this slightly so the browser can calculate the height of the first card.
        setTimeout(() => {
            if (stack.firstElementChild) {
                const height = stack.firstElementChild.offsetHeight;
                if(height > 0) {
                    stackContainer.style.height = `${height}px`;
                    stack.style.height = `${height}px`;
                } else {
                    // Fallback height if not fully rendered yet
                    stackContainer.style.height = '1800px';
                    stack.style.height = '1800px';
                }
            }
        }, 100);

        return stackContainer;
    }

    createCommentElement(comment, stackIndex = 0) {
        const el = document.createElement('div');
        el.className = 'entity comment-card object';

        // If it's a nested reply, it stacks on top
        if (stackIndex > 0) {
            el.classList.add('stacked');
        }

        // Add a data attribute so the Camera can calculate Z-depth
        el.setAttribute('data-stack-index', stackIndex);

        el.onclick = (e) => {
            if (window.zoomToBox) window.zoomToBox(el, e);
        };

        const hazards = comment.hazards || {top: 0, right: 0, bottom: 0, left: 0};

        el.innerHTML = `
            <div class="comment-header">
                <img src="${comment.avatar}" class="avatar" alt="Avatar">
                <div class="meta">
                    <div class="username">${comment.username}</div>
                    <div class="datetime">${comment.datetime}</div>
                </div>
            </div>
            <div class="comment-body">
                ${comment.bodyHtml}
            </div>
            <div class="comment-footer">
                <div class="hazard-octagon">
                    <div class="hazard-quad top" title="${comment.topTitle || ''}">${hazards.top}</div>
                    <div class="hazard-quad right" title="${comment.rightTitle || ''}">${hazards.right}</div>
                    <div class="hazard-quad bottom" title="${comment.bottomTitle || ''}">${hazards.bottom}</div>
                    <div class="hazard-quad left" title="${comment.leftTitle || ''}">${hazards.left}</div>
                </div>
            </div>
        `;
        return el;
    }
}
