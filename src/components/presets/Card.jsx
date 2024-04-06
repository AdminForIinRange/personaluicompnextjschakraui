import {
  HStack,
  Button,
  Text,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Spacer,
  ButtonGroup,
  useMediaQuery,
  Divider,
  Box,
  VStack,
} from "@chakra-ui/react";
import { HiArrowLongRight } from "react-icons/hi2";
import React from "react";
import Link from "next/link";
import SimpleCard from "./BasicCards/SimpleCard";
import WideSimpleCard from "./BasicCards/WideSimpleCard";
const Card = () => {
  return (
    <>
      <VStack px={10}  >
        <VStack justify={"left"} w={"100%"} h={"100%"} align={"left"}    >
          <Text fontSize={"50"} fontWeight={"600"}>
            Card
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

        <HStack mt={"20px"} justify={"left"} w={"100%"} h={"100%"} gap={"15px"} flexWrap={"wrap"}  align={"left"}>
        <SimpleCard />
        <WideSimpleCard />
          
        </HStack>
      </VStack>
    </>
  );
};

export default Card;
