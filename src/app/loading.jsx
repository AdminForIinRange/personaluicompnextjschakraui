import React from 'react'

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
} from "@chakra-ui/react";
import Image from "next/image";
import fruitImage from "../components/img/fruit3.png";
const loading = () => {
  return ( // fuuit rotates in teh background
    <div>
      
      <HStack>
        
        
        </HStack><Image src={fruitImage} alt="Fruit Image" /></div>
  )
}

export default loading