import Image from 'next/image';
import img1 from '@public/b1.jpg'; // Adjust the path according to your project structure

export default function About() {
  return (
    <div
      className='bg-white h-screen flex items-center justify-center'
      id='about'
    >
      <div className='max-w-[1200px] mx-auto p-4'>
        <h2 className='text-center text-4xl font-bold mb-8'>ภูทับเบิก</h2>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='md:w-7/12 p-4'>
            <h3 className='text-2xl font-bold mb-4'>หมู่บ้านภูทับเบิก</h3>
            <p className='text-gray-700 mb-4'>
              สำหรับ ภูทับเบิก นั้นเป็นชื่อของหมู่บ้านที่ชื่อ หมู่บ้านม้งทับเบิก
              โดยเป็นหมู่บ้านชาวเขาเผ่าม้ง
              เป็นยอดเขาที่สูงที่สุดในจังหวัดเพชรบูรณ์
              ซึ่งมีความสูงจากระดับน้ำทะเลประมาณ 1,768 เมตร
              บนภูเขาสูงของจังหวัดเพชรบูรณ์ ในตำบลวังบาล อำเภอหล่มเก่า
              และห่างจากตัวอำเภอประมาณ 40 กม.
              และห่างจากตัวจังหวัดเพชรบูรณ์ประมาณ 100 กม.
            </p>
            <p className='text-gray-700 mb-4'>
              ชาวม้งที่นี่มีอาชีพทำการเกษตรเป็นหลัก พืชผักที่มีการปลูกมากที่สุด
              ก็คือกะหล่ำปลี
              ซึ่งมีการจัดสรรที่ดินทำกินสำหรับการปลูกกะหล่ำปลีหลายพันไร่บนยอดเขาสูง
              ทำให้ในช่วงฤดูฝน มีกะหล่ำปลีผุดขึ้นละลานตาเต็มภูเขา โดยใน
              เฉพาะในช่วง เดือนกรกฎาคม - สิงหาคม และช่วงเดือน ตุลาคม-พฤศจิกายน
              ของทุกปี
            </p>
            <p className='text-gray-700 mb-4'>
              ส่วนในช่วงหน้าหนาว ที่เที่ยวก็จะมีดอกนางพญาเสือโคร่งบานเต็ม
              ภูทับเบิก ให้ไปถ่ายรูปกัน
            </p>
            <p className='text-gray-700'>
              ขอบคุณที่มาของข้อมูลจาก :
              <a href='https://th.wikipedia.org'>https://th.wikipedia.org</a>{' '}
              และ: <a href='www.khaoko.com'>https://www.khaoko.com</a>
            </p>
          </div>
          <div className='md:w-5/12 p-4'>
            <div className='relative w-full h-[500px]'>
              <Image
                src={img1}
                alt='เกี่ยวกับเรา'
                className='rounded-lg shadow-lg'
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
