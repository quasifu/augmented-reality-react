import React from "react";
import { Box, Button, Layer } from "grommet";
import ARPage2 from "../screens/labels/ARPage2";

export default function VirtualSample(props) {
  return (
    <Layer full animation="fadeIn">
      <Box
        flex
        background="#E9E9E9"
        align="center"
        justify="center"
        gap="medium"
        pad="medium"
      >
        {props.isVisible ? (
          <ARPage2 label={`${props.label}.gltf`} />
        ) : undefined}
        <Button
          primary
          style={{ color: "#FFF", border: "none" }}
          color="primary-button"
          hoverIndicator="active-primary-button"
          label="Close"
          onClick={() => props.setShowLayer(false)}
        />
      </Box>
    </Layer>
  );
}
