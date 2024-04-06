import PresetCardList from "@/components/PresetCardList/PresetCardList";
import Side from "@/components/Side/Side";
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

  const CompItems = [
    { title: "🃏 Cards", path: "" },
    { title: "📦 Modal", path: "" },
    { title: "🖼️ frames", path: "" },
    { title: "🏃‍♂️Animations", path: "" },
    { title: "📈 Charts", path: "" },
  ];

  const PresetItems = [
    { title: "🪵 Login Form", path: "" },
    { title: "🦸 Hero", path: "" },
    
  ];
  return (
    <div>
      <HStack align={"start"} >
      <Side CompItems={CompItems} PresetItems={PresetItems} />

      <PresetCardList />
      </HStack>

    </div>
  );
};

export default ComponentsPage;
