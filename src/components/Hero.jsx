import React from 'react'
import { useState } from "react";
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'


const Hero = () => {
    const sliders = [
       
        {
            url:'https://images6.alphacoders.com/883/thumb-1920-883558.jpg'
          },
          {
            url: 'https://images7.alphacoders.com/928/928507.jpg'
          },
          {
            url: 'https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77620.jpg?w=2000',
          },
      
        ]
        const [currentIndex, setCurrentIndex] = useState(0)
         
           const prevSlider = ()=>{
            const isFirstSlide = currentIndex === 0
            const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex -1
            setCurrentIndex(newIndex)
           }  
           
           const nextSlider = ()=>{
            const isLastSlide  = currentIndex === sliders.length -1
            const newIndex = isLastSlide  ? 0: currentIndex + 1
            setCurrentIndex(newIndex)
           }
    
           const moveToNextSlide = (slideIndex) =>{
            setCurrentIndex(slideIndex)
           }
    
      return (
        <div className='max-w-[1540px] h-[500px] w-full m-auto py-4 px-4 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-300'
                 style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
            ></div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlider}/>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={ nextSlider}/>
            </div>
            <div  className='flex top-4 justify-center py-2'>
                 {
                    // slideindex is a key is used
                    sliders.map((sliderItems, slideIndex)=>(
                       <div 
                        key={slideIndex}
                        onClick={()=>moveToNextSlide (slideIndex)}
                       className='text-2xl cursor-pointer'>
                        <RxDotFilled/>
                       </div>
                    ))
                 }
            </div>
        </div>
      )
    }
    

export default Hero
