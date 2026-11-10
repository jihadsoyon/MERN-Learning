import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import FriendCard from '../ui/FriendCard';

const getFriends = async () => {
    const filePath = path.join(process.cwd(), 'public', 'friends.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
};

const Friends = async () => {
    const friends = await getFriends()
    console.log(friends);

    return (
        <div className='w-9/12 mx-auto'>
            <div className='grid grid-cols-3 gap-4'>
                {
                    friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                }
            </div>
        </div>
    );
};

export default Friends;