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
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
  } from "@chakra-ui/react";
const ImageALTTabTool = ({handleImageUpload, ImgPos, ImgLayout, setImgPos, 
    setImgLayout, setImg, setRefreshCount, setRandomImg}) => {
  return (
    <> <VStack
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
        bgColor={"gray.200"}
        p={5}
        w={"100%"}
        h={"100%"}
        type="file"
        rounded={"xl"}
        accept="image/*"
        color={"black"}
        onChange={handleImageUpload}
      />
    </HStack>

    <Button
      colorScheme={"whatsapp"}
      onClick={() => {
        setImg("random");
        setRefreshCount((prev) => prev + 1);
      }}
      w={"100%"}
    >
      Random Image
    </Button>

    <Button
      onClick={() => {
        setImg(null);
        setRandomImg(null);
      }}
      w={"100%"}
    >
      Remove Image
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
  </VStack></>
  )
}

export default ImageALTTabTool