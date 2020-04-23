import * as React from "react";
import * as BABYLON from "babylonjs";

// export type SceneEventArgs = {
//   engine: BABYLON.Engine,
//   scene: BABYLON.Scene,
//   canvas: HTMLCanvasElement
// };

// export type SceneProps = {
//   engineOptions?: BABYLON.EngineOptions,
//   adaptToDeviceRatio?: boolean,
//   onSceneMount?: (args: SceneEventArgs) => void,
//   width?: number,
//   height?: number
// };

export default class BabylonScene extends React.Component {
  // private scene: BABYLON.Scene;
  // private engine: BABYLON.Engine;
  // private canvas: HTMLCanvasElement;

  onResizeWindow = () => {
    if (this.engine) {
      this.engine.resize();
    }
  };

  componentDidMount() {
    console.log("component did mount");
    this.engine = new BABYLON.Engine(
      this.canvas,
      true,
      this.props.engineOptions,
      this.props.adaptToDeviceRatio
    );

    let scene = new BABYLON.Scene(this.engine);
    this.scene = scene;

    if (typeof this.props.onSceneMount === "function") {
      this.props.onSceneMount({
        scene,
        engine: this.engine,
        canvas: this.canvas,
      });
    } else {
      console.error("onSceneMount function not available");
    }

    // Resize the babylon engine when the window is resized
    window.addEventListener("resize", this.onResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResizeWindow);
  }

  onCanvasLoaded = (c) => {
    if (c !== null) {
      this.canvas = c;
    }
  };

  render() {
    // 'rest' can contain additional properties that you can flow through to canvas:
    // (id, className, etc.)
    let { width, height, ...rest } = this.props;

    let opts = {};

    if (width !== undefined && height !== undefined) {
      opts.width = width;
      opts.height = height;
      opts.style = { outline: "none" };
    }

    return <canvas {...opts} ref={this.onCanvasLoaded} />;
  }
}
