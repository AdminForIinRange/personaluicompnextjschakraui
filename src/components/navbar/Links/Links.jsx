import React from "react";
import { Button, Text, ButtonGroup } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

import fruitImage from "../../../components/img/fruit3.png";

export const Links = () => {
  return (
    <>
      <ButtonGroup gap={"20px"}>
        <Link href={"/components"}>
          {" "}
          <Button
            bgColor={"#B794F4"}
            variant={"solid"}
            w={"100px"}
            transition="transform, 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "0 5px 25px gray",
              width: "170px",
            }}
          >
<Image src={fruitImage} alt="Fruit Image" width={20}  style={{transform: "rotate(25deg)", marginRight: "5px"}}  />


            <Text as={"span"} color={"white"}>
              {" "}
                   Presets
            </Text>
          </Button>
        </Link>
       
          {" "}
          <Button
            target="_blank"
            href="https://www.linkedin.com/in/anjesh-bhattarai/"
            leftIcon={<FaLinkedin color="white" size={"20px"} />}
            variant={"solid"}
            bgColor={"#63B3ED"}
            w={"100px"}
            transition="transform, 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "0 5px 25px gray",
              width: "170px",
            }}
          >
            <Text color={"white"} as={"span"}>
              Linkden{" "}
            </Text>
          </Button>
      
       
          {" "}
          <Button
          
            href="https://github.com/AdminForIinRange"
            target="_blank"
            leftIcon={<FaGithub color="WHITE" size={"20px"} />}
            bgColor={"gray"}
            variant={"solid"}
            w={"100px"}
            transition="transform, 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "0 5px 25px gray",
              width: "170px",
            }}
          >
            <Text color={"white"}>Github</Text>
          </Button>
     
      </ButtonGroup>
    </>
  );
};
