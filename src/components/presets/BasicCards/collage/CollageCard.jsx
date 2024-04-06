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

 
  const bgImageBottom = [
    "https://source.unsplash.com/above-cloud-photo-of-blue-skies-yQorCngxzwI",
    "https://source.unsplash.com/blue-body-of-water-under-blue-and-white-sky-during-daytime-ueGaQiHV86o"

  ];
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
            <HStack w={"100%"} h={"100%"}  transition="transform, 0.3s ease-in-out" zIndex={"0"}
                _hover={{
                  height: "210%",
                
                }}>
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
           
          </HStack>
          <HStack justify={"left"} align={"start"} w={"100%"} h={"100%"}>
           { bgImageBottom.map((image, index) => ( <HStack key={index} w={"100%"} h={"100%"} transition="transform, 0.3s ease-in-out" 
                _hover={{
                  width: "300%",
                 
                
                }}>
              <Box
                w={"100%"}
                h={"100%"}
                bgColor={"black"}
                rounded={"xl"}
                bgImage={image}
                bgSize={"cover"}
                bgPos={[
                  "bottom right",
                  " bottom right",
                  "bottom",
                  "bottom",
                  "bottom",
                ]}
              ></Box>
            </HStack>))}
          
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default CollageCard;
