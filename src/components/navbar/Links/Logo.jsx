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
    
    <Link href={"/"}    transition="transform, 0.3s ease-in-out"
              _hover={{
                marginLeft: "5px",
              }} >
          <Box
           transition="transform, 0.3s ease-in-out"
           _hover={{
             marginLeft: "5px",
           }} 
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