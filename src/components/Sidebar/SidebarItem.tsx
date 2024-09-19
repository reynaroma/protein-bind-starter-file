import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// components
import SidebarDropdown from './SidebarDropdown';

const SidebarItem = ({ item, pageName, setPageName }: any) => {

  const handleClick = () => {
    // 
    const updatePageName = pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : '';
    return setPageName(updatePageName);
  };

  const pathname = usePathname();

  return (
    <div>SidebarItem</div>
  )
}

export default SidebarItem