
import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import { FaVideo } from 'react-icons/fa';
import { MdOutlineTextsms } from 'react-icons/md';
import { IoIosCall } from 'react-icons/io';
import Image from 'next/image';

const getFriends = async () => {
    const filePath = path.join(process.cwd(), 'public', 'friends.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
};

const FriendsDetaisPage = async ({ params }) => {

    const { id } = await params;
    console.log(id);
    const friends = await getFriends()

    const expectedFriends = friends.find(friend => friend.id == id)
    console.log(expectedFriends);



    return (
        <div>
            <div className='flex justify-center gap-5 '>
                <div className='shadow border border-gray-300 p-10'>
                    <Image src={expectedFriends.picture} width={250} height={200} alt="" />
                    <p>{expectedFriends.status}</p>
                    {
                        expectedFriends.tags.map((tag, ind) => <p key={ind} className='badge'>{tag}</p>)
                    }
                    <p>{expectedFriends.bio}</p>
                    <p>{expectedFriends.email}</p>
                    <p>Snooxe for 2 weeks</p>
                    <p>Archive</p>
                    <p>Delete</p>
                </div>
                <div className='shadow border border-gray-300 p-10'>
                    <div className='flex justify-between gap-5'>
                        <div className='shadow p-4'>
                            <p>{expectedFriends.days_since_contact}</p>
                            <p>Days Since Contact</p>
                        </div>
                        <div className='shadow p-4'>
                            <p>{expectedFriends.goal}</p>
                            <p>Goal (Days)</p>
                        </div>
                        <div className='shadow p-4'>
                            <p>{expectedFriends.next_due_date}</p>
                            <p>Next Due</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold my-4'>Quick Check-In</h3>
                        <div className='flex justify-between gap-4'>
                            <div className='shadow border border-gray-300 px-10 py-3 cursor-pointer'>
                                <span><IoIosCall /></span>
                                <p>Call</p>
                            </div>
                            <div className='shadow border border-gray-300 px-10 py-3 cursor-pointer'>
                                <span><MdOutlineTextsms /></span>
                                <p>Text</p>
                            </div>
                            <div className='shadow border border-gray-300 px-10 py-3 cursor-pointer'>
                                <span><FaVideo /></span>
                                <p>Video</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default FriendsDetaisPage;