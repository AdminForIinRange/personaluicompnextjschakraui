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
import fruitImage from "../img/fruit.png";
import Image from "next/image";
const Navbar = () => {
  const [isTablet] = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      <HStack
        fontFamily={"Raleway"}
        h={"60px"}
        w={"100%"}
        justify={"center"}
        align={"end"}
        // boxShadow={"xl"}\
        mt={"15px"}
        px={5}
        gap={"20px"}
      >
        <Box w={"60px"} h={"100%"}>
          <Image src={fruitImage} alt="Fruit Image" />
        </Box>

        <Button variant={"solid"} color={"black"}>
          <Text color={"black"}>Example</Text>
        </Button>
        <Button variant={"solid"} color={"black"}>
          <Text color={"black"}>Test</Text>
        </Button>

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
              <Button variant={"solid"} color={"black"}>
                <Text color={"black"}>Example</Text>
              </Button>

              <Button variant={"solid"} color={"black"}>
                <Text color={"black"}>Example</Text>
              </Button>

              <Button variant={"solid"} color={"black"}>
                <Text color={"black"}>Example</Text>
              </Button>
            </ButtonGroup>
          )}
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
