import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import CheckInButtons from '@/components/FriendDetails/CheckInButtons';
import Image from 'next/image';

const getFriends = async () => {
    const filePath = path.join(process.cwd(), 'public', 'friends.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
};

const FriendDetailsPage = async ({ params }) => {
    const { id } = await params;
    const friends = await getFriends();
    const friend = friends.find(f => String(f.id) === id);

    if (!friend) notFound();

    return (
        <div className='my-5'>
            <div className='flex justify-center gap-5'>
                <div className='shadow border border-gray-300 p-10'>
                    {/* next/image external host-e remotePatterns lage, tai plain img use korlam */}
                    <Image src={friend.picture} alt={friend.name} width={300} height={300} className='' />
                    <h2 className='font-bold text-2xl mt-3'>{friend.name}</h2>
                    <p>{friend.status}</p>
                    {(friend.tags || []).map((tag, ind) => (
                        <p key={ind} className='badge'>{tag}</p>
                    ))}
                    <p>{friend.bio}</p>
                    <p>{friend.email}</p>
                    <p>Snooze for 2 weeks</p>
                    <p>Archive</p>
                    <p>Delete</p>
                </div>

                <div className='shadow border border-gray-300 p-10'>
                    <div className='flex justify-between gap-5'>
                        <div className='shadow p-4'>
                            <p>{friend.days_since_contact}</p>
                            <p>Days Since Contact</p>
                        </div>
                        <div className='shadow p-4'>
                            <p>{friend.goal}</p>
                            <p>Goal (Days)</p>
                        </div>
                        <div className='shadow p-4'>
                            <p>{friend.next_due_date}</p>
                            <p>Next Due</p>
                        </div>
                    </div>

                    <div>
                        <h3 className='font-bold my-4'>Quick Check-In</h3>
                        <CheckInButtons friend={friend} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsPage;