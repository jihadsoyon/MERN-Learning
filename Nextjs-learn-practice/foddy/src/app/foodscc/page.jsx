"use client";

import React, { useEffect, useState } from 'react';
import FoodCard from '@/components/FoodCard/FoodCard';
import NoFood from '@/components/NoFood/NoFood';

const Home = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searching, setSearching] = useState("");
    const [category, setcategory] = useState("");
    const [searchInput, setSearchInput] = useState("");
  




    const fetchFoods = async (category = "", search = "") => {
        setLoading(true);
        const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`);
        const data = await res.json();
        setFoods(data.data)
        console.log(data);
        setLoading(false);

    }




    useEffect(() => {
        fetchFoods(category, searching)
    }, [searching, category]);

    const handleSearch = () => {
        setSearching(searchInput)
    }

    const handleFilter = (e) => {
        const value= e.target.value

        setcategory(value)
    }

    console.log(searchInput);

    return (
        <div className='min-h-screen bg-gray-800 p-6'>
            <h2 className='font-bold text-5xl text-center my-5 text-white'>
                Discover Delicious Foods🍔
            </h2>

            <div className='flex gap-3 bg-gray-700 p-4 rounded-xl max-w-5xl mx-auto'>
                <label className='flex-1'>
                    <input
                        type='text'
                        value={searchInput}
                        onChange={e => setSearchInput(e.target.value)}
                        placeholder='Search foods... (e.g. burger, pizza)'
                        className='bg-gray-600 text-white p-4 rounded-lg w-full outline-none'
                    />
                </label>
                <button className='bg-orange-500 text-white font-semibold px-8 rounded-lg cursor-pointer hover:bg-orange-600' onClick={handleSearch}>
                    Search
                </button>
                <select className='bg-gray-600 text-white px-4 rounded-lg cursor-pointer' onChange={handleFilter} value={category}>
                    <option>All Categories</option>
                    <option>Burger</option>
                    <option>Pizza</option>
                    <option>Desert</option>
                    <option>Beverage</option>
                    <option>Rice</option>
                </select>
            </div>
            {
                loading ? (
                    <div>
                        <p>loading food.....</p>
                    </div>
                ) : foods.length === 0 ? (
                    <NoFood />
                ) : (
                    <div className='grid grid-cols-4 gap-6 max-w-5xl mx-auto mt-8'>
                        {foods.map(food => (
                            <FoodCard key={food.id} food={food} />
                        ))}
                    </div>)
            }
        </div>
    );
};

export default Home;