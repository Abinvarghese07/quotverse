import React from 'react';
import {GoHomeFill} from 'react-icons/go';
import {FaRegHeart} from 'react-icons/fa6';
import {FaGripLines} from 'react-icons/fa6';
import { Link } from 'react-router-dom';



const Navbar = () => {
    

    return (


        
        <div className='mx-[7vh] rounded-md border-b border-slate-800 '>
            <nav className='p-3 flex items-center justify-around bg-zinc-900 text-white  '>
                <div className=''>
                    <h1 className='text-[22px] font-roboto font-medium '>Quotverse</h1>
                </div>
                <div className='flex text-2xl ml-1 gap-4 lg:gap-[26vh] mr-[11vh]'>
                    <Link to='/'>
                        <GoHomeFill className='hover:text-red-700' />

                    </Link>
                    <Link to='/liked'>
                        <FaRegHeart className='hover:text-red-700' />

                    </Link>
                </div>
                <div className='text-2xl ml-4 text-zinc-900 lg:text-white'>
                    <FaGripLines/>
                </div>

            </nav>
            
        </div>
        
    ); 
};

export default Navbar;