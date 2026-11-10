import Link from 'next/link';
import React from 'react';


const Footer = () => {
    return (
        <footer className='bg-white border-t border-gray-200 mt-12'>
            <div className='max-w-6xl mx-auto px-6 py-8 flex flex-col items-center gap-4 text-center'>
                <h3 className='text-xl font-bold'>Keenkeeper</h3>

                <p className='text-gray-500 max-w-md'>
                    Keep your friendships strong. Track, tend, and nurture the relationships that matter most.
                </p>

                <nav className='flex gap-6 text-sm font-semibold text-gray-600'>
                    <Link href='/' className='hover:text-green-600'>Home</Link>
                    <Link href='/timeline' className='hover:text-green-600'>Timeline</Link>
                    <Link href='/stats' className='hover:text-green-600'>Stats</Link>
                </nav>

                <p className='text-gray-400 text-sm'>
                    © {new Date().getFullYear()} Keenkeeper. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;