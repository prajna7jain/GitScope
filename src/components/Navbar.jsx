import { useEffect, useState } from "react";

export default function Navbar() {

  return (
    <nav className="bg-[#010409] w-full px-3 py-4 sm:px-7 sm:py-7 flex flex-row justify-around items-center gap-2 sm:gap-5">
      <div id="logo" className="w-fit flex items-center gap-2 sm:gap-5">
        <img
          src="Assests/Icon.svg"
          alt="Logo"
          className="w-6 sm:w-10"
        />
        <h1 className="text-lg sm:text-2xl font-bold">RepoRadar</h1>
      </div>
      <div
        id="btn-options"
        className="flex flex-row items-center gap-2 sm:gap-10"
      >
        <button className="p-1 sm:p-2 rounded-lg flex gap-1 sm:gap-2 items-center cursor-pointer">
          <i className="fa-solid fa-star text-base sm:text-xl"></i>
          <span className="text-base sm:text-xl font-semibold">
            <a href="https://github.com/ig-ayush/RepoRadar" target="_blank" rel="noopener noreferrer">
              Star on Github
            </a>
          </span>
        </button>
      </div>
    </nav>
  );
}