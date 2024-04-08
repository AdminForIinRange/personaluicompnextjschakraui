import React from "react";

const CodeCopy = ({
  color,
  brightness,
  Width,
  Height,
  BorderSize,
  BorderColor,
  BorderRadius,
  BoxShadow,
  LayoutAlign,
  Align,
  heading,
  SubHeading,
}) => {
  ///------------------------------------------------------------------------
  // IF THERE IS AN IMG TEHN SOW A DIFF CODE AND IF IMG IS
  //BOTTOM OR TOP THE HARD SHOW A DIFF SET OF CODE, NOT HAD TO DO A SIMPLE BOOLEAN CHECK
  //------------------------------------------------------------------------
  //DONT OVER OVER COMPLAITCE TEH PAYGROUND TOO
  ///------------------------------------------------------------------------
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
  </VStack>`;
};

export default CodeCopy;
