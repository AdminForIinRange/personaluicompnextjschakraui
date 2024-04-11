"use client";
import PresetCardList from "@/components/PresetCardList/PresetCardList";

import React from "react";
import { HStack, Box, useMediaQuery } from "@chakra-ui/react";
import SidePanel from "@/components/SidePanel/SidePanel";
const ComponentsPage = () => {
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  return (
    <div>
      <HStack

        align={"start"}
        gap={["15px", "15px", "25px", "25px", "25px"]}
        mt={"15px"}
      >
        {!isTablet ? <SidePanel /> : null}

        <PresetCardList />
      </HStack>
    </div>
  );
};

export default ComponentsPage;
