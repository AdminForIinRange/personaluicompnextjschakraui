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
    { title: "🃏 Cards", path: "/components/cards" },
    { title: "📦 Modal", path: "/components/modal" },
    { title: "🖼️ frames", path: "/components/frames" },
    { title: "🏃‍♂️ Animations", path: "/components/animations" },
    { title: "📈 Charts", path: "/components/charts" },
  ];

  const PresetItems = [
    { title: "🪵 Login Form", path: "/components/loginForm" },
    { title: "🦸 Hero", path: "/components/Hero" },
    
  ];
  return (
    <div>
      <HStack align={"start"} gap={"100px"} >
      <Side CompItems={CompItems} PresetItems={PresetItems} />

      <PresetCardList CompItems={CompItems} PresetItems={PresetItems}  />
      </HStack>

    </div>
  );
};

export default ComponentsPage;
