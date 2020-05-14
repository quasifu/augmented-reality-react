import React from "react";
import {
  Button,
  Box,
  grommet,
  Grommet,
  Nav,
  Stack,
  Text,
  Sidebar,
  Image,
} from "grommet";

import {
  Analytics,
  Chat,
  Clock,
  Configure,
  Help,
  Projects,
  Split,
  StatusInfoSmall,
} from "grommet-icons";

import { Link } from "react-router-dom";
import logo from "./images/logo.png";

import { AVERY_DENNISON } from "../constants/theme";

const SidebarHeader = () => (
  <Box align="center" gap="small" direction="row" margin={{ bottom: "large" }}>
    <Image src={logo} />
  </Box>
);

const SidebarButton = ({ icon, label, link, ...rest }) => (
  <Box pad="small" hoverIndicator onClick={() => {}}>
    <Link to={link}>
      <Button alignSelf="start" plain icon={icon} label={label} {...rest} />
    </Link>
  </Box>
);

const SidebarFooter = () => (
  <Nav>
    <SidebarButton icon={<Chat />} label="Chat" />
    <SidebarButton icon={<Help />} label="Support" />
  </Nav>
);

const MainNavigation = () => (
  <Nav responsive={false}>
    <SidebarButton icon={<StatusInfoSmall />} label="Dashboard" />
    <SidebarButton icon={<Projects />} label="My Orders" />
    <SidebarButton icon={<Clock />} label="ADesign" link="/" />
  </Nav>
);

export default function Menu() {
  return (
    <Sidebar
      style={{ zIndex: 1 }}
      responsive={false}
      background={AVERY_DENNISON.global.colors["background-menu"]}
      header={<SidebarHeader />}
      footer={<SidebarFooter />}
      pad={{ left: "none", right: "none", vertical: "none" }}
    >
      <MainNavigation />
    </Sidebar>
  );
}
