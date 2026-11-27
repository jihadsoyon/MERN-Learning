import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';
import { GiEmptyHourglass } from 'react-icons/gi';



const categoryDetails = async ({ params }) => {
    const { id } = await params;
    console.log(id);

    const categories = await getCategories();
    const news = await getNewsByCategoryId(id);


    return (
        <div className="grid grid-cols-12 gap-4 container mx-auto my-4">
            <div className="col-span-3">
                <LeftSidebar categories={categories} activeId={id} />
            </div>
            <div className="col-span-6">
                <h2 className="font-semibold">All news</h2>
                {news.length > 0 ? 
                    news.map(n => {
                        return <p key={n._id}>{n.details}</p>
                    })  : <div className='flex-col h-[30vh] flex items-center justify-center text-center bg-gray-100'>
                        <span className="text-8xl text-gray-300"><GiEmptyHourglass /></span>
                        <h4 className=' text-gray-400 '>Now news found</h4>
                    </div>
                }
            </div>
            <div className=" col-span-3">
                <RightSidebar />
            </div>

        </div>
    );
};

export default categoryDetails;