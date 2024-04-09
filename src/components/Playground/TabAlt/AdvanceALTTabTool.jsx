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
const AdvanceALTTabTool = ({
  setHeadingFontSize,
  HeadingFontSize,
  setSubheadingFontSize,
  SubheadingFontSize,
  setSubheadingFontWeight,
  SubheadingFontWeight,
  setHeadingFontWeight,
  HeadingFontWeight,
  setHeadingFontColor,
  HeadingFontColor,
  setSubheadingFontColor,
  SubheadingFontColor,
  setBoxShadow,
  BoxShadow,

  

}) => {
  return (
    <>
      {" "}
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
          SubHeading Fontsize
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

        <FormLabel htmlFor="subheading weight">
          SubHeading Font Weight
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
          Heading Color
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
              {HeadingFontColor === -1
                ? "Black"
                : HeadingFontColor === 361
                  ? "White"
                  : HeadingFontColor}
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

        <FormLabel htmlFor="subheading color">
          Subheading Color
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
              {SubheadingFontColor === -1
                ? "Black"
                : SubheadingFontColor === 361
                  ? "White"
                  : SubheadingFontColor}
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

        <FormLabel htmlFor=" box shadow">
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
            </SliderMark>
            <SliderTrack boxShadow={` 0px 0px ${BoxShadow}px gray`}>
              <SliderFilledTrack boxShadow={` 0px 0px ${BoxShadow}px gray`} />
            </SliderTrack>
            <SliderThumb boxShadow={` 0px 0px ${BoxShadow}px gray`} />
          </Slider>
        </FormLabel>
      </VStack>
    </>
  );
};

export default AdvanceALTTabTool;
