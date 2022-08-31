import { Container } from '@mui/system'
import svgs from 'assets/svgs'
import React from 'react'
import "./HomeDelivery.scss"


const HomeDelivery = () => {
    return (
        <div className='home-delivery'>
            <Container>
                <div className='home-delivery__container'>
                    <div className='home-delivery__left'>
                        <div className="primary__yellow">Delivery</div>
                        <div className="home-delivery__title">A Moments Of Delivered <strong>On Right Time & Place</strong></div>
                        <div className="home-delivery__desc">Food G is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon's Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London inteon.</div>
                        <div className="home-delivery__contact">
                            <img className='home-delivery__contact-img' src={svgs.smallDelivery} alt="" />
                            <div className='home-delivery__contact-wrapper'>
                                <div className='home-delivery__contact-title'>Delivery Order Num</div>
                                <strong className='home-delivery__contact-phone'>123-456789</strong>
                            </div>
                            <div className="home-delivery__btn">ORDER NOW</div>
                        </div>
                    </div>
                    <img className="home-delivery__img" src={svgs.bigDelivery} alt="" />

                </div>

            </Container>
        </div>

    )
}

export default HomeDelivery