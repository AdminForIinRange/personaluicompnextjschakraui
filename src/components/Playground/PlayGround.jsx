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
const PlayGround = () => {
  const [isTablet] = useMediaQuery("(max-width: 1024px)");
  const [isMobile] = useMediaQuery("(max-width: 736px)");

  const [heading, setHeading] = useState(
    "Higher Education Should be free like in Europe"
  );

  const [Subheading, setSubheading] = useState(
    "Education is a human right, to exploit for monetary gain is immoral "
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
  const [TextColor, setTextColor] = useState("black");

  const [Animation, setAnimation] = useState("");

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
              <Box
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
                  {ImgLayout === "top" ? (
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

                  {ImgLayout === "bottom" ? (
                    <HStack
                      w={"100%"}
                      h={"100%"}
                      display={img ? "block" : "none"}
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
            p={2}
            border={`1.8px solid #B9B9B9`}
          >
            <Tabs transition="transform, 0.3s ease-in-out" variant="soft-rounded"  bg={"#F7FAFC"} p={3} rounded={"xl"}>
              <TabList>
                <Tab>Basic</Tab>
                <Tab>Image</Tab>
                <Tab>Advance</Tab>
                <Tab>Animation</Tab>
              </TabList>

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
                 <ImageALTTabTool ImgPos={ImgPos} ImgLayout={ImgLayout} setImgPos={setImgPos}
                  setImgLayout={setImgLayout} setImg={setImg} setRefreshCount={setRefreshCount} setRandomImg={setRandomImg}
                  handleImageUpload={handleImageUpload}      />
                </TabPanel>
                <TabPanel>
                <VStack
                    gap={7}
                    justify={"left"}
                    w="100%"
                    h={"100%"}
                    align={"left"}
                    transition="transform, 0.3s ease-in-out"
                  >
                  <FormLabel htmlFor="heading fontsize">
                    Heading Fontsize
                    <Slider
                      aria-label="slider-ex-1"
                      defaultValue={30}
                      min={10}
                      max={40}
                      step={1}
                      onChange={(e) => setHeadingFontSize(e)}
                    >
                      {" "}
                      <SliderMark
                        value={HeadingFontSize}
                        textAlign="center"
                        bg="white"
                        color="black"
                        fontFamily={"monospace"}
                        mt="2.5"
                        ml="1"
                      >
                        {HeadingFontSize}
                      </SliderMark>
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb />
                    </Slider>
                  </FormLabel>

                  <FormLabel htmlFor="subheading fontsize">
                    Subheading Fontsize
                    <Slider
                      aria-label="slider-ex-1"
                      defaultValue={16}
                      min={5}
                      max={25}
                      step={1}
                      onChange={(e) => setSubheadingFontSize(e)}
                    >
                      {" "}
                      <SliderMark
                        value={SubheadingFontSize}
                        textAlign="center"
                        bg="white"
                        color="black"
                        fontFamily={"monospace"}
                        mt="2.5"
                        ml="1"
                      >
                        {SubheadingFontSize}
                      </SliderMark>
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb />
                    </Slider>
                  </FormLabel>

                  <FormLabel htmlFor=" heading font weight">
                    Heading Font Weight
                    <Slider
                       
                      aria-label="slider-ex-1"
                      defaultValue={600}
                      min={1}
                      max={700}
                      step={1}
                      onChange={(e) => setHeadingFontWeight(e)}
                    >
                      {" "}
                      <SliderMark
                       fontWeight={HeadingFontWeight}
                        value={HeadingFontWeight}
                        textAlign="center"
                        bg="white"
                        color="black"
                        fontFamily={"monospace"}
                        mt="2.5"
                        ml="1"
                      >
                        {HeadingFontWeight}
                      </SliderMark>
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb />
                    </Slider>
                  </FormLabel>

                  <FormLabel htmlFor="subheading font weight">
                    Subheading Font Weight
                    <Slider
                      aria-label="slider-ex-1"
                      defaultValue={300}
                      min={1}
                      max={700}
                      step={1}
                      onChange={(e) => setSubheadingFontWeight(e)}
                    >
                      {" "}
                      <SliderMark
                        value={SubheadingFontWeight}
                        textAlign="center"
                        bg="white"
                        color="black"
                        fontWeight={SubheadingFontWeight}
                        fontFamily={"monospace"}
                        mt="2.5"
                        ml="1"
                      >
                        {SubheadingFontWeight}
                      </SliderMark>
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb />
                    </Slider>
                  </FormLabel>

                  <FormLabel htmlFor="heading font color">
                    Heading Font Color
                    <Slider
                      aria-label="slider-ex-1"
                      defaultValue={-1}
                      min={-1}
                      max={361}
                      step={1}
                      onChange={(e) => setHeadingFontColor(e)}
                      borderRadius={"15px"}
                    >
                      <SliderMark
                        value={HeadingFontColor}
                        textAlign="center"
                        bg="white"
                        color={`hsl(${HeadingFontColor}, 50%, ${HeadingFontColor === -1 ? "0%" : HeadingFontColor === 361 ? "0%" : "50%"})`}
                        fontFamily={"monospace"}
                        mt="2.5"
                        ml="-2"
                      >
                     { HeadingFontColor === -1 ? "Black" : HeadingFontColor === 361 ? "White" :  HeadingFontColor}
                      </SliderMark>
                      <SliderTrack
                        bg={`hsl(${HeadingFontColor}, 50%, ${HeadingFontColor === -1 ? "0%" : HeadingFontColor === 361 ? "100%" : "50%"})`}
                      >
                        <SliderFilledTrack
                          bg={`hsl(${HeadingFontColor}, 50%, ${HeadingFontColor === -1 ? "0%" : HeadingFontColor === 361 ? "100%" : "50%"})`}
                        />
                      </SliderTrack>
                      <SliderThumb
                     
                        HeadingFontColor={`hsl(${HeadingFontColor}, 50%, ${HeadingFontColor === -1 ? "0%" : HeadingFontColor === 361 ? "100%" : "50%"})`}
                      />
                    </Slider>
                  </FormLabel>

                  <FormLabel htmlFor="subheading font color">
                    Subheading Font Color
                    <Slider
                      aria-label="slider-ex-1"
                      defaultValue={-1}
                      min={-1}
                      max={361}
                      step={1}
                      onChange={(e) => setSubheadingFontColor(e)}
                      borderRadius={"15px"}
                    >
                    
                   
                      <SliderMark
                        value={SubheadingFontColor}
                        textAlign="center"
                        bg="white"
                        color={`hsl(${SubheadingFontColor}, 50%, ${SubheadingFontColor === -1 ? "0%" : SubheadingFontColor === 361 ? "0%" : "50%"})`}
                        fontFamily={"monospace"}
                        mt="2.5"
                        ml="-2"
                      >
                { SubheadingFontColor === -1 ? "Black" : SubheadingFontColor === 361 ? "White" :  SubheadingFontColor}
                      </SliderMark>
                      <SliderTrack
                        bg={`hsl(${SubheadingFontColor}, 50%, ${SubheadingFontColor === -1 ? "0%" : SubheadingFontColor === 361 ? "100%" : "50%"})`}
                      >
                        <SliderFilledTrack
                          bg={`hsl(${SubheadingFontColor}, 50%, ${SubheadingFontColor === -1 ? "0%" : SubheadingFontColor === 361 ? "100%" : "50%"})`}
                        />
                      </SliderTrack>
                      <SliderThumb
                        SubheadingFontColor={`hsl(${SubheadingFontColor}, 50%, ${SubheadingFontColor === -1 ? "0%" : SubheadingFontColor === 361 ? "100%" : "50%"})`}
                      />
                    </Slider>
                  </FormLabel>



                  <FormLabel htmlFor=" box shadow" >
                  Box Shadow
                    <Slider
                       
                      aria-label="slider-ex-1"
                      defaultValue={10}
                      min={1}
                      max={100}
                      step={1}
                      onChange={(e) => setBoxShadow(e)}
                    >
                      {" "}
                      <SliderMark       
                       boxShadow={` 0px 0px ${BoxShadow}px gray`}
                      value={BoxShadow}
                        textAlign="center"
                        bg="white"
                        color="black"
                        fontFamily={"monospace"}
                        mt="2.5"
                        ml="1"
                      >
                        {BoxShadow}
                      </SliderMark >
                      <SliderTrack  boxShadow={` 0px 0px ${BoxShadow}px gray`}>
                        <SliderFilledTrack   boxShadow={` 0px 0px ${BoxShadow}px gray`}/>
                      </SliderTrack>
                      <SliderThumb   boxShadow={` 0px 0px ${BoxShadow}px gray`}/>
                    </Slider>
                  </FormLabel>
                  </VStack>

                </TabPanel>

                <TabPanel>
            <VStack    gap={5}
                    justify={"left"}
                    w="100%"
                    h={"100%"}
                    align={"left"}
                    transition="transform, 0.3s ease-in-out" >

<FormLabel htmlFor="Animation">
Animation
          <RadioGroup
            defaultValue="scale(1.05)"
            onChange={(val) => setAnimation(val)}
          >
            <HStack>
              <Radio value={`scale(1.05)`} >Expand</Radio>
              <Radio value="70%">Expand Width </Radio>
              <Radio value={`0`}>fade in/out</Radio>
            </HStack>
          </RadioGroup>
        </FormLabel>

            </VStack>
                </TabPanel>

              </TabPanels>
            </Tabs>

            <Button
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
