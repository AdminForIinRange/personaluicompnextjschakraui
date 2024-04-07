"use client";

import React, { useState } from "react";
import {
  FormLabel,
  Input,
  HStack,
  VStack,
  Checkbox,
  Button,
  Divider,
  Text,
  Box,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FaGoogle } from "react-icons/fa";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    // the other one was ez because it was ezz beacuse
    //i alredy had doen it itn figma, do teh same for this
    <>
      <VStack px={10}>
        <VStack justify={"left"} w={"100%"} h={"100%"} align={"left"}>
          <Text fontSize={"50"} fontWeight={"600"}>
            Auth Form
          </Text>
          <HStack
            justify={"left"}
            w={"100%"}
            h={"100%"}
            mt={"20px"}
            align={"left"}
          >
            <Text fontSize={"30"} fontWeight={"400"}>
              Basic
            </Text>
          </HStack>
        </VStack>

        <HStack
          mt={"20px"}
          justify={"left"}
          w={"100%"}
          h={"100%"}
          gap={"15px"}
          flexWrap={"wrap"}
          align={"left"}
        >
          <Box
            w={"100%"}
            h={"100%"}
            border={"1.8px solid #B5B5B5"}
            rounded={"xl"}
            p={10}
          >
            <VStack mt={"25px"}>
              <Text fontSize={"60px"} fontWeight={"700"}>
                Login to your account
              </Text>
              <Text fontSize={"25px"} fontWeight={"300"} textAlign={"center"}> 
                Dont Have an Account ?
              </Text>

            </VStack>
          </Box>
        </HStack>
      </VStack>
    </>
  );
};

export default LoginForm;
