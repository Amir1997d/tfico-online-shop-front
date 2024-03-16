import React from 'react'
import OrderItem from './OrderItem';

const Oreders = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-start items-center lg:overflow-y-auto'>
      <h1 className='font-bold text-xl my-8'>Oreders</h1>
      <OrderItem />
    </div>
  )
}

export default Oreders;