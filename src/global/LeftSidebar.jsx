
import React from 'react';
import logo from '../assets/retinkLogo.png';

//write a function to toggle the sidebar  
function Openbar(){
  console.log("hello");
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('left-0');
}
//write a function to toggle dropdown
function dropDown(){
  var submenu = document.querySelector('#submenu');
  var arrow = document.querySelector('#arrow');
  submenu.classList.toggle('hidden');
  arrow.classList.toggle('rotate-180');
}


const LeftSidebar = () => {
  return (
    <>
    <span class="absolute text-white text-4xl top-5 left-4 cursor-pointer" onClick={Openbar}>
    <i class="relative bi bi-filter-left px-2 bg-[#f1edfd] rounded-md sm:z-30 lg:-z-20"></i>
  </span>
  <div class="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
    p-2 w-[80px] overflow-y-auto text-center bg-[#f1edfd] shadow min-h-screen">
    <div class="text-black text-xl">
      <div class="p-2.5 mt-1 flex items-center rounded-md ">
        <img src={logo} alt="" class='h-10 w-10' />
        <i class="bi bi-x relative left-[5px] bottom-8 cursor-pointer lg:hidden" onClick={Openbar}></i>
      </div>
      <hr class="my-2 text-gray-600"/>

      <div>
        

        <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-white">
          <i class="bi bi-house-door relative left-1"></i>
          <span class="text-[15px] ml-4 text-gray-200"></span>
        </div>
        <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-white">
          <i class="bi bi-bookmark relative left-1"></i>
          <span class="text-[15px] ml-4 text-gray-200"></span>
        </div>
        <hr class="my-4 text-gray-600"/>
        <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-white">
          <i class="bi bi-envelope relative left-1"></i>
          <span class="text-[15px] ml-4 text-gray-200"></span>
        </div>

      
        <div class="p-2 mt-3 flex items-center rounded-md px-3 duration-300 cursor-pointer hover:bg-white absolute bottom-10">
          <i class="bi bi-box-arrow-in-right"></i>
        </div>

      </div>
    </div>
  </div>
  </>
  )
}

export default LeftSidebar
