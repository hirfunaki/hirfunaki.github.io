function main() {
    const canvas = document.getElementById("renderCanvas");
  
    const engine = new BABYLON.Engine(canvas);
  
    function createScene() {
  
      // 新しいシーンオブジェクトを作成
      const scene = new BABYLON.Scene(engine);
  
      // カメラを追加
      const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 10, BABYLON.Vector3.Zero(), scene);
      camera.attachControl(canvas, false);
  
      // 照明を追加
      const light = new BABYLON.HemisphericLight();

        //AR化
 //const xr = await scene.createDefaultXRExperienceAsync({
  // uiOptions: {
    // sessionMode: "immersive-ar",
  // },
  // optionalFeatures: true,
 // });




        
      // GLBファイルの読み込む
      
      //BABYLON.SceneLoader.Append("https://hirfunaki.github.io/", "a.glb", scene,
     //BABYLON.SceneLoader.Append("https://ft-lab.github.io/gltf/apple/", "apple.glb", scene, 
      BABYLON.SceneLoader.Append("https://ft-lab.github.io/gltf/1class/", "1class.glb", scene, 
                                                           
        function (newMeshes) {
        
          const mesh = scene.meshes[0];
  
          scene.activeCamera = null;
          scene.createDefaultCameraOrLight(true);
          scene.activeCamera.attachControl(canvas, false);
        },
      );
  
      return scene;
    }
  
    const scene = createScene();
  
    engine.runRenderLoop(() => {
      scene.render();
    });
  
    window.addEventListener("resize", () => {
      engine.resize();
    });
  }
  
  window.addEventListener("DOMContentLoaded", main);
