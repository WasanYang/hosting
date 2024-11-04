'use client';

import About from '@/components/home/About';
import About2 from '@/components/home/About2';
import Album from '@/components/home/Gallery';
import Banner from '@/components/home/Banner';
import Rooms from '@/components/home/Rooms';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

export default function Page() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div id='__next'>
      <Banner />
      <Rooms />
      <div>
        <About />
        <About2 />
        <Album />
      </div>
      {showScroll && (
        <div
          className='fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full cursor-pointer'
          onClick={scrollToTop}
        >
          <FaArrowUp size={24} />
        </div>
      )}
    </div>
  );
}
