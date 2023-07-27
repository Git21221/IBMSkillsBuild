import * as THREE from '../../three.js-master/build/three.module.js'
import { GLTFLoader } from '../../three.js-master/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from '../../three.js-master/examples/jsm/loaders/RGBELoader.js'
import {OrbitControls} from '../../three.js-master/examples/jsm/controls/OrbitControls.js'
// sizes of my screen
let sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}
//declaring all things here
const canvas = document.querySelector('.webgl');
const scene = new THREE.Scene();
const loader = new GLTFLoader();
loader.load('images/eros.glb', function (glb) {
    console.log(glb)
    const root = glb.scene;
    root.scale.set(0.001, 0.001, 0.001)
    // root.position.set(0,-1,0);

    scene.add(root);
}, function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + "% loaded")
}, function (error) {
    console.log('An error occured')
})

const light = new THREE.AmbientLight(0xffffff, 1);
// for light
light.position.set(40, 0, 0)
scene.add(light)

const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height, 0.1, 1000);
//for camera
camera.position.set(3,2,2)
scene.add(camera)
const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})
//render 
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2)
renderer.render(scene, camera)

// resize for responsiveness
window.addEventListener("resize", () => {
    console.log(window.innerWidth)
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
})

const controls = new OrbitControls(camera, renderer.domElement); //orbital controls

// OrbitControls
controls.enableDamping = true
controls.enablePan = false // off right click position change
controls.enableZoom = true // off zooming on planet
controls.autoRotate = false;
// controls.autoRotateSpeed = 0.7;

const loop = () => {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
}
loop()
const hdrTexture = new URL('../../stars.hdr', import.meta.url);
const loadere = new RGBELoader();
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.6
loadere.load(hdrTexture, function(texture){
    texture.mapping = THREE.EquirectangularReflectionMapping
    scene.background = texture;
    scene.environment = texture
})