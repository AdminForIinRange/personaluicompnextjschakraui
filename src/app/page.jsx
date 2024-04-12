import Image from "next/image";
import styles from "./page.module.css";
import { Avatar, Box, Text } from "@chakra-ui/react";
import HeroPage from "@/components/Hero/HeroPage";
import HeroCardComps from "@/components/HeroCardComps/HeroCardComps";
import MainPageQuote from "@/components/MainPageQuote/MainPageQuote";
import PlayGround from "@/components/Playground/PlayGround";

export default function Home() {
  // Landing Page
  return (
    <>
      <HeroPage />
      <HeroCardComps />
      <PlayGround />
      <MainPageQuote />
    </>
  );
}
