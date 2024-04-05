"use client";

import {
  HStack,
  Button,
  Text,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Spacer,
  ButtonGroup,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import { FaCog } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GoGoal } from "react-icons/go";
import { FaPen } from "react-icons/fa";
import React from "react";

const Navbar = () => {
  const [isTablet] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px)"
  );

  return (
    <>
      <HStack
        fontFamily={"Raleway"}
        h={"60px"}
        w={"100%"}
        justify={"center"}
        align={"center"}
        boxShadow={"xl"}
        px={20}
      >
        <Text fontWeight={500}> Personal UI</Text>
      <Box w={"30px"} h={"30px"} borderRadius={"100px"} bgColor={"red"}/>

        <Spacer />
        <HStack fontWeight={500}>
          {isTablet ? (
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
          ) : (
            <ButtonGroup gap={"25px"}>
              <Button variant={"link"} color={"black"} leftIcon={<FaPen />}>
                <Text color={"black"}>sum</Text>
              </Button>

              <Button variant={"link"} color={"b lack"} leftIcon={<GoGoal />}>
                <Text color={"black"}>sum</Text>
              </Button>

              <Button variant={"link"} color={"b lack"} leftIcon={<FaCog />}>
                <Text color={"black"}>sum</Text>
              </Button>
            </ButtonGroup>
          )}
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
