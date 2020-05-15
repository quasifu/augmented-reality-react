import React from "react";
import { Grid, Box, Heading, Image, Text, Button, Header } from "grommet";
import ADesignDarkIcon from "../components/images/adesign-dark.svg";
import ArtworkIcon from "../components/images/artwork.svg";
import PlusIcon from "../components/images/plus.svg";
import GetStartedIcon from "../components/images/get-started.svg";
import LabelsList from "./labels/LabelsList";
import PersonImage from "../components/images/person.svg";
export default function ADesign() {
  return (
    <Box pad="small" gap="small" fill>
      <Grid
        rows={["auto", "1/4", "flex"]}
        columns={["flex", "flex"]}
        areas={[
          {
            name: "header",
            start: [0, 0],
            end: [1, 0],
          },
          {
            name: "banner",
            start: [0, 1],
            end: [1, 1],
          },
          {
            name: "left",
            start: [0, 2],
            end: [0, 2],
          },
          {
            name: "right",
            start: [1, 2],
            end: [1, 2],
          },
        ]}
        gap="small"
        pad={{ bottom: "small" }}
        fill
      >
        <Box gridArea="header">
          <Header pad="small">
            <Heading level={2} size={"medium"} margin="none">
              ADesign
            </Heading>
          </Header>
        </Box>
        <Box
          gridArea="banner"
          round="medium"
          background="rgba(255,255,255,.5)"
          direction="row"
        >
          <Box flex border="right" pad="small" align="center" margin="small">
            <Image src={GetStartedIcon} size="small" />
            <Heading level="5" size="small" margin="xxsmall">
              Ready to get started?
            </Heading>
            <Text size="xsmall">Lorem ipsem....</Text>
            <Button
              style={{ color: "#FFF", border: "none" }}
              color="primary-button"
              hoverIndicator="active-primary-button"
              label="Explore now"
              size="small"
              primary
              onClick={() => {}}
            />
          </Box>
          <Box flex border="right" pad="small" align="center" margin="small">
            <Image src={ArtworkIcon} size="small" />
            <Heading level="5" size="small" margin="xxsmall">
              Have a design already?
            </Heading>
            <Text size="xsmall">Lorem ipsem....</Text>
            <Button
              style={{ color: "#FFF", border: "none" }}
              color="primary-button"
              hoverIndicator="active-primary-button"
              label="Go to upload"
              size="small"
              primary
              onClick={() => {}}
            />
          </Box>
          <Box flex pad="small" align="center" margin="small">
            <Image src={ADesignDarkIcon} size="small" />
            <Heading level="5" size="small" margin="xxsmall">
              Work with our creatives
            </Heading>
            <Text size="xsmall">Lorem ipsem....</Text>
            <Button
              style={{ color: "#FFF", border: "none" }}
              primary
              color="primary-button"
              hoverIndicator="active-primary-button"
              label="Reach out"
              size="small"
              onClick={() => {}}
            />
          </Box>
        </Box>

        <Box gridArea="left">
          <Box
            margin={{ bottom: "small" }}
            round="medium"
            background="primary-button"
            hoverIndicator="active-primary-button"
            pad="medium"
            gap="small"
            height="xsmall"
            align="center"
            justify="center"
            alignContent="center"
            direction="row"
            onClick={() => {}}
          >
            <Image src={PlusIcon} height="100%" />
            <Text size="large" weight="bold" color="white">
              Start New Item
            </Text>
          </Box>

          <Box round="medium" background="white" pad="medium" flex>
            <Heading level="4" size="medium" pad="small">
              Your Projects
            </Heading>
            <Box fill overflow="scroll">
              <LabelsList />
            </Box>
          </Box>
        </Box>

        <Box
          gridArea="right"
          overflow={{ horizontal: "hidden", vertical: "scroll" }}
          style={{ position: "relative" }}
        >
          <Image
            src={PersonImage}
            fill
            style={{
              position: "absolute",
              zIndex: "-1",
              right: "-100px",
              bottom: "20px",
            }}
          />
        </Box>
      </Grid>
    </Box>
  );
}

//export default withRouter(ADesign);
