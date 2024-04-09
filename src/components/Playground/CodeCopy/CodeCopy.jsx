import React from "react";

const CodeCopy   = ({
  
  heading,
  setHeading,
  Subheading,
  setSubheading,
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
  Animation,
  setAnimation,
  color,
  setColor,
  brightness,
  setBrightness,
  ImgPos,
  setImgPos,
  ImgLayout,
  setImgLayout,
  RandomImg,
  setRandomImg,
  isOpen,
  onOpen,
  onClose,
  refreshCount,
  setRefreshCount,
  HeadingFontSize,
  setHeadingFontSize,
  SubheadingFontSize,
  setSubheadingFontSize,
  SubheadingFontWeight,
  setSubheadingFontWeight,
  HeadingFontWeight,
  setHeadingFontWeight,
  SubheadingFontColor,
  setSubheadingFontColor,
  HeadingFontColor,
  setHeadingFontColor,
  img,
}) => {
  ///------------------------------------------------------------------------
  // IF THERE IS AN IMG TEHN SOW A DIFF CODE AND IF IMG IS
  //BOTTOM OR TOP THE HARD SHOW A DIFF SET OF CODE, NOT HAD TO DO A SIMPLE BOOLEAN CHECK
  //------------------------------------------------------------------------
  //DONT OVER OVER COMPLAITCE TEH PAYGROUND TOO
  ///------------------------------------------------------------------------






const imgtop = ` <HStack
mt={"10px"}
w={"100%"}
h={"100%"}
display=${img ? "block" : "none"}
transition="transform, 0.3s ease-in-out"
>
<Box
  w={"100%"}
  h={"100%"}
  bgColor={"black"}
  rounded={"xl"}
  bgImage=${img === "random" ? RandomImg : img}
  bgSize={"cover"}
  bgPos=${ImgPos} 
></Box>
</HStack>`;



const imgBottom = `  <HStack
w={"100%"}
h={"100%"}
display=${img ? "block" : "none"}
transition="transform, 0.3s ease-in-out"
mt={"10px"}
>
<Box
  w={"100%"}
  h={"100%"}
  bgColor={"black"}
  rounded={"xl"}
  bgImage=${img === "random" ? RandomImg : img}
  bgSize={"cover"}
  bgPos=${ImgPos}
></Box>
</HStack>`;








  return(

   ` <VStack justify="center" w="100%" h="100%" align="center">
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
        _hover={{
          transform: ${Animation === "scale(1.05)" ? "scale(1.05)" : "scale(1)"},
          opacity: ${Animation === "0" ? "0" : "1"},
          width: ${Animation === "70%" ? "70%" : null},
        }}
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
          
          ${ImgLayout === "top" ? imgtop :"" }
          
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
              ${Subheading}
            </Text>
            ${ImgLayout === "bottom" ? imgBottom :"" }
          
          </VStack>
        </Box>
      </VStack>
    </Box>
  </VStack>`)
  
};

export default CodeCopy;
