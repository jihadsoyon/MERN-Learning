import Productcard from "@/components/Productcard";


const getProducts = async () => {
    const res = await fetch("http://localhost:5000/products", {cache: "force-cache"});
    return res.json()

}


const ProductsPage = async() => {
    const products = await getProducts();
    return (
        <div className="w-8/12 mx-auto">
            <h2>Products: {products.length}</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    products.map(product=> <Productcard key={product.id} product={product}></Productcard>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;