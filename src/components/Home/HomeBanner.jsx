import React from 'react'
import images from 'assets/imgs'
import './HomeBanner.scss'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const HomeBanner = () => {
    return (
        <div className='home-banner' style={{ backgroundImage: `url(${images.home_banner})` }}>
            <div className="home-banner__container">
                <div className='home-banner__wrapper'>
                    <div className='home-banner__title'>ENJOY YOUR MEAL</div>
                    <div className='home-banner__desc'>
                        Good food is wise
                        <strong> medicine</strong>
                    </div>
                    <div className='home-banner__button-wrapper'>
                        <div className='home-banner__button'>
                            <span>
                                <AddShoppingCartIcon />
                                ORDER NOW
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner