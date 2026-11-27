import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png"
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center container mx-auto my-5'>
            <div></div>
            <ul className='flex justify-between gap-3 text-gray-400'>
                <li><Navlink href="/">Home</Navlink></li>
                <li><Navlink href="/about-us">About</Navlink></li>
                <li><Navlink href="/career" className="text-red-100 font-semibold">Career</Navlink></li>
            </ul>
            <div className='flex justify-between items-center gap-3'>
                <Image src={userAvatar} width={30} height={30} alt='user avatar'/>
                <button className='btn bg-gray-900 text-white'><Link href="/login">Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;