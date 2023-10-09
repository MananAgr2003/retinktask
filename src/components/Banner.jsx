import React from "react";
import { Dropdown } from "./Dropdown";

export const Banner = () => {
  return (
    <>
      <section class="absolute py-16 px-4 lg:top-[70px] lg:left-[75px] w-[95vw] rounded-lg sm:top-[0px] sm:left-[0px]">
        <div class="z-20 relative text-black container mx-auto rounded-lg px-10">
          <h1 class="mb-4 text-5xl text-[#4d4859]">Hey James!</h1>
          <Dropdown></Dropdown>

          <p class="leading-normal">
            Lets create something awesome today ✨💫
          </p>

          <button
            href="#"
            class="inline-block bg-white border-2 text-[#7d58e9] border-[#7d58e9] hover:bg-[#7d58e9] hover:text-white mt-24 py-2 px-8 rounded-[50px]"
          >
            Start Creating
          </button>
        </div>
        <div class="absolute inset-0 h-auto z-10 lg:p-8 sm:p-4">
          <img
            src="https://i.ibb.co/fGgDhdm/Frame-24234894.png"
            alt=""
            class="h-full w-full object-fit-cover lg:rounded-3xl"
          />
        </div>
        <div class="absolute right-[155px] top-[155px] flex-col z-[21] backdrop-blur-md hidden lg:flex">
          <p class="text-black mt-4">
          You should have more engagement by 6pm today, try posting then.  📆 
          </p>{" "}
          <p class="text-black mt-4">Try our SEO optimization tool to increase engagement by 40% 🔥
          </p>
        </div>
      </section>
    </>
  );
};
