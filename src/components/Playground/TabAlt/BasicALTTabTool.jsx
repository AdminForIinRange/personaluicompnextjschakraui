import React from 'react'

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
  Tabs, TabList, TabPanels, Tab, TabPanel
} from "@chakra-ui/react";
const BasicALTTabTool = ({
  heading,
  setHeading,
  SubHeading,
  setSubHeading,
  Width,
  setWidth,
  Height,
  setHeight,
  LayoutAlign,
  setLayoutAlign,
  Align,
  setAlign,
  BackgroundColor,
  setBackgroundColor,
  BoxShadow,
  setBoxShadow,
  BorderColor,
  setBorderColor,
  BorderRadius,
  setBorderRadius,
  BorderSize,
  setBorderSize,
  TextColor,
  setTextColor,
  Animation,
  setAnimation,
  color,
  setColor,
  brightness,
  setBrightness,
}) => {
  return (
    <>

<VStack gap={5} justify={"left"} w="100%" h={"100%"} align={"left"}  transition="transform, 0.3s ease-in-out">
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
                    ml="-2"
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
                  <SliderMark value={50} mt="-10" ml="-2.5" fontSize="sm" >
          50%
        </SliderMark>
                  <SliderMark
                    value={brightness}
                    textAlign="center"
                    bg="white"
                    color={"black"}
                    fontFamily={"monospace"}
                    mt="2.5"
                    ml="-2"
                  >
                    {brightness}
                  </SliderMark>
                  <SliderTrack bg={`hsl(${color},50%,${brightness}%)`}>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </FormLabel>

           
            </VStack>


    </>
  )
}

export default BasicALTTabTool