


import React, { useEffect, useState } from 'react';

const useApps = () => {

    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(()=> {

        const fetchApps = async () => {
            const res = await fetch('/data.json')
            const apps = await res.json()
            // console.log(apps);

            setTimeout(() => {
                setApps(apps)
                setLoading(false)
            }, 500);
        }
        fetchApps()
    }, [])


    return {apps, loading}
};

export default useApps;