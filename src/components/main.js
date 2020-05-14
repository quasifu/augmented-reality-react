import React from "react";
import { Main, Box } from "grommet";
import Switch from "../constants/switch";
import BackgroundTriangle from "./images/backgroundTriangle";
import { AVERY_DENNISON } from "../constants/theme";

export default function Terms(props) {
  return (
    <Main fill>
      <Box style={{ zIndex: 1 }} gap="small" fill>
        <Switch userTheme={props.userTheme} />
      </Box>
      <div
        style={{
          position: "absolute",
          height: "100%",
          top: "0",
          right: "0",
          width: "50%",
          overflow: "hidden",
        }}
      >
        <BackgroundTriangle
          style={{
            position: "absolute",
            bottom: "10px",
            right: "-40vw",
            height: "95vh",
            width: "95vw",
          }}
        />
      </div>
    </Main>
  );
}
