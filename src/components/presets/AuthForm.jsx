"use client";

import React, { useState } from "react";
import {
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  VStack,
  Checkbox,
  useDisclosure,
  ModalBody,
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
import CodePerCopy from "../Playground/CodeCopy/CodePerCopy";

const AuthForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
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
          <Text
            fontSize={"50"}
            fontWeight={"600"}
            align={["center", "center", "left", "left", "left"]}
          >
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
                <Box
                  transition="transform, 0.3s ease-in-out"
                  cursor={"pointer"}
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  onClick={() => {
                    onOpen(), setName("BasicLogin");
                  }}
                >
                  <BasicLogin />
                </Box>
                <Box
                  transition="transform, 0.3s ease-in-out"
                  cursor={"pointer"}
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  onClick={() => {
                    onOpen(), setName("BasicSignUp");
                  }}
                >
                  <BasicSignUp />
                </Box>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent bgColor={"#011627"}>
          <ModalBody>
            <>
              <Box p={5} rounded={"lg"} color={"white"} w={"100%"} h={"100%"}>
                <HStack justify={"right"} w="100%" h="100%" align="center">
                  {" "}
                </HStack>

                <pre>
                  <code className="language-html">
                    <CodePerCopy name={name} />
                  </code>
                </pre>
              </Box>
            </>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthForm;
