import React, { useState } from "react";
import { Grid, Box, Heading, Responsive } from "grommet";
import ARPage2 from "./labels/ARPage2";
import { useParams } from "react-router-dom";
import ProjectDetails from "../components/images/project-details.svg";
import ProjectDetailsRight from "../components/images/project-details-right.svg";

export default function ADesign() {
  let { label } = useParams();
  return (
    <Box pad="small" gap="small" fill>
      <Grid
        rows={["auto", "flex"]}
        columns={["flex", "flex", "flex"]}
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
        fill
      >
        <Box gridArea="header">
          <Heading>{label}</Heading>
        </Box>

        <Box gridArea="left">
          <Box gap="small" round="medium" background="white" pad="medium" flex>
            <img src={ProjectDetails} />
          </Box>
        </Box>

        <Box gridArea="middle">
          <ARPage2 label={label} />
        </Box>

        <Box gridArea="right">
          <img src={ProjectDetailsRight} />
        </Box>
      </Grid>
    </Box>
  );
}

//export default withRouter(ADesign);
