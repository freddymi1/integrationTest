import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    Navigation,Pagination,Mousewheel,Keyboard
  } from 'swiper/core';
  
// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

export default function Section2(props) {
    return (
        <Swiper 
            loop={true}
            grabCursor={true}
            spaceBetween= {48}
            pagination={{ 
                clickable: true ,
                dynamicBullets: true
            }} 
            breakpoints={{
                568:{
                    slidesPerView:3
                }
            }}
            className="testimonial__container _container swiper-container">
            <div className="swiper-wrapper">
                <SwiperSlide>
                    <div className="cards">
                        <div className="icon__card">
                            <h1 className="card__icon-contenu">1</h1>
                        </div>
                        <div className="cart__content">
                            <h2 className="card__title">{props.data.cardTitle1}</h2>
                            <p className="descr__card">
                            {props.data.text}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="cards">
                        <div className="icon__card1">
                            <h1 className="card__icon-contenu1">2</h1>
                        </div>
                        <div className="cart__content">
                            <h2 className="card__title">{props.data.cardTitle2}</h2>
                            <p className="descr__card">
                                {props.data.text}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="cards">
                        <div className="icon__card2">
                            <h1 className="card__icon-contenu2">3</h1>
                        </div>
                        <div className="cart__content">
                            <h2 className="card__title">{props.data.cardTitle3}</h2>
                            <p className="descr__card">
                                {props.data.text}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </div>
        </Swiper>
    )
}
