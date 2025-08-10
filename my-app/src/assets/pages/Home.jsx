import React from 'react'
import Pricing from './Pricing'
import Dashboard from './Dashboard'
import Contact from './Contact'
const Home= () => {
  return (
    <>
      <div>
        <img src="/Images/main.jpg" alt="Main" style={{width:"100vw"}}/>
      </div>
      <div className='container my-3 '>
        <div className='row justify-content-center'> 
        <div className='col-sm-6 col-md-4 col-lg-2 text-center mb-3'><img src="/Images/Group 244.png" alt="" />
        <p className='h6'>Men’s T-Shirts</p>
        </div>
        <div className='col-sm-6 col-md-4 col-lg-2 text-center mb-3'><img src="/Images/Ellipse 8.png" alt="" />
        <p className='h6'>Women's Wear</p>
        </div>
        <div className='col-sm-6 col-md-4 col-lg-2 text-center mb-3'><img src="/Images/Group 246.png" alt="" />
        <p className='h6'>Winter Collection</p>
        </div>
        <div className='col-sm-6 col-md-4 col-lg-2 text-center mb-3'><img src="/Images/Group 247.png" alt="" />
        <p className='h6'>Hooded T-Shirts</p>
        </div>
        <div className='col-sm-6 col-md-4 col-lg-2 text-center mb-3'><img src="/Images/Group 248.png" alt="" />
        <p className='h6'>Polo Neck T-Shirts</p>
        </div>
        <div className='col-sm-6 col-md-4 col-lg-2 text-center mb-3'><img src="/Images/Group 249.png" alt="" />
        <p className='h6'>Full Sleeves T-Shirts</p>
        </div>
     </div>
     </div>

     <div className='container text-center my-4'>
        <div className='row gy-1'> 
        <div className='col-12 col-md-12 col-lg-6 mb-2'><img className="img-fluid w-100" src="/Images/image 2.png" alt="" /></div>
        <div className='col-12 col-md-12 col-lg-6 mb-2'><img className="img-fluid w-100" src="/Images/image 3.png" alt="" /></div>
     </div>
     </div>
     <div className='container text-center'>
        <div className='row gy-1'> 
        <div className='col-12 col-md-6 col-lg-4 mb-2'><img className="img-fluid w-100" src="/Images/image 4.png" alt="" /></div>
        <div className='col-12 col-md-6 col-lg-4 mb-2'><img className="img-fluid w-100" src="/Images/image 6.png" alt="" /></div>
        <div className='col-12 col-md-6 col-lg-4 mb-2'><img className="img-fluid w-100" src="/Images/image 5.png" alt="" /></div>
     </div>
     </div>
     <Pricing/>
     <Dashboard/>
     <Contact/>
    </>
  )
}

export default Home
