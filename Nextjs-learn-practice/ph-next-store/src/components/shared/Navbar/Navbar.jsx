import React from 'react';
import logoImg from "@/assets/images/logo.png"
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import MyLink from './MyLink';

const Navbar = () => {

    const navItems = [
        {
            path: "/",
            text: "Home"
        },
        {
            path: "/apps",
            text: "Apps"
        },
        {
            path: "/installation",
            text: "Install"
        },
        {
            path: "/dashboard",
            text: "Dashboard"
        }
    ]

    return (
        <nav className='shadow'>
            <div className='flex justify-between items-center bg-white py-3 w-11/12 mx-auto'>
                <Image src={logoImg} alt="" className='w-[50px]' />
                <ul className='flex justify-between items-center gap-4'>
                       {
                        navItems.map((item, ind)=> {
                            return <MyLink key={ind} href={item.path}>{item.text}</MyLink>
                        })
                       }
                </ul>
                <button className='btn bg-purple-600 text-white'><FaGithub />Contribute</button>
            </div>
        </nav>
    );
};

export default Navbar;  