import * as THREE from '../../three.js-master/build/three.module.js'
import { RGBELoader } from '../../three.js-master/examples/jsm/loaders/RGBELoader.js'
import {OrbitControls} from '../../three.js-master/examples/jsm/controls/OrbitControls.js'
// sizes of my screen
let sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}
//declaring all things here
const scene = new THREE.Scene(); //creating scene
const geometry = new THREE.SphereGeometry(3, 40, 40); //sphere geometry
const material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/pluto.jpg')}); //material
const mesh = new THREE.Mesh(geometry, material)
const axishelper = new THREE.AxesHelper(20); //using axis helper to see axis
const gridhelper = new THREE.GridHelper(20, 10); // using grid helper to see grid
const light = new THREE.DirectionalLight(0xffffff, 1, 1000) //using pointlight
const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height, 0.1, 1000) //camera with 90 pov
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true }); //webgl renderer for canvas
const controls = new OrbitControls(camera, renderer.domElement); //orbital controls
const hdrTexture = new URL('../../stars.hdr', import.meta.url);
const loader = new RGBELoader();
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.6
loader.load(hdrTexture, function(texture){
    texture.mapping = THREE.EquirectangularReflectionMapping
    scene.background = texture;
    scene.environment = texture
})
// adding scene
scene.add(mesh);

//adding grid helper
// scene.add(gridhelper);

//adding axis helper aka camera position
// scene.add(axishelper);

// for light
light.position.set(40, 0, 0)
scene.add(light)

//for camera
camera.position.z = 10
scene.add(camera)

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


// OrbitControls
controls.enableDamping = true
controls.enablePan = false // off right click position change
controls.enableZoom = true // off zooming on planet
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;

const loop = () => {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
}
loop()