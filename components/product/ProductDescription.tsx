import React from 'react'

type Props = {
  description: string | undefined;
}

const ProductDescription: React.FC<Props> = ({ description }) => {

  return (
    <div className='w-full px-10 md:px-24 lg:px-12 mb-10'>
        <h2 className='font-bold text-xl mb-2'>Description:</h2>
        <hr className='border-1 border-orange-400 mb-4' />
        <p className='text-justify'>{description}</p>
    </div>
  )
}

export default ProductDescription