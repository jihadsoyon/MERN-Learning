"use client";

import React, { useContext } from 'react';
import { IoIosCall } from 'react-icons/io';
import { MdOutlineTextsms } from 'react-icons/md';
import { FaVideo } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { FriendContext } from '@/context/FriendContext';

const options = [
    { type: 'call', label: 'Call', Icon: IoIosCall },
    { type: 'text', label: 'Text', Icon: MdOutlineTextsms },
    { type: 'video', label: 'Video', Icon: FaVideo },
];

const CheckInButtons = ({ friend }) => {

    const { timeline, setTimeline } = useContext(FriendContext);

    const handleCheckIn = (type) => {
        const newEntry = {
            method: type,
            name: friend.name,
            date: new Date(),
        };

        setTimeline([...timeline, newEntry]);
        toast(`${type} logged with ${friend.name}`);
    };

    return (
        <div className='flex justify-between gap-4'>
            {options.map(({ type, label, Icon }) => (
                <div
                    key={type}
                    onClick={() => handleCheckIn(type)}
                    className='shadow border border-gray-300 px-10 py-3 cursor-pointer'
                >
                    <span><Icon /></span>
                    <p>{label}</p>
                </div>
            ))}
        </div>
    );
};

export default CheckInButtons;