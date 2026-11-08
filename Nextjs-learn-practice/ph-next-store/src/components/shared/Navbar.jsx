
import Link from "next/link";
import logoImg from "../../assets/images/logo.png"
import { FaGithub } from "react-icons/fa";
import Image from "next/image";


const Navbar = () => {

    const navItems = [
        {
            path: "/",
            text: "Home",
        },
        {
            path: "/apps",
            text: "Apps",
        },
        {
            path: "/installation",
            text: "Installation",             
        },
        {
            path: "/dashboard",
            text: "Dashboard",
        }
    ]

    return (
        <nav className='shadow'>
            <div className='flex justify-between items-center bg-white py-3 w-11/12 mx-auto'>
            <Image src={logoImg} alt="" className='w-[50px]'/>
            <ul className='flex justify-between items-center gap-4'>
               {
                navItems.map((item, index)=> (
                    <Link key={index} href={item.path}>
                    {item.text} 
                    </Link>
                ))
               }
            </ul>
            <button className='btn bg-purple-600 text-white'><FaGithub />Contribute</button>
            </div>
        </nav>
    );
};

export default Navbar;