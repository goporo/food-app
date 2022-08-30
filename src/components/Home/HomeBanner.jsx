import React from 'react'
import images from 'assets/imgs'
import './HomeBanner.scss'

const HomeBanner = () => {
    return (
        <div className='home-banner' style={{ backgroundImage: images.home_banner }}>
            <div className="home-banner__container">
                <div className='home-banner__wrapper'>
                    <div className='home-banner__title'>ENJOY YOUR MEAL</div>
                    <div className='home-banner__desc'>
                        Good food is wise
                        <strong>medicine</strong>
                    </div>
                    <div className='home-banner__button'>ORDER NOW</div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner