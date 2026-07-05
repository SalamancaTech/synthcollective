import { mapData } from './data/mapData.js';
import { Renderer } from './modules/Renderer.js';
import { Camera } from './modules/Camera.js';

document.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.getElementById('map');
    const viewportElement = document.getElementById('viewport');
    const levelIndicatorElement = document.getElementById('level-indicator');

    if (!mapElement || !viewportElement) {
        console.error('Map or viewport element not found');
        return;
    }

    // Initialize renderer and render data
    const renderer = new Renderer(mapElement);
    renderer.render(mapData);

    // Initialize camera/physics engine
    const camera = new Camera(viewportElement, mapElement, levelIndicatorElement);
});
