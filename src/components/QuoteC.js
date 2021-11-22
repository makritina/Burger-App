import React from "react"
import SwipeCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import './Quote.css'
import Quote from "./Quote";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwipeCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
    {
        id:1,
        name: 'Awesome Client',
        testimonial: 'Delicious burgers, lots of choices on the menu. friendly staff. Will definitely be back!'
    },
    {
        id:2,
        name: 'Kind Client',
        testimonial: 'Delicious food, perfect service and a great vegetarian/ vegan menu. Highly recommend'
    },
    {
        id:3,
        name: 'Dope Client',
        testimonial: 'A busy Saturday night with clearly a couple parties in but staff very friendly and apologetic about a reasonable wait in all fairness. Excellent food in a lovely modern restaurant! We will be back for sure with friends!'
    },
    {
        id:4,
        name: 'Happy Client',
        testimonial: "Simply the best burger I've ever had, service was spot on the skin on fries with baconaise and crispy bits of bacon was to die for, I even ate a near full portion of those fries which my colleague couldn't finish."
    }
]
const QuoteC = () => {
    return(
        <div id="quote">
        <Swiper
        className="swiper"
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        { data.map( user => (
            <SwiperSlide key={user.id} className="slide">      <div className="slide-content">
                <p className="name-testimonial"> 
                
                <i> {user.testimonial} </i>
                </p>
                <h5>{user.name}</h5>
            </div>
             </SwiperSlide>
        ))}


      </Swiper>
      </div>
    )
}
export default QuoteC