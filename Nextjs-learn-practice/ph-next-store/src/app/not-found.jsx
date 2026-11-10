import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='flex flex-col justify-center h-screen items-center gap-4 bg-red-500'>
            <h2 className='text-xl font-semibold text-white'>The page is not found</h2>
            <Link href={'/'}>
                <button className='btn'>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;