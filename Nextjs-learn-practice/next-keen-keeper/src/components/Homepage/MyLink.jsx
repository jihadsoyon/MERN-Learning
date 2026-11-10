"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({ path, children, icon }) => {
    const pathName = usePathname();
    const isActive = pathName === path;

    return (
        <li>
            <Link
                href={path}
                className={`btn mr-2 font-semibold ${isActive ? "bg-green-600 text-white" : ""}`}
            >
                {icon}
                <span>{children}</span>
            </Link>
        </li>
    );
};

export default MyLink;