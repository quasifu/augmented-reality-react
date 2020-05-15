import React from "react";
import { Grid, Box, Heading, Image, Header } from "grommet";
import ARPage2 from "./labels/ARPage2";
import { useParams } from "react-router-dom";
import ProjectDetails from "../components/images/project-details.svg";
import ProjectDetailsRight from "../components/images/project-details-right.svg";

export default function LabelDesigner() {
  let { label } = useParams();
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
            <Image src={ProjectDetails} width="100%" />
          </Box>
        </Box>

        <Box gridArea="middle">
          <ARPage2 label={label} />
        </Box>

        <Box gridArea="right">
          <Image src={ProjectDetailsRight} fill />
        </Box>
      </Grid>
    </Box>
  );
}

//export default withRouter(ADesign);
