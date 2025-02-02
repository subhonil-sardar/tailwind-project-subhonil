import { Button } from '@mui/material'
import React from 'react'
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className='bg-gray-700'>
        <div className="container px-4 py-7 mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-2 text-white'>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h2 className='text-2xl font-bold'>Logo</h2>
                    </div>
                    <div>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sit accusantium veritatis animi expedita suscipit atque velit non amet distinctio laudantium asperiores laboriosam voluptates aliquid, beatae, nostrum, culpa repudiandae ut.</p>
                    </div>
                    <div>
                        <Button sx={{width:'40px', height:'40px', borderRadius:'50%', backgroundColor:'#313131', color:'white', fontSize: '25px'}}>
                            <IoLogoTwitter  />
                        </Button>
                        <Button sx={{width:'40px', height:'40px', borderRadius:'50%', backgroundColor:'#313131', color:'white', fontSize: '25px'}}>
                            <FaGoogle  />
                        </Button>
                        <Button sx={{width:'40px', height:'40px', borderRadius:'50%', backgroundColor:'#313131', color:'white', fontSize: '25px'}}>
                            <FaFacebookF  />
                        </Button>
                        <Button sx={{width:'40px', height:'40px', borderRadius:'50%', backgroundColor:'#313131', color:'white', fontSize: '25px'}}>
                            <ImLinkedin2  />
                        </Button>
                    </div>
                </div>

                <div className='pl-6 mt-6 md:mt-0'>
                    <div>
                        <h1 className='text-2xl font-bold'>Hello I Am Heading</h1>
                    </div>
                    <div className='grid grid-cols-2 mt-4'>
                        <div>
                            <ul className='underline gap-4 flex flex-col '>
                                <li>React</li>
                                <li>Devoloper</li>
                                <li>Next</li>
                                <li>Devoloper</li>
                            </ul>
                        </div>
                        <div>
                        <ul className='underline flex flex-col gap-4'>
                                <li>React</li>
                                <li>Devoloper</li>
                                <li>Next</li>
                                <li>Devoloper</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer