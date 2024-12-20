document.addEventListener('DOMContentLoaded', () => {
    // Initialize Three.js scene
    const container = document.getElementById('threejs-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Add a simple cube as a placeholder for the 3D model
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    };

    animate();

    // Carousel item click event to change cube color
    document.querySelectorAll('.color-circle').forEach(item => {
        item.addEventListener('click', (event) => {
            const color = event.target.getAttribute('data-color');
            cube.material.color.set(color);
        });
    });
});
