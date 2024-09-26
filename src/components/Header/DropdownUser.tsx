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
      </Link>
    </div>
  )
}

export default DropdownUser