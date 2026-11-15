"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({path, children}) => {
    const pathname = usePathname()

    return (
        <li>
            <Link className={`font-bold mr-2 text-white ${pathname === path ? "border-b-2 border-amber-500" : ""}`} href={path}>
            {children}
            </Link>
        </li>
    );
};

export default MyLink;