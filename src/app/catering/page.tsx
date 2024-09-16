import React from 'react'
import Link from 'next/link'

export default function page() {
    return (
        <div className='bg-gray-100 flex flex-col items-center justify-center'>
            <img src="/images/pageProductos/nuria-panaderia-productos.jpg" alt="images cackes"
                className='w-full h-[750px]' />

            <section className='w-full h-full flex items-center justify-center p-10'>
                <div className=' flex flex-wrap w-3/4 items-center justify-center gap-10'>
                    <div className=' h-full p-5 bg-white flex flex-col gap-4 text-black'>
                        <Link href='/applicationform'>
                            <img src="/images/pageCatering/catering-servicio-desayunos.png" alt="cake"
                                className='w-[500px] h-[370px] ' />
                        </Link>
                        <p>Cofee Breaks.</p>
                        <p>Cocktails</p>
                        <p>Jornadas y Almuerzos Laborales</p>
                        <p>Lanzamientos de productos</p>

                        <Link href='/applicationform' className='bg-customBrown p-4 w-44 text-white'  >
                            Realizar Consulta
                        </Link>
                    </div>
                    <div className=' p-5 bg-white flex flex-col gap-4 text-black h-full'>
                        <Link href='/applicationform'>
                            <img src="/images/pageCatering/catering-social-casamientos.jpg" alt="bakery"
                                className='w-[500px] h-[370px] ' />
                        </Link>
                        <p>Mesa dulce.</p>
                        <p>Servicio de Té</p>
                        <p>Servicio de Catering</p>
                        

                        <Link href='/applicationform' className='bg-customBrown p-4 w-44 text-white mt-11'  >
                            Realizar Consulta
                        </Link>

                    </div>



                </div>

            </section>
        </div>
    )
}

