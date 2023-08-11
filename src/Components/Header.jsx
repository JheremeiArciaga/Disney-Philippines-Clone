import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import User from './../assets/Images/user.png';


const Header= () => {
    const [toggle,setToggle]=useState(false);
    const menu=[
        {
            name:'DISNEY+',
            icon:HiHome
        },
      
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'PARKS',
            icon:HiStar
        },
        {
            name:'DISNEY100',
            icon:HiTv
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex  gap-8 items-center'>
        <img src={logo} className='w-[80px] 
        md:w-[115px] object-cover' />
        <div className='hidden md:flex gap-8'>
        {menu.map((item)=>(
            <HeaderItem name={item.name} Icon={item.icon} />
        ))}
        </div>
          <div className='flex md:hidden gap-5'>
        {menu.map((item,index)=>index<3&&(
            <HeaderItem name={''} Icon={item.icon} />
        ))}
         <div className='md:hidden' onClick={()=>setToggle(!toggle)}>       
            <HeaderItem name={''} Icon={HiDotsVertical} />
           {toggle? <div className='absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.map((item,index)=>index>2&&(
            <HeaderItem name={item.name} Icon={item.icon} />
            ))}
            </div>:null}
            </div> 
        </div>
        </div>
        <div className="flex items-center ">
        <img src={User}
        className='w-[40px] rounded-full pe-2'/>
        <p className='cursor-pointer'>Sign In/Register</p>
        </div>
        
    </div>
  )
}

export default Header