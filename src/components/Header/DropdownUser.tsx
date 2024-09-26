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
      ></Link>
    </div>
  )
}

export default DropdownUser