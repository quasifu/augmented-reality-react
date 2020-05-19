import React, { useState } from "react";
import { Box, Image, Button, Layer } from "grommet";

export default function ColorDesigner({ setShowLayer, metadata }) {
  const [imageUrl, setImageUrl] = useState(metadata.colorDesigner[0].url);
  return (
    <Layer full animation="fadeIn">
      <Box pad="small" gap="small" fill>
        <Box flex align="center" justify="center" gap="medium" pad="medium">
          <Box flex>
            <Image fit="contain" src={imageUrl ? imageUrl : undefined} />
          </Box>
          <Box round="medium" pad="small" direction="row" border gap="small">
            {metadata &&
              metadata.colorDesigner &&
              metadata.colorDesigner.map((colorTypes, idx) => (
                <Button
                  plain
                  key={colorTypes.name}
                  icon={
                    <Image style={{ width: "20px" }} src={colorTypes.icon} />
                  }
                  pad="horizontal"
                  style={{
                    padding: "0px 10px",
                    borderRight:
                      idx < metadata.colorDesigner.length - 1
                        ? "1px solid #c0c1c0"
                        : "none",
                  }}
                  label={colorTypes.name}
                  onClick={() => {
                    setImageUrl(colorTypes.url);
                  }}
                />
              ))}
          </Box>
          <Button
            primary
            style={{ color: "#FFF", border: "none" }}
            color="primary-button"
            hoverIndicator="active-primary-button"
            label="Close"
            onClick={() => setShowLayer({ display: false })}
          />
        </Box>
      </Box>
    </Layer>
  );
}
