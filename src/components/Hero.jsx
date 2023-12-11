import React from 'react'
import Food1 from "../images/FOOD1.jpg"
import Food2 from "../images/FOOD2.jpg"

const Hero = () => {
  return (
    <div className='mt-4 w-full flex flex-col justify-center gap-4'>
      <div className='flex items-center gap-3 w-full justify-center'> 
          <div className='flex flex-col gap-3 w-1/2 h-64 bg-white/80 border border-gray-100 rounded-md shadow-md'> 
              <img src={Food1} className=" object-cover h-2/3 w-full rounded-t-md"/>   
              <div></div>
          </div>
          <div className='flex flex-col items-center gap-3 w-1/2 h-64 justify-center bg-white/80 border border-gray-100 rounded-md shadow-md'> 
              <img src={Food2} className=" object-cover h-32 w-32 rounded-md"/>   
          </div>
      </div>
       
      <div className='flex gap-6 shadow-sm  h-96 w-full md:h-72 md:w-60 rounded-lg items-center justify-evenly'>
        <div className='flex flex-col gap-3 items-start'>
          <h2 className="font-lobster text-center text-white text-5xl md:text-6xl">American Steak</h2>
          <span className='font-philosopher'>This is steak from america</span>
          <button className='p-2 rounded-lg text-sm text-amber-50  bg-red-800 hover:bg-red-900 border-2 border-red-800 hover:border-red-900 font-philosopher font-bold'>Check the Recipe</button>
        </div>
        <div className='flex items-center justify-center relative'>
          
        
          
        </div>
     
   
      </div>
      
      <div className="modal hidden">
      <input placeholder='Search' className='className="w-full bg-transparent  placeholder-gray-400 text-sm font-jost text-gray-700 outline-none '/>
      </div>
    </div>
  )
}

export default Hero