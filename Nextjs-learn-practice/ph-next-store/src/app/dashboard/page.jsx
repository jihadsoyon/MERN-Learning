
"use client";
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

import useApps from '../../hooks/useApps';
import { installAppContext } from '@/context/installContext';

const DashboardPage = () => {


    const {instaledApps} = useContext(installAppContext)
    const {apps} = useApps()

    const unInstallApps = apps.length - instaledApps.length

    const data = [
    { name: 'instaledApps', value: instaledApps.length, fill: "#0088Fe" },
    { name: 'Uninstalled', value: unInstallApps, fill: "#FFBB28" },
];


    return (
        <div className='flex justify-center my-20 shadow border-gray-200 w-5/12 mx-auto'>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
            <Tooltip />
            <Legend />
            </PieChart>
        </div>
    );
};

export default DashboardPage;