import Link from 'next/link'
import React from 'react'

export default function page()  {
  return (
    <div className='bg-gray-100 flex flex-col items-center justify-center'>
      <img src="/images/pageProductos/nuria-panaderia-productos.jpg" alt="images cackes" className='w-full h-[750px]'  />
      <section className='w-full h-full flex items-center justify-center p-10'>
        <div className=' flex flex-wrap w-3/4 items-center justify-center gap-10'>
          <Link href='/products/cakes'>
            <img src="/images/pageProductos/nuria-tortas-postres-categoria.jpg" alt="cake" className='w-[500px] h-[370px] p-4  bg-white ' />
          </Link>
          <Link href='/products/bakery'>
            <img src="/images/pageProductos/nuria-panaderia-pasteleria-categoria.jpg" alt="bakery" className='w-[500px] h-[370px] p-4  bg-white' />
          </Link>
          <Link href='/products/bagels'>
            <img src="/images/pageProductos/nuria-roscas-pan-dulces-categoria.jpg" alt="bagels" className='w-[500px] h-[370px] p-4 0 bg-white'/>
          </Link>
          <Link href='/products/salty'>
            <img src="/images/pageProductos/nuria-salados-productos.jpg" alt="salty" className='w-[500px] h-[370px] p-4   bg-white' />
          </Link>
        </div>

      </section>
    </div>
  )
}

