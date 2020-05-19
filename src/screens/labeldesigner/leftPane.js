import React from "react";
import { AccordionPanel, Heading, Accordion, Box, Text, Button } from "grommet";

export default function LeftPane({ metadata }) {
  return (
    <Box gap="small" round="medium" background="white" pad="medium" flex>
      <Heading level={3} margin="none">
        {metadata.projectName}
      </Heading>
      <Heading level={6} margin="none">
        {metadata.itemName}
      </Heading>
      <Heading level={6} margin="none" background="red">
        {metadata.id}
      </Heading>
      <Box direction="row" border="horizontal" pad="small">
        <Box flex border="right" pad={{ horizontal: "small" }}>
          <Button
            style={{ color: "#FFF", border: "none" }}
            primary
            color="primary-button"
            hoverIndicator="active-primary-button"
            label="Front"
            size="small"
            onClick={() => {}}
          />
        </Box>
        <Box flex pad={{ horizontal: "small" }}>
          <Button
            primary
            color="tertiary-button"
            hoverIndicator="active-primary-button"
            label="Back"
            size="small"
            onClick={() => {}}
          />
        </Box>
      </Box>
      <Box overflow="scroll">
        <Accordion>
          {["Size", "Hang hole", "Corners", "Logo/Image", "Application"].map(
            (item) => (
              <AccordionPanel label={item} key={item}>
                <Box pad="medium">
                  <Text>{item}</Text>
                </Box>
              </AccordionPanel>
            )
          )}
        </Accordion>
      </Box>
    </Box>
  );
}
