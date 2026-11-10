"use client"


import React, { createContext, useState } from 'react';


export const installAppContext = createContext()



const InstalledAppProvider = ({children}) => {

    const [instaledApps, setInstalledApps] = useState([])

    const data = {
        instaledApps,
        setInstalledApps
    }

    return <installAppContext.Provider value={data}>
       {children}
    </installAppContext.Provider>
};

export default InstalledAppProvider;