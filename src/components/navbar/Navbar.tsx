import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from '../../assets/react.svg'
import ColorModeSwitch from "../switch/ColorModeSwitch";
import SearchInput from "../search/searchInput";

interface Props {
  onSearch : (searchText : string) => void
}

const Navbar = ({onSearch}:Props) => {
  const handleSearch = (searchText:string) => {
onSearch(searchText)
  }
  return (
    <HStack  padding='15px'>

      <Image src={logo} boxSize='60px'/>
      <SearchInput onSearch={handleSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
