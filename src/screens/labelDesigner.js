import React, { useState, useEffect } from "react";
import { Grid, Box, Heading, Header } from "grommet";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import LeftPane from "./labeldesigner/leftPane.js";
import RightPane from "./labeldesigner/rightPane.js";
import MiddlePane from "./labeldesigner/middlePane.js";
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
          <LeftPane metadata={metadata} />
        </Box>

        <Box gridArea="middle">
          {metadata && metadata.images ? (
            <MiddlePane metadata={metadata} setShowLayer={setShowLayer} />
          ) : null}
        </Box>

        <Box gridArea="right">
          {metadata ? <RightPane metadata={metadata} label={label} /> : null}
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
