import Image from 'next/image';
import Link from 'next/link';
import productImage from '@public/assets/images/machine-1.png';

const MachineCard = () => {
  return (
    <div className='min-w-3/4 min-h-96 p-6 md:p-2 m-2 bg-slate-100 border-solid border border-orange-400 rounded-md flex flex-col justify-between items-center shadow-lg hover:shadow-2xl'>
      <Link href="/machines/1234">
        <Image src={productImage} width={250} height={250} alt='product image' className='rounded-md'/>
      </Link>
      <div className='w-full m-2 p-1 flex flex-col justify-center items-start gap-2 mb-2'>
        <p className='font-bold hover:text-orange-400'><Link href="/machines/1234">Bandsaw Machine</Link></p>
        <p>12x98x1000</p>
        <p className='text-gray-600'>10000$</p>
      </div>
      <button className='bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-1 w-full h-8 m-1 rounded-md hover:from-orange-500 hover:to-red-600'>Add To Cart</button>
    </div>
  )
}

export default MachineCard;