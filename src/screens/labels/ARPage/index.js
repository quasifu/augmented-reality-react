import * as React from "react";
import * as BABYLON from "babylonjs";
import BabylonScene from "../BabylonScene"; // import the component above linking to file we just created.
import "babylonjs-loaders";
import { withRouter } from "react-router-dom";
const containerStyle = {
  flex: 1,
  flexDirection: "row",
};
// const navStyle = {
//   flex: 1,
// };

class ARPage extends React.Component {
  onSceneMount = (e) => {
    const { canvas, scene, engine } = e;

    // This creates and positions a free camera (non-mesh)
    scene.clearColor = BABYLON.Color3.White();
    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      0,
      0,
      10,
      new BABYLON.Vector3(0, 0, 0),
      scene
    );
    camera.setPosition(new BABYLON.Vector3(0, 10, 5));
    camera.attachControl(canvas, true);
    var light = new BABYLON.HemisphericLight(
      "light1",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );

    console.log(light.state);

    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
    var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
    groundMaterial.specularColor = BABYLON.Color3.White();
    ground.material = groundMaterial;
    ground.position.y = -1;

    // Create gizmo
    var gizmo = new BABYLON.BoundingBoxGizmo(
      BABYLON.Color3.FromHexString("#0984e3")
    );
    gizmo.ignoreChildren = true;

    console.log("onSceneMount", this.props.match.params.label);
    // Import gltf model
    BABYLON.SceneLoader.ImportMesh(
      "",
      `/api/v1/labels/${this.props.match.params.label}`,
      "",
      scene,
      function (container) {
        var gltfMesh = container[0];
        gltfMesh.scaling = new BABYLON.Vector3(-50, 50, 50);
        console.log(gltfMesh.scaling);
        var bb = BABYLON.BoundingBoxGizmo.MakeNotPickableAndWrapInBoundingBox(
          gltfMesh
        );
        gizmo.attachedMesh = bb;
      }
    );

    // Dragging events
    gizmo.onScaleBoxDragObservable.add(() => {
      console.log("scaleDrag");
    });
    gizmo.onScaleBoxDragEndObservable.add(() => {
      console.log("scaleEnd");
    });
    gizmo.onRotationSphereDragObservable.add(() => {
      console.log("rotDrag");
    });
    gizmo.onRotationSphereDragEndObservable.add(() => {
      console.log("rotEnd");
    });

    engine.runRenderLoop(() => {
      if (scene) {
        scene.render();
      }
    });
  };

  render() {
    return (
      <BabylonScene
        onSceneMount={this.onSceneMount}
        width="100%"
        height="100%"
      />
    );
  }
}

export default withRouter(ARPage);
