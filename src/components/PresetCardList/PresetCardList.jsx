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
import Side from "../side/Side";


const PresetCardList = ({PresetItems, CompItems}) => {
 
  return (
    <>

    
        <VStack justify={"center"} px={10}  >
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
            {PresetItems.map((item) => (
              <Box
                key={item.title}
                w={"200px"}
                h={"210px"}
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
                      <Text align={"center"} fontSize={"17px"}>
                        {item.title}
                      </Text>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            ))}
          </HStack>

          <HStack justify={"left"} w={"100%"} h={"100%"} mt={"50px"}   >
            <Text fontSize={"30"} fontWeight={"600"}>
              Components
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
            {CompItems.map((item) => (
              <Box
                key={item.title}
                w={"200px"}
                h={"210px"}
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
                      <Text align={"center"} fontSize={"17px"}>
                        {item.title}
                      </Text>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            ))}
          </HStack>
          
        </VStack>
     
    </>
  );
};

export default PresetCardList;
