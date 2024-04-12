import Image from "next/image";
import styles from "./page.module.css";
import { Avatar, Box, Text } from "@chakra-ui/react";
import Hero from "@/components/Hero/Hero.jsx";
import HeroCardComps from "@/components/HeroCardComps/HeroCardComps";
import MainPageQuote from "@/components/MainPageQuote/MainPageQuote";
import PlayGround from "@/components/Playground/PlayGround";

export default function Home() {
  // Landing Page
  return (
    <>
      <Hero />
      <HeroCardComps />
      <PlayGround />
      <MainPageQuote />
    </>
  );
}
