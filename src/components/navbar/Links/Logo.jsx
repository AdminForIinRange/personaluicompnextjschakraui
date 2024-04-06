"use client";
import React from 'react'
import {
 
    Box,
  } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import fruitImage from "../../../components/img/fruit3.png";
const Logo = () => {
  return (
    <>
    
    <Link href={"/"}>
          <Box
            cursor={"pointer"}
            w={"60px"}
            borderRadius={"100px"}
            overflow={"hidden"}
            transform={"rotate(25deg)"}
          >
            <Image src={fruitImage} alt="Fruit Image" />
          </Box>
        </Link>
        
        </>
  )
}

export default Logo