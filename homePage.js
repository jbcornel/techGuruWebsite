import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
//import {VRButton} from 'https://cdn.jsdelivr.net/npm/three@0.134.0/examples/jsm/webxr/VRButton.min.js';
import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';


const scene = new THREE.Scene();



//scene.background = new THREE.Color( 0xf0f0ff );
 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)





camera.position.x = 300;
camera.position.y = 300;
camera.position.z = 300;

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),alpha: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight)
//renderer.render(scene,camera);
//renderer.xr.enabled = true;
const orbit = new OrbitControls(camera, renderer.domElement);
document.body.appendChild(renderer.domElement)



const sphereSize = 1;


const width = 10;
const height = 10;
const intensity = 50000;
const rectLight = new THREE.RectAreaLight( 0xEFD31A, intensity*.9,  width, height );
rectLight.position.set( 500, -500, 450 );
rectLight.lookAt( 0, 100, 0 );
scene.add( rectLight )


const rectLight2 = new THREE.RectAreaLight( 0xB63FFF, intensity*.1,  width, height );
rectLight2.position.set( -200, 200, 175 );
rectLight2.lookAt( 0, 100, 0 );
scene.add( rectLight2 )


const rectLight3 = new THREE.RectAreaLight( 0xB6aFFF, intensity*.3,  width, height );
rectLight3.position.set( 200, 200, -250 );
rectLight3.lookAt( 0, 100, 0 );
scene.add( rectLight3 )

const rectLight4 = new THREE.RectAreaLight( 0xB6aFFF, intensity*.1,  width, height );
rectLight4.position.set( -230, 200, -250 );
rectLight4.lookAt( 0, 100, 0 );
scene.add( rectLight4 )
//x is up
//y is backward
//z is left
const rectLight7 = new THREE.RectAreaLight( 0xEFD31A, intensity*.2,  width, height );
rectLight7.position.set( 200,220,-20 );
rectLight7.lookAt( 0, 200, 0 );
scene.add( rectLight7 )




const phoneLight = new THREE.RectAreaLight( 0xFFAE42, intensity*.01,  width, height );
phoneLight.position.set( 0,150, 200 );
phoneLight.lookAt( 0,0,0);
phoneLight.castShadow = true;
scene.add( phoneLight )

//


let light = new THREE.AmbientLight(0xFFFFFF, 0.15);
scene.add(light);


//document.body.appendChild( VRButton.createButton( renderer ) );
// scene.background = new THREE.Color(0xBFDCE8);
let mixer;



const progressBar =  document.getElementById('progressBar'); 
const progressBarContainer =  document.getElementById('progressBarContainer'); 
const loadingManager = new THREE.LoadingManager();
let sceneObj;
loadingManager.onProgress = function(url, loaded, total) {
    progressBar.value = (loaded / total) * 100;
}

loadingManager.onLoad = function() {
    progressBarContainer.style.display = 'none';
}
const loader = new GLTFLoader(loadingManager);

      loader.setPath('./resources/techGuruModel/');
      loader.load('techguruWebModel.glb', (gltf) => {
       
        let sceneInput = gltf.scene;
     


        //part of code that loads the animation of the 3d model
        

       
      
        scene.add(sceneInput);
        renderer.render(scene, camera);
        mixer = new THREE.AnimationMixer(sceneInput);
    const clips = gltf.animations;



    
   // Play a certain animation
    // const clip = THREE.AnimationClip.findByName(clips, 'addressAnimation');
    // const action = mixer.clipAction(clip);
    // action.play();

    // Play all animations at the same time
   
        
        clips.forEach(function(clip) {
            const action = mixer.clipAction(clip);
            action.play();
        });
       })      




      
       
       renderer.outputEncoding = THREE.sRGBEncoding;


      //  const fbxLoader = new FBXLoader();

      //  fbxLoader.setPath('./resources/lowPoly/');
      //  fbxLoader.load('phone.fbx', (fbx) => {
        
        
      //   console.log(fbx);
         
       
      //    //scene.add(fbx);
      //    renderer.render(scene, camera);
      //   })      
// const controls = new OrbitControls( camera, renderer.domElement );
// controls.update();



//setInterval(changeBackground(), 1000)
const clock = new THREE.Clock();
function animate() {
	requestAnimationFrame( animate );
    orbit.update();
    if(mixer)
        mixer.update(clock.getDelta());

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

