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
import fruitImage from "../img/fruit3.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  //---------------------------------------

  // Sepatre the dynamic and static components, for isolate teh btn's and
  //meunu as they are dynamically changing and requires user input

  //-----------------------------------------

  const [isTablet] = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      <HStack
        fontFamily={"Raleway"}
        h={"100%"}
        w={"100%"}
        justify={"center"}
        align={"center"}
        // boxShadow={"xl"}\
        mt={"15px"}
        px={7}
        gap={"20px"}
      >
        <Link href={"/"}>
       
        <Box
        cursor={"pointer"}
          w={"60px"}
          borderRadius={"100px"}
          overflow={"hidden"}
          transform={"rotate(25deg)"}
        >
          <Image src={fruitImage} alt="Fruit Image" />
        </Box>
        </Link>

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
