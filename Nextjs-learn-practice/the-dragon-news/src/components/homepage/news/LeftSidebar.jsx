import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({categories, activeId}) => {
    return (
        <div>
            <h2 className="text-xl font-semibold">All Categories</h2>
            <ul className="flex flex-col gap-3 mt-6">
                {
                    categories.news_category.map(category => {
                        return <li key={category.category_id} className={`${activeId === category.category_id && "bg-slate-100" }   rounded-md font-semibold text-center `}>
                            <Link href={`/category/${category.category_id}`} className='block p-2'>{category.category_name}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default LeftSidebar;