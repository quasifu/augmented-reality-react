import React from "react";
import { Grid, Box, Heading, Image, Text, Button, Header } from "grommet";
import ADesignDarkIcon from "../components/images/adesign-dark.svg";
import TrackAndTraceIcon from "../components/images/track-and-trace.svg";
import DeliveryTrackingIcon from "../components/images/delivery-tracking.svg";
import PersonImage from "../components/images/person.svg";
import { FormNextLink } from "grommet-icons";
import { useHistory } from "react-router-dom";

export default function Home() {
  let history = useHistory();
  return (
    <Box pad="small" gap="small" fill>
      <div
        style={{
          position: "absolute",
          height: "100%",
          top: "0",
          right: "0",
          zIndex: "-1",
          width: "50%",
          overflow: "hidden"
        }}
      >
        <Image
          src={PersonImage}
          fill
          style={{
            position: "absolute",
            zIndex: "-1",
            right: "-200px",
            height: "85%",
            bottom: "35px"
          }}
        />
      </div>
      <Grid
        rows={["auto", "flex", "1/4"]}
        columns={["flex", "flex"]}
        areas={[
          {
            name: "header",
            start: [0, 0],
            end: [1, 0]
          },
          {
            name: "banner",
            start: [0, 1],
            end: [1, 1]
          },
          {
            name: "left",
            start: [0, 2],
            end: [0, 2]
          },
          {
            name: "right",
            start: [1, 2],
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
              Sign Up Step 1/5
            </Heading>
          </Header>
        </Box>
        <Box gridArea="banner" round="medium" background="rgba(255,255,255,.8)">
          <Header
            pad="small"
            alignContent="center"
            textAlign="center"
            justify="between"
            alignSelf="center"
          >
            <Text
              weight="bold"
              size={"large"}
              margin="small"
              textAlign="center"
              alignSelf="center"
              fill
            >
              Sign up for an Avery Dennison Customer Portal and get access to
              Key Features and Tools
            </Text>
          </Header>
          <Box direction="row">
            <Box flex border="right" pad="small" align="center" margin="small">
              <Image src={ADesignDarkIcon} size="small" />
              <Heading level="5" size="small" margin="xxsmall">
                ADesign
              </Heading>
              <Text size="xsmall" margin="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Button
                style={{ color: "#FFF", border: "none" }}
                color="primary-button"
                hoverIndicator="active-primary-button"
                label="Learn more"
                size="small"
                primary
                onClick={() => {}}
              />
            </Box>
            <Box flex border="right" pad="small" align="center" margin="small">
              <Image src={DeliveryTrackingIcon} size="small" />
              <Heading level="5" size="small" margin="xxsmall">
                Realtime Delivery Tracking
              </Heading>
              <Text size="xsmall" margin="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Button
                style={{ color: "#FFF", border: "none" }}
                color="primary-button"
                hoverIndicator="active-primary-button"
                label="Learn more"
                size="small"
                primary
                onClick={() => {}}
              />
            </Box>
            <Box flex pad="small" align="center" margin="small">
              <Image src={TrackAndTraceIcon} height="100px" />
              <Heading level="5" size="small" margin="xxsmall">
                Track &amp; Trace
              </Heading>
              <Text size="xsmall" margin="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Button
                style={{ color: "#FFF", border: "none" }}
                primary
                color="primary-button"
                hoverIndicator="active-primary-button"
                label="Learn more"
                size="small"
                onClick={() => {}}
              />
            </Box>
          </Box>
        </Box>

        <Box gridArea="left">
          <Box
            margin={{ bottom: "small" }}
            round="medium"
            background="secondary-button"
            hoverIndicator="active-secondary-button"
            pad="medium"
            gap="small"
            height="xsmall"
            align="center"
            justify="center"
            alignContent="center"
            direction="row"
            onClick={() => {
              history.push(`/adesign`);
            }}
          >
            <Text size="large" weight="bold" color="white">
              Lets get started
            </Text>
            <FormNextLink color="white" />
          </Box>
          <Text pad="small">
            Click here for <b>required details for sign up</b>
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}

//export default withRouter(ADesign);
