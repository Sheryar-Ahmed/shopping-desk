import React from 'react';

const Product = () => {
    return (
        <div className='w-64 m-20'>
            <div className='bg-blue-100 p-5 rounded-xl'>
                <img src='/products/iphone.png' alt='Prodcut' />
            </div>
            <div>
                <span className='font-bold text-lg'>Iphone 14 Pro</span>
                <p className='text-clip'>
                    Loreum ipsum has a, Loreum ipsum has a, Loreum ipsum has a, Loreum ipsum has a, Loreum ipsum has a, Loreum ipsum has a, Loreum ipsum has a.
                </p>
                <div className='flex flex-row justify-between items-center '>
                    <span className='font-bold text-3xl'>$899</span>
                    <button className="bg-emerald-400 text-white py-1 px-3 rounded-lg">
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product;