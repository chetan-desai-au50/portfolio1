
import React from "react";


// =======SWIPER=====

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

// =======SWIPER END=====


import './testimonials.css';
import Img1 from '../../Assets/blank-profile-picture-973460_1280.webp';
import {FaArrowCircleRight} from 'react-icons/fa';

const data = [
   {
    avtar: Img1,
    name: "Rahul Ghatge",
    review: "I have worked with Chetan on several Development projects, and I am always impressed by his ability to create compelling website content. He has a knack for storytelling and always manages to capture the essence of our brand. recommended"
   },
   {
    avtar: Img1,
    name: "Sumit Patel",
    review: "I have worked with Chetan on several Development projects, and I am always impressed by his ability to create compelling website content. he always manages the essence of our brand. Highly recommended"
  },
  {
    avtar: Img1,
    name: "Manish Shelar",
    review: "I have worked with Chetan on several Development projects, and I am always impressed by his ability to create compelling website content. He has a knack for storytelling and always manages to capture the essence of our brand. recommended"
  }
]



const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5 className="text-light">Review From Clients</h5>
            <h2>Testimonials</h2>

            <Swiper pagination={true} modules={[Pagination]} className="container testimonial_container">
              {
                data.map(({avtar,name,review},index)=>{
                    return (
                        <SwiperSlide key={index} className="testimonial">
                        <div className="client_avtar">
                             <img src={avtar} alt="avtar1"></img>
                        </div>

                        <h5 className="client_name">{name}</h5>

                        <small className="client_review">
                            {review}
                        </small>
                        <h5 className="icon"><FaArrowCircleRight/></h5>
                    </SwiperSlide>
                    )
                })
              }
            </Swiper>
        </section>
    );
}


export default Testimonials;