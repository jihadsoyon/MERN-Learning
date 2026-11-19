import Image from 'next/image';
import React from 'react';

const Productcard = ({product}) => {
    return (
        <div>
            <div className="card bg-base-100 card-md shadow-sm">
               
                <div className="card-body">
                     <Image src={product.image} alt={product.title} width={100} height={100} />
                    <h2 className="card-title">{product.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productcard;