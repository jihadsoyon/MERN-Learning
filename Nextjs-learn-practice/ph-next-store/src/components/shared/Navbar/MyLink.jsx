"use client"


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({href, children}) => {

    const pathName = usePathname()


    return (
        <Link href={href} className={`text-gray-500 ${pathName === href ? "border-b-2 border-purple-600" : ""}`}>
        {children}
        </Link>
    );
};

export default MyLink;