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
            px={"100px"}
            py={10}
          >
            <VStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>
              <Text fontSize={"46"} fontWeight={"700"} textAlign={"center"}>
                Login to your account
              </Text>
              <Text fontSize={"20"} fontWeight={"300"} textAlign={"center"}  as={"span"}>
                Dont Have an Account 
                <Text color={"green"} cursor={"pointer"}  as={"span"}> Sign Up? </Text>
              </Text>

              <Box  px={5}
          py={5}
          mt={"25px"}
          w={"120%"}
          h={"100%"}
          rounded={"xl"}
          boxShadow={"0 1px 5px gray"}
          align={"left"}>


<FormLabel htmlFor="email">
          {" "}
          Email
        </FormLabel>
        <Input
          id="email"
          type="email"
          w={"100%"}
          autoComplete="current-email"
          required
        
        
        />
        <FormLabel mt={"20px"} htmlFor="password">
          password
        </FormLabel>
        <Input
          id="password"
          type={showPassword ? "text" : "password"} // Show password if showPassword is true
          required
          autoComplete="current-password"
          style={{ width: "100%" }}
         

        ></Input>
        
        
        <HStack mt={"15px"} justify="space-between">
          <Checkbox>Remember me</Checkbox>
          <Button
            variant="link"
            size="sm"
            onClick={() => {
              dispatch(resetPassword({ email }));
              dispatch(setForgotPassword(true));
            }}
          >
            Forgot password?
          </Button>
        </HStack>

        <Button colorScheme="whatsapp" mt={"20px"} w={"100%"} type="submit">
          Login
        </Button>
       
        <HStack mt={"20px"}>
          <Divider />
          <Text whiteSpace="nowrap" color="fg.muted">
            Sign In With
          </Text>
          <Divider />
        </HStack>
        <HStack mt={"15px"} justify={"center"} align={"center"} mb={"20px"}>
          <Button
            
            colorScheme="gray"
            w={"20%"}
          >
            <FaGoogle  color="gray" size={"20px"}  />
          </Button>
        </HStack>


              </Box>
          
            </VStack>
          </Box>
        </HStack>
      </VStack>
    </>
  );
};

export default LoginForm;
