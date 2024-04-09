import React from "react";
import { HStack, FormLabel, VStack, Radio, RadioGroup } from "@chakra-ui/react";
const AnimationALTTabTool = ({ setAnimation }) => {
  return (
    <>
      {" "}
      <VStack
        gap={5}
        justify={"left"}
        w="100%"
        h={"100%"}
        align={"left"}
        transition="transform, 0.3s ease-in-out"
      >
        <FormLabel htmlFor="Animation">
          Animation
          <RadioGroup
            defaultValue="scale(1.05)"
            onChange={(val) => setAnimation(val)}
          >
            <HStack>
              <Radio value={`scale(1.05)`}>Expand</Radio>
              <Radio value="70%">Expand Width </Radio>
              <Radio value={`0`}>fade in/out</Radio>
            </HStack>
          </RadioGroup>
        </FormLabel>
      </VStack>
    </>
  );
};

export default AnimationALTTabTool;
