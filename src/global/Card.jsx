import React from "react";

export const Card = () => {
  return (
    <>
      <a href="#" class="group relative block h-64 sm:h-32 lg:h-48">
        <span class="absolute inset-0 border-2 border-dashed border-black rounded-md"></span>

        <div class="relative flex h-full transform items-end shadow-md bg-white transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md">
          <div class="p-2 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 relative top-[6px] right-[10px] sm:h-14 sm:w-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h2 class="mt-4 text-lg font-medium sm:text-xl">
             Blog Writing
            </h2>
            <h2 class="mt-2 text-lg font-medium sm:text-sm">
            Generate the best blog post to fit
            </h2>
          </div>

          <div class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          

            <p class="mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             
            </p>

            <p class="mt-8 font-bold">Read more</p>
          </div>
        </div>
      </a>
    </>
  );
};
