import PresetCardList from "@/components/PresetCardList/PresetCardList";

import React from "react";
import { HStack } from "@chakra-ui/react";
import SidePanel from "@/components/SidePanel/SidePanel";
const ComponentsPage = () => {
  return (
    <div>
      <HStack align={"start"} gap={["15px", "15px", "25px", "25px", "25px"]} mt={"15px"}>
        <SidePanel />

        <PresetCardList />
      </HStack>
    </div>
  );
};

export default ComponentsPage;
