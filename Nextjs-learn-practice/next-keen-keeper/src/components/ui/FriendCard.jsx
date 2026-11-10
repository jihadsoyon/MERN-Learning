import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({ friend }) => {
    return (
        <Link href={`friends/${friend.id}`}>
            <div className='shadow text-center bg-white border border-gray-300 p-6 rounded'>
                <Image src={friend.picture} alt="" width={200} height={200} className='block mx-auto rounded-full' />
                <h2 className='font-bold'>{friend.name}</h2>
                <p className='text-gray-400'>{friend.days_since_contact} days ago</p>

                <div className='flex flex-wrap justify-center gap-2 mt-2'>
                    {
                        friend.tags.map(tag => (
                            <span key={tag} className='badge badge-soft badge-success font-bold'>{tag}</span>
                        ))
                    }
                </div>

                <div className='mt-3'>
                    <span className='badge'>{friend.status}</span>
                </div>
            </div>
        </Link>
    );
};

export default FriendCard;