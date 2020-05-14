import React, { useState } from "react";
import { Button, Box, Nav, Sidebar, Image } from "grommet";

import { Chat, Help } from "grommet-icons";

import { useHistory } from "react-router-dom";
import Logo from "./images/logo.svg";
import HomeIcon from "../components/images/home.svg";
import OrdersIcon from "../components/images/orders.svg";
import ADesignIcon from "../components/images/adesign.svg";
import { AVERY_DENNISON } from "../constants/theme";

const SidebarHeader = () => (
  <Box
    align="center"
    alignContent="center"
    pad="medium"
    direction="row"
    margin={{ bottom: "large" }}
  >
    <Image src={Logo} />
  </Box>
);

const SidebarButton = ({ icon, name, link, hover, click, active, ...rest }) => (
  <Box
    pad="small"
    hoverIndicator
    background={active && AVERY_DENNISON.button.active}
    onClick={click}
  >
    <Button alignSelf="start" plain icon={icon} label={name} {...rest} />
  </Box>
);

const SidebarFooter = () => (
  <Nav>
    <SidebarButton icon={<Chat />} label="Chat" />
    <SidebarButton icon={<Help />} label="Support" />
  </Nav>
);

const MainNavigation = ({ active, setActive, history, ...rest }) => (
  <Nav responsive={false}>
    {[
      { name: "Dashboard", icon: <Image src={HomeIcon} />, link: "/" },
      { name: "My Orders", icon: <Image src={OrdersIcon} />, link: "/" },
      { name: "ADesign", icon: <Image src={ADesignIcon} />, link: "/adesign" },
    ].map((label) => (
      <SidebarButton
        key={label.name}
        name={label.name}
        icon={label.icon}
        active={label.name === active}
        click={() => {
          setActive(label.name);
          history.push(label.link);
        }}
      />
    ))}
    {/* <SidebarButton icon={<StatusInfoSmall />} label="Dashboard" />
    <SidebarButton icon={<Projects />} label="My Orders" />
    <SidebarButton icon={<Clock />} label="ADesign" link="/" /> */}
  </Nav>
);

export default function Menu() {
  const [active, setActive] = useState();
  let history = useHistory();
  return (
    <Sidebar
      style={{ zIndex: 1 }}
      responsive={false}
      background={AVERY_DENNISON.global.colors["background-menu"]}
      header={<SidebarHeader />}
      footer={<SidebarFooter />}
      pad={{ left: "none", right: "none", vertical: "none" }}
    >
      <MainNavigation active={active} setActive={setActive} history={history} />
    </Sidebar>
  );
}
