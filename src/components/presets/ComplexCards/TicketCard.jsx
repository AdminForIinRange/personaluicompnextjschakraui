import React from "react";
import { HStack, Text, Badge, Spacer, Box, VStack } from "@chakra-ui/react";
import { HiArrowLongRight } from "react-icons/hi2";
const TicketCard = () => {
  return (
    <>
      {" "}
      <Box
        w={["260px", "260px", "260px", "280px", "350px"]}
        h={["260px", "260px", "260px", "260px", "310px"]}
        border={"1.8px solid #B5B5B5"}
        rounded={"xl"}
      >
        <VStack justify={"left"} align={"inherit"} w={"100%"} h={"100%"}>
          <HStack w={"100%"} p={["2", "2", "2", "3", "4"]}>
            <Text
              align={"center"}
              fontSize={["22px", "22px", "28px", "28px", "32px"]}
              fontWeight={"700"}
              textAlign={"left"}
            >
              Ticket{" "}
              <Text fontFamily={"sans-serif"} as={"span"}>
                #123{" "}
              </Text>
            </Text>

            <Spacer />
            <VStack>
              <Text
                fontFamily={"sans-serif"}
                align={"right"}
                fontSize={["12px", "12px", "12px", "12px", "16px"]}
                textAlign={"right"}
              >
                01/01/2024
                <br />
                10:12:59
              </Text>
            </VStack>
          </HStack>

          <VStack w={"100%"} py={"8px"} px={"4"}>
            <Text
              align={"center"}
              fontSize={["12px", "12px", "12px", "12px", "16px"]}
              fontWeight={"500"}
              textAlign={"left"}
            >
              The printer on Floor 2 has ceased working. Assistance would be
              greatly appreciated to resolve the issue.
            </Text>

            <HStack
              w={"100%"}
              justify={"left"}
              align={"left"}
              gap={"12px"}
              mt={"5px"}
              fontSize={["12px", "12px", "12px", "12px", "16px"]}
            >
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
          <VStack justify={"end"} align={"end"} h={"100%"} w={"100%"}>
            <Box w={"100%"} h={"50px"} borderTop={"1.8px solid #B5B5B5"}>
              <HStack
                justify={"left"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                px={"4"}
              >
                <Text
                  align={"center"}
                  fontSize={"17px"}
                  fontWeight={"500"}
                  fontFamily={"sans-serif"}
                >
                  ID: 123
                </Text>
                <Text
                  align={"center"}
                  fontSize={"17px"}
                  fontWeight={"500"}
                  fontFamily={"sans-serif"}
                >
                  User: ABC
                </Text>
              </HStack>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </>
  );
};

export default TicketCard;
