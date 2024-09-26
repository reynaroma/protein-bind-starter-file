'use client';

import { useState } from "react";
import { ChevronDown, LogOut, Settings, User2 } from "lucide-react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const DropdownUser = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        href={"#"}
        className="flex items-center gap-4"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {'John Doe'}
          </span>
          <span className="block text-xs">Drug Researcher</span>
        </span>

        <span className="h-11 w-11 rounded-full">
          <Image
            width={80}
            height={80}
            src='/images/user/user-01.png'
            alt="user"
            style={{
              width: 'auto',
              height: 'auto',
            }}
          />
        </span>
        <ChevronDown />
      </Link>

      {dropdownOpen && (
        <div className="absolute right-0 mt-4 flex w-62.5 flex-col rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            <li>
              <Link
                href="/profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <User2 />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <Settings />
                Account Settings
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropdownUser