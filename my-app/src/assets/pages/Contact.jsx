import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faLocationDot, faMessage, faPhone,  } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
      <div className='help_img mt-3 mb-3'>
        <img className='w-100' src="\Images\Group 261.png" alt="" />
      </div>
      <div className='d-flex justify-content-center'>
        <div className='sub_box'>
          <img className='sub_img w-100' src="\Images\Mask group.png" alt="" />
          <div className='sub_icon'>
            <p className='sub_t'>Subscribe to get updates on exciting offers & deals</p>
            <form action="">
              <div className='form_b'>
                <input className='mail_btn bg-transparent' type="text" placeholder='Enter your email' />
                <div className='form_t bg-light p-2 ' >Subscribe</div>
              </div>
            </form>
          </div>

        </div>
      </div>

      <footer>
        <div className='foot mt-5 '>
          <div className='main_text '>
            <div className='f_text mt-5'>
              <p>
                Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry. Lorem Ipsum has been <br />the industry's standard dummy text ever since the <br />1500s, when an unknown printer took a galley of <br />type and scrambled it to make a type specimen <br /> book. It has survived not only five centuries....
              </p>
              <div className='social mt-3'>
                <img src="\Images\Group 230.png" alt="" />
                <img src="\Images\Group 231.png" alt="" />
                <img src="\Images\Group 232.png" alt="" />
                <img src="\Images\Group 233.png" alt="" />
                <img src="\Images\Group 234.png" alt="" />
              </div>
            </div>
            <div className='s_text mt-5'>
              <p>ONLINE SHOPPING</p>
              <ul>
                <li>Men's T-Shirts</li>
                <li>Women,s Wear</li>
                <li>Winter Collections</li>
                <li>Hooded T-Shirts</li>
                <li>Streetwear Collections</li>
              </ul>
            </div>
            <div className='s_text mt-5'>
              <p>CUSTOMER POLICIES</p>
              <ul>
                <li>About Us</li>
                <li>Terms & Conditions</li>
                <li>Shipping & Returns Policy</li>
                <li>Cancellation & Refund Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className='s_textt mt-5'>
              <p>STORE INFORMATION</p>
              <ul>
                <div className='contact'>
                  <FontAwesomeIcon className='i' icon={faLocationDot}/>
                  <li>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. </li>
                </div>
                <div className='contact'>
                  <FontAwesomeIcon className='i' icon={faPhone}/>
                <li>Call Us: 1234567890</li>
                </div>
                <div className='contact'>
                  <FontAwesomeIcon className='i' icon={faEnvelope}/>
                <li>Email Us: info@yourmail.com</li>
                </div>
              </ul>
            </div>

          </div>
          <div className='lowerfoot w-100'>
            <p className='p_font text-light d-flex justify-content-center mt-3'>©2022-23 Powered By dummy team</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact