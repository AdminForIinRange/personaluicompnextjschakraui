"use client";

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
  Box,
  VStack,
} from "@chakra-ui/react";

const HeroCardComps = () => {
    const HeroBoxes = [
        {
            icon: '🌀',
            title: 'Speed of Ingenuity',
            desc: 'Excel in Development with transformative, responsive and functional UI/UX'
        },
        {
            icon: '⭐',
            title: 'Developer-Friendly Tool',
            desc: 'Elevate your projects with cutting-edge UI presets crafted for innovation and creativity.'
        },
        {
            icon: '💼',
            title: 'Business-Ready Solutions',
            desc: 'Streamline your workflow and deliver professional-grade UI designs efficiently.'
        },
        {
            icon: '🚀',
            title: 'Rapid Prototyping',
            desc: 'Fast-track your development process with presets optimized for rapid prototyping.'
        },
        {
            icon: '📱',
            title: 'Mobile-First Approach',
            desc: 'Ensure seamless user experiences across devices with presets optimized for mobile.'
        },
        {
            icon: '📈',
            title: 'Scalability/Performance',
            desc: 'Build scalable and high-performance UI designs that can grow with your project\'s needs.'
        }
    ];
    

  return (
    <div>
      <VStack justify={"center"} align={"center"} p={"20px"}>
        <HStack
        flexWrap={"wrap"}
          justify={"center"}
          align={"center"}
          w={["90%", "90%", "80%", "60%"]}
          mt={"100px"}
          gap={"50px"}
        >
         { HeroBoxes.map(({ title, desc, icon }) => ( 
             <Box key={title}
        w={"300px"}
        h={"250px"}
            border={"1.8px solid #B5B5B5"}
            rounded={"xl"}
            p={"3"}
          >
            <VStack  justify={"left"} align={"inherit"} w={"100%"} h={"100%"}>
              <HStack w={"50%"}>
                <Text
                  align={"center"}
                  fontSize={"32px"}
                  fontWeight={"700"}
                  textAlign={"left"}
                >
                  {icon}
                </Text>
                
              </HStack>
                     <Text
                  align={"center"}
                  fontSize={"22px"}
                  fontWeight={"700"}
                  textAlign={"left"}
                >
                  {title}
                </Text>

              <HStack w={"100%"}>
                <Text
                  align={"center"}
                  fontSize={"14px"}
                  fontWeight={"500"}
                  textAlign={"left"}
                >
                 {desc}
                </Text>
              </HStack>
              <HStack
                cursor={"pointer"}
                w={"100%"}
                h={"100%"}
                justify={"end"}
                align={"end"}
                fontWeight={"500"}
                transition="transform, 0.3s ease-in-out"
                _hover={{
                  marginLeft: "5px",
                }}
              >
                
              </HStack>
            </VStack>
          </Box> ))}
        </HStack>
      </VStack>
    </div>
  );
};

export default HeroCardComps;
