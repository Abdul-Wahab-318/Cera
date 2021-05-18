import ActiveMemberCard from '../../components/activeMemberCard/ActiveMemberCard'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import LeadText from '../../components/leadText/LeadText'
import './Home.css'

import user from '../../assets/user-white.svg'
import hardrive from '../../assets/harddrive.svg'
import chat from '../../assets/chat.svg'

import CommunityCard from '../../components/communityCard/CommunityCard'

import sectionGroupXL from '../../assets/section-groups-1.png'
import sectionGroupLG from '../../assets/section-groups-2.png'


import sectionShareXL from '../../assets/section-share-1.png'
import sectionShareLG from '../../assets/section-share-2.png'


import {members} from '../../dataActiveMembers'
import {community} from '../../dataCommunity'
import HelpCenter from '../../components/helpCenter/HelpCenter'


function Home()
{
    return(
        <div className="home">
            <header>
                <Header/>
            </header>
            <section className="hero-section">
                <Hero/>
            </section>

            <section className="active-members-parent">
                <div className="active-members-inner">
                    <div className="custom-section-padding">
                        <div className="custom-container">
                            <LeadText link= "View All Our Members" heading = "Our Active Members"  />
                        <div className="active-members-cards">
                            {members.map((m,index)=> <ActiveMemberCard i={index} member={m} />)}
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="image-parent">
                <div className="custom-container">
                    <div className="image-inner">
                        <div className="image-caption"> 
                            <div className="image-caption-inner">
                            <h1>Intranet & Extranet <br /> Become <span>Simple</span></h1>
                            <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. <br /> Phasellus viverra nulla ut metus varius laoreet.</p>
                            <button className="primary-btn">Discover more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="community">
                <div className="community-parent">
                    <div className="custom-section-padding">
                        <div className="custom-container">
                            <LeadText link= "View All Groups" heading = "Our Awesome Communities" />
                            <div className="tab-parent">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-popular-tab" data-bs-toggle="pill" data-bs-target="#pills-popular" type="button" role="tab">Popular</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-newest-tab" data-bs-toggle="pill" data-bs-target="#pills-newest" type="button" role="tab">Newest</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-active-tab" data-bs-toggle="pill" data-bs-target="#pills-active" type="button" role="tab">Active</button>
                                </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-popular" role="tabpanel">
                                    <div className="community-cards">
                                        {community.map((c,index)=> <CommunityCard i={index} community = {c} />)}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-newest" role="tabpanel">
                                <div className="community-cards">
                                    {community.map((c,index)=> <CommunityCard i={index} community = {c} />)}
                                </div>
                                </div>
                                <div className="tab-pane fade" id="pills-active" role="tabpanel">
                                <div className="community-cards">
                                    {community.map((c,index)=> <CommunityCard i={index} community = {c} />)}
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="join-groups-members">
                <div className="custom-section-padding pb-0">
                    <div className="custom-container">
                        <div className="join-groups-members-inner">
                            <div className="join-groups-members-inner-caption">
                                <h1>Community Forums & Groups</h1>
                                <p>Join our private or public forums to share your ideas, desires <br /> and share with who you want.</p>
                                <button className="primary-btn">View Groups</button>
                            </div>
                            <div className="join-groups-members-inner-img">
                                <img src={sectionGroupXL} className="d-none d-xl-block" alt="" />
                                <img src={sectionGroupLG} className="d-xs-block d-sm-block d-md-block d-lg-block d-xl-none" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="join-groups-members">
                <div className="custom-section-padding pt-0">
                    <div className="custom-container">
                        <div className="join-groups-members-inner reverse-join-groups-members-inner">
                        <div className="join-groups-members-inner-img">
                            <img src={sectionShareXL} className="d-none d-xl-block" alt="" />
                            <img src={sectionShareLG} className="d-xs-block d-sm-block d-md-block d-lg-block d-xl-none" alt="" />
                        </div>
                            <div className="join-groups-members-inner-caption">
                                <h1>Meet great people</h1>
                                <p>Discover our exciting, creative and vibrant community.They are all unique.</p>
                                <button className="primary-btn">View all members</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reasons">
                <div className="custom-section-padding">
                    <div className="custom-container">
                        <div className="reasons-inner">
                            <div className="reasons-heading">
                                <h1>Why build a commuinty platform?</h1>
                                <p>3 Simple reasons</p>
                            </div>
                            <div className="reasons-cards-parent">
                                <div className="reasons-cards-inner">
                                    <button>
                                        <div className="reasons-avatar"><img src={user} alt="" /></div>
                                        <h6>Bring members together</h6>
                                        <p>In consectetuer turpis ut velit. Etiam sit amet orci eget eros faucibus tincidunt.</p>
                                    </button>
                                </div>
                                <div className="reasons-cards-inner">
                                    <button>
                                        <div className="reasons-avatar"><img src={hardrive} alt="" /></div>
                                        <h6>Share documents</h6>
                                        <p>In consectetuer turpis ut velit. Etiam sit amet orci eget eros faucibus tincidunt.</p>
                                    </button>
                                </div>
                                <div className="reasons-cards-inner">
                                    <button>
                                        <div className="reasons-avatar"><img src={chat} alt="" /></div>
                                        <h6>Create relationships</h6>
                                        <p>In consectetuer turpis ut velit. Etiam sit amet orci eget eros faucibus tincidunt.</p>
                                    </button>
                                </div>
                            </div>
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
    )
}

export default Home ; 