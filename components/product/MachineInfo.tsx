import { Machine } from '../../types/type';
import React from 'react'

type Props = {
  machine: Machine | undefined;
}

function MachineInfo(props: Props) {
  return (
    <div className='w-full px-10 md:px-24 lg:px-0 lg:w-2/3 min-h-32 mt-4 lg:mr-8'>
      <h1 className='text-2xl lg:text-3xl mb-2'>{props.machine?.product.title}</h1>
      <hr className='border-1 border-orange-400 mb-4' />
      <div className='w-full flex flex-col justify-around items-start gap-4'>
        <p><span className='font-bold mr-2'>Type:</span>{props.machine?.machineType}</p>
        <p><span className='font-bold mr-2'>Warranty:</span>{props.machine?.warranty} year</p>
        <p><span className='font-bold mr-2'>CNC:</span>{props.machine?.cnc}</p>
        <p><span className='font-bold mr-2'>Industry:</span>{props.machine?.product.industry}</p>
        <p><span className='font-bold mr-2'>Machine Size:</span>{props.machine?.size}</p>
        <p><span className='font-bold mr-2'>Price:</span>{props.machine?.product.price}$</p>
        <div className='w-full md:w-2/3 flex justify-start items-center mt-4'>
          <input
            type='number'
            className='w-1/2 md:w-1/5 border-orange-400 rounded-md border px-3 py-3 mr-4'
            min={1}
            max={10000}
            defaultValue={1} />
          <button className='w-1/2 md:w-1/3 xl:1/4 min-h-8 p-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-md hover:from-orange-500 hover:to-red-600'>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default MachineInfo;