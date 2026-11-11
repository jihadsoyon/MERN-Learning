"use client";

import React from 'react';
import FriendProvider from '@/context/FriendContext';
import { ToastContainer } from 'react-toastify';

const Providers = ({ children }) => {
    return (
     
            <FriendProvider>
                {children}
                <ToastContainer />
            </FriendProvider>
     
    );
};

export default Providers;