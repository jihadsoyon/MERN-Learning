import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='text-center space-y-5 my-5'>
            <h2 className='text-3xl font-bold'>Friends to keep close in your life</h2>
            <p className='text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and <br /> nurture the relationships that matter most.</p>
            <div className='flex justify-center'>
                <button className=' btn bg-green-600 text-white'><FaPlus />Add a friend</button>
            </div>

             <div className='flex justify-center items-center gap-4'>
                <div className='shadow border border-gray-300 rounded-xl px-15 py-5'>
                    <p className='font-bold'>12</p>
                    <p className='text-gray-500'>Total Friends</p>
                </div>
                <div className='shadow border border-gray-300 rounded-xl px-15 py-5'>
                    <p className='font-bold'>6</p>
                    <p className='text-gray-500'>On Track</p>
                </div>
                <div className='shadow border border-gray-300 rounded-xl px-15 py-5'>
                    <p className='font-bold'>6</p>
                    <p className='text-gray-500'>Need Attention</p>
                </div>
                <div className='shadow border border-gray-300 rounded-xl px-15 py-5'>
                    <p className='font-bold'>12</p>
                    <p className='text-gray-500'>Interactions This Month</p>
                </div>
             </div>

        </div>
    );
};

export default Hero;