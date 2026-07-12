import { Separator } from "@heroui/react";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://mern-learning-phi.vercel.app/data.json');
    const photos = await res.json();

    const photo = photos.find(p => p.id == id);
    console.log(photo)

    return (
        <div>
            <h1 className="text-2xl font-bold">{photo.title}</h1>
            <img src={photo.imageUrl} alt={photo.title} />
            <p>{photo.prompt}</p>
            <p>Category: {photo.category}</p>
            <p>Mode: {photo.model}</p>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                    <p><FaHeart /></p>
                    <p>{photo.likes}</p>
                </div>

                <Separator orientation="vertical" />

                <div className="flex items-center gap-2">
                    <p><BiDownload /></p>
                    <p>{photo.downloads}</p>
                </div>
            </div>
        </div>
    );
};

export default PhotoDetailsPage;