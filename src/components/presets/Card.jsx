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

const Card = () => {
  return (
    <>
      <VStack>
        <VStack justify={"left"} w={"100%"} h={"100%"}>
          <Text fontSize={"50"} fontWeight={"600"}>
            Card
          </Text>
          <HStack justify={"left"} w={"100%"} h={"100%"} mt={"20px"}>
            <Text fontSize={"30"} fontWeight={"400"}>
              Basic
            </Text>
          </HStack>
        </VStack>

        <HStack mt={"20px"} justify={"left"} w={"100%"} h={"100%"}>
          <Box
            w={"290px"}
            h={"310px"}
            border={"1.8px solid #B5B5B5"}
            rounded={"xl"}
            transition="transform, 0.3s ease-in-out"
            _hover={{
              boxShadow: "0 5px 10px gray",
            }}
            p={"3"}
          >
            <VStack justify={"left"} align={"inherit"} w={"100%"} h={"100%"}>
              <HStack w={"50%"}>
                <Text
                  align={"center"}
                  fontSize={"32px"}
                  fontWeight={"700"}
                  textAlign={"left"}
                >
                  The Dolomites
                </Text>
              </HStack>

              <HStack w={"100%"}>
                <Text
                  align={"center"}
                  fontSize={"16px"}
                  fontWeight={"500"}
                  textAlign={"left"}
                >
                  The Dolomites, also known as the Dolomite Mountains, Dolomite
                  Alps or Dolomitic Alps, are a mountain range in northeastern
                  Italy.
                </Text>
              </HStack>

              <HStack>
                <Text as={"span"}>Learn more</Text>{" "}
                <HiArrowLongRight fontSize={"25px"} />
              </HStack>
            </VStack>
          </Box>
        </HStack>
      </VStack>
    </>
  );
};

export default Card;
