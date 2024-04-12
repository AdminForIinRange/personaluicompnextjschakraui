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
const SimpleCard = () => {
  return (
    <>
      {" "}
      <Box

        w={["260px", "260px", "260px", "280px", "290px"]}
        h={["200px", "200px", "250px", "290px", "310px"]}
        border={"1.8px solid #B5B5B5"}
        rounded={"xl"}
        p={["2", "2", "2", "3", "4"]}
      >
        <VStack align={"left"} w={"100%"} h={"100%"}>
          <HStack>
            <Text
              w={"70%"}
              fontSize={["22px", "22px", "28px", "28px", "32px"]}
              fontWeight={"700"}
              textAlign={"left"}
            >
              The Dolomites
            </Text>
          </HStack>

          <HStack>
            <Text fontSize={["12px", "12px", "12px", "12px", "16px"]} fontWeight={"500"} textAlign={"left"}>
              The Dolomites, also known as the Dolomite Mountains, Dolomite Alps
              or Dolomitic Alps, are a mountain range in northeastern Italy.
            </Text>
          </HStack>
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
      </Box>
    </>
  );
};

export default SimpleCard;
