"use client";

import React, { useRef, useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  DrawerCloseButton,
  Text,
  useDisclosure,
  Button
} from "@chakra-ui/react";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the key combination is Ctrl + Z or Cmd + Z (for Mac)
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z") {
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
          <DrawerBody>
            <Text >Presets</Text>
            <Text>🪵 Login Form</Text>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
