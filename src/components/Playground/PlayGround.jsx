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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { FaCog } from "react-icons/fa";
import BasicALTTabTool from "./TabAlt/BasicALTTabTool";
import CodeCopy from "./CodeCopy/CodeCopy";
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

  const [ImgPos, setImgPos] = useState("center");

  const [ImgLayout, setImgLayout] = useState("top");

  const [RandomImg, setRandomImg] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  const [copied, setCopied] = useState(false);

  const [img, setImg] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCopy = () => {
    <CodeCopy
      color={color}
      brightness={brightness}
      Width={Width}
      Height={Height}
      BorderSize={BorderSize}
      BorderColor={BorderColor}
      BorderRadius={BorderRadius}
      BoxShadow={BoxShadow}
      LayoutAlign={LayoutAlign}
      Align={Align}
    />;

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
              {ImgLayout === "top" ? (
                <HStack
                  w={"50%"}
                  h={"100%"}
                  display={img ? "block" : "none"}
                  transition="transform, 0.3s ease-in-out"
                >
                  <Box
                    w={"100%"}
                    h={"100%"}
                    bgColor={"black"}
                    rounded={"xl"}
                    bgImage={img  ? img : RandomImg} 

                    bgSize={"cover"}
                    bgPos={ImgPos} //img position
                  ></Box>
                </HStack>
              ) : null}{" "}
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
                <VStack
                  justify={LayoutAlign}
                  w="100%"
                  h={"100%"}
                  align={Align}
                  transition="transform, 0.3s ease-in-out"
                >
                  {ImgLayout === "top" ? (
                    <HStack
                      w={"100%"}
                      h={"100%"}
                      display={img ? "block" : "none"}
                      transition="transform, 0.3s ease-in-out"
                    >
                      <Box
                        w={"100%"}
                        h={"100%"}
                        bgColor={"black"}
                        rounded={"xl"}
                        bgImage={img  ? img : RandomImg} 

                        bgSize={"cover"}
                        bgPos={ImgPos} //img position
                      ></Box>
                    </HStack>
                  ) : null}

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

                  {ImgLayout === "bottom" ? (
                    <HStack
                      w={"100%"}
                      h={"100%"}
                      display={img ? "block" : "none"}
                      transition="transform, 0.3s ease-in-out"
                    >
                      <Box
                        w={"100%"}
                        h={"100%"}
                        bgColor={"black"}
                        rounded={"xl"}
                        bgImage={img}
                        bgSize={"cover"}
                        bgPos={ImgPos} //img position
                      ></Box>
                    </HStack>
                  ) : null}
                </VStack>
              </Box>
            </VStack>
          </Box>
        </VStack>
        <VStack
          justify="center"
          w="40%"
          h="100%"
          align="center"
          transition="transform, 0.3s ease-in-out"
        >
          <Box
            w="100%"
            h={"100%"}
            bg="white"
            rounded="xl"
            p={5}
            border={`1.8px solid #B9B9B9`}
          >
            <Tabs transition="transform, 0.3s ease-in-out">
              <TabList>
                <Tab>Basic</Tab>
                <Tab>Medium</Tab>
                <Tab>Advance</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <BasicALTTabTool
                    heading={heading}
                    setHeading={setHeading}
                    SubHeading={SubHeading}
                    setSubHeading={setSubHeading}
                    Width={Width}
                    setWidth={setWidth}
                    Height={Height}
                    setHeight={setHeight}
                    LayoutAlign={LayoutAlign}
                    setLayoutAlign={setLayoutAlign}
                    Align={Align}
                    setAlign={setAlign}
                    BackgroundColor={BackgroundColor}
                    setBackgroundColor={setBackgroundColor}
                    BoxShadow={BoxShadow}
                    setBoxShadow={setBoxShadow}
                    BorderColor={BorderColor}
                    setBorderColor={setBorderColor}
                    BorderRadius={BorderRadius}
                    setBorderRadius={setBorderRadius}
                    BorderSize={BorderSize}
                    setBorderSize={setBorderSize}
                    TextColor={TextColor}
                    setTextColor={setTextColor}
                    Animation={Animation}
                    setAnimation={setAnimation}
                    color={color}
                    setColor={setColor}
                    brightness={brightness}
                    setBrightness={setBrightness}
                  />
                </TabPanel>
                <TabPanel>
                  <VStack
                    gap={5}
                    justify={"left"}
                    w="100%"
                    h={"100%"}
                    align={"left"}
                    transition="transform, 0.3s ease-in-out"
                  >
                    <HStack
                      w={"100%"}
                      h={"100%"}
                      align={"center"}
                      justify={"center"}
                      p={5}
                    >
                      <Input
                        bgColor={"white"}
                        p={5}
                        w={"100%"}
                        h={"100%"}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </HStack>


                    <Button
                      onClick={() => {
                        setImg(null);
                      }}
                      w={"100%"}
                    >
                      Remove Image
                    </Button>
                    <Button
                      onClick={() => {
                        setImg(true);
                        setRandomImg("https://source.unsplash.com/random");
                      }}
                      w={"100%"}
                    >
                      Random Image
                    </Button>

                    <FormLabel htmlFor="Image Position">
                      Image Position
                      <RadioGroup
                        defaultValue="center"
                        onChange={(val) => setImgPos(val)}
                      >
                        <HStack>
                          <Radio value="top">top</Radio>
                          <Radio value="center">center</Radio>
                          <Radio value="bottom">bottom</Radio>
                        </HStack>
                      </RadioGroup>
                    </FormLabel>

                    <FormLabel htmlFor="Image Layout">
                      Image Layout
                      <RadioGroup
                        defaultValue="top"
                        onChange={(val) => setImgLayout(val)}
                      >
                        <HStack>
                          <Radio value="top">top</Radio>

                          <Radio value="bottom">bottom</Radio>
                        </HStack>
                      </RadioGroup>
                    </FormLabel>
                  </VStack>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>

            <Button
              w={"100%"}
              onClick={handleClick}
              type="submit"
              rightIcon={<FaCog />}
            >
              Generate Code
            </Button>
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
                    <CodeCopy
                      color={color}
                      brightness={brightness}
                      Width={Width}
                      Height={Height}
                      BorderSize={BorderSize}
                      BorderColor={BorderColor}
                      BorderRadius={BorderRadius}
                      BoxShadow={BoxShadow}
                      LayoutAlign={LayoutAlign}
                      Align={Align}
                    />
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
