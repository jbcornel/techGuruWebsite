import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
//import {VRButton} from 'https://cdn.jsdelivr.net/npm/three@0.134.0/examples/jsm/webxr/VRButton.min.js';
import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
//import { GUI } from 'dat.gui'
const scene = new THREE.Scene();

//scene.background = new THREE.Color( 0xf0f0ff );


//adding plane helper 
// const plane = new THREE.Plane( new THREE.Vector3( 1, 1, 0.2 ), 3 );
// const helper = new THREE.PlaneHelper( plane, 1, 0xffff00 );
// scene.add( helper );


//adding light helper into scene
// const pointLight = new THREE.PointLight( 0xff0000, 1, 100 );
// pointLight.position.set( 10, 10, 10 );
// scene.add( pointLight );

// const sphereSize = 1;
// const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
// scene.add( pointLightHelper );







const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.setZ(.3);
camera.position.setX(0);
camera.position.setY(.15);
//camera settings for red house 3d model
// camera.position.setZ(16);
// camera.position.setY(5);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),alpha: true, antialias: true
});
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// WINDOW RESIZE HANDLING
export function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight)
//renderer.render(scene,camera);
//renderer.xr.enabled = true;


let light = new THREE.DirectionalLight(0xFFFFFF, 2.0);
light.position.set(-100, 100, 50);
let light2 = new THREE.DirectionalLight(0xFFFFFF, 2.0);
light2.position.set(-100, 100, -50);
light2.target.position.set(0, 0, 0);
light.target.position.set(0, 0, 0);
light.castShadow = true;
light.shadow.bias = -0.001;
light.shadow.mapSize.width = 4096;
light.shadow.mapSize.height = 4096;
light.shadow.camera.near = 0.1;
light.shadow.camera.far = 500.0;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 500.0;
light.shadow.camera.left = 50;
light.shadow.camera.right = -50;
light.shadow.camera.top = 50;
light.shadow.camera.bottom = -50;
scene.add(light);
scene.add(light2);

light = new THREE.AmbientLight(0xFFFFFF, 0.25);
scene.add(light);
const geometry2 = new THREE.BoxGeometry(5, 5, 5 ,);
const material2 = new THREE.MeshStandardMaterial({
    color: 0x393939,

});
const cube = new THREE.Mesh(geometry2, material2);
//scene.add(cube);

//document.body.appendChild( VRButton.createButton( renderer ) );



scene.background = new THREE.Color(0x393939);
const loader = new GLTFLoader();

      loader.setPath('./resources/brokenPhone/');
      loader.load('scene.gltf', (gltf) => {
       
        let sceneInput = gltf.scene;
        
        // GUI.add(gltf.scene.rotation, 'x').min(0).max(9);
        // GUI.add(gltf.scene.rotation, 'y').min(0).max(9);
        // GUI.add(gltf.scene.rotation, 'z').min(0).max(9);
       
        scene.add(sceneInput);
        scene.position.setX(-.08)
        
        renderer.render(scene, camera);
       })     
       
    //    loader.setPath('./resources/table/');
    //   loader.load('table.gltf', (gltf) => {
       
    //     let sceneInput = gltf.scene;
    
      
    //     scene.add(sceneInput);
        
    //     renderer.render(scene, camera);

        
    //    })     

       


      
       
        renderer.outputEncoding = THREE.sRGBEncoding;


    //    const fbxLoader = new FBXLoader();

    //    fbxLoader.setPath('./resources/brokenPhone/');
    //    fbxLoader.load('cellphone.fbx', (fbx) => {
        
        
    //     console.log(fbx);
         
       
    //      scene.add(fbx);
    //      renderer.render(scene, camera);
    //     })      
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();



//setInterval(changeBackground(), 1000)

function animate() {
    
	requestAnimationFrame( animate );
    controls.update();

    //scene.background = null
	renderer.render( scene, camera );
 
}
animate();

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })



  
//document.body.appendChild()


// const loader = new FBXLoader();

//       loader.setPath('./resources/fixedPhone/');
//       loader.load('cellphone.fbx', (fbx) => {
//         //fbx.scale.setScalar();
//         fbx.traverse(c => {
//           c.castShadow = true;
//         });

//                 scene.add(fbx);
//        })

