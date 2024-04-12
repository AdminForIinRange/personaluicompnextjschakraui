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

        <Box
          w={["80%", "70%", "50%", "30%", "30%"]}
          h={"100%"}
          bg={"gray.100"}
          rounded={"xl"}
          p={"4"}
          shadow={"md"}
        >
          <Text
            fontSize={"16px"}
            fontWeight={700}
            textAlign={"center"}
            fontFamily={"Raleway"}
          >
            🔨 Please keep in mind We are stil under development
          </Text>
          <Text
            fontSize={"16px"}
            fontWeight={400}
            textAlign={"center"}
            fontFamily={"Raleway"}
          >
            Feel free to look around
          </Text>
        </Box>
      </VStack>
    </>
  );
};

export default HeroPage;
