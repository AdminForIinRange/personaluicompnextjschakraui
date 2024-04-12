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
import React from "react";
import Link from "next/link";
import SimpleCard from "./BasicCards/SimpleCard";
import WideSimpleCard from "./BasicCards/WideSimpleCard";
import ImageSimpleCard from "./BasicCards/ImageSimpleCard";
import CollageCard from "./BasicCards/collage/CollageCard";
import HrzonCard from "./BasicCards/collage/HrzonCard";
import TicketCard from "./ComplexCards/TicketCard";

const Card = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                <SimpleCard />
                <WideSimpleCard />
                <ImageSimpleCard />
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
                <CollageCard />

                <HrzonCard />
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
                <TicketCard />
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </HStack>
    </>
  );
};

export default Card;
