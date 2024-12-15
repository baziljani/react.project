/* eslint-disable no-unused-vars */
import React from 'react';
import './Sass.scss';
import BazilPic from './images/Bazil_pic.jpg';

const Sass = () => {
    return (
        // {Profile Cards}
         <div className="Sass">
            <div className="cards">
                {/* Header Section */}
                <div className="cards-header">
                    <i className="fa-solid fa-arrow-left"></i>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>

                {/* Profile Image */}
                <div className="img">
                    <img 
                        src={BazilPic} 
                        alt="Profile" 
                        className="profile-img" 
                    />
                </div>

                {/* Content Section */}
                <div className="content">
                    <h1>Bazil Jani</h1>
                    <p>Web Developer</p>
                </div>

                {/* Social Media Icons */}
                <div className="icon">
                    <a href="https://www.facebook.com/bazil.don.39"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.instagram.com/professor_bazil/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@COC_TAMILAN"><i className="fa-brands fa-youtube"></i></a>
                </div>

                {/* Action Buttons */}
                <div className="buttons">
                    <button>Follow</button>
                    <button>Message</button>
                </div>

                {/* Social Share Section */}
                <div className="social-share">
                    <div className="row">
                        <i className="far fa-heart"></i>
                        <i className="icon-2 fas fa-heart"></i>
                        <span>20.4M</span>
                    </div>
                    <div className="row">
                        <i className="far fa-comment"></i>
                        <i className="icon-2 fas fa-comment"></i>
                        <span>14.3M</span>
                    </div>
                    <div className="row">
                        <i className="fas fa-share"></i>
                        <span>12.8M</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sass; 