import React from "react";
import {
  HStack,
  Text,
  Box,
  VStack,
} from "@chakra-ui/react";

import Comp from "@/data/CompItems.json";
import Preset from "@/data/PresetItems.json";

const SidePanel = () => {
  const { CompItems } = Comp;
  const { PresetItems } = Preset;

  return (
    <VStack px={"20px"}>
      {/* Presets Section */}
      <HStack justify={"left"} w={"100%"}>
        <Text
          fontSize={"22.5px"}
          mt={"50px"}
          fontWeight={"600"}
          textAlign={"left"}
        >
          Presets
        </Text>
      </HStack>
      <HStack w={"100%"} align={"start"}>
        <Box h={"200px"} w={"1px"} bgColor={"black"}></Box>
        <VStack
          ml={"5px"}
          justify={"left"}
          align={"left"}
          gap={"30px"}
          mt={"20px"}
          w={"100%"}
        >
          {/* Mapping over PresetItems */}
          {PresetItems.map(({title, path}) => (
            <Text
              key={title}
              cursor={"pointer"}
              transition="transform, 0.3s ease-in-out"
              _hover={{
                marginLeft: "15px",
              }}
              w={"100%"}
              textAlign={"left"}
              fontSize={"17px"}
              fontWeight={"500"}
            >
              {title}
            </Text>
          ))}
        </VStack>
      </HStack>

      {/* Components Section */}
      <HStack justify={"left"} w={"100%"}>
        <Text
          fontSize={"22.5px"}
          mt={"50px"}
          fontWeight={"600"}
          textAlign={"left"}
        >
          Components
        </Text>
      </HStack>
      <HStack w={"100%"} align={"start"}>
        <Box h={"350"} w={"1px"} bgColor={"black"}></Box>
        <VStack
          ml={"5px"}
          justify={"left"}
          align={"left"}
          gap={"30px"}
          mt={"20px"}
          w={"100%"}
        >
          {/* Mapping over CompItems */}
          {CompItems.map(({title, path}) => (
            <Text
              key={title}
              cursor={"pointer"}
              transition="transform, 0.3s ease-in-out"
              _hover={{
                marginLeft: "15px",
              }}
              w={"100%"}
              textAlign={"left"}
              fontSize={"17px"}
              fontWeight={"500"}
            >
              {title}
            </Text>
          ))}
        </VStack>
      </HStack>
    </VStack>
  );
};

export default SidePanel;
