"use client";

import React, { useState, useEffect } from "react";
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
  Button,
  Radio,
  RadioGroup,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Checkbox,
  CheckboxGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { FaCog } from "react-icons/fa";
const PlayGround = () => {
  const [isTablet] = useMediaQuery("(max-width: 1024px)");
  const [isMobile] = useMediaQuery("(max-width: 736px)");

  const [heading, setHeading] = useState(
    "Higher Education Should be free like in Europe"
  );

  const [SubHeading, setSubHeading] = useState(
    "Education is a human right, to exploit for monetary gain is immoral "
  );
  const [Width, setWidth] = useState("620");

  const [Height, setHeight] = useState("300");

  const [LayoutAlign, setLayoutAlign] = useState("end");

  const [Align, setAlign] = useState("start");

  const [BackgroundColor, setBackgroundColor] = useState("");
  const [BoxShadow, setBoxShadow] = useState("10px");

  const [BorderColor, setBorderColor] = useState("#B9B9B9");
  const [BorderRadius, setBorderRadius] = useState("10px");
  const [BorderSize, setBorderSize] = useState("1.8px");
  const [TextColor, setTextColor] = useState("black");

  const [Animation, setAnimation] = useState("");

  const [color, setColor] = useState("0");

  const [brightness, setBrightness] = useState("100");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const codeToCopy = `
      <VStack justify="center" w="100%" h="100%" align="center">
        <Box
          transition="transform, 0.3s ease-in-out"
          w={"100%"}
          h={"100%"}
          bg="white"
          rounded="xl"
          py={12}
          border="${BorderSize}px solid ${BorderColor}"
        >
          <VStack justify="center" w="100%" h="100%" align="center">
            <Box
              w="${Width}px"
              h="${Height}px"
              style={{ backgroundColor: hsl(${color},70%,${brightness}%)}}
              rounded="${BorderRadius}"
              boxShadow={0px 0px ${BoxShadow}px gray}
              border={1.8px solid ${BorderColor}}
              borderColor="${BorderColor}"
              transition="transform, 0.3s ease-in-out"
              p={5}
            >
              <VStack justify="${LayoutAlign}" w="100%" h="100%" align="${Align}">
                <Text
                  transition="transform, 0.3s ease-in-out"
                  fontSize="30"
                  fontWeight="600"
                  align="${Align}"
                >
                  ${heading}
                </Text>
                <Text
                  transition="transform, 0.3s ease-in-out"
                  fontSize="16"
                  fontWeight="300"
                  align="inherit"
                >
                  ${SubHeading}
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </VStack>
    `;

    navigator.clipboard
      .writeText(codeToCopy)
      .then(() => setCopied(true))
      .catch((error) => console.error("Failed to copy: ", error));
  };

  return (
    //  maybe applay a atab thigio from Cha ui
    <>
      <HStack
        justify={"center"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        fontSize={"48px"}
        fontWeight={"600"}
        fontFamily={"Raleway"}
        mt={isMobile ? "20px" : "80px"}
      >
        <Text>Mini UI development PlayGround</Text>
      </HStack>

      <HStack
        flexWrap={["wrap", "wrap", "wrap", "wrap", "nowrap"]}
        transition="transform, 0.3s ease-in-out"
        mt={isMobile ? "10px" : "40px"}
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
                w={`${Width}px`}
                h={`${Height}px`}
                style={{ backgroundColor: `hsl(${color},70%,${brightness}%)` }}
                rounded={BorderRadius}
                boxShadow={` 0px 0px ${BoxShadow} gray`}
                border={`1.8px solid ${BorderColor}`}
                borderColor={BorderColor}
                transition="transform, 0.3s ease-in-out"
                p={5}
              >
                <VStack justify={LayoutAlign} w="100%" h={"100%"} align={Align}>
                <HStack w={"100%"} h={"100%"}           display={'none'}>
            <Box
          
              w={"100%"}
              h={"100%"}
              bgColor={"black"}
              rounded={"xl"}
              bgImage={
                "https://source.unsplash.com/brown-wooden-house-on-green-grass-field-near-snow-covered-mountain-during-daytime-ZI9zYWhLyy0"
              }
              bgSize={"cover"}
              bgPos={["top right", " top right", "top", "top", "top"]}
            ></Box>
          </HStack>
                  <Text
                    transition="transform, 0.3s ease-in-out"
                    fontSize={"30"}
                    fontWeight={"600"}
                    align={Align}
                  >
                    {heading}
                  </Text>
                  <Text
                    transition="transform, 0.3s ease-in-out"
                    fontSize={"16"}
                    fontWeight={"300"}
                    align={"inherit"}
                  >
                    {SubHeading}
                  </Text>
                </VStack>
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
            <VStack gap={5} justify={"left"} w="100%" h={"100%"} align={"left"}>
              <FormLabel htmlFor="Heading">
                {" "}
                Heading
                <Input
                  id="Heading"
                  type="text"
                  w={"100%"}
                  onChange={(e) => setHeading(e.target.value)}
                  value={heading}
                />
              </FormLabel>

              <FormLabel htmlFor="SubHeading">
                SubHeading
                <Input
                  id="SubHeading"
                  type="text"
                  w={"100%"}
                  onChange={(e) => setSubHeading(e.target.value)}
                  value={SubHeading}
                />
              </FormLabel>

              <FormLabel htmlFor="Width">
                Width
                <Slider
                  aria-label="slider-ex-1"
                  defaultValue={630}
                  min={400}
                  max={800}
                  step={1}
                  onChange={(e) => setWidth(e)}
                >
                  <SliderMark
                    value={Width}
                    textAlign="center"
                    bg="white"
                    color="black"
                    fontFamily={"monospace"}
                    mt="2.5"
                    ml="1"
                  >
                    {Width}px
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </FormLabel>
              <FormLabel htmlFor="Height">
                Height
                <Slider
                  aria-label="slider-ex-1"
                  defaultValue={300}
                  min={200}
                  max={500}
                  step={1}
                  onChange={(e) => setHeight(e)}
                >
                  {" "}
                  <SliderMark
                    value={Height}
                    textAlign="center"
                    bg="white"
                    color="black"
                    fontFamily={"monospace"}
                    mt="2.5"
                    ml="1"
                  >
                    {Height}px
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </FormLabel>

              <FormLabel htmlFor="Layout">
                Layout
                <RadioGroup
                  defaultValue="end"
                  onChange={(val) => setLayoutAlign(val)}
                >
                  <HStack>
                    <Radio value="start">Start</Radio>
                    <Radio value="center">Center</Radio>
                    <Radio value="end">End</Radio>
                  </HStack>
                </RadioGroup>
              </FormLabel>
              <FormLabel htmlFor="Align">
                Align
                <RadioGroup
                  defaultValue="start"
                  onChange={(val) => setAlign(val)}
                >
                  <HStack>
                    <Radio value="start">Start</Radio>
                    <Radio value="center">Center</Radio>
                    <Radio value="end">End</Radio>
                  </HStack>
                </RadioGroup>
              </FormLabel>

              <FormLabel htmlFor="Color">
                Color
                <Slider
                  aria-label="slider-ex-1"
                  defaultValue={color}
                  min={0}
                  max={360}
                  step={1}
                  onChange={(e) => setColor(e)}
                  borderRadius={"15px"}
                >
                  <SliderMark
                    value={color}
                    textAlign="center"
                    bg="white"
                    color={`hsl(${color},50%,50%)`}
                    fontFamily={"monospace"}
                    mt="2.5"
                    ml="1"
                  >
                    {color}
                  </SliderMark>
                  <SliderTrack bg={`hsl(${color},50%,50%)`}>
                    <SliderFilledTrack bg={`hsl(${color},50%,50%)`} />
                  </SliderTrack>
                  <SliderThumb color={`hsl(${color},50%,50%)`} />
                </Slider>
              </FormLabel>

              <FormLabel htmlFor="Brightness">
                Brightness
                <Slider
                  aria-label="slider-ex-1"
                  defaultValue={brightness}
                  min={0}
                  max={100}
                  step={1}
                  onChange={(e) => setBrightness(e)}
                >
                  <SliderMark
                    value={brightness}
                    textAlign="center"
                    bg="white"
                    color={"black"}
                    fontFamily={"monospace"}
                    mt="2.5"
                    ml="1"
                  >
                    {brightness}
                  </SliderMark>
                  <SliderTrack bg={`hsl(${color},50%,${brightness}%)`}>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </FormLabel>

              <Button onClick={handleClick} type="submit" rightIcon={<FaCog />}>
                Generate Code

              </Button>
            </VStack>
          </Box>
        </VStack>
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent bgColor={"#011627"}>
          <ModalBody>
            <>
              <Box p={5} rounded={"lg"} color={"white"} w={"100%"} h={"100%"}>
                <HStack justify={"right"} w="100%" h="100%" align="center">
                  {" "}
                  <Button
                    colorScheme={copied ? "" : ""}
                    leftIcon={<CopyIcon />}
                    onClick={handleCopy}
                  >
                    {copied ? "Copied!" : "Copy Code"}
                  </Button>
                </HStack>

                <pre>
                  <code className="language-html">
                    {` <VStack justify="center" w="100%" h="100%" align="center">
        <Box
          transition="transform, 0.3s ease-in-out"
          w={"100%"}
          h={"100%"}
          bg="white"
          rounded="xl"
          py={12}
          border="${BorderSize}px solid ${BorderColor}"
        >
          <VStack justify="center" w="100%" h="100%" align="center">
            <Box
              w="${Width}px"
              h="${Height}px"
              style={{ backgroundColor: hsl(${color},70%,${brightness}%)}}
              rounded="${BorderRadius}"
              boxShadow={0px 0px ${BoxShadow}px gray}
              border={1.8px solid ${BorderColor}}
              borderColor="${BorderColor}"
              transition="transform, 0.3s ease-in-out"
              p={5}
            >
              <VStack justify="${LayoutAlign}" w="100%" h="100%" align="${Align}">
                <Text
                  transition="transform, 0.3s ease-in-out"
                  fontSize="30"
                  fontWeight="600"
                  align="${Align}"
                >
                  ${heading}
                </Text>
                <Text
                  transition="transform, 0.3s ease-in-out"
                  fontSize="16"
                  fontWeight="300"
                  align="inherit"
                >
                  ${SubHeading}
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </VStack>`}
                  </code>
                </pre>
              </Box>
            </>
          </ModalBody>

         
        </ModalContent>
      </Modal>
    </>
  );
};

export default PlayGround;
