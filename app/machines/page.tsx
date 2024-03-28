'use client';
import MachineCard from '@components/shopping/MachineCard';
import MachineFilters from '@components/shopping/MachineFilters';
import { Machine } from '../../types/type';
import { useState, useEffect } from 'react';


const Page = () => {

  const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_URI;
  const [machines, setMachines] = useState<Machine[]>([]);

  useEffect(() => {
    fetch(`${SERVER_URI}/api/machines`)
    .then(res => res.json())
    .then(data => setMachines(data))
    .catch(error => console.log(error));
  }, []);
  
  return (
    <div className='w-full min-h-full mt-24 p-1 flex flex-col justify-start items-center lg:flex-row lg:justify-center lg:items-start'>
      <MachineFilters />
      <div className='w-3/4 lg:w-3/4 m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
       {machines.map(machine => <MachineCard key={machine.id} machine={machine}/>)}
      </div>
    </div>
  )
}

export default Page;