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
  ButtonGroup,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const Sidebar = () => {
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
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody p={"10"}>
            <Text fontSize={"22.5px"} fontWeight={"600"}>Presets</Text>
            <VStack justify={"center"} align={"left"} gap={"10px"} mt={"20px"} >
                <ButtonGroup></ButtonGroup>
              <Button variant={"ghost"} fontSize={"17px"} colorScheme={"gray"}>
                🪵 Login Form
              </Button>
              <Button variant={"ghost"} fontSize={"17px"} colorScheme={"gray"}>
                🪵 Login Form
              </Button>
              <Button variant={"ghost"} fontSize={"17px"} colorScheme={"gray"}>
                🪵 Login Form
              </Button>

              <Button variant={"ghost"} fontSize={"17px"} colorScheme={"gray"}>
                🪵 Login Form
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
