import Image from 'next/image';
import img1 from '@public/b1.jpg'; // Adjust the path according to your project structure
import img2 from '@public/b1.jpg'; // Adjust the path according to your project structure
import img3 from '@public/b1.jpg'; // Adjust the path according to your project structure

export default function About2() {
  return (
    <div className='bg-[#9994582b] py-16 h-screen  '>
      <h2 className='text-center text-4xl font-bold mb-8'>
        ไร่รักดอย ภูทับเบิก
      </h2>
      <p className='text-center mb-8'>
        ไร่รักดอย ภูทับเบิก เราบริการบ้านพักพร้อมอาหารเช้า ลานกางเต๊นท์ หมูกระทะ
        ห้องน้ำสะอาด
      </p>
      <div className='flex flex-col md:flex-row items-center justify-center max-w-[1200px] mx-auto'>
        <div className='md:w-8/12 p-4 relative'>
          <div className='relative w-full h-[400px]'>
            <Image
              src={img1}
              alt='เกี่ยวกับเรา'
              className='rounded-lg shadow-lg absolute top-0 left-0'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='relative w-full h-[400px] mt-[-150px] ml-[150px]'>
            <Image
              src={img2}
              alt='เกี่ยวกับเรา'
              className='rounded-lg shadow-lg absolute top-0 left-0'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
