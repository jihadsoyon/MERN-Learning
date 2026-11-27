import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div className='space-y-3'>
            <h2 className='text-xl font-semibold'>Login with</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn border-blue-500 text-blue-500'>Log in with <FaGoogle /></button>
                <button className='btn'>Log in with <FaGithub /></button>
            </div>
        </div>
    );
};

export default RightSidebar;