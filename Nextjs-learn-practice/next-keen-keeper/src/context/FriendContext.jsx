"use client";

import React, { createContext, useState } from 'react';

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);

    return (
        <FriendContext.Provider value={{ timeline, setTimeline }}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;