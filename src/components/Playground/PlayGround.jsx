"use client";

import React, { useState } from "react";
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

const PlayGround = () => {
  const [isTablet] = useMediaQuery("(max-width: 1024px)");
  const [isMobile] = useMediaQuery("(max-width: 736px)");

  const [heading, setHeading] = useState(
    "Accelerate UI Development   in React using Amazing presets."
  );

  const [Width, setWidth] = useState("620px");

  const [Height, setHeight] = useState("300px");

  const [TextAlign, setTextAlign] = useState("start");
  const [Textjustify, setjustify] = useState("left");

  const [BackgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [BoxShadow, setBoxShadow] = useState("10px");

  const [BorderColor, setBorderColor] = useState("#B9B9B9");
  const [BorderRadius, setBorderRadius] = useState("10px");
  const [BorderSize, setBorderSize] = useState("10px");
  const [TextColor, setTextColor] = useState("black");

  const [Animation, setAnimation] = useState("");

  return (
    <HStack mt={isMobile ? "20px" : "80px"} justify="space-between" w="100%" h={"100%"} px={isMobile ? "10px" : "100px"}   >
      <VStack justify="center" w="100%" h="100%" align="center">
        <Box w={"100%"} h={"100%"} bg="white" rounded="xl" py={12}  border={"1.8px solid #B5B5B5"}>
          <VStack justify={"center"} w="100%" h={"100%"} align={"center"}>
            {" "}
            <Box
              w={Width}
              h={Height}
              bg={BackgroundColor}
              rounded={BorderRadius}
              boxShadow={` 0px 0px ${BoxShadow} gray`}
              border={`1.8px solid ${BorderColor}`}
              borderColor={BorderColor}
         
            ></Box>
          </VStack>
        </Box>
      </VStack>
      <VStack justify="center" w="40%" h="100%" align="center">
        <Box w="100%" h={"100%"} bg="purple.200" rounded="xl" p={5}></Box>
      </VStack>
    </HStack>
  );
};

export default PlayGround;
