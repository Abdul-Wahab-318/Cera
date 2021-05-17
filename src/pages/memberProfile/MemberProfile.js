import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './MemberProfile.css'

import avatar from  '../../assets/avatar-5.jpg'


function MemberProfile() {
    return (
        <div className="member-profile">
            <div className="site-wrapper">
                <Header/>
                <section className="profile-wallpaper-parent">
                    <div className="profile-wallpaper-inner">
                        <div className="custom-container">
                            <div className="profile-wallpaper-inner-content">
                                <div className="user-info">
                                    <button className="user-profile-img"><img src={avatar} alt="" /></button>
                                    <div className="user-name">oof</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            
            </div>
        </div>
    )
}


export default MemberProfile 