import Image from 'next/image';
import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';

const FoodCard = ({ food }) => {
    return (
        <div className='bg-gray-700 rounded-2xl p-4 flex flex-col gap-3 w-full'>
            <div className='flex justify-center'>
                <Image
                    src={food.image_link}
                    alt={food.dish_name}
                    width={300}
                    height={300}
                    className='rounded-full object-cover border-4 border-gray-600'
                />
            </div>

            <h3 className='text-sm font-semibold text-white truncate'>{food.dish_name}</h3>

            <div className='flex justify-between items-center'>
                <p className='text-white font-semibold'>৳{food.price}</p>
                <FaHeart className='text-pink-500' />
            </div>

            <div className='flex justify-between items-center'>
                <button className='bg-blue-100 text-gray-700 text-xs font-semibold px-4 py-1 rounded-full'>
                    Details ›
                </button>
                <div className='flex items-center gap-1 text-white text-sm'>
                    <FaStar className='text-yellow-400' />
                    <span>{food.rating}</span>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;