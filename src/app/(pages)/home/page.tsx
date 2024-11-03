'user client';

import bg1 from '@public/b1.jpg';
export default function Page() {
  return (
    <div>
      <div
        className='relative h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${bg1.src})` }}
      >
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-10'>
          <h1 className='text-white text-4xl md:text-6xl font-bold'>
            ไร่รักดอย ภูทับเบิก
          </h1>
        </div>
      </div>
      <div
        className='relative h-screen bg-cover bg-center'
        style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
      >
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <h1 className='text-white text-4xl md:text-6xl font-bold'>
            Your Centered Text
          </h1>
        </div>
      </div>
    </div>
  );
}
