import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        
                        <p className="font-bold">HeroUI</p>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/task">Tasks</Link></li>
                        <li><Link href="/hero">hero</Link></li>
                    </ul>
                    <div>
                        <ThemeToggle />
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;