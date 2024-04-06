import PresetCardList from "@/components/PresetCardList/PresetCardList";
import Side from "@/components/SidePanel/SidePanel";
import React from "react";
import {
  HStack,
  Button,
  Text,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Spacer,
  ButtonGroup,
  useMediaQuery,
  Divider,
  Box,
  VStack,
} from "@chakra-ui/react";
const ComponentsPage = () => {


  return (
    <div>
      <HStack align={"start"} gap={"100px"} >
      <Side  />

      <PresetCardList   />
      </HStack>

    </div>
  );
};

export default ComponentsPage;
