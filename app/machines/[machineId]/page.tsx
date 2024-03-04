import React from 'react';
import Image from 'next/image';
import myImage from '@public/assets/images/machine-1.png';
import ProductImages from '@components/product/ProductImages';
import MachineInfo from '@components/product/MachineInfo';
import ProductDescription from '@components/product/ProductDescription';
import ProductReview from '@components/product/ProductReview';

type Params = {
  params: {
    machineId: string;
  }
}

const MachinePage = ({ params }: Params) => {
  return (
    <div className='w-full pt-16 min-h-screen flex flex-col justify-start items-center'>
      <div className='w-full m-8 flex flex-col lg:flex-row justify-around lg:justify-center lg:items-start items-center'>
        <ProductImages />
        <MachineInfo />
      </div>
      <ProductDescription />
      <ProductReview />
      {/* <p>blade id Page: {params.machineId}</p> */}
    </div>
  )
}

export default MachinePage;