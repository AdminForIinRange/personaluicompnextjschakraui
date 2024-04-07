import React from "react";
import {
  HStack,
  Text,
  Box,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Quote from "../img/Quotes-Mark-Symbol-PNG-Image.png";
import GithubProfilePic from "../img/GithubProfilePic.png";

const MainPageQuote = () => {
  return (
    <Box position="relative" mt={"125px"}>
      {" "}
      {/* Container with relative positioning */}
      <VStack justify="center" w="100%" h="100%" align="center">
        <Box w="80%" h={"100%"} bg="purple.200" rounded="xl" p={5}>
          <VStack justify="center" w="100%" h="100%" align="center" mt={10}>
            <Text
              textDecoration={"Highlight"}
              fontSize={["35px", "35px", "45px", "50px"]}
              color="gray.700"
              fontWeight="400"
              textAlign="left"
              w="70%"
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
                    fontSize={["20px", "25px", "25px", "25px"]}
                    color="gray.700"
                    fontWeight="700"
                    textAlign="left"
                  >
                    Anjesh B
                  </Text>
                  <Text
                    mt={"-10px"}
                    fontSize={["20px", "25px", "25px", "15px"]}
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
      <HStack position="absolute" top="-100" left="50">
        {/* Image positioned absolutely */}
        <Image
          width={300}
          style={{ rotate: "" }}
          src={Quote}
          alt="Quotation mark"
        />
      </HStack>
    </Box>
  );
};

export default MainPageQuote;
