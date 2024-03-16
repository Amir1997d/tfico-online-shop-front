import Image from 'next/image';
import ProductImage from "@public/assets/images/blade-1.jpeg";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = () => {
  return (
    <div className='w-5/6 lg:w-3/4 min-h-32 pt-2 flex flex-col justify-center items-center shadow-lg rounded-md mx-16 border-orange-400 border mb-4'>
      <div className='w-full flex justify-center items-center'>
        <div className='w-1/2 lg:w-1/4 ml-2 mb-2 flex justify-center items-center'>
          <Image src={ProductImage} alt="product image" width={200} />
        </div>
        <div className='w-3/4 m-2 flex flex-col'>
          <div className='w-full min-h-12 flex justify-start items-center'>
            <p className='text-sm md:text-lg'>Product name</p>
          </div>
          <div className='w-full min-h-12 mt-4 flex justify-between items-center gap-4 text-sm md:text-lg'>
            <div className='flex flex-col justify-center items-start'>
              <label className='text-sm mb-1'>Quantity:</label>
              <input type="number" className="w-3/4 h-8 px-2 border border-orange-400 rounded-md" min={1} defaultValue={1}/>
            </div>
            <div className='flex flex-col justify-center items-start'>
              <label className='text-sm mb-1'>Price:</label>
              <p>400$</p>
            </div>
            <div className='flex flex-col justify-center items-start'>
              <button className='text-orange-400 mr-2 lg:mr-8' title="Delete"><FaTrashAlt/></button>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border-orange-500 border-1"/>
      <div className='w-full h-1/3 flex justify-start items-center pl-8 lg:pl-16 py-4'>
        <p>Total: <span>200.99$</span></p>
      </div>
    </div>
  )
}

export default CartItem