"use client";

import React, { useContext, useState } from 'react';
import { FriendContext } from '@/context/FriendContext';
import { IoIosCall } from 'react-icons/io';
import { MdOutlineTextsms } from 'react-icons/md';
import { FaVideo } from 'react-icons/fa';

const getMethodStyle = (method) => {
    if (method === "call") {
        return { Icon: IoIosCall, iconClass: "text-green-600", bgClass: "bg-green-100" };
    }
    if (method === "text") {
        return { Icon: MdOutlineTextsms, iconClass: "text-blue-600", bgClass: "bg-blue-100" };
    }
    return { Icon: FaVideo, iconClass: "text-purple-600", bgClass: "bg-purple-100" };
};

const Timeline = () => {
    const { timeline } = useContext(FriendContext);
    const [sortingType, setSortingType] = useState("all");

    const filteredTimeline = sortingType === "all"
        ? timeline
        : timeline.filter(entry => entry.method === sortingType);

    return (
        <div className='w-5/12 mx-auto'>
            <div className='flex justify-center'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort by ⬇️</div>
                    <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingType("all")}><a>All</a></li>
                        <li onClick={() => setSortingType("call")}><a>Call</a></li>
                        <li onClick={() => setSortingType("text")}><a>Text</a></li>
                        <li onClick={() => setSortingType("video")}><a>Video</a></li>
                    </ul>
                </div>
            </div>

            <div className='divide-y divide-gray-200'>
                {filteredTimeline.map((entry, index) => {
                    const { Icon, iconClass, bgClass } = getMethodStyle(entry.method);

                    return (
                        <div key={index} className='flex items-center justify-between p-4'>
                            <div className='flex items-center gap-4'>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bgClass}`}>
                                    <Icon className={iconClass} />
                                </div>
                                <p>
                                    <span className='font-bold capitalize'>{entry.method}</span> with {entry.name}
                                </p>
                            </div>
                            <p className='text-sm text-gray-400'>
                                {new Date(entry.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;