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
const CollageCard = () => {
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
        <HStack w={"100%"} h={"100%"} align={"left"} px={2}>
       
          <HStack justify={"left"} align={"start"} w={"100%"} h={"100%"}>
          <HStack w={"100%"} h={"100%"}>
              <Box
                w={"100%"}
                h={"100%"}
                bgColor={"black"}
                rounded={"xl"}
                bgImage={
                  "https://source.unsplash.com/random/600x400?rainforest"
                }
                bgSize={"cover"}
                bgPos={["top left", " top left", "top left", "top left", "top left"]}
              ></Box>
            </HStack>
            <HStack w={"200%"} h={"100%"}>
              <Box
                w={"100%"}
                h={"100%"}
                bgColor={"black"}
                rounded={"xl"}
                bgImage={
                  "https://source.unsplash.com/random/600x400?field"
                }
                bgSize={"cover"}
                bgPos={["top ", " top ", "top", "top", "top"]}
              ></Box>
            </HStack>
            <HStack w={"100%"} h={"100%"}>
              <Box
                w={"100%"}
                h={"100%"}
                bgColor={"black"}
                rounded={"xl"}
                bgImage={
                  "https://source.unsplash.com/random/600x400?green hill"
                }
                bgSize={"cover"}
                bgPos={["top right", " top right", "top right ", "top right ", "top right"]}
              ></Box>
            </HStack>
            <HStack w={"50%"} h={"100%"}>
              <Box
                w={"100%"}
                h={"100%"}
                bgColor={"black"}
                rounded={"xl"}
                bgImage={
                  "https://source.unsplash.com/random/600x400?green leaves background"
                }
                bgSize={"cover"}
                bgPos={["top right", " top right", "top right", "top right", "top "]}
              ></Box>
            </HStack>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default CollageCard;
