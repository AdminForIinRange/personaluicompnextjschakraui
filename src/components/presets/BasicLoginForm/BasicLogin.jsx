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
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

const BasicLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {" "}
      <Box
        h={"100%"}
        border={"1.8px solid #B5B5B5"}
        rounded={"xl"}
        px={"70px"}
        py={10}
      >
        <VStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>
          <Text fontSize={"46"} fontWeight={"700"} textAlign={"center"}>
            Login to your account
          </Text>
          <Text
            fontSize={"20"}
            fontWeight={"300"}
            textAlign={"center"}
            as={"span"}
          >
            Dont Have an Account
            <Text color={"blue.400"} cursor={"pointer"} as={"span"} fontWeight={"500"}>
              {" "}
              Sign Up?{" "}
            </Text>
          </Text>

          <Box
            px={5}
            py={5}
            mt={"25px"}
            w={"500px"}
            h={"100%"}
            rounded={"xl"}
            boxShadow={"0 1px 5px gray"}
            align={"left"}
          >
            
            <FormLabel htmlFor="email"> Email</FormLabel>
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
  Or
              </Text>
              <Divider />
            </HStack>
            <HStack
              mt={"15px"}
              justify={"center"}
              align={"center"}
              mb={"20px"}
              gap={"10px"}
            >
              <Button colorScheme="whatsapp" w={"20%"}>
                <FaGoogle color="white" size={"20px"} />
              </Button>
              {/* allowed btn to be an anchor */}
              <Button
                as="a"
                colorScheme="gray"
                w={"20%"}
                href="https://github.com/AdminForIinRange"
                target="_blank"
              >
                <FaGithub color="black" size={"20px"} />
              </Button>
              <Button
                as="a"
                colorScheme="blue"
                w={"20%"}
                target="_blank"
                href="https://www.linkedin.com/in/anjesh-bhattarai/"
              >
                <FaLinkedin color="white" size={"20px"} />
              </Button>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default BasicLogin;
