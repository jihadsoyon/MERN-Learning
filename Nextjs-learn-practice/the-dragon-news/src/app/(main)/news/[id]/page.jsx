import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEye, FaLongArrowAltLeft, FaRegBookmark, FaStar } from 'react-icons/fa';
import { IoShareSocial } from 'react-icons/io5';

export const generateMetadata = async({params}) => {
    const {id} = await params

    const news = await getNewsDetailsById(id)
    console.log(news, "GENERATE NEWS");

      return {
    title: news.title,
    description: news.details,
  }

}

const NewsdetailsPage = async ({ params }) => {
    const { id } = await params;
    const n = await getNewsDetailsById(id);
    // console.log(n);
    return (
        <div className='w-7/12 mx-auto'>
            <div className="card bg-base-100 shadow-sm">
                {/* author info */}
                <div className='flex justify-between items-center bg-gray-100 p-4'>
                    <div className='flex items-center gap-2'>
                        <Image src={n.author.img} alt={n.author.name} height={40} width={40} className='rounded-full' />
                        <div>
                            <h2 className='text-gray-400 font-semibold'>{n.author?.name}</h2>
                            <p className='text-gray-400'>{n.author?.published_date}</p>
                        </div>
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <span className='text-xl font-bold'><FaRegBookmark /> </span>
                        <span className='text-xl font-bold'><IoShareSocial /></span>
                    </div>
                </div>
                <div className="card-body p-3">
                    <h2 className="card-title">{n.title}</h2>
                    <figure>
                        <Image src={n.image_url} width={700} height={300} alt={n.title} className='w-full' />
                    </figure>
                    <p className=''>
                        {n.details}
                    </p>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center gap-3'>
                            <div className='flex items-center gap-2'>
                                <FaStar className='text-orange-500' /> <FaStar className='text-orange-500' /> <FaStar className='text-orange-500' /> <FaStar className='text-orange-500' /> <FaStar className='text-orange-500' />
                                <span className='font-semibold text-gray-500'>{n.rating?.number}</span>
                            </div>
                            <div className='flex items-center gap-2'> <FaEye className='text-gray-500' />
                                <span className='font-semibold text-gray-500'>{n.total_view}</span> </div>
                        </div>
                        <div className=''>
                            <Link
                                href={`/category/${n.category_id}`}
                                className='inline-flex items-center gap-2 bg-pink-900 text-white px-5 py-3 rounded hover:bg-pink-800 transition whitespace-nowrap'
                            >
                                <FaLongArrowAltLeft />
                                <span>All news in this category</span>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default NewsdetailsPage;