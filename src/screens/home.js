import React from "react";
import { Grid, Box, Heading, Image, TextInput, Header, Text } from "grommet";
import { Down } from "grommet-icons";
import ADesignDarkIcon from "../components/images/adesign-dark.svg";
import ArtworkIcon from "../components/images/artwork.svg";
import PlusIcon from "../components/images/plus.svg";
import GetStartedIcon from "../components/images/get-started.svg";
import LabelsList from "./labels/LabelsList";
import ChartImage from "../components/images/chart.svg";
export default function Home() {
  return (
    <Box pad="small" gap="small" fill>
      <Grid
        rows={["auto", "flex", "flex"]}
        columns={["flex", "flex"]}
        areas={[
          {
            name: "header",
            start: [0, 0],
            end: [1, 0]
          },
          {
            name: "left",
            start: [0, 1],
            end: [0, 1]
          },
          {
            name: "right",
            start: [1, 1],
            end: [1, 1]
          },
          {
            name: "body",
            start: [0, 2],
            end: [1, 2]
          }
        ]}
        gap="small"
        pad={{ bottom: "small" }}
        fill
      >
        <Box gridArea="header">
          <Header pad="small">
            <Heading level={2} size={"medium"} margin="none">
              Accounts
            </Heading>
          </Header>
        </Box>

        <Box
          direction="column"
          gridArea="left"
          round="medium"
          background="rgba(255,255,255,.5)"
          pad="small"
          background="white"
          justify="between"
        >
          <Box direction="row" height={{ min: "46px" }} justify="between">
            <Box>
              <TextInput
                icon={<Down />}
                style={{ borderRadius: "20px" }}
                reverse
                size="xsmall"
                placeholder="All your accounts"
              />
            </Box>
            <Box>
              <Text size="small" textAlign="end">
                Health: Good + 1.7%
              </Text>
              <Text size="xsmall" textAlign="end">
                View Reports
              </Text>
            </Box>
          </Box>
          <Box flex>
            <Image height="100%" src={ChartImage} />
          </Box>
        </Box>

        <Box
          background="rgba(255,255,255,.5)"
          direction="row"
          gridArea="right"
          round="medium"
        >
          <Heading level="5" size="small" margin="xxsmall">
            Ready to get started?
          </Heading>
        </Box>
        <Box
          gridArea="body"
          round="medium"
          background="rgba(255,255,255,.5)"
          direction="row"
        >
          <Heading level="5" size="small" margin="xxsmall">
            Main content
          </Heading>
        </Box>
      </Grid>
    </Box>
  );
}
