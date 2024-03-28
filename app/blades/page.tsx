'use client';
import BladeCard from '@components/shopping/BladeCard';
import BladeFilters from '@components/shopping/BladeFilters';
import { useEffect, useState } from 'react';
import { Blade } from '../../types/type';


const Page = () => {
  const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_URI;
  const [blades, setBlades] = useState<Blade[]>([]);

  useEffect(() => {
    fetch(`${SERVER_URI}/api/blades`)
    .then(res => res.json())
    .then(data => setBlades(data))
    .catch(error => console.log(error));
  }, []);

  return (
    <div className='w-full min-h-full mt-24 p-1 flex flex-col justify-start items-center lg:flex-row lg:justify-center lg:items-start'>
      <BladeFilters />
      <div className='w-full lg:w-3/4 m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {blades.map(blade => <BladeCard key={blade.id} blade={blade} />)}
      </div>
    </div>
  )
}

export default Page;