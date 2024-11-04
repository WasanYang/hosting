import Image from 'next/image';
import room1 from '@public/b1.jpg'; // Adjust the path according to your project structure
import room2 from '@public/b1.jpg'; // Adjust the path according to your project structure
import room3 from '@public/b1.jpg'; // Adjust the path according to your project structure

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      name: 'ห้องพักสำหรับ 2 ท่าน',
      price: '฿900-฿1,500',
      capacity: '2 คน',
      image: room1,
    },
    {
      id: 2,
      name: 'ห้องพักสำหรับ 4 ท่าน',
      price: '฿1,500-฿2,500',
      capacity: '4 คน',
      image: room2,
    },
    {
      id: 3,
      name: 'Suite Room',
      price: '฿6,000',
      capacity: '3 คน',
      image: room3,
    },
  ];

  return (
    <div
      id='services'
      className='bg-[#9994582b] min-h-screen flex items-center justify-center'
    >
      <div className=' mx-auto max-w-[1200px]'>
        <h2 className='text-center text-4xl font-bold mb-8'>ประเภทห้องพัก</h2>
        <div className='py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
            {rooms.map((room) => (
              <div
                key={room.id}
                className='overflow-hidden flex flex-col items-center w-[350px]'
              >
                <div className='relative w-[350px] h-[400px] pb-[66.67%] mb-4'>
                  <Image
                    src={room.image}
                    alt={room.name}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='p-8 flex-grow w-[350px] border-2 border-[#3a4427]'>
                  <p className='text-gray-700'>
                    จำนวนคนเข้าพัก: {room.capacity}
                  </p>
                  <br />
                  <br />
                  <h3 className='text-xl font-bold mb-2'>{room.name}</h3>
                  <br />
                  <p className='text-gray-700 mb-2'>ราคา: {room.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
