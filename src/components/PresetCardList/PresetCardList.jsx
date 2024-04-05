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

const PresetCardList = () => {
  const CompItems = [
    { title: "🃏 Cards", path: "" },
    { title: "📦 Modal", path: "" },
    { title: "🖼️ frames", path: "" },
    { title: "🏃‍♂️Animations", path: "" },
    { title: "📈 Charts", path: "" },
  ];

  const PresetItems = [
    { title: "🪵 Login Form", path: "" },
    { title: "🦸 Hero", path: "" },
  ];
  return (
    <>
      <HStack align={"start"} >
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

        <VStack justify={"center"} px={10} bgColor={"#F9F9F9"}>
          <HStack justify={"left"} w={"100%"} h={"100%"}>
            <Text fontSize={"30"} fontWeight={"600"}>
              Presets
            </Text>
          </HStack>
          <HStack
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
          
        </VStack>
      </HStack>
    </>
  );
};

export default PresetCardList;
