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

  const CompItems = [
    
    { title: "🃏 Cards", path: "" },
    { title: "📦 Modal", path: "" },
    { title: "🖼️ frames", path: "" },
    { title: "🏃‍♂️Animations", path: "" },
    { title: "📈 Charts", path: "" },
  ];


  const PresetItems = [
    { title: "🪵 Login Form", path: "" },
    { title: "🦸 Hero", path: "" },

  ];

  return (
    <>
      <Drawer
        size={"xs"}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
           // Remove boxShadow style
           overlayStyle={{ zIndex: "unset" }} // Adjust zIndex of overlay to prevent shadow
           // Adjust DrawerContent styles
           drawerContentProps={{ bg: "transparent", shadow: "none" }}
      >
        <DrawerContent>
          <DrawerBody p={"10"} overflowX={"hidden"}> 
            <Text fontSize={"22.5px"} fontWeight={"600"}>
              Presets
            </Text>
            <VStack
              justify={"left"}
              align={"left"}
              gap={"30px"}
              mt={"20px"}
              w={"100%"}
            >
             {PresetItems.map((item, index) => (
                <Text
                  key={index}
                  cursor={"pointer"}
                  transition="transform, 0.3s ease-in-out"
                  _hover={{
           
                    marginLeft: "40px",
                  }}
                  w={"100%"}
                  textAlign={"left"}
                  fontSize={"17px"}
                  fontWeight={"400"}
                >
                  {item.title}
                </Text>
              ))}
            </VStack>
            <Text mt={"100px"} fontSize={"22.5px"} fontWeight={"600"}>
              Presets
            </Text>
            <VStack
              justify={"left"}
              align={"left"}
              gap={"30px"}
              mt={"20px"}
              w={"100%"}
            >
             {CompItems.map((item, index) => (
                <Text
                  key={index}
                  cursor={"pointer"}
                  transition="transform, 0.3s ease-in-out"
                  _hover={{
           
                    marginLeft: "40px",
                  }}
                  w={"100%"}
                  textAlign={"left"}
                  fontSize={"17px"}
                  fontWeight={"400"}
                >
                  {item.title}
                </Text>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
