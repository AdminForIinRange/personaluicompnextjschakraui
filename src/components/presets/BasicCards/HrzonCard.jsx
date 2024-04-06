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
                  "https://source.unsplash.com/pathway-between-green-trees-F_hft1Wiyj8"
                }
                bgSize={"cover"}
                bgPos={["center", " center", "center", "center", "center"]}
              ></Box>
            </HStack>
            <HStack w={"200%"} h={"100%"}>
              <Box
                w={"100%"}
                h={"100%"}
                bgColor={"black"}
                rounded={"xl"}
                bgImage={
                  "https://source.unsplash.com/birds-eye-view-photograph-of-green-mountains-01_igFr7hd4"
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
                  "https://source.unsplash.com/aerial-photo-of-green-trees-ugnrXk1129g" //cache
                }
                bgSize={"cover"}
                bgPos={["bottom right", " bottom right", "bottom right ", "bottom right ", "bottom right"]}
              ></Box>
            </HStack>
            <HStack w={"50%"} h={"100%"}>
              <Box
                w={"100%"}
                h={"100%"}
                bgColor={"black"}
                rounded={"xl"}
                bgImage={
                  "https://source.unsplash.com/photo-of-green-plants-7APM4YyW_JU"
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
