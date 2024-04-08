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

  const [Width, setWidth] = useState(620);

  const [Height, setHeight] = useState(300);

  const [TextAlign, setTextAlign] = useState("start");
  const [Textjustify, setjustify] = useState("left");

  const [BackgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [BoxShadow, setBoxShadow] = useState("10px");

  const [BorderColor, setBorderColor] = useState("#B9B9B9");
  const [BorderRadius, setBorderRadius] = useState("10px");

  const [TextColor, setTextColor] = useState("black");

  const [Animation, setAnimation] = useState("");

  return (
    <HStack p={10}>
      <VStack justify="center" w="100%" h="100%" align="center">
        <Box w="100%" h={"100%"} bg="purple.200" rounded="xl" p={10}>
          <Box
            w="100%"
            h={"100%"}
            bg={BackgroundColor}
            rounded={BorderRadius}
            boxShadow={` 0px 0px ${BoxShadow} gray`}
            borderColor={BorderColor}
            p={4}
          ></Box>
        </Box>
      </VStack>
      <VStack justify="center" w="30%" h="100%" align="center">
        <Box w="100%" h={"100%"} bg="purple.200" rounded="xl" p={5}></Box>
      </VStack>
    </HStack>
  );
};

export default PlayGround;
