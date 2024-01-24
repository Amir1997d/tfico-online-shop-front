import BladeCard from '@components/shopping/BladeCard';
import BladeFilters from '@components/shopping/BladeFilters';


const Page = () => {
  return (
    <div className='w-full min-h-full mt-24 p-1 flex justify-center items-start'>
      <BladeFilters />
      <div className='w-3/4 lg:w-3/4 m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <BladeCard />
        <BladeCard />
        <BladeCard />
        <BladeCard />
        <BladeCard />
        <BladeCard />
        <BladeCard />
        <BladeCard />
        <BladeCard />
        <BladeCard />
      </div>
    </div>
  )
}

export default Page;