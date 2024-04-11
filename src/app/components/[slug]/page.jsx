"use client";
import NotFound from "@/app/not-found";
import Card from "@/components/presets/Card";
import LoginForm from "@/components/presets/AuthForm";
import React from "react";

import { HStack, useMediaQuery } from "@chakra-ui/react";
import SidePanel from "@/components/SidePanel/SidePanel";
import NotMobileCompatible from "@/components/DevlopmentNotice/NotMobileCompatible";

const SlugPrams = ({ params }) => {
  if (params.slug === "cards") {
    return <Card />;
  } else if (params.slug === "modal") {
    return (
      <div>
        <hi>Modal</hi>
      </div>
    );
  } else if (params.slug === "frames") {
    return (
      <div>
        <hi>Frames</hi>
      </div>
    );
  } else if (params.slug === "animations") {
    return (
      <div>
        <hi>Animations</hi>
      </div>
    );
  } else if (params.slug === "charts") {
    return (
      <div>
        <hi>Charts</hi>
      </div>
    );
  } else if (params.slug === "loginForm") {
    return (
      <div>
        <LoginForm />
      </div>
    );
  } else if (params.slug === "Hero") {
    return (
      <div>
        <hi>Hero</hi>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

const Single = ({ params }) => {
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  const [isMobile] = useMediaQuery("(max-width: 425px)");
  return (
    <div>
      <HStack
        align={"start"}
        gap={["15px", "15px", "25px", "25px", "25px"]}
        mt={"15px"}
      >
        {!isTablet ? <SidePanel /> : null}

      {!isMobile ?  <SlugPrams params={params} /> : <NotMobileCompatible />}
      </HStack>
    </div>
  );
};

export default Single;
