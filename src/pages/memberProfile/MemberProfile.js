import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './MemberProfile.css'

import avatar from  '../../assets/avatar-5.jpg'
import earth from '../../assets/earth.svg'
import info from '../../assets/info.svg'
import gallery from '../../assets/gallery.svg'
import cv from '../../assets/cv.svg'
import pencil from '../../assets/pencil.svg'
import navMenu from '../../assets/tab-menu.svg'
import HelpCenter from '../../components/helpCenter/HelpCenter'
import {useParams} from 'react-router-dom'
import {members} from '../../dataActiveMembers'

function MemberProfile(props) {
    let {slug} = useParams()
    let member = [...members].find((f)=> f.slug===slug)
    console.log(member)

    return (
        <div className="member-profile">
            <div className="site-wrapper">
                <header>
                    <Header/>
                </header>
                <section className="profile-wallpaper-parent">
                    <div className="profile-wallpaper-inner">
                        <div className="custom-container">
                            <div className="profile-wallpaper-inner-content">
                                <div className="user-info">
                                    <button className="user-profile-img"><img src={avatar} alt="" /></button>
                                    <div className="center">
                                        <div className="user-name">{member.name}</div>
                                        <div className="status-pill"><span>{member.status}</span></div>
                                    </div>
                                </div>
                                <div className="profile-statistics">
                                    <ul>
                                        <li>
                                            <h5>21</h5>
                                            <span>Posts</span>
                                        </li>
                                        <li>
                                            <h5>0</h5>
                                            <span>Comments</span>
                                        </li>
                                        <li>
                                            <h5>635</h5>
                                            <span>Views</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
                <section className="profile-content-parent">
                    <div className="profile-content-inner">
                        <div className="profile-navbar">
                            <div className="custom-container">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-overview-tab" data-bs-toggle="pill" data-bs-target="#pills-overview" type="button" role="tab"><img src={earth} alt="" /> Overview</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-info-tab" data-bs-toggle="pill" data-bs-target="#pills-info" type="button" role="tab"><img src={info} alt="" />info</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-media-tab" data-bs-toggle="pill" data-bs-target="#pills-media" type="button" role="tab"><img src={gallery} alt="" />media</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-activity-tab" data-bs-toggle="pill" data-bs-target="#pills-activity" type="button" role="tab"><img src={cv} alt="" />activity</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-posts-tab" data-bs-toggle="pill" data-bs-target="#pills-posts" type="button" role="tab"><img src={pencil} alt="" />posts</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-more-tab" data-bs-toggle="pill" data-bs-target="#pills-more" type="button" role="tab"><img src={navMenu} alt="" />more</button>
                                </li>
                            </ul>
                            </div>
                        </div>

                        <div className="profile-navbar-content">
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-overview" role="tabpanel">...</div>
                                <div className="tab-pane fade" id="pills-info" role="tabpanel">...</div>
                                <div className="tab-pane fade" id="pills-media" role="tabpanel">...</div>
                                <div className="tab-pane fade" id="pills-activity" role="tabpanel">...</div>
                                <div className="tab-pane fade" id="pills-posts" role="tabpanel">...</div>
                                <div className="tab-pane fade" id="pills-more" role="tabpanel">...</div>
                            </div>
                        </div>


                    </div>
                </section>

                <section className="help-center-parent">
                    <HelpCenter/>
                </section>

                <footer>
                    <Footer/>
                </footer>

            </div>
        </div>
    )
}


export default MemberProfile 