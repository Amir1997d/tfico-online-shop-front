"use client";
import React, { useEffect, useState } from 'react';
import ProductImages from '@components/product/ProductImages';
import MachineInfo from '@components/product/MachineInfo';
import ProductDescription from '@components/product/ProductDescription';
import ProductReview from '@components/product/ProductReview';
import { Machine } from '../../../types/type';

type Params = {
  params: {
    machineId: string;
  }
}

const MachinePage = ({ params }: Params) => {

  const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_URI; 
  const [machine, setMachine] = useState<Machine>();

  useEffect(() => {
    fetch(`${SERVER_URI}/api/machines/${params.machineId}`)
    .then(res => res.json())
    .then(data => setMachine(data))
    .catch(error => console.log(error));
  }, []);

  return (
    <div className='w-full pt-16 min-h-screen flex flex-col justify-start items-center'>
      <div className='w-full m-8 flex flex-col lg:flex-row justify-around lg:justify-center lg:items-start items-center'>
        <ProductImages />
        <MachineInfo machine={machine}/>
      </div>
      <ProductDescription description={machine?.product.description}/>
      <ProductReview />
    </div>
  )
}

export default MachinePage;