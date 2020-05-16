import React, { useState } from "react";
import { Grid, Box, Heading, Image, Header, Button } from "grommet";
import ARPage2 from "./labels/ARPage2";
import { useParams, useLocation } from "react-router-dom";
//import ProjectDetails from "../components/images/project-details.svg";
import ProjectDetailsRight from "../components/images/project-details-right.svg";
import SendToPhoneIcon from "../components/images/sendToPhone.svg";
import QRCode from "../components/QRCode.js";

export default function LabelDesigner() {
  let { label } = useParams();
  const [showLayer, setShowLayer] = useState(false);
  label = label.substring(0, label.indexOf(".gltf"));
  let location = useLocation();
  let host = window.location.href.substring(
    0,
    window.location.href.indexOf(location.pathname)
  );
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
              {label}
            </Heading>
          </Header>
        </Box>

        <Box gridArea="left">
          <Box
            gap="small"
            round="medium"
            background="white"
            pad="medium"
            flex
            overflow="scroll"
          >
            Starting to fill in images
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
