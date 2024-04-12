"use client";
import {
  HStack,
  Spacer,
  useMediaQuery,
  Button,
  useToast,
  Box,
  Text,
} from "@chakra-ui/react";

import React from "react";

import MobileMenuLinks from "./Links/MobileMenuLinks";
import { Links } from "./Links/Links";
import Logo from "./Links/Logo";

const Navbar = () => {
  //---------------------------------------

  // Sepatre the dynamic and static components, for isolate teh btn's and
  //meunu as they are dynamically changing and requires user input

  //-----------------------------------------

  const [isTablet] = useMediaQuery("(max-width: 1024px)");

  function ToastExample() {
    const toast = useToast();
    return toast({
      position: "top-center",
      render: () => (
        <Box color="Black" p={8} bg="gray.100" rounded={"md"} shadow={"xl"}>
           <Text fontSize={"20px"} fontWeight={"bold"} textAlign={"center"}> We are still Under Devlopment.</Text>
          <Text mt={"10px"} fontSize={"16px"} textAlign={"center"}  >For the mean time, feel free to look around</Text>
          <Text  fontSize={"16px"} textAlign={"center"}  >My First Solo NextJS project 😔👉👈</Text>
        </Box>
      ),
    
    });
  }

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
        {ToastExample()}
        <Logo />
        <Spacer />
        <HStack fontWeight={500}>
          {isTablet ? <MobileMenuLinks /> : <Links />}
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
