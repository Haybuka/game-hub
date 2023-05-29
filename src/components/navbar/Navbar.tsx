import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from '../../assets/react.svg'
const Navbar = () => {
  return (
    <HStack>
      {" "}
      <Image src={logo} boxSize='60px'/>
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;