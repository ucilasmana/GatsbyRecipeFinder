import React from 'react'
import List from "../components/List"
import Search from "../components/Search"
import Food1 from "../images/FOOD1.jpg"
import Food2 from "../images/FOOD2.jpg"
import Food3 from "../images/FOOD3.jpg"

const Main = () => {
  return (
    <main className="my-7 bg-amber-100 p-6 flex flex-col gap-6 min-[360px]:gap-10 sm:gap-16">
         <h2 className="text-center font-jost text-base min-[320px]:text-lg min-[480px]:text-xl sm:text-2xl  text-amber-700/90">Find your favorite Recipes here</h2>
          <div className=' w-full flex flex-col justify-center gap-24'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-center gap-6 w-full justify-items-center'> 
            <div className='w-3/4 flex flex-col justify-center  items-center  gap-5 text-center'>
                  <div className='flex justify-center  items-center h-28 w-28 min-[360px]:h-32 min-[360px]:w-32 min-[480px]:h-36 min-[480px]:w-36  sm:h-44 sm:w-44  bg-white/75 border border-gray-100 rounded-full shadow-xl'>
                      <img src={Food1} className=" object-cover h-20 w-20 min-[360px]:h-24 min-[360px]:w-24 min-[480px]:h-28 min-[480px]:w-28 sm:h-32 sm:w-32  rounded-full plate"/>   
                  </div> 
                  <span className='font-jost text-xxs min-[360px]:text-xs min-[480px]:text-sm sm:text-base  text-gray-700 '>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</span>
              </div>
              <div className='w-3/4 flex flex-col justify-center  items-center  gap-5 text-center'>
                  <div className='flex justify-center  items-center h-28 w-28 min-[360px]:h-32 min-[360px]:w-32 min-[480px]:h-36 min-[480px]:w-36  sm:h-44 sm:w-44  bg-white/75 border border-gray-100 rounded-full shadow-xl'>
                      <img src={Food2} className=" object-cover h-20 w-20 min-[360px]:h-24 min-[360px]:w-24 min-[480px]:h-28 min-[480px]:w-28 sm:h-32 sm:w-32  rounded-full plate"/>   
                  </div> 
                  <span className='font-jost text-xxs min-[360px]:text-xs min-[480px]:text-sm sm:text-base  text-gray-700 '>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</span>
              </div>
              <div className='w-3/4 flex flex-col justify-center  items-center  gap-5 text-center'>
                  <div className='flex justify-center  items-center h-28 w-28 min-[360px]:h-32 min-[360px]:w-32 min-[480px]:h-36 min-[480px]:w-36  sm:h-44 sm:w-44  bg-white/75 border border-gray-100 rounded-full shadow-xl'>
                      <img src={Food3} className=" object-cover h-20 w-20 min-[360px]:h-24 min-[360px]:w-24 min-[480px]:h-28 min-[480px]:w-28 sm:h-32 sm:w-32  rounded-full plate"/>   
                  </div> 
                  <span className='font-jost text-xxs min-[360px]:text-xs min-[480px]:text-sm sm:text-base  text-gray-700 '>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</span>
              </div>
              <div className='w-3/4 flex flex-col justify-center  items-center  gap-5 text-center'>
                  <div className='flex justify-center  items-center h-28 w-28 min-[360px]:h-32 min-[360px]:w-32 min-[480px]:h-36 min-[480px]:w-36  sm:h-44 sm:w-44  bg-white/75 border border-gray-100 rounded-full shadow-xl'>
                      <img src={Food1} className=" object-cover h-20 w-20 min-[360px]:h-24 min-[360px]:w-24 min-[480px]:h-28 min-[480px]:w-28 sm:h-32 sm:w-32  rounded-full plate"/>   
                  </div> 
                  <span className='font-jost text-xxs min-[360px]:text-xs min-[480px]:text-sm sm:text-base  text-gray-700 '>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</span>
              </div>
            </div>
          
      
      
    </div>
        
        </main>
  )
}

export default Main