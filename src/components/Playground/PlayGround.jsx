"use client";

import React, { useState } from "react";
import {
  HStack,
  Text,
  FormLabel,
  Input,
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
    "Higher Education Should be free like in Europe"
  );

  const [SubHeading, setSubHeading] = useState(
    "Education is a human right, to exploit for monetary gain is immoral "
  );
  const [Width, setWidth] = useState("620px");

  const [Height, setHeight] = useState("300px");

  const [Align, setAlign] = useState("start");
  const [Justify, setJustify] = useState("left");

  const [BackgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [BoxShadow, setBoxShadow] = useState("10px");

  const [BorderColor, setBorderColor] = useState("#B9B9B9");
  const [BorderRadius, setBorderRadius] = useState("10px");
  const [BorderSize, setBorderSize] = useState("1.8px");
  const [TextColor, setTextColor] = useState("black");

  const [Animation, setAnimation] = useState("");

  return (
    <HStack
      transition="transform, 0.3s ease-in-out"
      mt={isMobile ? "20px" : "80px"}
      align={"start"}
      w="100%"
      h={"100%"}
      px={isMobile ? "10px" : "100px"}
    >
      <VStack justify="center" w="100%" h="100%" align="center">
        <Box
          transition="transform, 0.3s ease-in-out"
          w={"100%"}
          h={"100%"}
          bg="white"
          rounded="xl"
          py={12}
          border={`${BorderSize} solid ${BorderColor}`}
        >
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
              transition="transform, 0.3s ease-in-out"
              p={5}
              px={6}
            >
              <Text
                transition="transform, 0.3s ease-in-out"
                fontSize={"30"}
                fontWeight={"600"}
                Align={Align}
                justifyContent={Justify}
              >
                {heading}
              </Text>
              <Text
                transition="transform, 0.3s ease-in-out"
                fontSize={"16"}
                fontWeight={"300"}
                Align={Align}
                justifyContent={Justify}
              >
                {SubHeading}
              </Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
      <VStack justify="center" w="40%" h="100%" align="center">
        <Box
          w="100%"
          h={"100%"}
          bg="white"
          rounded="xl"
          p={5}
          border={`1.8px solid #B9B9B9`}
        >
          <FormLabel htmlFor="Heading"> Heading</FormLabel>
          <Input
            id="Heading"
            type="text"
            w={"100%"}
            onChange={(e) => setHeading(e.target.value)}
            value={heading}
          />

          <FormLabel htmlFor="SubHeading">SubHeading</FormLabel>
          <Input
            id="SubHeading"
            type="text"
            w={"100%"}
            onChange={(e) => setSubHeading(e.target.value)}
            value={SubHeading}
          />
        </Box>
      </VStack>
    </HStack>
  );
};

export default PlayGround;
