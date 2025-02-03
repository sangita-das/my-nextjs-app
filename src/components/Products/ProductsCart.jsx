import Image from 'next/image';
import React from 'react';
const ProductsCart = ({product}) => {
    return (
        <div>
            <h2 className="text center text-2xl">Product Cart</h2>
            <div className='relative w-full h-52 object--contain'>
                <Image
                src={product.image}
                alt={product.productName}
                width={1500}
                height={800}
                className= "rounded-t-lg h-56"
                />
            </div>
        </div>
    );
};

export default ProductsCart;