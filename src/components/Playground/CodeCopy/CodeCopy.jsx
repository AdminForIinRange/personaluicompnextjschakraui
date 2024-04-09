import React from "react";

const CodeCopy = ({
  heading,
  Subheading,
  Width,
  Height,
  LayoutAlign,
  Align,
  BoxShadow,
  BorderColor,
  BorderRadius,
  BorderSize,
  Animation,
  color,
  brightness,
  ImgPos,
  ImgLayout,
  RandomImg,
  HeadingFontSize,
  SubheadingFontSize,
  SubheadingFontWeight,
  HeadingFontWeight,
  SubheadingFontColor,
  HeadingFontColor,
  img,
}) => {
  const imgtop = ` <HStack
mt={"10px"}
w={"100%"}
h={"100%"}

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

  return ` <VStack justify="center" w="100%" h="100%" align="center">
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
          
          ${ImgLayout === "top" && img ? imgtop : ""}
          
            <Text
            style=${{
              color: `hsl(${HeadingFontColor}, 50%, ${HeadingFontColor === -1 ? "0%" : HeadingFontColor === 361 ? "100%" : "50%"})`,
            }}
              transition="transform, 0.3s ease-in-out"
              fontSize=${HeadingFontSize}
              fontWeight=${HeadingFontWeight}
              align="${Align}"
            >
              ${heading}
            </Text>
            <Text
            style=${{
              color: `hsl(${SubheadingFontColor}, 50%, ${SubheadingFontColor === -1 ? "0%" : SubheadingFontColor === 361 ? "100%" : "50%"})`,
            }}
              transition="transform, 0.3s ease-in-out"
              fontSize=${SubheadingFontSize}
              fontWeight=${SubheadingFontWeight}
              align="inherit"
            >
              ${Subheading}
            </Text>
            ${ImgLayout === "bottom" && img ? imgBottom : ""}
          
          </VStack>
        </Box>
      </VStack>
    </Box>
  </VStack>`;
};

export default CodeCopy;
