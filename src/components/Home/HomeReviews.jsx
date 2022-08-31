import React from 'react'
import "./HomeReviews.scss"

import { Container } from '@mui/system'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { homeReviewsData } from 'utils/staticData';

const HomeReviews = () => {
    return (
        <section className="home-reviews">
            <Container >
                <Swiper
                    speed={500}
                    spaceBetween={20}
                    loop
                    grabCursor={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                >
                    {homeReviewsData.map(({ img, name, role, comment }, index) => (
                        <SwiperSlide key={index}>
                            <div className="home-reviews__content">
                                <div className="home-reviews__img-wrapper">
                                    <img
                                        src={img}
                                        alt="user-review"
                                        className="home-reviews__img"
                                    ></img>
                                </div>
                                <div className="home-reviews__name">{name}</div>
                                <div className="home-reviews__role">{role}</div>
                                <p className="home-reviews__comment">{comment}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    )
}

export default HomeReviews