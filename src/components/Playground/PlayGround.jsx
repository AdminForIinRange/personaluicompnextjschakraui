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
import ImageALTTabTool from "./TabAlt/ImageALTTabTool";
import AdvanceALTTabTool from "./TabAlt/AdvanceALTTabTool";
import AnimationALTTabTool from "./TabAlt/AnimationALTTabTool";
const PlayGround = () => {
  const [isTablet] = useMediaQuery("(max-width: 1024px)");
  const [isMobile] = useMediaQuery("(max-width: 736px)");

  const [heading, setHeading] = useState(
    "Higher Education Should be free like in Europe",
  );

  const [Subheading, setSubheading] = useState(
    "Education is a human right, to exploit for monetary gain is immoral ",
  );
  const [Width, setWidth] = useState("620");

  const [Height, setHeight] = useState("300");

  const [LayoutAlign, setLayoutAlign] = useState("end");

  const [Align, setAlign] = useState("start");

  const [BackgroundColor, setBackgroundColor] = useState("");
  const [BoxShadow, setBoxShadow] = useState("10");

  const [BorderColor, setBorderColor] = useState("#B9B9B9");
  const [BorderRadius, setBorderRadius] = useState("10px");
  const [BorderSize, setBorderSize] = useState("1.8px");

  const [Animation, setAnimation] = useState("scale(1.05)");

  const [color, setColor] = useState("0");

  const [brightness, setBrightness] = useState("100");

  const [ImgPos, setImgPos] = useState("center");

  const [ImgLayout, setImgLayout] = useState("top");

  const [RandomImg, setRandomImg] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [refreshCount, setRefreshCount] = useState(0);

  const [HeadingFontSize, setHeadingFontSize] = useState("30");

  const [SubheadingFontSize, setSubheadingFontSize] = useState("16");

  const [SubheadingFontWeight, setSubheadingFontWeight] = useState("300");

  const [HeadingFontWeight, setHeadingFontWeight] = useState("600");

  const [SubheadingFontColor, setSubheadingFontColor] = useState(-1);

  const [HeadingFontColor, setHeadingFontColor] = useState(-1);

  const handleClick = () => {
    onOpen();
  };

  const [copied, setCopied] = useState(false);

  const [img, setImg] = useState(false);

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
      img={img}
      heading={heading}
      setHeading={setHeading}
      Subheading={Subheading}
      setSubheading={setSubheading}
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
      Animation={Animation}
      setAnimation={setAnimation}
      color={color}
      setColor={setColor}
      brightness={brightness}
      setBrightness={setBrightness}
      ImgPos={ImgPos}
      setImgPos={setImgPos}
      ImgLayout={ImgLayout}
      setImgLayout={setImgLayout}
      RandomImg={RandomImg}
      setRandomImg={setRandomImg}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      refreshCount={refreshCount}
      setRefreshCount={setRefreshCount}
      HeadingFontSize={HeadingFontSize}
      setHeadingFontSize={setHeadingFontSize}
      SubheadingFontSize={SubheadingFontSize}
      setSubheadingFontSize={setSubheadingFontSize}
      SubheadingFontWeight={SubheadingFontWeight}
      setSubheadingFontWeight={setSubheadingFontWeight}
      HeadingFontWeight={HeadingFontWeight}
      setHeadingFontWeight={setHeadingFontWeight}
      SubheadingFontColor={SubheadingFontColor}
      setSubheadingFontColor={setSubheadingFontColor}
      HeadingFontColor={HeadingFontColor}
      setHeadingFontColor={setHeadingFontColor}
    />;

    navigator.clipboard
      .writeText(codeToCopy)
      .then(() => setCopied(true))
      .catch((error) => console.error("Failed to copy: ", error));
  };

  useEffect(() => {
    setRandomImg(`https://source.unsplash.com/random/${refreshCount}?`);
    console.log(refreshCount);
  }, [refreshCount]);

  return (
    //  maybe applay a atab thigio from Cha ui
    <>
      <HStack
        justify={"center"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        fontSize={["30px", "30px", "48px", "48px"]}
        fontWeight={"600"}
        fontFamily={"Raleway"}
        mt={isMobile ? "20px" : "80px"}
      >
        <Text textAlign={"center"}>Mini UI development PlayGround</Text>
      </HStack>

      <HStack
        flexWrap={["wrap", "wrap", "wrap", "wrap", "nowrap"]}
        transition="transform, 0.3s ease-in-out"
        mt={isMobile ? "10px" : "40px"}
        align={"start"}
        justify={"center"}
        w="100%"
        h={"100%"}
        px={isMobile ? "10px" : "100px"}
      >
        <VStack justify="center" w="100%" h="100%" align="center">
          <Box
            transition="transform, 0.3s ease-in-out"
            w={["100%", "100%", "100%", "100%"]}
            h={"100%"}
            bg="white"
            rounded="xl"
            py={12}
            border={`${BorderSize} solid ${BorderColor}`}
          >
            <VStack justify={"center"} w="100%" h={"100%"} align={"center"}>
              <Box
                transform={isTablet ? "scale(0.45)" : "scale(1)"}
                _hover={{
                  transform: `${Animation === "scale(1.05)" ? "scale(1.05)" : "scale(1)"}`,
                  opacity: `${Animation === "0" ? "0" : "1"}`,
                  width: `${Animation === "70%" ? "70%" : null}`,
                }}
                w={`${Width}px`}
                h={`${Height}px`}
                style={{ backgroundColor: `hsl(${color},70%,${brightness}%)` }}
                rounded={BorderRadius}
                boxShadow={` 0px 0px ${BoxShadow}px gray`}
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
                  {ImgLayout === "top" && img ? (
                    <HStack
                      mt={"10px"}
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
                        bgImage={img === "random" ? RandomImg : img}
                        bgSize={"cover"}
                        bgPos={ImgPos} //img position
                      ></Box>
                    </HStack>
                  ) : null}

                  <Text
                    style={{
                      color: `hsl(${HeadingFontColor}, 50%, ${HeadingFontColor === -1 ? "0%" : HeadingFontColor === 361 ? "100%" : "50%"})`,
                    }}
                    transition="transform, 0.3s ease-in-out"
                    fontSize={HeadingFontSize}
                    fontWeight={HeadingFontWeight}
                    align={Align}
                  >
                    {heading}
                  </Text>
                  <Text
                    style={{
                      color: `hsl(${SubheadingFontColor}, 50%, ${SubheadingFontColor === -1 ? "0%" : SubheadingFontColor === 361 ? "100%" : "50%"})`,
                    }}
                    transition="transform, 0.3s ease-in-out"
                    fontSize={SubheadingFontSize}
                    fontWeight={SubheadingFontWeight}
                    align={"inherit"}
                  >
                    {Subheading}
                  </Text>

                  {ImgLayout === "bottom" && img ? (
                    <HStack
                      w={"100%"}
                      h={"100%"}
                      transition="transform, 0.3s ease-in-out"
                      mt={"10px"}
                    >
                      <Box
                        w={"100%"}
                        h={"100%"}
                        bgColor={"black"}
                        rounded={"xl"}
                        bgImage={img === "random" ? RandomImg : img}
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
          w={["100%", "100%", "100%", "100%", "40%"]}
          h="100%"
          align="center"
          transition="transform, 0.3s ease-in-out"
        >
          <Box
            w="100%"
            h={"100%"}
            bg="white"
            rounded="xl"
            p={3}
            border={`1.8px solid #B9B9B9`}
          >
            <Tabs
              transition="transform, 0.3s ease-in-out"
              variant="soft-rounded"
              bg={"#F7FAFC"}
              p={3}
              rounded={"xl"}
            >
              {isTablet ? (
                <TabList>
                  <Tab>Basic</Tab>
                </TabList>
              ) : (
                <TabList>
                  <Tab>Basic</Tab>
                  <Tab>Image</Tab>
                  <Tab>Advance</Tab>
                  <Tab>Animation</Tab>
                </TabList>
              )}

              <TabPanels>
                <TabPanel>
                  <BasicALTTabTool
                    heading={heading}
                    setHeading={setHeading}
                    Subheading={Subheading}
                    setSubheading={setSubheading}
                    Width={Width}
                    setWidth={setWidth}
                    Height={Height}
                    setHeight={setHeight}
                    setLayoutAlign={setLayoutAlign}
                    setAlign={setAlign}
                    color={color}
                    setColor={setColor}
                    brightness={brightness}
                    setBrightness={setBrightness}
                  />
                </TabPanel>
                <TabPanel>
                  <ImageALTTabTool
                    ImgPos={ImgPos}
                    ImgLayout={ImgLayout}
                    setImgPos={setImgPos}
                    setImgLayout={setImgLayout}
                    setImg={setImg}
                    setRefreshCount={setRefreshCount}
                    setRandomImg={setRandomImg}
                    handleImageUpload={handleImageUpload}
                  />
                </TabPanel>
                <TabPanel>
                  <AdvanceALTTabTool
                    setHeadingFontSize={setHeadingFontSize}
                    HeadingFontSize={HeadingFontSize}
                    setSubheadingFontSize={setSubheadingFontSize}
                    SubheadingFontSize={SubheadingFontSize}
                    setSubheadingFontWeight={setSubheadingFontWeight}
                    SubheadingFontWeight={SubheadingFontWeight}
                    setHeadingFontWeight={setHeadingFontWeight}
                    HeadingFontWeight={HeadingFontWeight}
                    setHeadingFontColor={setHeadingFontColor}
                    HeadingFontColor={HeadingFontColor}
                    setSubheadingFontColor={setSubheadingFontColor}
                    SubheadingFontColor={SubheadingFontColor}
                    BoxShadow={BoxShadow}
                    setBoxShadow={setBoxShadow}
                  />
                </TabPanel>

                <TabPanel>
                  <AnimationALTTabTool setAnimation={setAnimation} />
                </TabPanel>
              </TabPanels>
            </Tabs>

            <Button
            colorScheme={"gray"}
              mt={"15px"}
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
                      img={img}
                      heading={heading}
                      setHeading={setHeading}
                      Subheading={Subheading}
                      setSubheading={setSubheading}
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
                      Animation={Animation}
                      setAnimation={setAnimation}
                      color={color}
                      setColor={setColor}
                      brightness={brightness}
                      setBrightness={setBrightness}
                      ImgPos={ImgPos}
                      setImgPos={setImgPos}
                      ImgLayout={ImgLayout}
                      setImgLayout={setImgLayout}
                      RandomImg={RandomImg}
                      setRandomImg={setRandomImg}
                      isOpen={isOpen}
                      onOpen={onOpen}
                      onClose={onClose}
                      refreshCount={refreshCount}
                      setRefreshCount={setRefreshCount}
                      HeadingFontSize={HeadingFontSize}
                      setHeadingFontSize={setHeadingFontSize}
                      SubheadingFontSize={SubheadingFontSize}
                      setSubheadingFontSize={setSubheadingFontSize}
                      SubheadingFontWeight={SubheadingFontWeight}
                      setSubheadingFontWeight={setSubheadingFontWeight}
                      HeadingFontWeight={HeadingFontWeight}
                      setHeadingFontWeight={setHeadingFontWeight}
                      SubheadingFontColor={SubheadingFontColor}
                      setSubheadingFontColor={setSubheadingFontColor}
                      HeadingFontColor={HeadingFontColor}
                      setHeadingFontColor={setHeadingFontColor}
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
