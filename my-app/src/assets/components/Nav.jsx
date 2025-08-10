import React from 'react'
import Navbar from './Navbar'

const Nav = () => {
  return (
    <>
    <div className='bg-dark d-flex text-center'>
      <marquee>
        <div className='d-flex'>
      <div className='text-light mt-2 ms-2'>
        <p>Welcome to Our Store Hiscraves</p>
      </div>
      <div className='d-flex ms-auto p-2 gap-2'>
        <img src="/Images/Group 1.png" alt="" style={{height:"25px"}}/>
        <p className='text-light'>Call Us: 1234567890</p>
      </div>
      </div>
      </marquee>
    </div>
    
    </>
  )
}

export default Nav