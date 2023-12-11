import React from 'react'
import Food1 from "../images/FOOD3.jpg"
import { HomeIcon, RecipesIcon } from '../asset/svg'

const Details = () => {
  return (
    <div className='bg-white/60 w-full flex flex-col items-center px-4'>
        <div className='flex justify-between w-full'>
        <button title="Back to Home" className='flex items-center justify-center h-8 w-8 hover:bg-amber-800 bg-amber-700/80 rounded-b-md'><HomeIcon className="h-5 w-5 fill-gray-50 stroke-gray-50 "/></button>
        <button title="Similar Recipes" className='flex items-center justify-center h-8 w-8 hover:bg-amber-800 bg-amber-700/80 rounded-b-md'><RecipesIcon className="h-6 w-6 fill-gray-50"/></button>
      
        </div>
       
        <div className='sm:w-3/4 flex flex-col gap-8 p-4 sm:p-10'>
            <h1 className='sm:text-center font-paytone text-lg min-[480px]:text-2xl sm:text-3xl md:text-4xl text-orange-700'> Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs  </h1>
            <img src={Food1} className="mt-8 object-cover h-48 min-[480px]:h-60 sm:h-80 w-full rounded-lg "/>   
         
            <div className='flex items-center justify-center text-justify'>
                <p className='font-jost text-orange-800'>
                Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. 
                </p>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='font-black font-jost text-lg min-[480px]:text-xl text-orange-700'> Diets Preferences </h3>
                <div className='flex flex-col  gap-2 font-jost'>
                    <div>
                        <span className='font-bold text-orange-600'>&#x2713;&nbsp;</span>
                        <span className='text-orange-800'>Vegetarian</span>
                    </div>
                    <div>
                        <span className='font-bold text-orange-600'>&#x2713;&nbsp;</span>
                        <span className='text-orange-800'>Vegan</span>
                    </div>
                    <div>
                        <span className='font-bold text-orange-600'>&#x2713;&nbsp;</span>
                        <span className='text-orange-800'>Dairy-free</span>
                    </div>
                    <div>
                        <span className='font-bold text-orange-600'>&#x2713;&nbsp;</span>
                        <span className='text-orange-800'>Gluten-free</span>
                    </div>
                </div>
            </div>
        <div>

            </div>
            
          
        
            <p className='font-jost text-gray-700 text-justify'>PreparationFor spice rub: Combine all ingredients in small bowl. Do ahead: Can be made 2 days ahead. Store airtight at room temperature. For chimichurri sauce: Combine first 8 ingredients in blender; blend until almost smooth. Add 1/4 of parsley, 1/4 of cilantro, and 1/4 of mint; blend until incorporated. Add remaining herbs in 3 more additions, pureeing until almost smooth after each addition. Do ahead: Can be made 3 hours ahead. Cover; chill. For beef tenderloin: Let beef stand at room temperature 1 hour. Prepare barbecue (high heat). Pat beef dry with paper towels; brush with oil. Sprinkle all over with spice rub, using all of mixture (coating will be thick). Place beef on grill; sear 2 minutes on each side. Reduce heat to medium-high. Grill uncovered until instant-read thermometer inserted into thickest part of beef registers 130F for medium-rare, moving beef to cooler part of grill as needed to prevent burning, and turning occasionally, about 40 minutes. Transfer to platter; cover loosely with foil and let rest 15 minutes. Thinly slice beef crosswise. Serve with chimichurri sauce. *Available at specialty foods stores and from tienda.com</p>
            
        <div className='w-full flex justify-between items-center '>
            <div className='w-1/3 self-start bg-amber-300 h-3/4 flex justify-center items-center shadow-md rounded-b-full'>
                <div className='flex justify-center  items-center h-28 w-28 min-[360px]:h-32 min-[360px]:w-32 min-[480px]:h-36 min-[480px]:w-36  sm:h-96 sm:w-96  bg-white/75 border border-gray-100 rounded-full shadow-xl'>
                    
                </div>
            </div>
            
        </div>
        <div className="relative w-full hidden">
            <div className='absolute bottom-0   shadow-sm rounded-t-[75px] min-[480px]:rounded-t-[90px] sm:rounded-t-[120px] border-t border-amber-300/50  '>
                    <div className='flex justify-center  items-center h-28 w-28 min-[360px]:h-32 min-[360px]:w-32 min-[480px]:h-36 min-[480px]:w-96  sm:h-104 sm:w-104  bg-white/75 border border-gray-100 rounded-full shadow-xl'>
                        <img src={Food1} className=" object-cover h-20 w-20 min-[360px]:h-24 min-[360px]:w-24 min-[480px]:h-28 min-[480px]:w-28 sm:h-5/6 sm:w-5/6  rounded-full plate"/>   
                    </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Details