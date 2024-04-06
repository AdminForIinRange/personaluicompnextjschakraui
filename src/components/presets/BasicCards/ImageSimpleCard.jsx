import React from "react";
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
const ImageSimpleCard = () => {
  return (
    <>
      {" "}
      <Box
        w={"650px"}
        h={"310px"}
        border={"1.8px solid #B5B5B5"}
        rounded={"xl"}
        p={"4"}
      >
        <HStack justify={"left"} align={"start"} w={"100%"} h={"100%"}>
          <HStack w={"100%"} h={"100%"}>
            <Box
              w={"100%"}
              h={"100%"}
              bgColor={"black"}
              rounded={"xl"}
              bgImage={
                "https://source.unsplash.com/aurora-borealis-UZOpP-YHe9Q"
              }
              bgSize={"cover"}
              bgPos={["top right", " top right", "top", "top", "top"]}
            ></Box>
          </HStack>

          <VStack w={"100%"} h={"100%"} align={"left"} px={2}>
            <Text
              align={"center"}
              fontSize={"24px"}
              fontWeight={"700"}
              textAlign={"left"}
            >
              Aurora borealis 
            </Text>
            <Text
              align={"center"}
              fontSize={"16px"}
              fontWeight={"500"}
              textAlign={"left"}
            >
              When the Suns energy meets Earths magnetic field.
              <br />
              They dance together and send tiny particles toward the poles,
              creating a magical light show in the sky
            </Text>
            <HStack
              cursor={"pointer"}
              w={"100%"}
              h={"100%"}
              justify={"end"}
              align={"end"}
              fontWeight={"500"}
              transition="transform, 0.3s ease-in-out"
              _hover={{
                marginLeft: "5px",
              }}
            >
              <HStack align={"center"} mr={"5px"}>
                <Text fontSize={"12px"} as={"span"}>
                  Learn more
                </Text>{" "}
                <HiArrowLongRight fontSize={"30px"} />
              </HStack>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

export default ImageSimpleCard;
