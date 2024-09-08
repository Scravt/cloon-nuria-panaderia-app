import React from 'react'

export const Footer = () => {
    return (
        <footer className='bg-coustomGray text-black flex justify-center ' >
            <div className='flex justify-start gap-40 w-[1500px] h-44 pt-10 mb-32 ml-60 text-xs '>
                <img src="/images/logo-nuria-footer.png" alt="logo" />
                <div></div>
                <ul className='flex flex-col gap-2' >
                    <li>EMPRESA</li>
                    <li>PRODUCTOS</li>
                    <li>CATERING</li>
                </ul>
                <ul className='flex flex-col gap-2'>
                    <li>OBSEQUIOS Y AGASAJOS</li>
                    <li>LOCALES</li>
                    <li>CONTACTO</li>
                </ul>
            </div>

        </footer>
    )
}
