import Image from "next/image";
import orderImage from '@public/assets/images/blade-1.jpeg';

const OrderItem = () => {
  return (
    <div className='w-3/4 border-orange-400 rounded-md border p-4 mb-4 flex justify-between items-center shadow-md'>
      <div className="flex flex-col items-start gap-4">
        <p className="font-bold">Order1</p>
        <p><span className="font-bold">Order Sum: </span>1000$</p>
        <p><span className="font-bold">Order Status: </span>Manufacturing</p>
      </div>
      <div>
        <Image src={orderImage} alt="order image" width={200}/>
      </div>
    </div>
  )
}

export default OrderItem;