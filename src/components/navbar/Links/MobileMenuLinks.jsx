"use client";

import {

  Button,

  MenuButton,
  Menu,
  MenuList,
  MenuItem,

} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GoGoal } from "react-icons/go";
import { FaPen } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
const MobileMenuLinks = () => {
  return (
    <>
  


      <div>
      <Menu>
        <MenuButton as={Button} color={"black"} variant="outline">
          <HamburgerIcon />
        </MenuButton>
        <MenuList>
          <MenuItem gap={"10px"}>
            <FaPen size={"23px"} />
            sum
          </MenuItem>
          <MenuItem gap={"10px"}>
            <GoGoal size={"23px"} />
            sum
          </MenuItem>
          <MenuItem gap={"10px"}>
            <FaCog size={"23px"} />
            sum
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
    </>
  );
};

export default MobileMenuLinks;
