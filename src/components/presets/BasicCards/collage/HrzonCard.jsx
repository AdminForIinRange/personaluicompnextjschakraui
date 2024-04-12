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
  const bgImage = [
    "https://source.unsplash.com/pathway-between-green-trees-F_hft1Wiyj8",
    "https://source.unsplash.com/birds-eye-view-photograph-of-green-mountains-01_igFr7hd4",
    "https://source.unsplash.com/aerial-photo-of-green-trees-ugnrXk1129g",
    "https://source.unsplash.com/photo-of-green-plants-7APM4YyW_JU",
  ];
  //obj array then map
  return (
    <>
      {" "}
      <Box
         w={["360px", "360px", "450px", "550px", "650px"]}
          h={["200px", "200px", "250px", "290px", "310px"]}
        border={"1.8px solid #B5B5B5"}
        rounded={"xl"}
        p={["2", "2", "2", "3", "4"]}
      >
        <HStack w={"in"} h={"100%"} align={"left"} px={2}>
          <HStack justify={"left"} align={"start"} w={"100%"} h={"100%"}>
            {bgImage.map((image, index) => (
              <HStack
                key={index}
                w={"100%"}
                h={"100%"}
                transition="transform, 0.3s ease-in-out"
                _hover={{
                  width: "200%",
                }}
              >
                <Box
                  w={"100%"}
                  h={"100%"}
                  bgColor={"black"}
                  rounded={"xl"}
                  bgImage={image}
                  bgSize={"cover"}
                  bgPos={"center"}
                ></Box>
              </HStack>
            ))}
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default CollageCard;
