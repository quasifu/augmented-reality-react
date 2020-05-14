import React, { useState } from "react";
import { Box } from "grommet";
import ARPage2 from "./labels/ARPage2";
import LabelsList from "./labels/LabelsList";

export default function Home() {
  return (
    <Box background={{ opacity: true }}>
      <LabelsList></LabelsList>
    </Box>
  );
}
