import React from "react";
import { Box, Heading, Button, Layer } from "grommet";
import QRCodeGenerator from "qrcode.react";

export default function QRCode(props) {
  return (
    <Layer full animation="fadeIn">
      <Box
        fill
        background="#E9E9E9"
        align="center"
        justify="center"
        gap="medium"
        pad="medium"
      >
        <Heading level={2} margin="none">
          Scan from your phone
        </Heading>
        <Box
          round="medium"
          style={{ display: "block" }}
          pad="small"
          border
          background="white"
        >
          <QRCodeGenerator
            value={props.url}
            renderAs={"svg"}
            size={"fill"}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"L"}
            includeMargin={false}
          />
        </Box>
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
