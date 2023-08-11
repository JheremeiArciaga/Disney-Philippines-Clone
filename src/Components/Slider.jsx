import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import Banner from './../assets/Images/banner.png';

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;
const Slider= () => {
    const [movieList,setMovieList]=useState([]);
    const elementRef=useRef();
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }
  return (
    <>
        <HiChevronLeft className="hidden md:block text-stone-600 hover:text-white text-[30px] absolute
        mx-8 mt-[17rem] cursor-pointer " 
        onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-stone-600 hover:text-white text-[30px] absolute
        mx-8 mt-[17rem] cursor-pointer right-0' 
        onClick={()=>sliderRight(elementRef.current)}/>

   
    <div className='flex overflow-x-auto w-full px-16 py-4
    scrollbar-none scroll-smooth' ref={elementRef}> 
        {movieList.map((item)=>(
            <img src={IMAGE_BASE_URL+item.backdrop_path} 
            className='min-w-full  md:h-[560px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in'/>
        ))}
    </div>

<section>
    <div className="w-full my-[4rem] hover:scale-105 cursor-pointer ">
    
 <img src={Banner} alt="" />
    </div>

</section>

    </>
  )
}

export default Slider