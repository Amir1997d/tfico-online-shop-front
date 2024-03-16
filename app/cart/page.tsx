import CartItem from "@components/cart/CartItem";


const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center pt-24">
      <div className="w-full px-10 lg:px-24 flex flex-col justify-center items-start mb-6">
        <h1 className="font-bold text-xl mt-4 mb-2">Shopping Cart</h1>
        <hr className="w-full border-orange-400 border-1 mt-2"/>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <CartItem />
        <CartItem />
      </div>
      <div className="w-full px-10 flex flex-col md:flex-row md:justify-around md:items-center mb-4 ">
        <div className="flex justify-center items-center mb-4 md:mb-0">
          <p className="text-orange-500 font-bold text-lg mr-2">Subtotal:</p>
          <span className="text-lg">1000$</span>
        </div>
        <button className='bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-2 m-1 rounded-md hover:from-orange-500 hover:to-red-600'>Back To Shopping</button>
        <button className='bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-2 m-1 rounded-md hover:from-orange-500 hover:to-red-600'>Check Out</button>
      </div>
    </div>
  )
}

export default Page;