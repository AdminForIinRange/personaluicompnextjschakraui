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

const PlayGround = () => {
  const [isTablet] = useMediaQuery("(max-width: 1024px)");
  const [isMobile] = useMediaQuery("(max-width: 736px)");
  return (
    <Box position="relative" mt={"125px"}>
      {" "}
      {/* Container with relative positioning */}
      <VStack justify="center" w="100%" h="100%" align="center">
        <Box w="70%" h={"100%"} bg="purple.200" rounded="xl" p={5}>
          
        </Box>
      </VStack>
 
    </Box>
  );
};

export default PlayGround;
