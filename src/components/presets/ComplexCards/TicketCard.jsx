import React from "react";
import {
  HStack,
  Button,
  Text,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Badge,
  Spacer,
  ButtonGroup,
  useMediaQuery,
  Divider,
  Box,
  VStack,
} from "@chakra-ui/react";
import { HiArrowLongRight } from "react-icons/hi2";
const TicketCard = () => {
  return (
    <>
      {" "}
      <Box
        w={"415px"}
        h={"310px"}
        border={"1.8px solid #B5B5B5"}
        rounded={"xl"}
        p={"4"}
      >
        <VStack justify={"left"} align={"inherit"} w={"100%"} h={"100%"}>
          <HStack w={"100%"}>
            <Text
              align={"center"}
              fontSize={"20px"}
              fontWeight={"700"}
              textAlign={"left"}
            >
              Ticket{" "}
              <Text fontFamily={"sans-serif"} as={"span"}>
                #11{" "}
              </Text>
            </Text>

            <Spacer />
            <VStack>
              <Text
                fontFamily={"sans-serif"}
                align={"right"}
                fontSize={"12px"}
                textAlign={"right"}
              >
                01/01/2024
                <br />
                10:12:59
              </Text>
            </VStack>
          </HStack>

          <VStack w={"100%"} py={"20px"}>
            <Text
              align={"center"}
              fontSize={"18px"}
              fontWeight={"500"}
              textAlign={"left"}
            >
              The printer on Floor 2 has ceased working. Prompt assistance would
              be greatly appreciated to resolve the issue
            </Text>

            <HStack w={"100%"} justify={"left"} align={"left"}>
              <Badge p={"5px"} borderRadius={"5px"} colorScheme="green">
                IT Support
              </Badge>
              <Badge p={"5px"} colorScheme="red" borderRadius={"5px"}>
                Urgent
              </Badge>
              <Badge p={"5px"} colorScheme="purple" borderRadius={"5px"}>
                Printer
              </Badge>
            </HStack>
          </VStack>
          <HStack w={"100%"} h={"100%"}></HStack>
        </VStack>
      </Box>
    </>
  );
};

export default TicketCard;
