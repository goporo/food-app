import { Container, Grid } from '@mui/material';
import images from 'assets/imgs';
import React from 'react'
import { useState, useEffect, useRef } from "react";
import { homeAnalysisData } from 'utils/staticData';

import "./HomeStatis.scss"





const HomeStatis = () => {
    const [isShow, setIsShow] = useState(false);
    const toggleModal = () => {
        setIsShow(!isShow);
    };
    return (
        <div className='home-analysis'> <section
            className="home-analysis"
            style={{ backgroundImage: `url(${images.analysisThumb})` }}
        >
            <div className="home-analysis__wrapper">
                <div className="home-analysis__content">
                    <div className="home-analysis__content-text">
                        <span className="home-analysis__content-name">Sandwich</span>
                        <span className="home-analysis__content-price">$45</span>
                    </div>
                    <div onClick={toggleModal} className="home-analysis__btn">
                        <div className="triangle"></div>
                    </div>
                    <span className="gooey"></span>
                    <span className="gooey"></span>
                    <span className="gooey"></span>
                </div>
                <div
                    className={
                        isShow
                            ? "home-analysis__video-container show"
                            : "home-analysis__video-container"
                    }
                >
                    <span onClick={toggleModal} className="home-analysis__modal"></span>
                    <iframe
                        title="Map"
                        className={
                            isShow ? "home-analysis__video show" : "home-analysis__video"
                        }
                        src={`https://www.youtube.com/embed/dA0VGEbbw4g?autoplay=0&mute=${isShow ? 0 : 1
                            }`}
                    ></iframe>
                </div>
            </div>

            <div className="home-analysis__container">
                <Container>
                    <Grid container spacing={3}>
                        {homeAnalysisData.map(({ description, suffix, quantity }, index) => (
                            <Grid key={index} item xs={12} sm={6} md={3}>
                                <div>
                                    <span
                                        className="home-analysis__qnt"
                                    >
                                        {quantity}
                                    </span>
                                    <span className="home-analysis__qnt">{suffix}</span>
                                </div>
                                <div className="home-analysis__description">{description}</div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </section></div>
    )
}

export default HomeStatis