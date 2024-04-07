import NotFound from "@/app/not-found";
import Card from "@/components/presets/Card";
import LoginForm from "@/components/presets/LoginForm";
import React from "react";

import {
  HStack,

} from "@chakra-ui/react";
import Side from "@/components/SidePanel/SidePanel";
const SlugPrams = ({ params }) => {
  if (params.slug === "cards") {
    return (
      <div>
        <Card />
      </div>
    );
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
  return (
    <div>
      <HStack align={"start"} gap={"100px"}>
        <Side />
        <SlugPrams params={params} />
      </HStack>
    </div>
  );
};

export default Single;
