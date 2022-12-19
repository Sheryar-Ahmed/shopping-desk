import React from 'react';

const Product = ({ propsData }) => {
    const { name, description, pictur, price } = propsData;
    return (
        <div className='w-64 m-5'>
            <div className='bg-blue-100 p-5 rounded-xl mb-3'>
                <img src={pictur} alt='Prodcut' />
            </div>
            <div>
                <span className='font-bold text-lg'>{name}</span>
                <p className='w-64 h-19 text-justify my-2 line-clamp-3'>{description}</p>
                <div className='flex flex-row justify-between items-center '>
                    <span className='font-bold text-3xl'>${price}</span>
                    <button className="bg-emerald-400 text-white py-1 px-3 rounded-lg">
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product;