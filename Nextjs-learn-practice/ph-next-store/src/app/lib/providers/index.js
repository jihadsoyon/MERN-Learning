"use client";

import InstalledAppProvider from '@/context/installContext';
import React from 'react';

const Providers = ({children}) => {
    return (
        <InstalledAppProvider>
          {children}
        </InstalledAppProvider>
    );
};

export default Providers;