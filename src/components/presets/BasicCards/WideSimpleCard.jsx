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
const WideSimpleCard = () => {
  return (
    <>
      {" "}
      <Box
        w={"415px"}
        h={"310px"}
        border={"1.8px solid #B5B5B5"}
        rounded={"xl"}
        p={"3"}
      >
        <VStack justify={"left"} align={"inherit"} w={"100%"} h={"100%"}>
          <HStack w={"50%"}>
            <Text
              align={"center"}
              fontSize={"20px"}
              fontWeight={"700"}
              textAlign={"left"}
            >
              Dolomites
            </Text>
          </HStack>

          <HStack w={"100%"}>
            <Text
              align={"center"}
              fontSize={"16px"}
              fontWeight={"500"}
              textAlign={"left"}
            >
              The Dolomites, also known as the Dolomite Mountains, Dolomite Alps
              or Dolomitic Alps, are a mountain range in northeastern Italy.
            </Text>
          </HStack>
          <HStack w={"100%"} h={"100%"}>
            <Box
              w={"100%"}
              h={"100%"}
              bgColor={"black"}
              rounded={"xl"}
              bgImage={
                "https://source.unsplash.com/brown-wooden-house-on-green-grass-field-near-snow-covered-mountain-during-daytime-ZI9zYWhLyy0"
              }
              bgSize={"cover"}
         
              bgPos={[
                "top right",
                " top right",
                "top",
                "top",
                "top",
              ]}
            ></Box>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default WideSimpleCard;
