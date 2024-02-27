import React from 'react';

const SelectMaterial = () => {
  return (
    <div className='w-full flex flex-col justify-center items-start'>
        <label htmlFor='material'>Required Material:</label>
        <select name="material" id="material" className='w-full border-orange-400 rounded-md border px-2 py-2 mt-1' defaultValue="Select a material">
          <option>Select a material</option>
          <option>Tool Steel</option>
          <option>High-Speed Steel (HSS)</option>
          <option>Carbide</option>
          <option>Stainless Steel</option>
          <option>Carbon Steel</option>
          <option>Ceramic</option>
          <option>Titanium</option>
        </select>
    </div>
  )
}

export default SelectMaterial;