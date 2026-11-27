import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        _id: "1",
        title: "Breaking News: Major Event Unfolds in the City "
    },
    {
        _id: "2",
        title: "Breaking News: New policy announced by the Government "
    },
    {
        _id: "1",
        title: "Breaking News: Sports Team Wins Championship "
    },
]

const Breakingnews = () => {
    return (
        <div className='flex justify-between items-center gap-4 bg-gray-200 p-4 container mx-auto'>
            <button className='btn bg-red-500 text-white'>Latest news:</button>
            <Marquee pauseOnHover={true} speed={150}>
                {
                    news.map(n=> {
                       return <span key={n._id}> {n.title}</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default Breakingnews;