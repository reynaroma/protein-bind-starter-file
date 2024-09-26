import { useState } from "react";
import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);
  
  return (
    <li className="relative">DropdownMessage</li>
  )
}

export default DropdownMessage