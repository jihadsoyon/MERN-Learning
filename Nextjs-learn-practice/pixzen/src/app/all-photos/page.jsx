import Photocard from "@/components/Photocard";

const AllPhotosPage = async() => {
    const res = await fetch('https://mern-learning-phi.vercel.app/data.json');
    const photos = await res.json();
    console.log(photos)
    return (
        <div>
           <h1 className="text-2xl font-bold m-4">All Photos</h1> 

           <div className="grid grid-cols-4 gap-5">
            {photos.map(photo => <Photocard key={photo.id} photo={photo} />)}
           </div>
        </div>
    );
};

export default AllPhotosPage;