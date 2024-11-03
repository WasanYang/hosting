'use client';

import React, { useState, useEffect } from 'react';
import logo from '@public/logo.jpg';
import Image from 'next/image';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full top-0 left-0 z-10 transition-colors duration-300 ${
        scrolled ? 'bg-gray-800' : 'bg-transparent'
      } text-white`}
    >
      <div className='flex justify-between items-center p-4'>
        <div className='flex-shrink-0'>
          {/* <img src={logo} alt='Logo' className='h-10' />{' '} */}
          <Image src={logo} alt='Logo' width={40} height={40} />{' '}
          {/* Adjust width and height as needed */}
          {/* Replace with your logo path */}
        </div>
        <div className='flex space-x-4'>
          <a href='#home' className='hover:text-gray-400'>
            Home
          </a>
          <a href='#about' className='hover:text-gray-400'>
            About
          </a>
          <a href='#services' className='hover:text-gray-400'>
            Services
          </a>
          <a href='#contact' className='hover:text-gray-400'>
            Contact
          </a>
        </div>
        <div className='flex-shrink-0'>
          <img src='contact-icon.png' alt='Contact' className='h-8' />{' '}
          {/* Replace with your contact icon path */}
        </div>
      </div>
    </div>
  );
}
