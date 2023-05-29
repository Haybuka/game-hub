import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from '../../assets/react.svg'
import ColorModeSwitch from "../switch/ColorModeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding='15px'>
      {" "}
      <Image src={logo} boxSize='60px'/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
