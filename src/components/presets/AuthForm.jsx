"use client";

import React, { useState } from "react";
import {
  FormLabel,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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
import { FaGithub } from "react-icons/fa";
const AuthForm = () => {
  return (
    // the other one was ez because it was ezz beacuse
    //i alredy had doen it itn figma, do teh same for this
    <>
      <HStack
        h={"100%"}
        w={"100%"}
        justify={["center", "center", "left", "left", "left"]}
        align={"center"}
      >
        <Accordion defaultIndex={[0]} allowMultiple w={"95%"} h={"100%"}>
          <Text fontSize={"50"} fontWeight={"600"} align={["center", "center", "left", "left", "left"]}>
            Auth Form
          </Text>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"30"} fontWeight={"400"}>
                    Basic
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <HStack
                ml={["0px", "0px", "20px", "20px", "20px"]}
                mb={["0px", "0px", "20px", "20px", "20px"]}
                flexWrap={"wrap"}
                mt={"20px"}
                align={"start"}
                justify={["center", "center", "left", "left", "left"]}
                h={"100%"}
                w={"100%"}
                gap={["10px", "10px", "20px", "20px", "30px"]}
              >
                <BasicLogin />
                <BasicSignUp />
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </HStack>
    </>
  );
};

export default AuthForm;
