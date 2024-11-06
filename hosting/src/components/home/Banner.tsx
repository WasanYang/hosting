import bg1 from '@public/bg1.jpg';
export default function () {
  return (
    <>
      <div
        id='home'
        className='relative h-screen bg-cover bg-center'
        style={{
          backgroundImage: `url(${bg1.src})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-10'>
          <h1 className='text-white text-4xl md:text-6xl font-bold'>
            ไร่รักดอย ภูทับเบิก
          </h1>
        </div>
      </div>
    </>
  );
}
