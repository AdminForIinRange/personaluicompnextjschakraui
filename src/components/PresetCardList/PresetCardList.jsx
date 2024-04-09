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
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  ButtonGroup,
  useMediaQuery,
  Divider,
  Box,
  VStack,
} from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";
import LoginFormImg from "../img/newloginfrom.png";
import HeroCardImg from "../img/heroCardImg.png";
import CardCompImg from "../img/CardCompImg.png";

const PresetCardList = () => {
  const PresetItems = [
    {
      title: "🪵 Login Form",
      path: "/components/loginForm",
      sectionImg: LoginFormImg,
    },
    {
      title: "🦸 Hero",
      path: "/components/Hero",
      sectionImg: HeroCardImg,
    },
  ];

  const CompItems = [
    { title: "🃏 Cards", path: "/components/cards", sectionImg: CardCompImg },

    {
      title: "🏃‍♂️ Animations",
      path: "/components/animations",
      sectionImg: CardCompImg,
    },
  ];

  const renderCard = (card) => {
    if (card.title === "🪵 Login Form")
      return (
        <VStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          h={"100%"}
          p={"5"}
        >
          <Box
            bgColor={"gray.100"}
            w={"100%"}
            h={"100%"}
            rounded={"xl"}
            p={"4"}
          >
            <VStack gap={"2"} h={"100%"} w={"100%"}>
              <Box bgColor={"gray.300"} w={"100%"} h={"20px"} p={"4"}></Box>
              <Box bgColor={"gray.100"} w={"100%"} h={"100%"} p={"2"}>
                <VStack gap={"4"} h={"100%"} w={"100%"}>
                  <Box
                    rounded={"md"}
                    bgColor={"gray.300"}
                    w={"100%"}
                    h={"20px"}
                  ></Box>

                  <Box
                    rounded={"md"}
                    bgColor={"gray.300"}
                    w={"100%"}
                    h={"20px"}
                  ></Box>

                  <Box
                    rounded={"md"}
                    bgColor={"gray.300"}
                    w={"100%"}
                    h={"20px"}
                  ></Box>
                  <Box
                    rounded={"md"}
                    bgColor={"gray.400"}
                    w={"50%"}
                    h={"20px"}
                  ></Box>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </VStack>
      );

    if (card.title === "🦸 Hero")
      return (
        <VStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          h={"100%"}
          p={"5"}
        >
          <Box
            bgColor={"gray.200"}
            w={"100%"}
            h={"10%"}
            rounded={"xl"}
            p={"4"}
          ></Box>
          <Box bgColor={"gray.400"} w={"20%"} h={"20px"} rounded={"md"}></Box>
        </VStack>
      );

    if (card.title === "🃏 Cards")
      return (
        <VStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          h={"100%"}
          p={"5"}
        >
          <Box
            bgColor={"gray.200"}
            w={"100%"}
            h={"70%"}
            rounded={"xl"}
            p={"4"}
            border={"2px solid #A0AEC0"}
          >
            <Box bgColor={"gray.100"} w={"100%"} h={"40%"} rounded={"md"}></Box>
          </Box>
        </VStack>
      );

    if (card.title === "🏃‍♂️ Animations")
      return (
        <VStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          h={"100%"}
          p={"5"}
        >
          <HStack justify={"left"} align={"start"} w={"100%"} h={"100%"}>

          <Box
            bgColor={"gray.200"}
            w={"30%"}
            h={"30%"}
            rounded={"xl"}
            p={"4"}
     
          >

           
          </Box>
          

          </HStack>
          <HStack justify={"left"} align={"start"} w={"100%"} h={"100%"}>

<Box
  bgColor={"gray.200"}
  w={"30%"}
  h={"30%"}
  rounded={"xl"}
  p={"4"}

>

 
</Box>


</HStack>
       
          
        </VStack>
      );
  };

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
          {PresetItems.map(({ title, path, sectionImg }) => (
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
                  {renderCard({ title })}
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
          {CompItems.map(({ title, path, sectionImg }) => (
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
                  {renderCard({ title })}
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
