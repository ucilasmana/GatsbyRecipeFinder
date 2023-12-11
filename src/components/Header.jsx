import React from 'react'
import { SearchIcon } from '../asset/svg'
const Header = () => {
  return (
    <header className="bg-amber-200 shadow-sm rounded-b-[75px] min-[480px]:rounded-b-[90px] sm:rounded-b-[120px] border-b border-amber-300/50  w-full h-72 sm:h-80 flex flex-col gap-9  justify-center items-center ">
          <h1 className="font-paytone text-2xl min-[320px]:text-3xl min-[460px]:text-3xl sm:text-4xl md:text-5xl text-red-600">RecipeFinder</h1>
                <div className='flex items-center gap-3 px-3 sm:py-1 w-5/6 sm:w-3/4 justify-between bg-white/80  rounded-md shadow-md'> 
              <input placeholder='Search' className='w-5/6 bg-transparent  p-2 placeholder-gray-400 text-sm font-jost text-gray-700 outline-none '/>
              <SearchIcon className="h-5 w-5   stroke-gray-400 "/>         
           </div>
          
           <div className='flex flex-col sm:flex-row gap-3 text-sm font-jost justify-center items-center'>
                <div className='flex gap-1 min-[320px]:gap-3'>
                    <span className='cursor-pointer hover:bg-amber-400/90  border border-amber-300 border-amber-300 font-bold px-1 min-[320px]:px-2 min-[320px]:py-1 rounded-full shadow-sm bg-amber-300/75 text-red-600 text-xxs min-[320px]:text-xs sm:text-sm md:text-base'>African</span>
                    <span className='cursor-pointer hover:bg-amber-400/90  border border-amber-300 border-amber-300 font-bold px-1 min-[320px]:px-2 min-[320px]:py-1 rounded-full shadow-sm bg-amber-300/75 text-red-600 text-xxs min-[320px]:text-xs sm:text-sm md:text-base'>American</span>
                    <span className='cursor-pointer hover:bg-amber-400/90  border border-amber-300 border-amber-300 font-bold px-1 min-[320px]:px-2 min-[320px]:py-1 rounded-full shadow-sm bg-amber-300/75 text-red-600 text-xxs min-[320px]:text-xs sm:text-sm md:text-base'>Asian</span>
                    <span className='cursor-pointer hover:bg-amber-400/90  border border-amber-300 border-amber-300 font-bold px-1 min-[320px]:px-2 min-[320px]:py-1 rounded-full shadow-sm bg-amber-300/75 text-red-600 text-xxs min-[320px]:text-xs sm:text-sm md:text-base'>European</span>
                </div>
                <div className='flex gap-1 min-[320px]:gap-3'>
                    <span className='cursor-pointer hover:bg-amber-400/90  border border-amber-300 border-amber-300 font-bold px-1 min-[320px]:px-2 min-[320px]:py-1 rounded-full shadow-sm bg-amber-300/75 text-red-600 text-xxs min-[320px]:text-xs sm:text-sm md:text-base'>Carribean</span>
                    <span className='cursor-pointer hover:bg-amber-400/90  border border-amber-300 border-amber-300 font-bold px-1 min-[320px]:px-2 min-[320px]:py-1 rounded-full shadow-sm bg-amber-300/75 text-red-600 text-xxs min-[320px]:text-xs sm:text-sm md:text-base'>Middle Eastern</span>
                </div>
                
           </div>
     </header>
  )
}

export default Header