import React from 'react'
import { Product } from '@/app/models/models'

export const CardProducts = ({ product }: { product: Product }) => {
  return (
    <div>
        <img src={product.img} alt="" />
        <section>
            <h1>
                {product.title}
            </h1>
            <p>
                {product.description}
            </p>
        </section>
    </div>
  )
}
