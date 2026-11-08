"use client"


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({href, children}) => {

    const pathName = usePathname()
    // console.log(pathName);


    return (
        <Link  href={href}className={`text-gray-600 ${pathName === href ? "border-b-2 border-purple-500" : ""}`}>
            {children}
        </Link>
    );
};

export default MyLink;