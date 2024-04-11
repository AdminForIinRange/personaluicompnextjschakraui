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

const Hero = () => {
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
          <Text fontSize={"50"} fontWeight={"600"}>
            Hero
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
   
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </HStack>
    </>
  );
};

export default Hero;
