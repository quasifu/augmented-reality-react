import React, { useState, useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Box, Grommet, Grid } from "grommet";
import { AVERY_DENNISON } from "./constants/theme";
import Main from "./components/main";
import Menu from "./components/menu";

import { UserContext } from "./contexts/UserContext";
import { CONSTANTS } from "./constants";

const userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

const height = window.innerHeight;

function App() {
  const [user, setUser] = useState({
    id: "",
    token: localStorage.getItem(CONSTANTS.AUTH_TOKEN)
      ? localStorage.getItem(CONSTANTS.AUTH_TOKEN)
      : "",
    prefs: {},
  });

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const [sidebar, setSidebar] = useState(true);
  // TODO: should utilize userTheme more that its being passed down to all top level components

  return (
    <UserContext.Provider value={value}>
      <Router>
        <Grommet full theme={AVERY_DENNISON}>
          <Grid
            fill
            rows={["auto", "flex"]}
            columns={["auto", "flex"]}
            areas={[
              { name: "sidebar", start: [0, 1], end: [0, 1] },
              { name: "main", start: [1, 1], end: [1, 1] },
            ]}
          >
            {sidebar && (
              <Box
                gridArea="sidebar"
                width="small"
                animation={[
                  { type: "fadeIn", duration: 300 },
                  { type: "slideRight", size: "xlarge", duration: 150 },
                ]}
              >
                <Menu userTheme={userTheme} />
              </Box>
            )}
            <Box gridArea="main" justify="center" align="center" fill>
              <Main userTheme={userTheme} />
            </Box>
          </Grid>
        </Grommet>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
