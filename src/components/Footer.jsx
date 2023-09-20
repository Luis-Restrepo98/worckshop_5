import React from 'react';
import "../styles/style.css"
/* import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa" */
import face from "../assets/icon/icon-facebook.svg";
import pinterest from "../assets/icon/icon-pinterest.svg";
import twiter from "../assets/icon/icon-twitter.svg";
import insta from "../assets/icon/icon-instagram.svg";



 const Footer = () => {
    return (
        <>
            <div className="footerContainer">
                <div className="companyInfoContainer">
                    <div className="companyNameContainer">
                        <span className="companyName">
                            Loopstudios
                        </span>
                        <div className="linksContainer">
                            <div>
                                About
                            </div>
                            <div>
                                Careers
                            </div>
                            <div>
                                Events
                            </div>
                            <div>
                                Products
                            </div>
                            <div>
                                Support
                            </div>
                        </div>
                    </div>

                </div>

                <div className="otherInfoContainer">
                    <div className="redesContainer">
                        <div>
                            <img src={face} alt="" />
                        </div>
                        <div>
                        <img src={twiter} alt="" />
                        </div>
                        <div>
                        <img src={pinterest} alt="" />
                        </div>
                        <div>
                        <img src={insta} alt="" />
                        </div>
                    </div>
                    <div className="copyrigthContainer">
                        <span>
                            © 2021 Loopstudios. All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Footer;