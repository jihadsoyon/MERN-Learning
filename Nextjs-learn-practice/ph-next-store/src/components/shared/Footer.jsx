import React from 'react';
import logoImg from "@/assets/images/logo.png"
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-10">
            <div className="container mx-auto px-5 py-10 grid gap-8 md:grid-cols-3">

                {/* Brand */}
                <div>
                     <Image src={logoImg} alt="" className='w-[50px]' />
                    <p className="mt-2 text-sm opacity-80">
                        Apps jara din-er jibon-ke simple, smart ar aro moja-r kore tole.
                    </p>
                </div>

                {/* Quick links */}
                <div>
                    <h4 className="font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-purple-600">Home</Link></li>
                        <li><Link href="/apps" className="hover:text-purple-600">Apps</Link></li>
                        <li><Link href="/installation" className="hover:text-purple-600">Installation</Link></li>
                        <li><Link href="/dashboard" className="hover:text-purple-600">Dashboard</Link></li>
                    </ul>
                </div>

                {/* Contact / social */}
                <div>
                    <h4 className="font-semibold mb-3">Connect</h4>
                    <p className="text-sm opacity-80">Email: hello@herojo.com</p>
                    <p className="text-sm opacity-80">Phone: +880 1XXX-XXXXXX</p>
                </div>
            </div>

            <div className="border-t border-base-300 py-4 text-center text-sm opacity-70">
                © 2026 HEROJO. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;