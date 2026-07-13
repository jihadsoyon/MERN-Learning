import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async() => {
    const res = await fetch('https://mern-learning-phi.vercel.app/category.json');
    const categories = await res.json();
    

    return (
        <div className="mb-5 space-x-3">
            {categories.map (Category=><Link key={Category.id} href={`?category=${Category.name.toLowerCase()}`}><Button variant="outline" size="sm" >{Category.name}</Button></Link>)}
        </div>
    );
};

export default Category;