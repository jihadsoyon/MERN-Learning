// "use client"


import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import AppCard from '@/components/ui/Appcard';
import { RingLoader } from 'react-spinners';
import Link from 'next/link';




const appsPromise = async function(){
    const res = await fetch("http://localhost:3000//data.json")
    const data = await res.json()
    return data
}




const AllApps = async({from}) => {

    const apps = await appsPromise()
    
    return (
        <div className='container mx-auto my-5'>
            <div className='text-center my-5'>
                <h2 className='text-purple-500 text-4xl font-bold'>{from === "home" ? "Trending Apps" : "All Apps"}  </h2>
                <p className=' text-gray-500 max-w-[40%] mx-auto my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit id, corrupti doloribus quasi magni perspiciatis distinctio, dicta ipsam, nesciunt nobis magnam blanditiis!</p>
            </div>
            {
                 
            <div className='grid md:grid-cols-3 gap-8'>
                    {
                        apps.slice(0, from === "home" ? 9 : apps.length-1).map(app => <AppCard key={app.id} app={app} />)
                    }
                </div>
            }
            <div className='flex justify-center my-5'>
                {
                    from === "home" ? <Link href={"/apps"}>
                    <button className='bg-purple-600 text-white p-3 rounded cursor-pointer font-semibold flex items-center gap-1'>View All <FaArrowAltCircleRight />
                    </button>
                </Link> : ""
                }
            </div>

        </div>
    );
};

export default AllApps;