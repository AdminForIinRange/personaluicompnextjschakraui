import React from 'react'
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
            Dolomites Ranges
          </Text>
        </HStack>

     
        <HStack w={"100%"} h={"100%"}>
          <Box
            w={"100%"}
            h={"100%"}
            bgColor={"black"}
            rounded={"xl"}
            bgImage={
              "https://source.unsplash.com/snow-covered-mountain-under-blue-sky-during-daytime-b8S7Yx9fQzc"
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
  )
}

export default ImageSimpleCard