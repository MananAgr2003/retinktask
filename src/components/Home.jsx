import React from "react";
import LeftSidebar from "../global/LeftSidebar";
import { Banner } from "./Banner";
import { Features } from "./Features";
import { Card } from "../global/Card";

export default function Home() {
  return (
    <>
      <Banner></Banner>

      <div class="mt-5 z-[22] absolute top-[265px] p-32 hidden lg:block">
        <p class="text-2xl">Most Popular Tools</p>
        <p class="text-lg">
          Explore the trending tools to create your copies fast
        </p>
      </div>
      <Features>
      </Features>
    </>
  );
}
