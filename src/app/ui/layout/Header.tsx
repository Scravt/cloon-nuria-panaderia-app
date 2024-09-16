import Link from 'next/link';
import React from 'react';


export const Header = () => {
  return (
    <header className='fixed top-0 w-full'>
      <nav className="flex items-center text-xs justify-around p-4 bg-white text-orange-500 shadow ">
        <ul className="flex gap-6">
          <li>
            <Link href="/empresa">EMPRESA  </Link>
          </li>
          <li>
            <Link href="/productos"> PRODUCTOS </Link>
          </li>
          <li>
            <Link href="/catering"> CATERING </Link>
          </li>
          <li>
            <Link href="/obsequios"> OBSEQUIOS Y AGASAJOS </Link>
          </li>
        </ul>

        <img
          src="/images/cropped-logo-nuria-panaderias-confiterias.png"
          alt="logo"
          className='absolute top-3 z-10 h-[80px] w-[80px] ' />


        <ul className="flex gap-6">
          <li>

            <img src="/images/cart.svg" alt="cart" className='text-customBrown' />
          </li>
          <li>LOCALES</li>
          <li>CONTACTO</li>
          <li>
            <img src="/images/logo-facebook-nuria-top.png" alt="search" className='h-4 w-3' />
          </li>
          <li>
            <img src="/images/logo-instagram-nuria-top.png" alt="search" className='h-4 w-4' />
          </li>
        </ul>
      </nav>
    </header>
  );
};
