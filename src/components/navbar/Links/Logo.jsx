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
    
    <Link href={"/"}   >
          <Box
           transition="transform, 0.3s ease-in-out"
           
           _hover={{
            
            filter: "drop-shadow(0px 0px 55px purple)",
          transform: "rotate(0deg)" ,// Reset the rotation on hover
         dropShadow: ("0px 0px 10px #B794F4")
         
           }} 
            cursor={"pointer"}
            w={"60px"}
            borderRadius={"100px"}
            overflow={"hidden"}
            transform={"rotate(25deg)"}
    
            filter={"drop-shadow(0px 0px 1px #B794F4)"}
          >
            <Image src={fruitImage} alt="Fruit Image"  />
          </Box>
        </Link>
        
        </>
  )
}

export default Logo