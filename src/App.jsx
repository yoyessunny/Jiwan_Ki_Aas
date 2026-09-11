import { useState } from 'react'
import aboutImg from './assets/about-img.png'
import deliveryImg from './assets/delivery-img.png'
import gallery1_Img from './assets/gallery1.png'
import gallery2_Img from './assets/gallery2.png'
import gallery3_Img from './assets/gallery3.png'
import gallery4_Img from './assets/gallery4.png'
import homeImg from './assets/home-img.png'
import './App.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import heroPng from './assets/hero.png'
import 'remixicon/fonts/remixicon.css'
import ChatBot from "./components/ChatBot";
import Location from "./components/Location";
import SlideShare from './components/SlideShare'
import YouTube from './components/YouTube'
import Header from "./components/Header";
import GoogleSlides from "./components/GoogleSlides";


function App() {

   const [showMenu, setShowMenu] = useState(false);

  return (
    <>

      
    <header className="header" id="header">
      <nav className="nav container">
         <a href="#" className="nav__logo">
            <img className='Logo' src={heroPng} alt=''/>
         </a>

         <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
               <li className="nav__item">
                  <a href="#home" className="nav__link active-link">Home</a>
               </li>

               <li>
                  <a href="#delivery" className="nav__link">Rescue Services</a>
               </li>

               <li>
                  <a href="#about" className="nav__link">About Us</a>
               </li>

               <li>
                  <a href="#prices" className="nav__link">Prices</a>
               </li>

               <li>
                  <a href='#blogs' className='nav__link'>Blogs</a>
               </li>
               <li>
                  <a href='#gallery' className='nav__link'>Gallery</a>
               </li>
               <li>
                  <a href="#contact" className="nav__link">Contact</a>
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

      <section className="home section" id="home">
         <div className="home__container container grid">
            <div className="home__data">
               <h1 className="home__title">
                  <span><b>Jiwan Ki Aas</b></span>
               </h1>

               <p className="home__description">
                  Drug De-Addiction Counselling & Rehabilitation Center
               </p>

               <a href="#delivery" className="button">Get Started</a>
            </div>

            <div className="home__content grid">
               <div className="home__info">
                  <div>
                     <h2 className="home__name">Dr. Rohit Kothari</h2>
                     <h3 className="home__profession">Psychiatrist & Mind Specialist</h3>

                     <div className="home__icons">
                        <div className="home__box">
                           <i className="ri-medicine-bottle-fill"></i>
                        </div>

                        <div className="home__box">
                           <i className="ri-24-hours-line"></i>
                        </div>
                     </div>
                  </div>

                  <a href="#contact" className="home__button button-dark">
                     <i className="ri-arrow-right-s-line"></i>
                     Contact
                  </a>
               </div>

               <div className="home__image">
                  <img src={homeImg} alt="image" className="home__img"/>
               </div>
            </div>
         </div>
      </section>

      <section className="delivery section" id="delivery">
         <div className="delivery__container container grid">
            <div className="delivery__data">
               <h2 className="section__title">
                  Drug Detox <br/>
                  <span>Home Rescue Services</span>
               </h2>

               <p className="delivery__description">
                  We provide door-to-door rescue services, available to all segments throughout the city 24/7.
               </p>

               <div className="delivery__info">
                  <div>
                     <div className="delivery__icon">
                        <i className="ri-home-4-fill"></i>
                     </div>

                     <h3 className="delivery__subtitle">Home Service</h3>
                     <p>Fast home vaccination service.</p>
                  </div>

                  <div>
                     <div className="delivery__icon">
                        <i className="ri-time-fill"></i>
                     </div>

                     <h3 className="delivery__subtitle">1 Hour Service</h3>
                     <p>Super easy and quick service for patients.</p>
                  </div>

                  <div>
                     <div className="delivery__icon">
                        <i className="ri-syringe-fill"></i>
                     </div>

                     <h3 className="delivery__subtitle">Better Quality</h3>
                     <p>The Best Medicines for Health.</p>
                  </div>
               </div>
            </div>

            <div className="delivery__content">
               <h2 className="delivery__title">Professional <br/>Support </h2>

               <p className="delivery__patients">
                  <span>1000+</span> Patients
               </p>

               <div className="delivery__image">
                  <img src={deliveryImg} alt="image" className="delivery__img"/>
               </div>

               <a href="#contact" className="button-dark">
                  Request
                  <i className="ri-arrow-right-s-line"></i>
               </a>
            </div>
         </div>
      </section>

      {/* <!--==================== ABOUT ====================--> */}
      <section className="about section" id="about">
         <div className="about__container container grid">
            <div className="about__data">
               <div>
                  <h2 className="section__title">
                     <span>We Have Certified</span>
                     <br/> Medical Service
                  </h2>

                  <p className="about__description">
                     Don't worry, we have certified medical services, so
                     you can receive medical consultations for Drug De-Addiction & Rehabilitation.
                  </p>
               </div>

               <div className="about__info">
                  <div className="about__stat">
                     <h3 className="about__number">256</h3>
                     <p className="about__details">Healthy <br/> Patients</p>
                  </div>

                  <div className="about__stat">
                     <h3 className="about__number">16</h3>
                     <p className="about__details">Hospital <br/> Care</p>
                  </div>

                  <div className="about__stat">
                     <h3 className="about__number">8</h3>
                     <p className="about__details">Years Of <br/> Experience</p>
                  </div>
               </div>

               <a href="#contact" className="about__button">
                  Contact Me
                  <i className="ri-arrow-right-s-line"></i>
               </a>
            </div>
            <img src={aboutImg} alt="image" className="about__img"/>
         </div>
      </section>

      <section>
         <GoogleSlides></GoogleSlides>
      </section>

      <section id='blogs'>
         <div>
            <SlideShare></SlideShare>
         </div>
      </section>
      
      {/* <!--==================== PRICES ====================--> */}
      <section className="prices section" id="prices">
         <div className="prices__container container grid">

            <div className="prices__data">
               <h2 className="section__title">
               <span>Affordable Prices For</span>
               <br />
                  Drug-Detoxification & Rehabilitation        
               </h2>

               <p className="prices__description">
               Get the best prices, make inquiries, checkups, and
               home rescue services. Schedule your consultation now.
               </p>
            </div>

            <div className="prices__content">

               <div className="prices__box">
               <p className="prices__details">
                  All Medical Services <br />
                  In Your Hand
               </p>
               </div>

               <Swiper
               className="prices__swiper"
               loop={true}
               grabCursor={true}
               spaceBetween={24}
               pagination={{
                  clickable: true,
               }}
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
               }}
               modules={[Pagination, Autoplay]}
               >

               {/* Slide 1 */}
               <SwiperSlide className='swiperSlide'>
                  <article className="prices__card">
                     <div className="prices__heading">
                     <h2 className="prices__number">14,999 INR</h2>
                     <h3 className="prices__title">
                        General Treatment
                     </h3>
                     </div>

                     <ul className="prices__list">
                     <li className="prices__item">
                        <i className="ri-checkbox-fill"></i>
                        <span>Consultations about your health.</span>
                     </li>

                     <li className="prices__item">
                        <i className="ri-checkbox-fill"></i>
                        <span>Food, Medicine & Hygiene</span>
                     </li>

                     <li className="prices__item">
                        <i className="ri-checkbox-fill"></i>
                        <span>Take your time without limits.</span>
                     </li>
                     </ul>
                  </article>
               </SwiperSlide>

               {/* Slide 2 */}
               <SwiperSlide className='swiperSlide'>
                  <article className="prices__card">
                     <div className="prices__heading">
                     <h2 className="prices__number">19,999 INR</h2>
                     <h3 className="prices__title">
                        General + VIP Food
                     </h3>
                     </div>

                     <ul className="prices__list">
                     <li className="prices__item">
                        <i className="ri-checkbox-fill"></i>
                        <span>We offer VIP Food.</span>
                     </li>

                     <li className="prices__item">
                        <i className="ri-checkbox-fill"></i>
                        <span>Snacking options are added to the General Food.</span>
                     </li>

                     <li className="prices__item">
                        <i className="ri-checkbox-fill"></i>
                        <span>Small difference of fees from General Treatment.</span>
                     </li>
                     </ul>
                  </article>
               </SwiperSlide>

               {/* Slide 3 */}
               <SwiperSlide className='swiperSlide'>
                  <article className="prices__card">
                     <div className="prices__heading">
                     <h2 className="prices__number">49,999 INR</h2>
                     <h3 className="prices__title">
                        VIP Treatment
                     </h3>
                     </div>

                     <ul className="prices__list">
                     <li className="prices__item">
                        <i className="ri-checkbox-fill"></i>
                        <span>Separate VIP Rooms with A/C and Bathroom/Toilet.</span>
                     </li>

                     <li className="prices__item">
                        <i className="ri-checkbox-fill"></i>
                        <span>Primary attention on the patient.</span>
                     </li>

                     <li className="prices__item">
                        <i className="ri-checkbox-fill"></i>
                        <span>Monitoring your health for up to a week and Instant Check-Ups.</span>
                     </li>
                     </ul>
                  </article>
               </SwiperSlide>

               </Swiper>
            </div>
         </div>
         </section>
      <section className="gallery section" id='gallery'>
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

      <section>
         <YouTube/>
      </section>

      <section className="contact section" id="contact">
         <div className="contact__container container grid">
            <div className="contact__data">
               <h2 className="section__title">
                  Contact Me <br/>
                  <span>On All Platforms</span>
               </h2>

               <p className="contact__description">
                  Contact me on all my social media channels. I'm
                  available for you and your health. Write to me now.
               </p>

               <div className="contact__info">
                  <div>
                     <div className="contact__icon">
                        <i className="ri-message-3-fill"></i>
                     </div>

                     <h3 className="contact__subtitle">Write to me</h3>

                     <div className="contact__social">
                        <a href="https://m.me/bedimcode" target="_blank" className="contact__social-link">
                           <i className="ri-messenger-fill"></i>
                        </a>

                        <a href="https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!"
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
                        +0123(00)-765-4321 <br/>
                        +00-0123456
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
            <a href="https://www.facebook.com/bedimcode" target="_blank" className="footer__social-link">
               <i className="ri-facebook-circle-fill"></i>
            </a>

            <a href="https://www.instagram.com/bedimcode/" target="_blank" className="footer__social-link">
               <i className="ri-instagram-fill"></i>
            </a>

            <a href="twitter.com/" target="_blank" className="footer__social-link">
               <i className="ri-twitter-x-line"></i>
            </a>

            <a href="https://www.youtube.com/watch?v=T_ciuZRTHrM" target="_blank" className="footer__social-link">
               <i className="ri-youtube-fill"></i>
            </a>

            <a href="https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!" target="_blank"
               className="footer__social-link">
               <i className="ri-whatsapp-fill"></i>
            </a>
         </div>
      </div>

      <span className="footer__copy"> All Rights Reserved By Right Verse Technology
      </span>
   </footer>
   <ChatBot></ChatBot>

   {/* <!--========== SCROLL UP ==========--> */}
   {/* <a href="#" className="scrollup" id="scroll-up">
      <i className="ri-arrow-up-line"></i>
   </a> */}

    </>
  )
}

export default App
