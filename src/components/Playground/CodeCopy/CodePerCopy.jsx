import React from "react";

const CodePerCopy = ({ name }) => {
  const BasicLogin = `
  
  const [showPassword, setShowPassword] = useState(false);
  
  
  <Box
  h={"100%"}
  border={"1.8px solid #B5B5B5"}
  rounded={"xl"}
  px={["20px", "20px", "20px", "30px", "30px"]}
  py={10}
>
  <VStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>
    <Text
      fontSize={["26", "36", "36", "46", "46"]}
      fontWeight={"700"}
      textAlign={"center"}
    >
      Login to your account
    </Text>
    <Text
      fontSize={["16", "18", "18", "20", "20"]}
      fontWeight={"300"}
      textAlign={"center"}
      as={"span"}
    >
      Dont Have an Account
      <Text
        color={"blue.400"}
        cursor={"pointer"}
        as={"span"}
        fontWeight={"500"}
      >
        {" "}
        Sign Up?{" "}
      </Text>
    </Text>

    <Box
      px={5}
      py={5}
      mt={"25px"}
      w={["330px", "400px", "400px", "500px", "500px"]}
      h={"100%"}
      rounded={"xl"}
      boxShadow={"0 1px 5px gray"}
      align={"left"}
    >
      <FormLabel htmlFor="email"> Email</FormLabel>
      <Input
        id="email"
        type="email"
        w={"100%"}
        autoComplete="current-email"
        required
      />
      <FormLabel mt={"20px"} htmlFor="password">
        password
      </FormLabel>
      <Input
        id="password"
        type={showPassword ? "text" : "password"} // Show password if showPassword is true
        required
        autoComplete="current-password"
        style={{ width: "100%" }}
      ></Input>

      <HStack mt={"15px"} justify="space-between">
        <Checkbox>Remember me</Checkbox>
        <Button variant="link" size="sm">
          Forgot password?
        </Button>
      </HStack>

      <Button colorScheme="whatsapp" mt={"20px"} w={"100%"} type="submit">
        Login
      </Button>

      <HStack mt={"20px"}>
        <Divider />
        <Text whiteSpace="nowrap" color="fg.muted">
          Or
        </Text>
        <Divider />
      </HStack>
      <HStack
        mt={"15px"}
        justify={"center"}
        align={"center"}
        mb={"20px"}
        gap={"10px"}
      >
        <Button colorScheme="whatsapp" w={"20%"}>
          <FaGoogle color="white" size={"20px"} />
        </Button>
        {/* allowed btn to be an anchor */}
       
      </HStack>
    </Box>
  </VStack>
</Box> `;

  const BasicSignUp = `
  
const [showPassword, setShowPassword] = useState(false);


<Box
h={"100%"}
border={"1.8px solid #B5B5B5"}
rounded={"xl"}
px={["20px", "20px", "20px", "30px", "30px"]}
py={10}
>
<VStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>
  <Text
    fontSize={["26", "36", "36", "46", "46"]}
    fontWeight={"700"}
    textAlign={"center"}
  >
    Create an account
  </Text>
  <Text
    fontSize={["16", "18", "18", "20", "20"]}
    fontWeight={"300"}
    textAlign={"center"}
    as={"span"}
  >
    Dont Have an Account
    <Text
      color={"green.400"}
      cursor={"pointer"}
      as={"span"}
      fontWeight={"500"}
    >
      {" "}
      Login?{" "}
    </Text>
  </Text>

  <Box
    px={5}
    py={5}
    mt={"25px"}
    w={["330px", "400px", "400px", "500px", "500px"]}
    h={"100%"}
    rounded={"xl"}
    boxShadow={"0 1px 5px gray"}
    align={"left"}
  >
    <FormLabel htmlFor="email"> Email</FormLabel>
    <Input
      id="email"
      type="email"
      w={"100%"}
      autoComplete="current-email"
      required
    />

    <FormLabel mt={"20px"} htmlFor="password">
      password
    </FormLabel>
    <Input
      id="password"
      type={showPassword ? "text" : "password"} // Show password if showPassword is true
      required
      autoComplete="current-password"
      style={{ width: "100%" }}
    ></Input>

    <FormLabel mt={"20px"} htmlFor="password">
      Retype password
    </FormLabel>
    <Input
      id="rePassword"
      type="password"
      required
      autoComplete="current-password"
      w={"100%"}
    />

    <HStack mt={"15px"} justify="space-between">
      <Checkbox>Remember me</Checkbox>
    </HStack>

    <Button colorScheme="whatsapp" mt={"20px"} w={"100%"} type="submit">
      Sign Up
    </Button>

    <HStack mt={"20px"}>
      <Divider />
      <Text whiteSpace="nowrap" color="fg.muted">
        Or
      </Text>
      <Divider />
    </HStack>
    <HStack
      mt={"15px"}
      justify={"center"}
      align={"center"}
      mb={"20px"}
      gap={"10px"}
    >
      <Button colorScheme="whatsapp" w={"20%"}>
        <FaGoogle color="white" size={"20px"} />
      </Button>
      {/* allowed btn to be an anchor */}
     
    </HStack>
  </Box>
</VStack>
</Box> `;

  const SimpleCard = ` 
  import { HiArrowLongRight } from "react-icons/hi2";
  
  
  <Box

  w={["260px", "260px", "260px", "280px", "290px"]}
  h={["200px", "200px", "250px", "290px", "310px"]}
  border={"1.8px solid #B5B5B5"}
  rounded={"xl"}
  p={["2", "2", "2", "3", "4"]}
>
  <VStack align={"left"} w={"100%"} h={"100%"}>
    <HStack>
      <Text
        w={"70%"}
        fontSize={["22px", "22px", "28px", "28px", "32px"]}
        fontWeight={"700"}
        textAlign={"left"}
      >
        The Dolomites
      </Text>
    </HStack>

    <HStack>
      <Text fontSize={["12px", "12px", "12px", "12px", "16px"]} 
      fontWeight={"500"} textAlign={"left"}>
        The Dolomites, also known as the Dolomite Mountains, Dolomite Alps
        or Dolomitic Alps, are a mountain range in northeastern Italy.
      </Text>
    </HStack>
    <HStack
      cursor={"pointer"}
      w={"100%"}
      h={"100%"}
      justify={"end"}
      align={"end"}
      fontWeight={"500"}
      transition="transform, 0.3s ease-in-out"
      _hover={{
        marginLeft: "5px",
      }}
    >
      <HStack align={"center"} mr={"5px"}>
        <Text fontSize={"12px"} as={"span"}>
          Learn more
        </Text>{" "}
        <HiArrowLongRight fontSize={"30px"} />
      </HStack>
    </HStack>
  </VStack>
</Box> `;

  const WideSimpleCard = `  <Box
  w={["300px", "300px", "350px", "370px", "390px"]}
  h={["200px", "200px", "250px", "290px", "310px"]}
  border={"1.8px solid #B5B5B5"}
  rounded={"xl"}
  p={["2", "2", "2", "3", "4"]}
>
  <VStack justify={"left"} align={"inherit"} w={"100%"} h={"100%"}>
    <HStack w={"50%"}>
      <Text
        align={"center"}
        fontSize={["22px", "22px", "28px", "28px", "32px"]}
        fontWeight={"700"}
        textAlign={"left"}
      >
        Dolomites
      </Text>
    </HStack>

    <HStack w={"100%"}>
      <Text
        align={"center"}
        fontSize={["12px", "12px", "12px", "12px", "16px"]}
        fontWeight={"500"}
        textAlign={"left"}
      >
        The Dolomites, also known as the Dolomite Mountains, Dolomite Alps
        or Dolomitic Alps, are a mountain range in northeastern Italy.
      </Text>
    </HStack>
    <HStack w={"100%"} h={"100%"}>
      <Box
        w={"100%"}
        h={"100%"}
        bgColor={"black"}
        rounded={"xl"}
        bgImage={
          "https://source.unsplash.com/brown-wooden-house-on-green-grass-field-
          near-snow-covered-mountain-during-daytime-ZI9zYWhLyy0"
        }
        bgSize={"cover"}
        bgPos={["top right", " top right", "top", "top", "top"]}
      ></Box>
    </HStack>
  </VStack>
</Box>`;

  const ImageSimpleCard = ` import { HiArrowLongRight } from "react-icons/hi2";
  
  <Box
  w={["360px", "360px", "450px", "550px", "650px"]}
  h={["250px", "250px", "250px", "290px", "310px"]}
    border={"1.8px solid #B5B5B5"}
    rounded={"xl"}
    p={["2", "2", "2", "3", "4"]}
  >
    <HStack justify={"left"} align={"start"} w={"100%"} h={"100%"}>
      <HStack w={"100%"} h={"100%"}>
        <Box
          w={"100%"}
          h={"100%"}
          bgColor={"black"}
          rounded={"xl"}
          bgImage={
            "https://source.unsplash.com/aurora-borealis-UZOpP-YHe9Q"
          }
          bgSize={"cover"}
          bgPos={["top right", " top right", "top", "top", "top"]}
        ></Box>
      </HStack>

      <VStack w={"100%"} h={"100%"} align={"left"} px={2}>
        <Text
          align={"center"}
          fontSize={["22px", "22px", "28px", "28px", "32px"]}
          fontWeight={"700"}
          textAlign={"left"}
        >
          Aurora borealis 
        </Text>
        <Text
          align={"center"}
          fontSize={["10px", "10px", "12px", "12px", "16px"]}
          fontWeight={"500"}
          textAlign={"left"}
        >
          When the Suns energy meets Earths magnetic field.
          <br />
          They dance together and send tiny particles toward the poles,
          creating a magical light show in the sky
        </Text>
        <HStack
          cursor={"pointer"}
          w={"100%"}
          h={"100%"}
          justify={"end"}
          align={"end"}
          fontWeight={"500"}
          transition="transform, 0.3s ease-in-out"
          _hover={{
            marginLeft: "5px",
          }}
        >
          <HStack align={"center"} mr={"5px"}>
            <Text fontSize={["10px", "10px", "12px", "12px", "16px"]} as={"span"}>
              Learn more
            </Text>{" "}
            <HiArrowLongRight fontSize={"30px"} />
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  </Box> `;

  const CollageCard = `   const bgImageBottom = [
    "https://source.unsplash.com/above-cloud-photo-of-blue-skies-yQorCngxzwI",
    "https://source.unsplash.com/blue-body-of-water-under-blue-and
    -white-sky-during-daytime-ueGaQiHV86o",
  ];
  

  <Box
  w={["360px", "360px", "450px", "550px", "650px"]}
 h={["200px", "200px", "250px", "290px", "310px"]}
border={"1.8px solid #B5B5B5"}
rounded={"xl"}
p={["2", "2", "2", "3", "4"]}
>
<VStack w={"100%"} h={"100%"} align={"left"} px={2}>
 <HStack justify={"left"} align={"start"} w={"100%"} h={"100%"}>
   <HStack
     w={"100%"}
     h={"100%"}
     transition="transform, 0.3s ease-in-out"
     zIndex={"0"}
     _hover={{
       height: "210%",
     }}
   >
     <Box
       w={"100%"}
       h={"100%"}
       bgColor={"black"}
       rounded={"xl"}
       bgImage={
         "https://source.unsplash.com/aerial-photography-of-mountain-
         range-covered-with-snow-under-white-and-blue-sky-
         at-daytime-9wg5jCEPBsw"
       }
       bgSize={"cover"}
       bgPos={[
         "bottom right",
         " bottom right",
         "bottom",
         "bottom",
         "bottom",
       ]}
     ></Box>
   </HStack>
 </HStack>
 <HStack justify={"left"} align={"start"} w={"100%"} h={"100%"}>
   {bgImageBottom.map((image, index) => (
     <HStack
       key={index}
       w={"100%"}
       h={"100%"}
       transition="transform, 0.3s ease-in-out"
       _hover={{
         width: "300%",
       }}
     >
       <Box
         w={"100%"}
         h={"100%"}
         bgColor={"black"}
         rounded={"xl"}
         bgImage={image}
         bgSize={"cover"}
         bgPos={[
           "bottom right",
           " bottom right",
           "bottom",
           "bottom",
           "bottom",
         ]}
       ></Box>
     </HStack>
   ))}
 </HStack>
</VStack>
</Box> `;

  const HrzonCard = ` 
  const bgImage = [
    "https://source.unsplash.com/pathway-between-green-trees-F_
    hft1Wiyj8",
    "https://source.unsplash.com/birds-eye-view-photograph-of-
    green-mountains-01_igFr7hd4",
    "https://source.unsplash.com/aerial-photo-of-green-trees-ugnrXk1129g",
    "https://source.unsplash.com/photo-of-green-plants-7APM4Y
    yW_JU",
  ];

      <Box
         w={["360px", "360px", "450px", "550px", "650px"]}
          h={["200px", "200px", "250px", "290px", "310px"]}
        border={"1.8px solid #B5B5B5"}
        rounded={"xl"}
        p={["2", "2", "2", "3", "4"]}
      >
        <HStack w={"in"} h={"100%"} align={"left"} px={2}>
          <HStack justify={"left"} align={"start"} w={"100%"} h={"100%"}>
            {bgImage.map((image, index) => (
              <HStack
                key={index}
                w={"100%"}
                h={"100%"}
                transition="transform, 0.3s ease-in-out"
                _hover={{
                  width: "200%",
                }}
              >
                <Box
                  w={"100%"}
                  h={"100%"}
                  bgColor={"black"}
                  rounded={"xl"}
                  bgImage={image}
                  bgSize={"cover"}
                  bgPos={"center"}
                ></Box>
              </HStack>
            ))}
          </HStack>
        </HStack>
      </Box>`;

  const TicketCard = ` 

  import { HiArrowLongRight } from "react-icons/hi2";

  <Box
  w={["260px", "260px", "260px", "280px", "350px"]}
  h={["260px", "260px", "260px", "260px", "310px"]}
 border={"1.8px solid #B5B5B5"}
 rounded={"xl"}
>
 <VStack justify={"left"} align={"inherit"} w={"100%"} h={"100%"}>
   <HStack w={"100%"} p={["2", "2", "2", "3", "4"]}>
     <Text
       align={"center"}
       fontSize={["22px", "22px", "28px", "28px", "32px"]}
       fontWeight={"700"}
       textAlign={"left"}
     >
       Ticket{" "}
       <Text fontFamily={"sans-serif"} as={"span"}>
         #123{" "}
       </Text>
     </Text>

     <Spacer />
     <VStack>
       <Text
         fontFamily={"sans-serif"}
         align={"right"}
         fontSize={["12px", "12px", "12px", "12px", "16px"]}
         textAlign={"right"}
       >
         01/01/2024
         <br />
         10:12:59
       </Text>
     </VStack>
   </HStack>

   <VStack w={"100%"} py={"8px"} px={"4"}>
     <Text
       align={"center"}
       fontSize={["12px", "12px", "12px", "12px", "16px"]}
       fontWeight={"500"}
       textAlign={"left"}
     >
       The printer on Floor 2 has ceased working. Assistance would be
       greatly appreciated to resolve the issue.
     </Text>

     <HStack
       w={"100%"}
       justify={"left"}
       align={"left"}
       gap={"12px"}
       mt={"5px"}
       fontSize={["12px", "12px", "12px", "12px", "16px"]}
     >
       <Badge p={"5px"} borderRadius={"5px"} colorScheme="green">
         IT Support
       </Badge>
       <Badge p={"5px"} colorScheme="red" borderRadius={"5px"}>
         Urgent
       </Badge>
       <Badge p={"5px"} colorScheme="purple" borderRadius={"5px"}>
         Printer
       </Badge>
     </HStack>
   </VStack>
   <VStack justify={"end"} align={"end"} h={"100%"} w={"100%"}>
     <Box w={"100%"} h={"50px"} borderTop={"1.8px solid #B5B5B5"}>
       <HStack
         justify={"left"}
         align={"center"}
         w={"100%"}
         h={"100%"}
         px={"4"}
       >
         <Text
           align={"center"}
           fontSize={"17px"}
           fontWeight={"500"}
           fontFamily={"sans-serif"}
         >
           ID: 123
         </Text>
         <Text
           align={"center"}
           fontSize={"17px"}
           fontWeight={"500"}
           fontFamily={"sans-serif"}
         >
           User: ABC
         </Text>
       </HStack>
     </Box>
   </VStack>
 </VStack>
</Box>`;

  const renderCodeCopy = () => {
    if (name === "TicketCard") {
      return TicketCard;
    } else if (name === "SimpleCard") {
      return SimpleCard;
    } else if (name === "WideSimpleCard") {
      return WideSimpleCard;
    } else if (name === "CollageCard") {
      return CollageCard;
    } else if (name === "HrzonCard") {
      return HrzonCard;
    } else if (name === "ImageSimpleCard") {
      return ImageSimpleCard;
    } else if (name === "ImageCollageCard") {
    } else if (name === "BasicSignUp") {
      return BasicSignUp;
    } else if (name === "BasicLogin") {
      return BasicLogin;
    } else {
      return "No Code Found";
    }
  };

  return <>{renderCodeCopy()}</>;
};

export default CodePerCopy;
