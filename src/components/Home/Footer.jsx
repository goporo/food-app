import React from 'react'
import './Footer.scss'

// material ui
import { Container } from '@mui/system'
import { Grid } from '@mui/material';
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import SpeakerNotesOutlinedIcon from "@mui/icons-material/SpeakerNotesOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinearScaleIcon from "@mui/icons-material/LinearScale";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Grid container spacing={4} >
                    <Grid item xs={12} sm={6} md={4}>
                        <div className="footer__time">
                            <div className="col">
                                <span className="footer__time-day">Sunday</span>
                                <span className="footer__time-day">Monday</span>
                                <span className="footer__time-day">Tuesday</span>
                                <span className="footer__time-day">Wednesday</span>
                                <span className="footer__time-day">Friday</span>
                                <span className="footer__time-day">Saturday</span>
                            </div>
                            <div className="col">
                                <LinearScaleIcon className="footer__time-dots" />
                                <LinearScaleIcon className="footer__time-dots" />
                                <LinearScaleIcon className="footer__time-dots" />
                                <LinearScaleIcon className="footer__time-dots" />
                                <LinearScaleIcon className="footer__time-dots" />
                                <LinearScaleIcon className="footer__time-dots" />
                            </div>
                            <div className="col">
                                <span className="footer__time-hours">Closed</span>
                                <span className="footer__time-hours">8.00-20.00</span>
                                <span className="footer__time-hours">10.00-5.00</span>
                                <span className="footer__time-hours">12.00-9.00</span>
                                <span className="footer__time-hours">7.00-1.00</span>
                                <span className="footer__time-hours">9.00-12.00</span>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <div className="footer__contacts">
                            <h4 className="footer__contact-title">Address</h4>

                            <div className="footer__contact">
                                <PhoneInTalkOutlinedIcon className="footer__contact-icon" />
                                <span className="footer__contact-txt">+449 888 666 0000</span>
                            </div>

                            <div className="footer__contact">
                                <SpeakerNotesOutlinedIcon className="footer__contact-icon" />
                                <span className="footer__contact-txt">foodg@gmail.com</span>
                            </div>

                            <div className="footer__contact">
                                <BusinessOutlinedIcon className="footer__contact-icon" />
                                <span className="footer__contact-txt">
                                    Pham Ngu Lao, Q1 TP HCM, Viet Nam
                                </span>
                            </div>
                            <div className="footer__contact footer__contact--icons">
                                <FacebookIcon style={{ fill: "#2D88FF" }} />
                                <TwitterIcon style={{ fill: "#5DA9DD" }} />
                                <InstagramIcon style={{ fill: "#F56040" }} />
                                <YouTubeIcon style={{ fill: "#FF0000" }} />
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <div className="footer__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31355.65347515139!2d106.63063817910157!3d10.776291999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fbd37bf4cb5%3A0x94aaba176b265fb8!2sCheesy%20Burger!5e0!3m2!1svi!2s!4v1661967199405!5m2!1svi!2s"
                                style={{ border: 0, width: "100%", height: "100%" }}
                                allowFullScreen={true}
                                loading="lazy"
                                scrolling="auto"
                                title="map"
                            ></iframe>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer