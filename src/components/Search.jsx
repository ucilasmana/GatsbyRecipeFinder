import React from 'react'
import { SearchIcon } from '../asset/svg'

const Search = () => {
  return (
    <div className='flex gap-3 justify-between bg-black/5 px-3 py-2 rounded-full'> 
      <input placeholder='Search' className='className="w-full bg-transparent  placeholder-gray-400 text-sm font-jost text-gray-700 outline-none '/>
      <SearchIcon className="h-5 w-5 fill-gray-50 stroke-gray-400"/>
    
    </div>
  )
}

export default Search