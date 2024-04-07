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
            px={20}
            py={5}
          >
            <VStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>
              <Text fontSize={"36"} fontWeight={"700"} textAlign={"center"}>
                Login to your account
              </Text>
              <Text fontSize={"16"} fontWeight={"300"} textAlign={"center"}  as={"span"}>
                Dont Have an Account 
                <Text color={"green"} cursor={"pointer"}  as={"span"}> Sign Up? </Text>
              </Text>

              <Box  px={6}
          py={3}
          mt={"25px"}
          w={"120%"}
          h={"100%"}
          rounded={"xl"}
          boxShadow={"0 1px 8px gray"}
          align={"left"}>


              </Box>
          
            </VStack>
          </Box>
        </HStack>
      </VStack>
    </>
  );
};

export default LoginForm;
