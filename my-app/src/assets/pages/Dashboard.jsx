import React from 'react'

const Dashboard = () => {
  return (
    <>
      <div className='mt-4'>
        <img className='w-100' src="\Images\banner.jpg" alt="" />
      </div>
      <div>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <div className='dash_i'>
                <img className='w-100' src="\Images\Group 50.png" alt="" />
                <div className='dash_t'>
                  Streetwear Collections
                </div>
              </div>

            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <div className='dash_i'>
                <img className='w-100' src="\Images\Group 51.png" alt="" />
                <div className='dash_t'>
                  Streetwear Collections
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <div className='dash_i'>
                <img className='w-100' src="\Images\Group 52.png" alt="" />
                <div className='dash_t'>
                  Streetwear Collections
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <img className='w-100' src="\Images\banner1 3.png" alt="" />
      </div>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 mb-3'>
            <div className='ad_img'>
            <img className='w-100' src="\Images\Rectangle 12.png" alt="" />
            <div className='ad_icon'>
              <img src="\Images\diamond 1.png" alt="" />
              <p className='h2'>Hurry Up!</p>
              <p className='h1'>85% OFF</p>
              <p className='h4'>Sale</p>
              <button className='ad_btn text-light  bg-transparent border-2 border-light p-1 px-3'>Shop Now</button>
            </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 mb-3'>
           <div className='ad_img'>
            <img className='w-100' src="\Images\Rectangle 13.png" alt="" />
            <div className='ad_icon'>
              <img src="\Images\discount 1.png" alt="" />
              <p className='h2'>Hurry Up!</p>
              <p className='h1'>75% OFF</p>
              <p className='h4'>Sale</p>
              <button className='ad_btn text-light  bg-transparent border-2 border-light p-1 px-3'>Shop Now</button>
            </div>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard