import React from 'react';
import './Hero.css';
function Hero() {
    console.log("hello")
    return (
        <div className="hero-component-parent">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-bs-touch="true" data-bs-keyboard="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="hero-parent">
                    <div className="hero-inner">
                        <div className="custom-container">
                            <div className="hero-caption">
                                <h1>Intranet & Extranet, <br /> the simple way.</h1>
                                <p>Take full advantage of an intranet or extranet <br />
                                platform for your business. In a few steps.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className="hero-parent">
                    <div className="hero-inner">
                        <div className="custom-container">
                            <div className="hero-caption">
                                <h1>Intranet & Extranet, <br /> the simple way.</h1>
                                <p>Take full advantage of an intranet or extranet <br />
                                platform for your business. In a few steps.</p>
                            </div>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
            <button className="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    )
}

export default Hero ;