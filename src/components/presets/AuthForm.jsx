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
import BasicLogin from "./BasicLoginForm/BasicLogin";
import BasicSignUp from "./BasicLoginForm/BasicSignUp";
const AuthForm = () => {
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

            <BasicLogin />
            
<BasicSignUp />
         
        </HStack>
      </VStack>
    </>
  );
};

export default AuthForm;
