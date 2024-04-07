"use client";

import React from "react";
import {
  HStack,
  Text,
  Box,
  Avatar,
  AvatarBadge,
  useMediaQuery,
  AvatarGroup,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Quote from "../img/Quotes-Mark-Symbol-PNG-Image.png";
import GithubProfilePic from "../img/GithubProfilePic.png";

const MainPageQuote = () => {
  
  const [isTablet] = useMediaQuery("(max-width: 1024px)");
   const [isMobile] = useMediaQuery("(max-width: 736px)");
  return (
    <Box position="relative" mt={"125px"}>
      {" "}
      {/* Container with relative positioning */}
      <VStack justify="center" w="100%" h="100%" align="center">
        <Box w="80%" h={"100%"} bg="purple.200" rounded="xl" p={5}>
          <VStack justify="center" w="100%" h="100%" align="center" mt={10}>
            <Text
              textDecoration={"Highlight"}
              fontSize={["23px", "25px", "45px", "50px"]}
              color="gray.700"
              fontWeight="400"
              textAlign={["center", "center", "left", "left"]}
              w={["100%", "90%", "80%", "70%"]}
              style={{ fontStyle: "italic" }}
            >
              uhh... Cool Presets, i use it all the time for a quick MVP dev
              under 10 minutes.
            </Text>

            <a href="https://github.com/AdminForIinRange">
              {" "}
              <HStack
                justify="center"
                w="100%"
                align="center"
                mt={10}
                cursor="pointer"
                transition="transform, 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.09)",
                  textShadow: "0 0px 5px white",
                }}
              >
                <Image
                  src={GithubProfilePic}
                  alt="Quotation mark"
                  rounded="full"
                  width={60}
                  style={{ borderRadius: "100%" }}
                />
                <VStack justify="center" align="left">
                  <Text
                    fontSize={["15px", "20px", "20px", "25px"]}
                    color="gray.700"
                    fontWeight="700"
                    textAlign="left"
                  >
                    Anjesh B
                  </Text>
                  <Text
                    mt={"-10px"}
                    fontSize={["12px", "16px", "16px", "18px"]}
                    color="gray.700"
                    fontWeight="400"
                    textAlign="left"
                  >
                    Lead Dev, (the only dev 🥲)
                  </Text>
                </VStack>
              </HStack>{" "}
            </a>
          </VStack>
        </Box>
      </VStack>

    {isTablet && <HStack position="absolute" top="-9" left="50">
        {/* Image positioned absolutely */}
        <Image
          width={150}
          style={{ rotate: "" }}
          src={Quote}
          alt="Quotation mark"
        />
      </HStack>}


     { !isTablet && <HStack position="absolute" top="-100" left="50">
        {/* Image positioned absolutely */}
        <Image
          width={300}
          style={{ rotate: "" }}
          src={Quote}
          alt="Quotation mark"
        />
      </HStack> }

    
    </Box>
  );
};

export default MainPageQuote;
