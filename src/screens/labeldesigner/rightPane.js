import React, { useState } from "react";
import { Heading, Box, Text, Grid, Image, Button } from "grommet";
import Moment from "moment";
import MockupIcon from "../../components/images/mockup.svg";
import FolderIcon from "../../components/images/folder.svg";
import VirtualSample from "../../components/VirtualSample";
export default function RightPane({ metadata, label }) {
  const [showLayer, setShowLayer] = useState(false);
  return (
    <Box gap="small" pad="medium" flex>
      <Box flex>
        <Image src={`/api/v1/labels/${metadata.previewImage}`} fit="contain" />
      </Box>
      <Box direction="row" border="horizontal" pad="small">
        <Box flex border="right" pad={{ horizontal: "small" }}>
          <Button
            style={{ color: "#FFF", border: "none" }}
            primary
            color="primary-button"
            hoverIndicator="active-primary-button"
            label="2D"
            size="small"
            onClick={() => {}}
          />
        </Box>
        <Box flex pad={{ horizontal: "small" }}>
          <Button
            style={{ color: "#FFF", border: "none" }}
            primary
            color="primary-button"
            hoverIndicator="active-primary-button"
            label="3D"
            size="small"
            onClick={() => setShowLayer(true)}
          />
        </Box>
      </Box>
      <Box round="medium" background="white" pad="small" flex>
        <Box direction="row">
          <Image src={FolderIcon} />
          <Heading level="4" size="medium">
            Project Files
          </Heading>
        </Box>
        <Box fill overflow="scroll">
          {metadata &&
            metadata.projectItems &&
            metadata.projectItems.map((item, idx) => (
              <Box
                key={item.value.name}
                flex="grow"
                direction="row"
                border={{ color: "#D6D6D6", side: "bottom" }}
                pad="small"
              >
                <Grid
                  fill
                  row={["flex"]}
                  columns={["3/4", "1/4"]}
                  areas={[["left", "right"]]}
                  gap="small"
                >
                  <Box gridArea="left" border="right" direction="row">
                    <Box size="small" pad={{ right: "medium" }}>
                      <Text size={"small"} weight="bold">
                        {idx + 1}.
                      </Text>
                    </Box>
                    <Box flex direction="column">
                      <Text size={"small"} weight="bold">
                        {item.value.name.substring(
                          0,
                          item.value.name.indexOf(".gltf")
                        )}
                      </Text>
                      <Text size={"xsmall"}>
                        {`Updated:
                        ${Moment(
                          item.value.properties.lastModified
                        ).fromNow()}`}
                      </Text>
                      <Text size={"xsmall"}>
                        {`Created:
                        ${Moment(item.value.properties.createdOn).format(
                          "MMMM Do YYYY"
                        )}`}
                      </Text>
                    </Box>
                  </Box>
                  <Box gridArea="right">
                    <Image src={MockupIcon} />
                  </Box>
                </Grid>
              </Box>
            ))}
        </Box>
      </Box>
      {showLayer && (
        <VirtualSample
          label={label}
          isVisible={showLayer}
          setShowLayer={setShowLayer}
        />
      )}
    </Box>
  );
}