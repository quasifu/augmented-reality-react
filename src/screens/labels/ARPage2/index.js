import React, { Component } from "react";
import { withRouter } from "react-router";
import "@babylonjs/inspector";
import { Engine, Scene } from "react-babylonjs";
import { Vector3, Color3, Color4 } from "@babylonjs/core";
import { ActionManager, SetValueAction } from "@babylonjs/core/Actions";
import ScaledModelWithProgress from "../ScaledModelWithProgress";
import { Box } from "grommet";
class ARPage2 extends Component {
  constructor(props) {
    super();

    this.state = {
      avocadoYPos: -1.5,
      avocadoScaling: 3.0,
    };

    this.moveAvocadoUp = this.moveAvocadoUp.bind(this);
    this.moveAvocadoDown = this.moveAvocadoDown.bind(this);
    this.increaseAvocadoSize = this.increaseAvocadoSize.bind(this);
    this.decreaseAvocadoSize = this.decreaseAvocadoSize.bind(this);
    this.onModelLoaded = this.onModelLoaded.bind(this);
  }

  moveAvocadoDown() {
    this.setState((state) => ({
      ...state,
      avocadoYPos: state.avocadoYPos - 0.5,
    }));
  }

  moveAvocadoUp() {
    this.setState((state) => ({
      ...state,
      avocadoYPos: state.avocadoYPos + 0.5,
    }));
  }

  increaseAvocadoSize() {
    this.setState((state) => ({
      ...state,
      avocadoScaling: state.avocadoScaling + 0.1,
    }));
  }

  decreaseAvocadoSize() {
    this.setState((state) => ({
      ...state,
      avocadoScaling: state.avocadoScaling - 0.1,
    }));
  }

  onModelLoaded = (model, sceneContext) => {
    let mesh = model.meshes[1];
    mesh.actionManager = new ActionManager(sceneContext.scene);
    mesh.actionManager.registerAction(
      new SetValueAction(
        ActionManager.OnPointerOverTrigger,
        mesh.material,
        "wireframe",
        true
      )
    );
    mesh.actionManager.registerAction(
      new SetValueAction(
        ActionManager.OnPointerOutTrigger,
        mesh.material,
        "wireframe",
        false
      )
    );
  };

  render() {
    return (
      <Box fill>
        <Engine
          antialias
          adaptToDeviceRatio
          canvasId="babylonJS"
          canvasStyle={{ outline: "none" }}
        >
          <Scene clearColor={new Color4(255, 255, 255, 0)}>
            <arcRotateCamera
              name="camera1"
              alpha={Math.PI / 2}
              beta={Math.PI / 2}
              radius={9.0}
              target={Vector3.Zero()}
              minZ={0.001}
            />
            <hemisphericLight
              name="light1"
              intensity={0.7}
              direction={Vector3.Up()}
            />

            <ScaledModelWithProgress
              rootUrl={`/api/v1/labels/`}
              sceneFilename={this.props.label}
              scaleTo={5}
              progressBarColor={Color3.FromInts(255, 165, 0)}
              center={new Vector3(2.5, 0, 0)}
              onModelLoaded={this.onModelLoaded}
            />
          </Scene>
        </Engine>
      </Box>
    );
  }
}

export default withRouter(ARPage2);
