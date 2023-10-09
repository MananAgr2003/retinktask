import React from "react";

function showDropdownOptions() {
  document.getElementById("options").classList.toggle("hidden");
  document.getElementById("arrow-up").classList.toggle("hidden");
  document.getElementById("arrow-down").classList.toggle("hidden");
}

export const Dropdown = () => {
  return (
      <div class="flex-none p-2 z-[25] absolute right-[55px] top-[0px]">
        <button
          onClick={showDropdownOptions}
          class="flex flex-row justify-between w-48 px-2 py-2 text-gray-700 bg-white border-2 border-white rounded-md shadow focus:outline-none focus:border-blue-600"
        >
          <span class="select-none">Zara Ventures</span>

          <svg
            id="arrow-down"
            class="hidden w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            id="arrow-up"
            class="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          id="options"
          class="hidden w-48 py-2 mt-2 bg-white rounded-lg shadow-xl z-[22]"
        >
          <a
            href="#"
            class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white z-[22]"
          >
            Item 1
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white z-[22]"
          >
            Item 2
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Item 3
          </a>
        </div>
      </div>
    
  );
};
