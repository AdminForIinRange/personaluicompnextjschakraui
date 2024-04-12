"use client";
import {
  HStack,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  VStack,
} from "@chakra-ui/react";
import { HiArrowLongRight } from "react-icons/hi2";
import React, { useState } from "react";
import Link from "next/link";
import SimpleCard from "./BasicCards/SimpleCard";
import WideSimpleCard from "./BasicCards/WideSimpleCard";
import ImageSimpleCard from "./BasicCards/ImageSimpleCard";
import CollageCard from "./BasicCards/collage/CollageCard";
import HrzonCard from "./BasicCards/collage/HrzonCard";
import TicketCard from "./ComplexCards/TicketCard";
import { CopyIcon } from "@chakra-ui/icons";
import CodePerCopy from "../Playground/CodeCopy/CodePerCopy";
const Card = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");

  return (
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
            Card
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
                justify={["left", "left", "left", "left", "left"]}
                h={"100%"}
                w={"100%"}
                gap={["10px", "10px", "20px", "20px", "30px"]}
              >
                <Box
                 transition="transform, 0.3s ease-in-out"
                cursor={"pointer"}
                _hover={
                  {
            transform: "scale(1.05)",
                  }
                }
       
                  onClick={() => {
                    onOpen(), setName("SimpleCard");
                  }}
                >
                  <SimpleCard />
                </Box>

                <Box
                transition="transform, 0.3s ease-in-out"
                cursor={"pointer"}
                _hover={
                  {
            transform: "scale(1.05)",
                  }
                }
       
                  onClick={() => {
                    onOpen(), setName("WideSimpleCard");
                  }}
                >
                  <WideSimpleCard />
                </Box>

                <Box
                transition="transform, 0.3s ease-in-out"
                cursor={"pointer"}
                _hover={
                  {
            transform: "scale(1.05)",
                  }
                }
       
                  onClick={() => {
                    onOpen(), setName("ImageSimpleCard");
                  }}
                >
                  <ImageSimpleCard />
                </Box>
              </HStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"30"} fontWeight={"400"}>
                    Collage
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
                justify={["left", "left", "left", "left", "left"]}
                h={"100%"}
                w={"100%"}
                gap={["10px", "10px", "20px", "20px", "30px"]}
              >
                <Box
                transition="transform, 0.3s ease-in-out"
                cursor={"pointer"}
                _hover={
                  {
            transform: "scale(1.05)",
                  }
                }
       
                  onClick={() => {
                    onOpen(), setName("CollageCard");
                  }}
                >
                  <CollageCard />
                </Box>

                <Box
        transition="transform, 0.3s ease-in-out"
        cursor={"pointer"}
        _hover={
          {
    transform: "scale(1.05)",
          }
        }

                  onClick={() => {
                    onOpen(), setName("HrzonCard");
                  }}
                >
                  <HrzonCard />
                </Box>
              </HStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"30"} fontWeight={"400"}>
                    Workplace
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
                justify={["left", "left", "left", "left", "left"]}
                h={"100%"}
                w={"100%"}
                gap={["10px", "10px", "20px", "20px", "30px"]}
              >
                 <Box
               transition="transform, 0.3s ease-in-out"
               cursor={"pointer"}
               _hover={
                 {
           transform: "scale(1.05)",
                 }
               }
      
                  onClick={() => {
                    onOpen(), setName("TicketCard");
                  }}
                >
                  <TicketCard />
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

export default Card;
