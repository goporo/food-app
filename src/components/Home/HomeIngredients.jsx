import images from 'assets/imgs'
import React from 'react'
import { homeIngredientsData } from 'utils/staticData'
import "./HomeIngredients.scss"

const HomeIngredients = () => {
    return (
        <div className='home-ingredients'>
            <div className='home-ingredients__top' style={{ backgroundImage: `url(${images.ingredients})` }}>
                <div className="home-ingredients__top-left">
                    {homeIngredientsData.leftData.map(
                        ({ title, content, order }, index) => (
                            <div
                                className="home-ingredients__card-wrapper"
                                key={`${title}-${index}`}
                            >
                                <div className="home-ingredients__card">
                                    <h3 className="home-ingredients__card-title">{title}</h3>
                                    <p className="home-ingredients__card-content">{content}</p>
                                    <span>{order}</span>
                                </div>
                            </div>
                        )
                    )}
                </div>
                <div className="home-ingredients__top-right">
                    {homeIngredientsData.rightData.map(
                        ({ title, content, order }, index) => (
                            <div className="home-ingredients__card-wrapper" key={`${title}-${index}`}>
                                <div key={index} className="home-ingredients__card">
                                    <h3 className="home-ingredients__card-title">{title}</h3>
                                    <p className="home-ingredients__card-content">{content}</p>
                                    <span>{order}</span>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className='home-ingredients__bottom'>
                <div className='primary__yellow'>Best food</div>
                <h2 className='home-ingredients__bottom-desc'>Super delicious Steak <strong>Hamburger</strong></h2>
                <div className='home-ingredients__bottom-price'><strong >$25.00</strong></div>
                <div className='home-ingredients__bottom-btn'>ORDER NOW</div>
            </div>
        </div>
    )
}

export default HomeIngredients