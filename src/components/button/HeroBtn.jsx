"use client";

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
  Box,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
const HeroBtn = () => {
  const [isTablet] = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      {" "}
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
    </>
  );
};

export default HeroBtn;
