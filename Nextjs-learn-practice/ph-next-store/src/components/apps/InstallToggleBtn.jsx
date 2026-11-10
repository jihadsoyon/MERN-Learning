"use client"

import { installAppContext } from '@/context/installContext';
import React, { useContext } from 'react';
import { MdInstallDesktop } from 'react-icons/md';
import { toast } from 'react-toastify';

const InstallToggleBtn = ({expectedApp}) => {

    const {instaledApps, setInstalledApps} = useContext(installAppContext)

    const handleInstallNow = () => {
        const existApps = instaledApps.find(app => app.id == expectedApp.id)
        if(existApps){
        toast.error(`${expectedApp.title} already installed`)
        return
        }
        setInstalledApps([...instaledApps, expectedApp])
        toast.success(`${expectedApp.title} is installing`)
    }
   console.log(instaledApps);

    return (
        <button className='btn bg-purple-600 text-white my-5 hover:bg-purple-800' onClick={handleInstallNow}>Install Now <MdInstallDesktop /></button>
    );
};

export default InstallToggleBtn;