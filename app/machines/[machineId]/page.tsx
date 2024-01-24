import React from 'react';

type Params = {
  params: {
    machineId: string;
  }
}

const Page = ({ params }: Params) => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <p>machine id Page: {params.machineId}</p>
    </div>
  )
}

export default Page;