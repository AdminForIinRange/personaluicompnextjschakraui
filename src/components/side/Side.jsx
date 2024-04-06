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

const Side = ({PresetItems, CompItems}) => {
  return (
    <VStack px={"20px"}>
    <HStack justify={"left"}  w={"100%"}>
    <Text fontSize={"22.5px"} mt={"50px"} fontWeight={"600"} textAlign={"left"}>
      Presets
    </Text>
    </HStack>

    <VStack
      justify={"left"}
      align={"left"}
      gap={"30px"}
      mt={"20px"}
      w={"100%"}
    >
      {PresetItems.map((item, index) => (
        <Text
          key={index}
          cursor={"pointer"}
          transition="transform, 0.3s ease-in-out"
          _hover={{
            marginLeft: "15px",
          }}
          w={"100%"}
          textAlign={"left"}
          fontSize={"17px"}
          fontWeight={"400"}
        >
          {item.title}
        </Text>
      ))}
    </VStack>
    <HStack justify={"left"}  w={"100%"}>
    <Text fontSize={"22.5px"} mt={"100px"} fontWeight={"600"} textAlign={"left"}>
      Components
    </Text>
    </HStack>
    <VStack
      justify={"left"}
      align={"left"}
      gap={"30px"}
      mt={"20px"}
      w={"100%"}
    >
      {CompItems.map((item, index) => (
        <Text
          key={index}
          cursor={"pointer"}
          transition="transform, 0.3s ease-in-out"
          _hover={{
            marginLeft: "15px",
          }}
          w={"100%"}
          textAlign={"left"}
          fontSize={"17px"}
          fontWeight={"400"}
        >
          {item.title}
        </Text>
      ))}
    </VStack>
  </VStack>
  )
}

export default Side