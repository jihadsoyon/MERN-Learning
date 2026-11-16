"use client"

import FoodCard from '@/components/FoodCard/FoodCard';
import NoFood from '@/components/NoFood/NoFood';
import React, { useEffect, useState } from 'react';

const FoodsCCSAgain = () => {

    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searching, setSearching] = useState("");
    const [category, setCategory] = useState("");
    const [searchingInput, setSearchingInput] = useState("");

    const fetchFoods = async(category="", search="") => {
        setLoading(true);
        const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`);
        const data = await res.json();
        setFoods(data.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchFoods(category, searching)
    }, [category, searching]);


    const handleSearch = () => {
        setSearching(searchingInput)
    }

    const handleFilter = (e) => {
        const value = e.target.value;
        setCategory(value)

    }



    return (
        <div className='bg-gray-800 min-h-screen'>
            <h2 className='text-5xl font-bold text-white text-center mt-10'>Discover Delicious Foods🍔</h2>
            <div className='bg-gray-700 p-4 max-w-5xl mx-auto my-6 rounded-2xl flex gap-3'>
                <label className='flex-1'>
                    <input type="text" value={searchingInput} onChange={e => setSearchingInput(e.target.value)} placeholder='Search foods ... (e.g, burger, pizza)' className='bg-gray-600 p-5  text-white rounded-2xl w-full outline-none' />
                </label>
                <button className='bg-orange-500 p-4  rounded-lg text-white hover:bg-orange-800 cursor-pointer' onClick={handleSearch}>Search</button>
                <select name="" id="" className='bg-gray-600 p-4 text-white rounded-lg' onChange={handleFilter}>
                    <option value="">All Category</option>
                    <option value="burger">Burger</option>
                    <option value="pizza">Pizza</option>
                    <option value="dish">Dish</option>
                    <option value="beverage">Beverage</option>
                    <option value="rice">Rice</option>
                </select>
            </div>


            {
                loading ? <div><p className='text-gray-500 text-center'>Foods are loading...</p></div> : foods.length === 0 ? <NoFood /> :

                    <div className='grid grid-cols-4 gap-5 max-w-5xl mx-auto'>
                        {
                        foods.map(food => <FoodCard key={food.id} food={food} />)
                        }
                    </div>
            }


        </div>
    );
};

export default FoodsCCSAgain;