import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-[80vh] flex flex-col justify-center items-center bg-white px-4'>
            <div className='relative w-14 h-14 mb-6'>
                <div className='absolute inset-0 rounded-full border-4 border-gray-200'></div>
                <div className='absolute inset-0 rounded-full border-4 border-red-600 border-t-transparent animate-spin'></div>
            </div>

            <h1 className='font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
                The Dragon News
            </h1>
        </div>
    );
};

export default Loading;