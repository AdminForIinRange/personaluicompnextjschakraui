"use client";

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
import Side from "../SidePanel/SidePanel";
import Link from "next/link";
import Comp from "@/data/CompItems.json";
import Preset from "@/data/PresetItems.json";
const PresetCardList = () => {
  const { CompItems } = Comp;
  const { PresetItems } = Preset;

  return (
    <>
      <VStack px={10}>
        <HStack justify={"left"} w={"100%"} h={"100%"}>
          <Text fontSize={"30"} fontWeight={"600"}>
            Presets
          </Text>
        </HStack>
        <HStack
          flexWrap={"wrap"}
          mt={"20px"}
          align={"left"}
          justify={"left"}
          h={"100%"}
          w={"100%"}
          gap={"50px"}
        >
          {PresetItems.map(({ title, path }) => (
            <Link key={title} href={`${path}`}>
              <Box
                w={"290px"}
                h={"310px"}
                border={"1.8px solid #B5B5B5"}
                rounded={"xl"}
                transition="transform, 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "0 5px 25px gray",
                }}
              >
                <VStack justify={"end"} align={"end"} h={"100%"} w={"100%"}>
                  <Box w={"100%"} h={"50px"} borderTop={"1.8px solid #B5B5B5"}>
                    <HStack
                      justify={"center"}
                      align={"center"}
                      w={"100%"}
                      h={"100%"}
                    >
                      <Text
                        align={"center"}
                        fontSize={"17px"}
                        fontWeight={"500"}
                      >
                        {title}
                      </Text>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            </Link>
          ))}
        </HStack>

        <HStack justify={"left"} w={"100%"} h={"100%"} mt={"50px"}>
          <Text fontSize={"30"} fontWeight={"600"}>
            Pre-Components
          </Text>
        </HStack>

        <HStack
          flexWrap={"wrap"}
          mt={"20px"}
          align={"left"}
          justify={"left"}
          h={"100%"}
          w={"100%"}
          gap={"50px"}
        >
          {CompItems.map(({ title, path }) => (
            <Link key={title} href={`${path}`}>
              <Box
                w={"290px"}
                h={"310px"}
                border={"1.8px solid #B5B5B5"}
                rounded={"xl"}
                transition="transform, 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "0 5px 25px gray",
                }}
              >
                <VStack justify={"end"} align={"end"} h={"100%"} w={"100%"}>
                  <Box w={"100%"} h={"50px"} borderTop={"1.8px solid #B5B5B5"}>
                    <HStack
                      justify={"center"}
                      align={"center"}
                      w={"100%"}
                      h={"100%"}
                    >
                      <Text
                        align={"center"}
                        fontSize={"17px"}
                        fontWeight={"500"}
                      >
                        {title}
                      </Text>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            </Link>
          ))}
        </HStack>
      </VStack>
    </>
  );
};

export default PresetCardList;
