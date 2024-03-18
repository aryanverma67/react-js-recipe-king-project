import React from 'react'
import { mealData } from '../data/data'
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { useState } from 'react';

const Meal = () => {
    const [foods, setfoods] = useState(mealData)
    const filterCat = (category)=>{
        setfoods(
            mealData.filter((item)=>{
                return item.category === category
            })
        )

          }
    const filterprice = (price)=>{
      setfoods(
          mealData.filter((item)=>{
              return item.price === price
          })
      )

  }

  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
                  <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
            Our Meal
          </h1>
          <div className="flex flex-col lg:flex-row justify-center ">
            <div className="flex justify-center md:justify-center">
                <button onClick={()=>setfoods(mealData)} className='m-1 border-orange-600 text-white hover:bg-white bg-orange-600 hover:text-orange-800 hover:border-orange-700'>All</button>
                <button onClick={()=>{filterCat("pizza")}} className='m-1 border-orange-600 text-white hover:bg-white bg-orange-600 hover:text-orange-800 hover:border-orange-700'>Pizza</button>
                <button onClick={()=>{filterCat("chicken")}} className='m-1 border-orange-600 text-white hover:bg-white bg-orange-600 hover:text-orange-800 hover:border-orange-700'>Chicken</button>
                <button onClick={()=>{filterCat("salad")}} className='m-1 border-orange-600 text-white hover:bg-white bg-orange-600 hover:text-orange-800 hover:border-orange-700'>salad</button>
                 <div/>

               <div className='ml-60'>
               <button onClick={()=>setfoods(mealData)} className='m-1 border-orange-600 text-white hover:bg-white bg-orange-600 hover:text-orange-800 hover:border-orange-700'>All</button>

                <button onClick={()=>{filterprice("$100")}} className='m-1 border-orange-600 text-white hover:bg-white bg-orange-600 hover:text-orange-800 hover:border-orange-700'>100$</button>
                <button onClick={()=>{filterprice("$200")}} className='m-1 border-orange-600 text-white hover:bg-white bg-orange-600 hover:text-orange-800 hover:border-orange-700'>$200</button>
                <button onClick={()=>{filterprice("$300")}} className='m-1 border-orange-600 text-white hover:bg-white bg-orange-600 hover:text-orange-800 hover:border-orange-700'>$300</button>
                <button onClick={()=>{filterprice("$400")}} className='m-1 border-orange-600 text-white hover:bg-white bg-orange-600 hover:text-orange-800 hover:border-orange-700'>$400</button>
                </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
            {
                foods.map((item)=>(
                    <div key={item.id} className="border-none hover:scale-105 duration-300">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="flex justify-between py-2 px-2">
              <p className="font-bold ">{item.name}</p>
              <p className="bg-blue-600 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 border-white font-bold">
                {" "}
                {item.price}
              </p>
            </div>

            <div className="pl-2 py-4 -mt-7">
              <p className="flex items-center text-indigo-600">
                View More
                <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
                    </div>

                ))

            }
          </div>


      
    </div>
  )
}

export default Meal
