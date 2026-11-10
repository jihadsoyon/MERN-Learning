import React from 'react';

const layout = ({ children }) => {
    return (

        <div className='flex gap-3 justify-between'>
            <div className='h-screen w-[250px] bg-purple-200 text-purple-500 flex justify-center items-center font-bold text-5xl'>
                Sidebar
            </div>
            {children}
        </div>
    );
};

export default layout;