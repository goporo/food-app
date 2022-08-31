import { Container } from '@mui/system'
import React from 'react'
import { homeProductsData } from 'utils/staticData'
import "./HomeProduct.scss"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from "swiper/core";

const HomeProduct = () => {
    return (
        <div className='home-product-main'>
            <Container>
                <div className="home-product__container">
                    <div className="primary__yellow">Quality Products</div>
                    <div className="home-product__title">Burger as expected <strong>delicious</strong> one</div>
                    <div className="home-products__container">
                        <Swiper
                            loop
                            speed={800}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    pagination: false,
                                },
                                600: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                    pagination: false,
                                },
                                960: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                    slidesPerGroup: 4,
                                    speed: 1500,
                                },
                            }}
                        >
                            {homeProductsData.map(
                                ({ img, name, description, price }, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="home-product">
                                            <div className="home-product__wrapper">
                                                <img
                                                    className="home-product__img"
                                                    src={img}
                                                    alt="Home product"
                                                />
                                                <button className="btn">
                                                    <span>Best Deal</span>
                                                </button>
                                            </div>
                                            <div className="home-product__content">
                                                <h3 className="home-product__name">{name}</h3>
                                                <p className="home-product__description">{description}</p>
                                                <div className="home-product__price">${price}.00</div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeProduct