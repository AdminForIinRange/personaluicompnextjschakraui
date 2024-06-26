"use client";
import {
  HStack,
  Button,
  Text,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Spacer,
  ButtonGroup,
  useMediaQuery,
  Box,
  VStack,
} from "@chakra-ui/react";

const DevelopmentInProgress = () => {
  return (
    <>
      <VStack justify={"center"} align={"center"} p={"20px"}>
        <HStack
          justify={"center"}
          align={"center"}
          w={["90%", "90%", "80%", "60%"]}
          mt={"100px"}
        >
          <Text
            fontSize={["35px", "45px", "45px", "65px"]}
            fontWeight={700}
            textAlign={"center"}
            fontFamily={"Raleway"}
          >
            Sorry The Page is still under Development
          </Text>
        </HStack>
        <Text
          fontSize={["15px", "24px", "24px", "24px"]}
          textAlign={"center"}
          fontFamily={"Raleway"}
        >
          We are still working on this site, feel free to try out our other
          presets
        </Text>

        <HStack justify={"center"} align={"center"} mt={"50px"}></HStack>
      </VStack>
    </>
  );
};

export default DevelopmentInProgress;
