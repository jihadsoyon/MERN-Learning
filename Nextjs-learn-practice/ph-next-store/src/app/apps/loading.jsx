import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center  items-center h-screen'>
            <div className='flex justify-center items-center'><HashLoader color="#ad46ff" /></div>
        </div>
    );
};

export default loading;