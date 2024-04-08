"use client";
import React from "react";
import { Box, HStack, Icon, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import fruitImage from "../../../components/img/fruit3.png";
import Chaicon from "../../../components/img/Chaicon.jpg";
import { CloseIcon } from "@chakra-ui/icons";
const Logo = () => {
  return (
    <>
      <HStack align={"center"} gap={"20px"}>
        <Link href={"/"}>
          <Tooltip label="Grape" bgColor={"#B794F4"}>
            <Box
              transition="transform, 0.3s ease-in-out"
              _hover={{
                filter: "drop-shadow(0px 0px 55px purple)",
                transform: "rotate(0deg)", // Reset the rotation on hover
                dropShadow: "0px 0px 10px #B794F4",
              }}
              cursor={"pointer"}
              w={"60px"}
              borderRadius={"100px"}
              overflow={"hidden"}
              transform={"rotate(25deg)"}
              filter={"drop-shadow(0px 0px 1px #B794F4)"}
            >
              <Image src={fruitImage} alt="Fruit Image" />
            </Box>
          </Tooltip>
        </Link>
        <Icon as={CloseIcon} boxSize={8} fontWeight={"100"} />

        <Link href={"/"}>
          <Tooltip label="⚡Chakra UI" bgColor={"teal"}>
            <Box
              transition="transform, 0.3s ease-in-out"
              _hover={{
                filter: "drop-shadow(0px 0px 55px #3EC7BF)",
                transform: "rotate(0deg)", // Reset the rotation on hover
                dropShadow: "0px 0px 10px #3EC7BF",
              }}
              cursor={"pointer"}
              w={"60px"}
              borderRadius={"100px"}
              overflow={"hidden"}
              transform={"rotate(25deg)"}
              filter={"drop-shadow(0px 0px 1px teal)"}
            >
              <Image src={Chaicon} alt="Chakra ui " />
            </Box>
          </Tooltip>
        </Link>
      </HStack>
    </>
  );
};

export default Logo;
