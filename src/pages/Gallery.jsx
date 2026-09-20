import { useState } from "react";
import gallery1_Img from '../assets/gallery1.png'
import gallery2_Img from '../assets/gallery2.png'
import gallery3_Img from '../assets/gallery3.png'
import gallery4_Img from '../assets/gallery4.png'
import yoga1_Img from '../assets/yoga1.png'
import yoga2_Img from '../assets/yoga2.png'
import yoga3_Img from '../assets/yoga3.png'
import yoga4_Img from '../assets/yoga4.png'
import '../App.css'
import "swiper/css";
import "swiper/css/pagination";
import heroPng from '../assets/hero.png'
import 'remixicon/fonts/remixicon.css'
import ChatBot from "../components/ChatBot";
import Location from "../components/Location";
import ScrollUp from "../components/ScrollUp";
import WhatsApp from "../components/WhatsApp";
import { Link } from "react-router-dom";

function Gallery() {

   const [dropdownOpen, setDropdownOpen] = useState(false);

   return (
    <>

      
    <header className="header" id="header">
          <nav className="nav container">
             <Link to="/" className="nav__logo">
                <img className='Logo' src={heroPng} alt='Jiwan Ki Aas Logo'/>        
             </Link>
             <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                   <li className="nav__item">
                      <Link to="/" className="nav__link active-link">Home</Link>
                   </li>
    
                   <li>
                      <a href="/#delivery" className="nav__link">Rescue Services</a>
                   </li>
    
                   <li>
                      <a href="/#about" className="nav__link">About Us</a>
                   </li>
    
                   <li>
                      <a href="/#prices" className="nav__link">Prices</a>
                   </li>
    
                   <li>
                      <a href='/#blogs' className='nav__link'>Blogs</a>
                   </li>
                   <li>
                      <Link to="/gallery" href="#gallery" className='nav__link'>Gallery</Link>
                   </li>
                   {/* Dropdown */}
                     <li className="dropdown nav__link">

                     <button
                        className="dropdown__button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                     >
                        Events
                        <i class="ri-arrow-down-line"></i>
                     </button>

                     {dropdownOpen && (
                        <ul className="dropdown__menu">

                           <li>
                               <Link to="/internship" className='nav__link'>Internship</Link>
                           </li>

                           <li>
                               <Link to="/schoolvisit" className='nav__link'>School Visits</Link>
                           </li>

                        </ul>
                     )}

                     </li>
                   <li>
                      <a href="/#contact" className="nav__link">Contact</a>
                   </li>
                </ul>
             </div>
    
                <div className="nav__buttons">
                   <div className="nav__toggle" id="nav-toggle">
                      <i className="ri-menu-line"></i>
                   </div>
                </div>
             </nav>
          </header>
      {/* <Header /> */}

            <br/>
            <br/>
            <h1>Our Gallery</h1>
      
            <section className="gallery section" id='internship'>
               <div className="gallery__container container grid">
                  {/* <!-- Insert images according to the size of the reference images (1500 X 800, 800 X 1500, 150 X 150, etc.) --> */}
                  <div className="gallery__image">
                     <img src={gallery1_Img} alt="image" className="gallery__img"/>
                  </div>
      
                  <div className="gallery__image">
                     <img src={gallery2_Img} alt="image" className="gallery__img"/>
                  </div>
      
                  <div className="gallery__image">
                     <img src={gallery3_Img} alt="image" className="gallery__img"/>
                  </div>
      
                  <div className="gallery__image">
                     <img src={gallery4_Img} alt="image" className="gallery__img"/>
                  </div>
               </div>
            </section>
            
            
            <br/>
            <br/>
            <h1>International Yoga Day Celebrations</h1>
      
            <section className="gallery section" id='internship'>
               <div className="gallery__container container grid">
                  {/* <!-- Insert images according to the size of the reference images (1500 X 800, 800 X 1500, 150 X 150, etc.) --> */}
                  <div className="gallery__image">
                     <img src={yoga1_Img} alt="image" className="gallery__img"/>
                  </div>
      
                  <div className="gallery__image">
                     <img src={yoga2_Img} alt="image" className="gallery__img"/>
                  </div>
      
                  <div className="gallery__image">
                     <img src={yoga3_Img} alt="image" className="gallery__img"/>
                  </div>
      
                  <div className="gallery__image">
                     <img src={yoga4_Img} alt="image" className="gallery__img"/>
                  </div>
               </div>
            </section>

      <section className="contact section" id="contact">
         <div className="contact__container container grid">
            <div className="contact__data">
               <h2 className="section__title">
                  Contact Us <br/>
                  <span>On All Platforms</span>
               </h2>

               <p className="contact__description">
                  Speak with our counselling team and discuss your concerns in a safe and supportive environment.
               </p>

               <div className="contact__info">
                  <div>
                     <div className="contact__icon">
                        <i className="ri-message-3-fill"></i>
                     </div>

                     <h3 className="contact__subtitle">Write to us</h3>

                     <div className="contact__social">
                        <a href="https://m.me/bedimcode" target="_blank" className="contact__social-link">
                           <i className="ri-messenger-fill"></i>
                        </a>

                        <a href="https://api.whatsapp.com/send?phone=916283794604&text=Hello, more information!"
                           target="_blank" className="contact__social-link">
                           <i className="ri-whatsapp-fill"></i>
                        </a>

                        <a href="https://web.telegram.org/" target="_blank" className="contact__social-link">
                           <i className="ri-telegram-2-fill"></i>
                        </a>

                        <a href="mailto:medical@email.com" target="_blank" className="contact__social-link">
                           <i className="ri-mail-fill"></i>
                        </a>
                     </div>
                  </div>

                  <div>
                     <div className="contact__icon">
                        <i className="ri-hospital-fill"></i>
                     </div>

                     <h3 className="contact__subtitle">Location</h3>

                     <address className="contact__address">
                        Khasra No. 56 <br/>
                        Vill.-Nagal Bhaga <br/>
                        Teh.- Kalka <br/>
                        Panchkula, HRY
                     </address>
                  </div>

                  <div>
                     <div className="contact__icon">
                        <i className="ri-time-fill"></i>
                     </div>

                     <h3 className="contact__subtitle">Attention</h3>

                     <address className="contact__address">
                        Monday - Sunday <br/>
                        9am -2pm & 4pm - 7pm
                     </address>
                  </div>

                  <div>
                     <div className="contact__icon">
                        <i className="ri-smartphone-fill"></i>
                     </div>

                     <h3 className="contact__subtitle">Phone number</h3>

                     <address className="contact__address">
                        +91-6283794604 <br/>
                        +91-9501611164
                     </address>
                  </div>
               </div>
            </div>

            <div className="contact__map">
               <h2>Our Location</h2>
               <Location></Location>
            </div>
         </div>
      </section>


   {/* <!--==================== FOOTER ====================--> */}
   <footer className="footer">
      <div className="footer__container container grid">
         <a href="#" className="nav__logo">
            <img className='Logo' src={heroPng} alt=''/>
         </a>

         <div className="footer__links">
            <a href="#home" className="footer__link">Home</a>

            <a href="#about" className="footer__link">About Us</a>

            <a href="#prices" className="footer__link">Prices</a>
         </div>

         <div className="footer__social">
            <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
               <i className="ri-facebook-circle-fill"></i>
            </a>

            <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
               <i className="ri-instagram-fill"></i>
            </a>

            <a href="twitter.com/" target="_blank" className="footer__social-link">
               <i className="ri-twitter-x-line"></i>
            </a>

            <a href="https://www.youtube.com/" target="_blank" className="footer__social-link">
               <i className="ri-youtube-fill"></i>
            </a>

            <a href="https://api.whatsapp.com/send?phone=916283794604&text=Hello, more information!" target="_blank"
               className="footer__social-link">
               <i className="ri-whatsapp-fill"></i>
            </a>
         </div>
      </div>

      <span className="footer__copy"> All Rights Reserved By Right Verse Technology
      </span>
   </footer>
   <ScrollUp />
   <ChatBot></ChatBot>
    <WhatsApp />

    </>
  )
}

export default Gallery