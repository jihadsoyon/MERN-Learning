import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='text-center py-5 space-y-2'>
            <Image src={logo} width={300} height={300} alt='Logo' className='mx-auto' loading="eager"/>
            <p className='text-gray-400'>Journalism Without Fear or Favour</p>
            <p className='text-gray-600'>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;