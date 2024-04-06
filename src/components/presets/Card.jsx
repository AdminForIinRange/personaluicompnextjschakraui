"use client";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  Divider,
  Box,
  VStack,
} from "@chakra-ui/react";
import { HiArrowLongRight } from "react-icons/hi2";
import React from "react";
import Link from "next/link";
import SimpleCard from "./BasicCards/SimpleCard";
import WideSimpleCard from "./BasicCards/WideSimpleCard";
import ImageSimpleCard from "./BasicCards/ImageSimpleCard";
import CollageCard from "./BasicCards/collage/CollageCard";
import HrzonCard from "./BasicCards/collage/HrzonCard";
import TicketCard from "./ComplexCards/TicketCard";
import 'prismjs/themes/prism.css'; // Import the default Prism CSS
import 'prismjs'; // Import Prism.js
import 'prismjs/components/prism-javascript';


const Card = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <VStack px={10}  >
        <VStack justify={"left"} w={"100%"} h={"100%"} align={"left"}    >
          <Text fontSize={"50"} fontWeight={"600"}>
            Card
          </Text>
          <HStack
            justify={"left"}
            w={"100%"}
            h={"100%"}
            mt={"20px"}
            align={"left"}
          >
            <Text fontSize={"30"} fontWeight={"400"}>
              Basic
            </Text>
          </HStack>
        </VStack>

        <HStack mt={"20px"} justify={"left"} w={"100%"} h={"100%"} gap={"15px"} flexWrap={"wrap"}  align={"left"}>
        <SimpleCard />
        <WideSimpleCard />
        <ImageSimpleCard />
          
        </HStack>

        <HStack
            justify={"left"}
            w={"100%"}
            h={"100%"}
            mt={"20px"}
            align={"left"}
          >
            <Text fontSize={"30"} fontWeight={"400"}>
            Collage
            </Text>
          </HStack>

        <HStack mt={"20px"} justify={"left"} w={"100%"} h={"100%"} gap={"15px"} flexWrap={"wrap"}  align={"left"}>
 <CollageCard />
 <Box as={"div"} onClick={onOpen} valuePayload={"HrzonCard"}> <HrzonCard /></Box>


        </HStack>

        <HStack
            justify={"left"}
            w={"100%"}
            h={"100%"}
            mt={"20px"}
            align={"left"}
          >
            <Text fontSize={"30"} fontWeight={"400"}>
            Complex
            </Text>
          </HStack>

        <HStack mt={"20px"} justify={"left"} w={"100%"} h={"100%"} gap={"15px"} flexWrap={"wrap"}  align={"left"}>
<TicketCard />

        </HStack>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Code</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <pre>
    <code className="language-javascript">
      {`<Box
  w={"650px"}
  h={"310px"}
  border={"1.8px solid #B5B5B5"}
  rounded={"xl"}
  p={"4"}
>
  <HStack w={"100%"} h={"100%"} align={"left"} px={2}>
    <HStack justify={"left"} align={"start"} w={"100%"} h={"100%"}>
      <HStack w={"100%"} h={"100%"}>
        <Box
          w={"100%"}
          h={"100%"}
          bgColor={"black"}
          rounded={"xl"}
          bgImage={
            "https://source.unsplash.com/pathway-between-green-trees-F_hft1Wiyj8"
          }
          bgSize={"cover"}
          bgPos={["center", " center", "center", "center", "center"]}
        ></Box>
      </HStack>
      <HStack w={"200%"} h={"100%"}>
        <Box
          w={"100%"}
          h={"100%"}
          bgColor={"black"}
          rounded={"xl"}
          bgImage={
            "https://source.unsplash.com/birds-eye-view-photograph-of-green-mountains-01_igFr7hd4"
          }
          bgSize={"cover"}
          bgPos={["top ", " top ", "top", "top", "top"]}
        ></Box>
      </HStack>
      <HStack w={"100%"} h={"100%"}>
        <Box
          w={"100%"}
          h={"100%"}
          bgColor={"black"}
          rounded={"xl"}
          bgImage={
            "https://source.unsplash.com/aerial-photo-of-green-trees-ugnrXk1129g" //cache
          }
          bgSize={"cover"}
          bgPos={["bottom right", " bottom right", "bottom right ", "bottom right ", "bottom right"]}
        ></Box>
      </HStack>
      <HStack w={"50%"} h={"100%"}>
        <Box
          w={"100%"}
          h={"100%"}
          bgColor={"black"}
          rounded={"xl"}
          bgImage={
            "https://source.unsplash.com/photo-of-green-plants-7APM4YyW_JU"
          }
          bgSize={"cover"}
          bgPos={["top right", " top right", "top right", "top right", "top "]}
        ></Box>
      </HStack>
    </HStack>
  </HStack>
</Box>`}
    </code>
  </pre>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Card;
