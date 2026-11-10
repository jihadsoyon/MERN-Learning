import InstallToggleBtn from '@/components/apps/InstallToggleBtn';
import Image from 'next/image';
import React from 'react';


const appsPromise = async function(){
    const res = await fetch("http://localhost:3000//data.json")
    const data = await res.json()
    return data
}


const AppsDetails = async({params}) => {

    
    const apps = await appsPromise()

    const {id} = await params
    
    const expectedApp = apps.find(app=> app.id == id)
    console.log(expectedApp);

    return (
        <div>
            <div className='container mx-auto shadow p-5 my-5 text-center'>
            <Image src={expectedApp.image} alt={expectedApp.companyName} width={300} height={300} className=' mx-auto' />
            <h2 className="font-bold text-6xl">{expectedApp.companyName}</h2>
            <InstallToggleBtn expectedApp={expectedApp}/>
        </div>
        </div>
    );
};

export default AppsDetails;