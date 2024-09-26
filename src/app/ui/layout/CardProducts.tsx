import React from 'react'
import { Product } from '@/app/models/models'

export const CardProducts = ({ product }: { product: Product }) => {
  return (
    <div className='w-[565] flex border '>
        <img src={product.img} alt="" className='w-56 h-48' />
        <section className='p-4'>
            <h1 className='text-base font-semibold text-customBrown'>
                {product.title}
            </h1>
            <p className='w-56'>
                {product.description}
            </p>
        </section>
    </div>
  )
}
