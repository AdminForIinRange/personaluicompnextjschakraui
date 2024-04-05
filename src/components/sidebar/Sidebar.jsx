"use client";

import React, { useRef, useEffect } from "react";
import {
  VStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  DrawerCloseButton,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const Sidebar = () => {
  //-------------------------------------------------------------------
  // if you dont wnat a drawer , then aplly 2 hstacks on either sides,
  //and one more hstack preanting them both together, simple
  //-------------------------------------------------------------------

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the key combination is Ctrl + Z or Cmd + Z (for Mac)
      if (
        (event.shiftKey || event.metaKey) &&
        event.key.toLowerCase() === "q"
      ) {
        if (isOpen) {
          onClose();
        } else {
          onOpen();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onOpen]);

  return (
    <>
      <Drawer
        size={"xs"}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerContent>
          <DrawerBody p={"10"}>
            <Text fontSize={"22.5px"} fontWeight={"600"}>
              Presets
            </Text>
            <VStack
              justify={"left"}
              align={"left"}
              gap={"10px"}
              mt={"20px"}
              w={"60%"}
            >
              <Button
                variant={"none"}
                fontSize={"17px"}
                colorScheme={"gray"}
                fontWeight={"400"}
              >
                🪵 Login Form
              </Button>
              <Button
                variant={"none"}
                fontWeight={"400"}
                fontSize={"17px"}
                colorScheme={"gray"}
              >
                🦸 Hero Text
              </Button>
            </VStack>
            <Text mt={"100px"} fontSize={"22.5px"} fontWeight={"600"}>
              Components
            </Text>
            <VStack
              justify={"left"}
              align={"left"}
              gap={"10px"}
              mt={"20px"}
              w={"60%"}
            >
              <Button
                variant={"ghost"}
                fontSize={"17px"}
                colorScheme={"gray"}
                fontWeight={"400"}
              >
                🃏 Cards
              </Button>
              <Button
                variant={"none"}
                fontWeight={"400"}
                fontSize={"17px"}
                colorScheme={"gray"}
              >
                📦 Modal
              </Button>
              <Button
                variant={"none"}
                fontWeight={"400"}
                fontSize={"17px"}
                colorScheme={"gray"}
              >
                🖼️ frames
              </Button>

              <Button
                variant={"none"}
                fontWeight={"400"}
                fontSize={"17px"}
                colorScheme={"gray"}
              >
                🏃‍♂️Animations
              </Button>
              <Button
                variant={"none"}
                fontWeight={"400"}
                fontSize={"17px"}
                colorScheme={"gray"}
              >
                📈 Charts
              </Button>
            </VStack>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
