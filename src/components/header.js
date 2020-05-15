import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Box, Button, Header, Heading } from "grommet";
import { Code } from "grommet-icons";

import { AVERY_DENNISON } from "../constants/theme";

export default function Navigation(props) {
  const { user } = useContext(UserContext);
  return (
    <Header
      background={{
        color: AVERY_DENNISON.global.colors["background"],
        dark: props.userTheme === "dark",
      }}
      pad={{
        vertical: "small",
        horizontal: "medium",
      }}
      gap="small"
      elevation="medium"
    >
      <Code color="brand" size="large" />
      <Heading margin={{ vertical: "none", horizontal: "medium" }}>
        AVERY_DENNISON
      </Heading>
      <nav style={{ width: "100%" }}>
        <Box direction="row" justify="between" fill="horizontal">
          {/* this is the recomended pattern for buttons that navigate. */}
          <Box direction="row" justify="start">
            <Link to="/">
              <Button
                plain
                color="brand"
                label="Home"
                margin={{ right: "small" }}
                focusIndicator={false}
              />
            </Link>
            <Link to="/builds">
              <Button
                plain
                color="brand"
                label="Builds"
                margin={{ right: "small" }}
                focusIndicator={false}
              />
            </Link>
          </Box>
          <Box>
            {user.token.length > 0 ? (
              <Link to="/logout">
                <Button
                  plain
                  color="brand"
                  label="Logout"
                  margin={{ right: "small" }}
                  focusIndicator={false}
                />
              </Link>
            ) : null}
          </Box>
        </Box>
      </nav>
    </Header>
  );
}
