"use client";
import NotFound from "@/app/not-found";
import Card from "@/components/presets/Card";
import LoginForm from "@/components/presets/AuthForm";
import React from "react";

import { HStack, useMediaQuery } from "@chakra-ui/react";
import SidePanel from "@/components/SidePanel/SidePanel";
import NotMobileCompatible from "@/components/DevlopmentNotice/NotMobileCompatible";

import Animations from "@/components/presets/Animations";

const SlugPrams = ({ params }) => {
  if (params.slug === "cards") {
    return  <Card /> 
  } else if (params.slug === "modal") {
    return (
      <div>
        <hi>Modal</hi>
      </div>
    );
  
  } else if (params.slug === "animations") {
    return (
      <Animations />
    );
  
  } else if (params.slug === "loginForm") {
    return (
    
        <LoginForm />
  
    );
  
  } else {
    return <NotFound />;
  }
};

const Single = ({ params }) => {
  const [isTablet] = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <HStack
          align={"start"}
        
          mt={"15px"}
      >
        {!isTablet ? <SidePanel /> : null}

      <SlugPrams params={params} />
      </HStack>
    </div>
  );
};

export default Single;
