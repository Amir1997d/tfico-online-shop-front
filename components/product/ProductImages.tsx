import Image from 'next/image';
import myImage from '@public/assets/images/blade-1.jpeg';

const Images = () => {
  return (
    <div className='w-96 h-96 m-4 lg:mx-10 flex flex-col justify-start items-center'>
        <div className='w-full h-2/3 shadow-md'>
         <Image src={myImage} alt="blade's photo" className='w-full h-full'/>
        </div>
        <div className='w-full h-1/3 mt-1 overflow-x-scroll flex justify-start items-center gap-1'>
            <div className='min-w-32 h-full bg-red-600'>
                <Image src={myImage} alt="blade's photo" className='w-full h-full'/>
            </div>
            <div className='min-w-32 h-full bg-red-600'>
                <Image src={myImage} alt="blade's photo" className='w-full h-full'/>
            </div>
            <div className='min-w-32 h-full bg-red-600'>
                <Image src={myImage} alt="blade's photo" className='w-full h-full'/>
            </div>
            <div className='min-w-32 h-full bg-red-600'>
                <Image src={myImage} alt="blade's photo" className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default Images;