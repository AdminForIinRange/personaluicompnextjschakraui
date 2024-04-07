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
      icon: "🌀",
      title: "Speed of Ingenuity",
      desc: "Excel in Development with transformative, responsive and functional UI/UX",
      hoverColor: "#63B3ED",
    },
    {
      icon: "⭐",
      title: "Developer-Friendly",
      desc: "Elevate your projects with cutting-edge UI presets crafted for innovation and creativity.",
      hoverColor: "#F6E05E",
    },
    {
      icon: "💼",
      title: "Business-Ready Solutions",
      desc: "Streamline your workflow and deliver professional-grade UI designs efficiently.",
      hoverColor: "#F6AD55",
    },
    {
      icon: "🚀",
      title: "Rapid Prototyping",
      desc: "Fast-track your development process with presets optimized for rapid prototyping.",
      hoverColor: "#FC8181",
    },
    {
      icon: "📱",
      title: "Mobile-First Approach",
      desc: "Ensure seamless user experiences across devices with presets optimized for mobile.",
      hoverColor: "#B794F4",
    },
    {
      icon: "📈",
      title: "Scalability",
      desc: "Build scalable and high-performance UI designs that can grow with your project's needs.",
      hoverColor: "#CBD5E0",
    },
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
          {HeroBoxes.map(({ title, desc, icon, hoverColor }) => (
            <Box
              key={title}
              w={"300px"}
              h={"250px"}
              border={"1.8px solid #B5B5B5"}
              rounded={"xl"}
              p={"3"}
              transition="transform, 0.3s ease-in-out"
              _hover={{
                borderColor: `${hoverColor}`,
                transform: "scale(1.08)",
                boxShadow: `0 5px 20px ${hoverColor}`,
              }}
            >
              <VStack justify={"left"} align={"inherit"} w={"100%"} h={"100%"}>
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
                  w={"90%"}
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
              </VStack>
            </Box>
          ))}
        </HStack>
      </VStack>
    </div>
  );
};

export default HeroCardComps;
