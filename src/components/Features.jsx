import React from "react";
import { Card } from "../global/Card";

export const Features = () => {
  return (
    <section class="absolute py-4 top-[490px] left-[105px] w-[91vw] rounded-3xl bg-[#f4f3f6] h-[552px] hidden lg:block">
      <div class="z-20 relative text-black container mx-auto rounded-lg px-8 mt-4">
        <h1 class="mb-4 text-2xl text-[#4d4859]">Social Media</h1>
       
        <div class="grid grid-cols-4 gap-6">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <div class="z-20 relative text-black container mx-auto rounded-lg px-8 mt-4">
        <h1 class="mb-4 text-2xl text-[#4d4859]">Social Media</h1>
       
        <div class="grid grid-cols-4 gap-6">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </section>
  );
};
