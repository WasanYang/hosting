'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import img1 from '@public/b1.jpg'; // Adjust the path according to your project structure
import img2 from '@public/b2.jpg'; // Adjust the path according to your project structure
import img3 from '@public/b3.jpg'; // Adjust the path according to your project structure

const images = [img1.src, img2.src, img3.src]; // Add more images as needed

export default function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [direction, setDirection] = useState<string | null>(null);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalIsOpen]);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setDirection('next');
      setTimeout(() => {
        setSelectedImageIndex((selectedImageIndex + 1) % images.length);
        setDirection(null);
      }, 500); // Adjust the duration as needed
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setDirection('prev');
      setTimeout(() => {
        setSelectedImageIndex(
          (selectedImageIndex + images.length - 1) % images.length
        );
        setDirection(null);
      }, 500); // Adjust the duration as needed
    }
  };

  return (
    <div className='bg-white py-16'>
      <div className='max-w-[1200px] mx-auto'>
        <h2 className='text-center text-4xl font-bold mb-8'>อัลบั้มรูปภาพ</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4'>
          {images.map((image, index) => (
            <div
              key={index}
              className='relative cursor-pointer'
              onClick={() => openModal(index)}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                className='rounded-lg shadow-lg'
                layout='responsive'
                width={400}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='flex items-center justify-center'
      >
        {selectedImageIndex !== null && (
          <div className='relative w-full h-full flex items-center justify-center'>
            <button
              onClick={prevImage}
              className='absolute left-4 text-white text-2xl z-10'
            >
              <FaArrowLeft />
            </button>
            <div
              className={`relative w-full h-full transition-transform duration-500 ${
                direction === 'next'
                  ? 'transform translate-x-full'
                  : direction === 'prev'
                  ? 'transform -translate-x-full'
                  : ''
              }`}
            >
              <Image
                src={images[selectedImageIndex]}
                alt='Selected Image'
                layout='fill'
                objectFit='contain'
              />
            </div>
            <button
              onClick={nextImage}
              className='absolute right-4 text-white text-2xl'
            >
              <FaArrowRight />
            </button>
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 text-white text-2xl'
            >
              <FaTimes />
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}
