import React from "react";
import styled from "styled-components";

import { Code } from "grommet-icons";
import { Anchor, Box, Footer, Text } from "grommet";
//import { Link } from "react-router-dom";

import { AVERY_DENNISON } from "../constants/theme";
import siteMap from "../constants/siteMap";

const StyledAnchor = styled(Anchor)`
  font-weight: 200;
`;

const FooterAnchor = ({ link, ...rest }) => (
  <StyledAnchor href={link} size="small" color="white" {...rest} />
);

const FooterContent = () => {
  return siteMap.map((item) => (
    <Box gap="medium" key={item[0]}>
      <a href={item[0].link}>
        <Text weight="bold" size="small" color="light-1">
          {item[0].title}
        </Text>
      </a>
      <Box>
        {[1, 2, 3, 4].map((i) => (
          <FooterAnchor key={`${item[i].title}+${i}`} link={item[i].link}>
            {item[i].title}
          </FooterAnchor>
        ))}
      </Box>
    </Box>
  ));
};

const DoubleFooter = (props) => {
  console.log(props.userTheme);
  return (
    <Box fill="horizontal">
      <Footer
        background={{
          color: AVERY_DENNISON.global.colors["background"],
          dark: props.userTheme === "dark",
        }}
        pad="large"
      >
        <FooterContent />
      </Footer>
      <Footer
        background={{
          color: AVERY_DENNISON.global.colors["background-weak"],
          dark: props.userTheme === "dark",
        }}
        pad={{ horizontal: "large", vertical: "small" }}
      >
        <Box direction="row" gap="small">
          <Code color="brand" />
          <Text alignSelf="center">AVERY_DENNISON</Text>
        </Box>
        <Text textAlign="center" size="small">
          © 2019 Copyright
        </Text>
      </Footer>
    </Box>
  );
};

export default function AVERY_DENNISONFooter(props) {
  return (
    <React.Fragment userTheme={props.userTheme}>
      <DoubleFooter userTheme={props.userTheme} />
    </React.Fragment>
  );
}
