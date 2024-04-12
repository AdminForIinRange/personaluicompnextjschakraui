import {
  FormLabel,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  VStack,
  Checkbox,
  Button,
  Divider,
  Text,
  Box,
} from "@chakra-ui/react";
const Animations = () => {



  const AnimationsDataSet = [
    {
      title: "Expand",
      code: `scale(1.05)`,
    },
    { title: "FadeIn/Out", code: `0` },
    { title: "Left Shift", code: `5px` },
    { title: "Right Shift", code: `5px` },
  ];

  return (
    <>
      <HStack
        h={"100%"}
        w={"100%"}
        justify={["center", "center", "left", "left", "left"]}
        align={"center"}
      >
        <Accordion defaultIndex={[0]} allowMultiple w={"95%"} h={"100%"}>
          <Text
            fontSize={"50"}
            fontWeight={"600"}
            align={["center", "center", "left", "left", "left"]}
          >
            Animations
          </Text>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"30"} fontWeight={"400"}>
                    Basic
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <HStack
                ml={["0px", "0px", "20px", "20px", "20px"]}
                mb={["0px", "0px", "20px", "20px", "20px"]}
                flexWrap={"wrap"}
                mt={"20px"}
                align={"start"}
                justify={["center", "center", "left", "left", "left"]}
                h={"100%"}
                w={"100%"}
                gap={["10px", "10px", "20px", "20px", "30px"]}
              >
                {AnimationsDataSet.map(({ title }, index) => {
                  <Box
                    key={index}
                    transition="transform, 0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.06)",

                    }}
                    w={"175px"}
                    h={"175px"}
                    border={"1.8px solid #B5B5B5"}
                    rounded={"xl"}
                    p={"3"}
                  >
                    <HStack
                      w={"100%"}
                      h={"100%"}
                      justify={"center"}
                      align={"center"}
                    >
                      <VStack
                        w={"100%"}
                        h={"100%"}
                        justify={"center"}
                        align={"center"}
                      >
                        <Text fontSize={"24"}>{title}</Text>
                      </VStack>
                    </HStack>
                  </Box>;
                })}
                <Box
                  transition="transform, 0.3s ease-in-out"
                  _hover={{
                    opacity: 0,
                  }}
                  w={"175px"}
                  h={"175px"}
                  border={"1.8px solid #B5B5B5"}
                  rounded={"xl"}
                  p={"3"}
                >
                  <HStack
                    w={"100%"}
                    h={"100%"}
                    justify={"center"}
                    align={"center"}
                  >
                    <VStack
                      w={"100%"}
                      h={"100%"}
                      justify={"center"}
                      align={"center"}
                    >
                      <Text fontSize={"24"}>FadeIn/Out</Text>
                    </VStack>
                  </HStack>
                </Box>

                <Box
                  transition="transform, 0.3s ease-in-out"
                  _hover={{
                    marginLeft: "5px",
                  }}
                  w={"175px"}
                  h={"175px"}
                  border={"1.8px solid #B5B5B5"}
                  rounded={"xl"}
                  p={"3"}
                >
                  <HStack
                    w={"100%"}
                    h={"100%"}
                    justify={"center"}
                    align={"center"}
                  >
                    <VStack
                      w={"100%"}
                      h={"100%"}
                      justify={"center"}
                      align={"center"}
                    >
                      <Text fontSize={"24"}>Shift Left</Text>
                    </VStack>
                  </HStack>
                </Box>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </HStack>
    </>
  );
};

export default Animations;
