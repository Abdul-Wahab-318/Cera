import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import fb from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import insta from '../../assets/instagram.svg'
export default function Footer() {
    return (
        <div className="footer-parent">
            <div className="footer-main custom-section-padding">
                <div className="custom-container">
                    <div className="footer-main-inner">
                        <div className="footer-brand">
                            <button><img src={logo} alt="" /></button>
                            <p>Welcome to Cera, the modern extranet <br /> and community platform</p>
                        </div>
                        <div className="footer-item">
                            <ul>
                                <li><h6>Cera Community</h6></li>
                                <li><button>Dashboard</button></li>
                                <li><button>Members</button></li>
                                <li><button>Latest News</button></li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <ul>
                                <li><h6>Memberships</h6></li>
                                <li><button>Membership plans</button></li>
                                <li><button>Restricted content</button></li>
                                <li><button>Groups</button></li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <ul>
                                <li><h6>More Tools</h6></li>
                                <li><button>Swipe Members</button></li>
                                <li><button>Search Members</button></li>
                                <li><button>Login</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                        <div className="custom-container">
                            <div className="footer-copyright-inner">
                                <p>Copyright © 2019 Cera. All rights reserved</p>
                                <div className="footer-social-icons">
                                    <button><img src={fb} alt="" /></button>
                                    <button><img src={twitter} alt="" /></button>
                                    <button><img src={insta} alt="" /></button>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}
