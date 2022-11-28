import React, { useRef, useState } from "react";
import "./testimonial.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import pic1 from "../../assets/dhanraj_profile.jpeg";
import pic1 from "../../assets/prakhar_profile.jpeg";
import pic2 from "../../assets/vikash.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
const Testimonial = (props) => {
  const { coworkerReview } = props;
  console.log(coworkerReview);
  return (
    <section id="testimonial">
      <h5>Reviews from former coworkers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonia__container mySwipper"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {coworkerReview.map(({ name, picture, review, designation }, index) => {
          const reviewerImage = function () {
            if (index === 0) {
              return <img src={pic1} alt="Avatar One" />;
            } else if (index === 1) {
              return <img src={pic2} alt="Avatar two" />;
            }
          };
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="coworker__avatar">{reviewerImage()}</div>
              <h5>
                {name} <br />
                {designation}
              </h5>

              <small className="coworker__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
