import React from "react";
import { Grid, Box, Heading, Image, Text, Button } from "grommet";
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
        rows={["1/4", "flex"]}
        columns={["flex", "flex"]}
        areas={[
          {
            name: "header",
            start: [0, 0],
            end: [1, 0],
          },
          {
            name: "left",
            start: [0, 1],
            end: [0, 1],
          },
          {
            name: "right",
            start: [1, 1],
            end: [1, 1],
          },
        ]}
        gap="small"
        pad={{ bottom: "small" }}
        fill
      >
        <Box
          gridArea="header"
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
              primary
              label="Get started"
              size="small"
              active
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
              primary
              label="Get started"
              size="small"
              active
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
              primary
              label="Get started"
              size="small"
              active
              onClick={() => {}}
            />
          </Box>
        </Box>

        <Box gridArea="left">
          <Box
            margin={{ bottom: "small" }}
            round="medium"
            background="linear-gradient(180deg, #4FD7C8 0%, #319388 84%)"
            pad="medium"
            height="xsmall"
            align="center"
            hoverIndicator
            onClick={() => {}}
          >
            <Image src={PlusIcon} /> <Text color="white">Start a new item</Text>
          </Box>

          <Box
            gap="small"
            round="medium"
            background="white"
            pad="medium"
            flex
            overflow="scroll"
          >
            <Heading level="4" size="medium">
              Your Projects
            </Heading>
            <LabelsList />
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
