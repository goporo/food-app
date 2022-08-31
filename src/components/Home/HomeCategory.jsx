import React from 'react'
import "./HomeCategory.scss"
import { homeCategoryData } from "utils/staticData";

// material ui
// import { Button } from "@material-ui/core";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from "swiper/core";

// Import Swiper styles
import 'swiper/css';
import { Button, Container } from '@mui/material';

SwiperCore.use([Autoplay, Navigation]);


const HomeCategory = () => {
    return (
        <div className='home-category'>
            <Container>
                <div className="home-category__container">
                    <div className="primary__yellow">What we have?</div>
                    <div className="home-category__title">Browse food category</div>
                    <div className="home-category__cards">
                        <Swiper
                            slidesPerView={2}
                            loop
                            loopFillGroupWithBlank={true}
                            autoplay={{
                                delay: 2400,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: ".prev-btn",
                                nextEl: ".next-btn",
                            }}
                            breakpoints={{
                                600: {
                                    slidesPerView: 4,
                                },
                                960: {
                                    slidesPerView: 7,
                                },
                            }}
                        >
                            {homeCategoryData.map(({ img, name }, index) => (
                                <SwiperSlide key={index}>

                                    <div className="home-category__card">
                                        <div className="home-category__card-img-wrapper">
                                            <img
                                                className="home-category__card-img"
                                                src={img}
                                                alt="Category card"
                                            />
                                        </div>
                                        <div className="home-category__card-description">
                                            {name}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Button className="prev-btn">
                            <DoubleArrowIcon style={{ transform: "rotate(180deg)" }} />
                        </Button>
                        <Button className="next-btn">
                            <DoubleArrowIcon />
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeCategory