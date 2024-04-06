import React from "react";

import {
  HStack,
  VStack,
  Button,
  Text,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Spacer,
  ButtonGroup,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import fruitImage from "../components/img/fruit3.png";
const loading = () => {
  return (
    // fuuit rotates in teh background
    <>
      <VStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>
        <HStack justify={"center"} align={"center"}>
          <Box
            as="div"
            animation="spin 2s linear infinite" // Apply CSS animation to rotate the image
          >
            <Image src={fruitImage} alt="Fruit Image" />
          </Box>
        </HStack>
        <HStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>
          <Text fontSize={"26"} fontWeight={"600"}>
            {" "}
            Loading 🌀
          </Text>
        </HStack>
      </VStack>
    </>
  );
};

export default loading;
