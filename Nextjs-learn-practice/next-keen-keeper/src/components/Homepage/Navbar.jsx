import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { IoIosStats } from 'react-icons/io';
import MyLink from './MyLink';

const Navbar = () => {

    const NavItems = [
        {
            path: "/",
            text: "Home",
            icon: <GoHome size={16} />
        },
        {
            path: "/timeline",
            text: "Timeline",
            icon: <FaRegClock size={16} />
        },
        {
            path: "/stats",
            text: "Stats",
            icon: <IoIosStats size={16} />
        }
    ]

    return (
        <div className='shadow'>
            <div className="max-lg:collapse mb-8 rounded-md lg:w-9/12 mx-auto">
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                <div className="collapse-title navbar">
                    <div className="navbar-start">
                        <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <button className="btn btn-ghost text-xl font-bold">Keenkeeper</button>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                NavItems.map((items, ind) => (
                                    <MyLink key={ind} path={items.path} icon={items.icon}>{items.text}</MyLink>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="collapse-content lg:hidden z-1">
                    <ul className="menu">
                        {
                            NavItems.map((items, ind) => (
                                <MyLink key={ind} path={items.path} icon={items.icon}>{items.text}</MyLink>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;