'use client';

import React, { useState, useEffect } from 'react';
import logo from '@public/logo.jpg';
import Image from 'next/image';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > window.innerHeight / 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const menu = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Services',
      href: '#services',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];

  return (
    <div
      className={`fixed w-full top-0 left-0 z-10 transition-transform duration-300 ${
        scrolled
          ? 'bg-white bg-opacity-50 text-primary'
          : 'bg-transparent text-white'
      }  ${
        visible ? 'translate-y-0 text-primary' : '-translate-y-full text-white'
      }`}
    >
      <div className='flex justify-between items-center p-4'>
        <div className='flex-shrink-0'>
          <Image src={logo} alt='Logo' width={40} height={40} />{' '}
        </div>
        <div className='flex space-x-4'>
          {menu.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className='hover:text-gray-400'
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href.slice(1));
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
