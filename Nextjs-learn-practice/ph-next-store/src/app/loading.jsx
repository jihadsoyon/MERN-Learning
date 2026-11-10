import React from 'react';
import { RingLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center  items-center h-screen'>
            <div className='flex justify-center items-center'><RingLoader color="#ad46ff" /></div>
        </div>
    );
};

export default loading;