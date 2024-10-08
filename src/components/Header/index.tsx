import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownMessage from "./DropdownMessage";
import { SearchIcon, SidebarOpen } from "lucide-react";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import React from "react";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-[#121212] dark:drop-shadow-xl">
      <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
        <button
          aria-controls="sidebar"
          onClick={(e) => {
            e.stopPropagation();
            props.setSidebarOpen(!props.sidebarOpen);
          }}
          className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
        >
          <span className="relative block h-5.5 w-5.5 cursor-pointer">
            <span className="block absolute right-0 h-full w-full">
              <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!w-full delay-300"}`}></span>
              <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "delay-400 !w-full"}`}></span>
              <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!w-full delay-500"}`}></span>
            </span>
            <span className="absolute right-0 h-full w-full rotate-45">
              <span className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!h-0 !delay-[0]"}`}></span>
              <span className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!h-0 delay-200"}`}
              ></span>
            </span>
          </span>
        </button>
      </div>

      <div className="hidden sm:block">
        <form action="https://formbold.com/s/unique_form_id" method="POST">
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2">
              <SearchIcon />
            </button>
            <input
              type="text"
              placeholder="Type to search..."
              className="w-full bg-transparent pl-9 font-medium focus:outline-none xl:w-125" />
          </div>
        </form>

        <div>
          <ul>

          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;