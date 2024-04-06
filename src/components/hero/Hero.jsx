"use client";

import {
  HStack,
  Button,
  Text,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Highlight,
  Spacer,
  ButtonGroup,
  useMediaQuery,
  Box,
  VStack,
} from "@chakra-ui/react";
import { FaCog } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GoGoal } from "react-icons/go";
import { FaPen } from "react-icons/fa";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { GiHypersonicBolt } from "react-icons/gi";
import Link from "next/link";

const Hero = () => {
  const [isTablet] = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      <VStack justify={"center"} align={"center"}>
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
            <span>
              <Highlight
                query="Accelerate"
                styles={{
                  px: "5",
                  py: "0",
                  color: "#230F37",
                  rounded: "full",
                  bg: "#B794F4",
                }}
              >
                Accelerate
              </Highlight>
            </span>
            UI Development in React using Amazing presets.
          </Text>
        </HStack>

        <HStack justify={"center"} align={"center"} mt={"50px"}>
          <Link href="/components">
            <Button
              className={isTablet ? " " : "infinite-up-down-hover"}
              p={"15px"}
              variant={"solid"}
              bgColor={"#B794F4"}
              transition="transform, 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.03)",
                boxShadow: "0 5px 25px gray",
                bgColor: " #D6BCFA",
                width: "350px",
                color: "#44337A",
              }}
              color={"white"}
              fontSize={"16px"}
              boxShadow={"0 1px 8px gray"}
              h={"50px"}
              w={["100%", "250px", "300px", "300px"]}
              borderRadius={"15px"}
            >
              {" "}
              Browse the library <Spacer />
              <Text as={"span"} ml={"10px"}>
                {" "}
                <HiArrowLongRight fontSize={"35px"} />{" "}
              </Text>{" "}
            </Button>
          </Link>
        </HStack>
      </VStack>
    </>
  );
};

export default Hero;
