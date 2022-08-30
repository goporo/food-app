import React from 'react'
import "./HomeUsage.scss"
import { Grid } from '@mui/material'
import { homeWorkData } from "utils/staticData";


const HomeUsage = () => {
    return (
        <div className='home-usage'>
            <div className="home-usage__yellow">Order now!</div>
            <h2 className='home-usage__heading'>How it works</h2>
            <div className="home-usage__steps">
                <Grid container spacing={3}>
                    {homeWorkData.map(({ img, step, content, arrow }, index) => (
                        <Grid key={index} item xs={12} sm={6} lg={3}>
                            <div className='home-usage__step'>
                                <div className='home-usage__step-header'>
                                    <img className='home-usage__step-img' src={img} alt="step" />
                                    <span>0{step} Step</span>
                                    <div className='home-usage__step-arrow' style={{ backgroundImage: `url(${arrow})` }}></div>
                                </div>
                                <div className="home-usage__content">{content}</div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default HomeUsage