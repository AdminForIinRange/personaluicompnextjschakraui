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
import { FaCog } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GoGoal } from "react-icons/go";
import { FaPen } from "react-icons/fa";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const Hero = () => {
  const [isTablet] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px)"
  );

  return (
    <>
      <VStack justify={"center"} align={"center"}>
        <HStack
          justify={"center"}
          align={"center"}
          w={["90%", "90%", "80%", "70%"]}
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

        <HStack justify={"center"} align={"center"} mt={"50px"}>
          <Button
            p={"15px"}
            variant={"solid"}
            bgColor={"#CEFF8F"}
           
            transition="transform, 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "0 0px 25px gray",
               bgColor: "purple.200" 
            }}
            color={"black"}
            fontSize={"16px"}
            h={"50px"}
            w={"300px"}
            borderRadius={"15px"}
          >
            {" "}
            Browse the library <Spacer />
            <Text as={"span"} ml={"10px"}>
              {" "}
              <HiArrowLongRight fontSize={"35px"} />{" "}
            </Text>{" "}
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export default Hero;
