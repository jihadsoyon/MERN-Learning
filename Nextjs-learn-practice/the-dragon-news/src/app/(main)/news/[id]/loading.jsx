import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-[80vh] flex flex-col justify-center items-center bg-white px-4'>
            <div className='relative w-14 h-14 mb-6'>
                <div className='absolute inset-0 rounded-full border-4 border-gray-200'></div>
                <div className='absolute inset-0 rounded-full border-4 border-red-600 border-t-transparent animate-spin'></div>
            </div>        

            <p className='text-gray-500 text-sm tracking-wide mb-6'>
                Loading the latest stories...
            </p>


        </div>
    );
};

export default Loading;