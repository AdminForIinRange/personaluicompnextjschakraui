import React from "react";
import {
 
  Button,
  Text,

  ButtonGroup,
 
} from "@chakra-ui/react";
import Image from "next/image";
export const Links = () => {
  return (
    <>
        <ButtonGroup gap={"25px"}>
        <Button variant={"solid"} color={"black"}>
          <Text color={"black"}>Example</Text>
        </Button>

        <Button variant={"solid"} color={"black"}>
          <Text color={"black"}>Example</Text>
        </Button>

        <Button variant={"solid"} color={"black"}>
          <Text color={"black"}>Example</Text>
        </Button>
      </ButtonGroup>

    </>
  );
};
