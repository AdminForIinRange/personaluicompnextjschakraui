import React from "react";
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
  Divider,
  Box,
  VStack,
} from "@chakra-ui/react";
import { HiArrowLongRight } from "react-icons/hi2";
const CollageCard = () => {
  return (
    <>
      {" "}
      <Box
        w={"650px"}
        h={"310px"}
        border={"1.8px solid #B5B5B5"}
        rounded={"xl"}
        p={"4"}
      >
        <VStack w={"100%"} h={"100%"} align={"left"} px={2}>
          <HStack justify={"left"} align={"start"} w={"100%"} h={"100%"}>
            <HStack w={"100%"} h={"100%"}>
              <Box
                w={"100%"}
                h={"100%"}
                bgColor={"black"}
                rounded={"xl"}
                bgImage={
                  "https://source.unsplash.com/aerial-photography-of-mountain-range-covered-with-snow-under-white-and-blue-sky-at-daytime-9wg5jCEPBsw"
                }
                bgSize={"cover"}
                bgPos={[
                  "bottom right",
                  " bottom right",
                  "bottom",
                  "bottom",
                  "bottom",
                ]}
              ></Box>
            </HStack>
            <HStack w={"100%"} h={"100%"}>
              <Box
                w={"100%"}
                h={"100%"}
                bgColor={"black"}
                rounded={"xl"}
                bgImage={
                  "https://source.unsplash.com/sea-of-clouds-during-daytime-kSY5T6js2KE"
                }
                bgSize={"cover"}
                bgPos={[
                  "bottom right",
                  " bottom right",
                  "bottom",
                  "bottom",
                  "bottom",
                ]}
              ></Box>
            </HStack>
          </HStack>
          <HStack justify={"left"} align={"start"} w={"100%"} h={"100%"}>
            <HStack w={"100%"} h={"100%"}>
              <Box
                w={"100%"}
                h={"100%"}
                bgColor={"black"}
                rounded={"xl"}
                bgImage={
                  "https://source.unsplash.com/above-cloud-photo-of-blue-skies-yQorCngxzwI"
                }
                bgSize={"cover"}
                bgPos={[
                  "bottom right",
                  " bottom right",
                  "bottom",
                  "bottom",
                  "bottom",
                ]}
              ></Box>
            </HStack>
            <HStack w={"100%"} h={"100%"}>
              <Box
                w={"100%"}
                h={"100%"}
                bgColor={"black"}
                rounded={"xl"}
                bgImage={
                  "https://source.unsplash.com/blue-body-of-water-under-blue-and-white-sky-during-daytime-ueGaQiHV86o"
                }
                bgSize={"cover"}
                bgPos={[
                  "center right",
                  " center right",
                  "center",
                  "center",
                  "center",
                ]}
              ></Box>
            </HStack>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default CollageCard;
