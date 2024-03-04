import ProductDescription from '@components/product/ProductDescription';
import ProductImages from '@components/product/ProductImages';
import ProductInfos from '@components/product/BladeInfo';
import ProductReview from '@components/product/ProductReview';

type Params = {
  params: {
    bladeId: string;
  }
}

const BladePage = ({ params }: Params) => {
  
  return (
    <div className='w-full pt-16 min-h-screen flex flex-col justify-start items-center'>
      <div className='w-full m-8 flex flex-col lg:flex-row justify-around lg:justify-center lg:items-start items-center'>
        <ProductImages />
        <ProductInfos />
      </div>
      <ProductDescription />
      <ProductReview />
      {/* <p>blade id Page: {params.bladeId}</p> */}
    </div>
  )
}

export default BladePage;