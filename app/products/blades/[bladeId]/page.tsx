import React from 'react';

type Params = {
  params: {
    bladeId: string;
  }
}

const Page = ({ params }: Params) => {
  
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <p>blade id Page: {params.bladeId}</p>
    </div>
  )
}

export default Page;