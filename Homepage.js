import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {RiAccountCircleFill} from 'react-icons/ri';
import {FaRegHeart} from 'react-icons/fa';
import {RiChat1Line} from 'react-icons/ri';
import {FiSend} from 'react-icons/fi';
import {IoSettingsOutline} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import {IoCloseCircleOutline} from 'react-icons/io5';
import {FaGripLines} from 'react-icons/fa6';






const Homepage = () => {
    



    const[quotesData,setQuotesData] = useState([])
    const[tagData,setTagData] = useState([])

    

    useEffect( () => {
        getQuotes()

    },[])

    useEffect( () => {
        getTags()
    },[])

    const getQuotes = async () =>{
        const api_url = 'https://api.quotable.io/quotes/random?limit=5'
        const response = await fetch(api_url)
        const data = await response.json()
        console.log(data)
        setQuotesData(data)

    }

    const getTags = async () => {
        const api = 'https://api.quotable.io/tags?order=desc'
        const response = await fetch(api)
        const data = await response.json()
        console.log(data)
        const limitedData = data.slice (0, 5);
        setTagData (limitedData);


    } 
        const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

   
    





    return (
        <div className='mx-[7vh] flex  bg-zinc-900  '>
            <div className='text-white p-[40px] hidden lg:flex flex-col  font-inter  w-[400px] '> 
                <RiAccountCircleFill className='text-[75px] text-slate-300'></RiAccountCircleFill>
                <h1 className=' text-start text-[20px] p-2 mt-2  font-bold '>Jhon Doe</h1>
                <p className='text-start text-[12px] px-2 '>jhondoe</p>
                <p className='text-start mt-[10px] text-[12px] font-medium px-2'>UI Developer | Let's redesign the world</p>
                <p className='text-start font-thin mt-[15px] px-2 text-sm'>2957 likes .</p>

            </div>

            <div className='text-white p-2 font-inter border border-slate-800 w-[640px] mb-[15vh] ' key='id '>
            
                
                {
                   quotesData.map(item => (
                    <div className='text-start py-2 flex border-b-2 border-slate-800'>
                    <div className='text-[46px] text-white'>
                        <RiAccountCircleFill/>

                    </div>
                    <div className='flex flex-col px-2 py-1 '>
                        <h1 className='text-[14px] font-medium'>{item.author}</h1>
                    <h2 className='text-[13px] font-medium '>{item.content}</h2>
                    <div className='flex text-xl gap-4 py-3 '>
                       <Link to={'/liked/' + item._id}>
                         <FaRegHeart className='hover:text-red-800' /> 

                       </Link>

                      

                        <RiChat1Line/>
                        <FiSend/>

                    </div>
                    <p className='text-[13px] font-thin mb-3'>{item.tags[0]}</p>
                    </div>



                    </div>
                   ))
                }
            </div>

            <div className=''>
                <div className='flex lg:hidden text-sm ml-4  text-white px-5 ' onClick={toggleNav}>
                {!isOpen ? <FaGripLines/> : <IoCloseCircleOutline/> }
            </div>
               <div className={!isOpen ? 'hidden lg:flex text-white  text-start py-6 px-8 pl-12 font-inter  flex-col w-[400px]' : '  text-white  text-start  lg:py-8 lg:px-8 lg:pl-12 font-inter flex flex-col w-[200px] lg:w-[400px]'}>
                 <div className=' flex items-center justify-between '  >
                <h1 className='text-[11px]  lg:text-[20px] font-semibold py-4 px-3' >Trending Topics</h1>
                <IoSettingsOutline className='hidden lg:flex lg:text-2xl text-slate-400'></IoSettingsOutline>
                </div>
                
                <p className='text-[10px] lg:text-[14px] font-md  text-blue-500 leading-5 py-2 px-3'>show  all quotes</p>
               {
                tagData.map(items => (
                    <div className='py-2 flex flex-col px-3 '>
                    <Link to={'trending/' + items.slug}>
                        <h2 className='font-thin text-[10px] lg:text-[12px] capitalize hover:text-blue-500'>{items.name}</h2>

                    </Link>
                        <Link to={'trending/' + items.slug}>
                        <p className='font-semibold text-[10px] lg:text-[14px] hover:text-blue-500'>#{items.slug}</p>

                        </Link>
                        <Link to={'trending/' + items.slug}>
                        <p className='font-thin text-[10px] lg:text-[12px] hover:text-blue-500'>{items.quoteCount} quotes</p>
                            
                        </Link>
                    </div>
                ))
               }
               </div>
            </div>
            
        </div>
    );
};

export default Homepage;