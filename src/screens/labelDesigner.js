import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Heading,
  Image,
  Header,
  Button,
  Accordion,
  AccordionPanel,
  Text,
} from "grommet";
import axios from "axios";
import ARPage2 from "./labels/ARPage2";
import { useParams, useLocation } from "react-router-dom";
//import ProjectDetails from "../components/images/project-details.svg";
import ProjectDetailsRight from "../components/images/project-details-right.svg";
import SendToPhoneIcon from "../components/images/sendToPhone.svg";
import QRCode from "../components/QRCode.js";

export default function LabelDesigner() {
  let { label } = useParams();
  const [showLayer, setShowLayer] = useState(false);
  const [metadata, setMetadata] = useState([]);
  label = label.substring(0, label.indexOf(".gltf"));
  let location = useLocation();
  let host = window.location.href.substring(
    0,
    window.location.href.indexOf(location.pathname)
  );
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/api/v1/labels/metadata/${label}.json`);
      console.log(result.data);
      setMetadata(result.data);
    };
    fetchData();
  }, [label]);

  return (
    <Box pad="small" gap="small" fill>
      <Grid
        rows={["auto", "flex"]}
        columns={["1/4", "flex", "1/4"]}
        areas={[
          {
            name: "header",
            start: [0, 0],
            end: [2, 0],
          },
          {
            name: "left",
            start: [0, 1],
            end: [0, 1],
          },
          {
            name: "middle",
            start: [1, 1],
            end: [1, 1],
          },
          {
            name: "right",
            start: [2, 1],
            end: [2, 1],
          },
        ]}
        gap="small"
        pad={{ bottom: "small" }}
        fill
      >
        <Box gridArea="header">
          <Header pad="small">
            <Heading level={2} size={"medium"} margin="none">
              {metadata ? metadata.projectName : "Designer"}
            </Heading>
          </Header>
        </Box>

        <Box gridArea="left">
          <Box gap="small" round="medium" background="white" pad="medium" flex>
            <Heading level={3} margin="none">
              {metadata.projectName}
            </Heading>
            <Heading level={6} margin="none">
              {metadata.itemName}
            </Heading>
            <Heading level={6} margin="none" background="red">
              {metadata.id}
            </Heading>
            <Box direction="row" border="horizontal" pad="small">
              <Box flex border="right" pad={{ horizontal: "small" }}>
                <Button
                  style={{ color: "#FFF", border: "none" }}
                  primary
                  color="primary-button"
                  hoverIndicator="active-primary-button"
                  label="Front"
                  size="small"
                  onClick={() => {}}
                />
              </Box>
              <Box flex pad={{ horizontal: "small" }}>
                <Button
                  primary
                  color="tertiary-button"
                  hoverIndicator="active-primary-button"
                  label="Back"
                  size="small"
                  onClick={() => {}}
                />
              </Box>
            </Box>
            <Box overflow="scroll">
              <Accordion>
                {[
                  "Size",
                  "Hang hole",
                  "Corners",
                  "Logo/Image",
                  "Application",
                ].map((item) => (
                  <AccordionPanel label={item} key={item}>
                    <Box pad="medium">
                      <Text>{item}</Text>
                    </Box>
                  </AccordionPanel>
                ))}
              </Accordion>
            </Box>
          </Box>
        </Box>

        <Box gridArea="middle">
          <ARPage2 label={`${label}.gltf`} />
          <Box direction="row">
            <Button
              primary
              color="white"
              plain={false}
              border={{ color: "#D6D6D6" }}
              icon={<Image src={SendToPhoneIcon} width="50%" />}
              onClick={() => setShowLayer(true)}
            />
          </Box>
        </Box>

        <Box gridArea="right">
          <Image src={ProjectDetailsRight} fill />
        </Box>
      </Grid>
      {showLayer && (
        <QRCode
          url={`${host}/api/v1/labels/${label}.usdz`}
          setShowLayer={setShowLayer}
        />
      )}
    </Box>
  );
}

//export default withRouter(ADesign);
