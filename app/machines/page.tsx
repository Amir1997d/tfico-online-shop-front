import MachineCard from '@components/shopping/MachineCard';
import MachineFilters from '@components/shopping/MachineFilters';


const Page = () => {
  return (
    <div className='w-full min-h-full mt-24 p-1 flex justify-center items-start'>
      <MachineFilters />
      <div className='w-3/4 lg:w-3/4 m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <MachineCard />
        <MachineCard />
        <MachineCard />
        <MachineCard />
        <MachineCard />
        <MachineCard />
      </div>
    </div>
  )
}

export default Page;