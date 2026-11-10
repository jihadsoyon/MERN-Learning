"use client"


import React, { useContext } from 'react';
import Image from 'next/image';
import { installAppContext } from '@/context/installContext';

const InstallPage = () => {
    const { instaledApps, setInstalledApps } = useContext(installAppContext)

    const handleInstall = (app) => {

        const restApps = instaledApps.filter(newApp=> newApp.id !== app.id)
        setInstalledApps(restApps)

    }


    return (
        <div className='container mx-auto my-5'>
            {
                instaledApps.length === 0 ? <h2 className='bg-gray-500 text-center py-5 text-white'>No install app found</h2> :
                    <div className=''>
                        <h2 className='font-bold text-5xl text-purple-600'>Installed apps</h2>
                        {
                            instaledApps.map((app, ind) => <div key={ind}>
                                <div className='flex justify-between items-center bg-gray-300 my-4 p-5 border border-5 border-gray-500 rounded-2xl'>
                                    <div>
                                        <Image src={app.image} alt="" width={400} height={300} />
                                        <h2 className='font-bold'>{app.title}</h2>
                                    </div>
                                    <div>
                                        <button className='btn btn-error text-white' onClick={() => handleInstall(app)}>Uninstall</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
            }
        </div>
    );
};

export default InstallPage;