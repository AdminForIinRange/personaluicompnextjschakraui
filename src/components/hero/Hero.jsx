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
  VStack,
} from "@chakra-ui/react";

import React from "react";

import HeroBtn from "../button/HeroBtn";

const HeroPage = () => {
  return (
    <>
      <VStack justify={"center"} align={"center"} p={"20px"}>
        <HStack
          justify={"center"}
          align={"center"}
          w={["90%", "90%", "80%", "60%"]}
          mt={"100px"}
        >
          <Text
            fontSize={["35px", "45px", "45px", "65px"]}
            fontWeight={700}
            textAlign={"center"}
            fontFamily={"Raleway"}
          >
            Accelerate UI Development in React using Amazing presets.
          </Text>
        </HStack>
        <Text
          fontSize={["15px", "24px", "24px", "24px"]}
          textAlign={"center"}
          fontFamily={"Raleway"}
        >
          Streamlined React UI Development with Powerful Presets
        </Text>

        <HStack justify={"center"} align={"center"} mt={"50px"}>
          <HeroBtn />
        </HStack>
      </VStack>
    </>
  );
};

export default HeroPage;
