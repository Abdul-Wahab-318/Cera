import ActiveMemberCard from '../../components/activeMemberCard/ActiveMemberCard'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import LeadText from '../../components/leadText/LeadText'
import './Home.css'
import user from '../../assets/user-white.svg'
import hardrive from '../../assets/harddrive.svg'
import chat from '../../assets/chat.svg'
function Home()
{
    return(
        <div className="home">
            <Header/>
            <Hero/>
            <section className="active-members-parent">
                <div className="active-members-inner">
                    <div className="custom-section-padding">
                        <div className="custom-container">
                        <LeadText/>
                        <div className="active-members-cards">
                            <ActiveMemberCard/>
                            <ActiveMemberCard/>
                            <ActiveMemberCard/>
                            <ActiveMemberCard/>
                            <ActiveMemberCard/>

                            <ActiveMemberCard/>
                            <ActiveMemberCard/>
                            <ActiveMemberCard/>
                            <ActiveMemberCard/>
                            <ActiveMemberCard/>
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

            <section className="help-center">
                <div className="custom-section-padding">
                    <div className="custom-container">
                        <div className="help-center-inner">
                            <h1>We are all close together</h1>
                            <p>A problem, a question, an emergency? <br /> Do not hesitate to visit the help center, <span>we can help you</span></p>
                            <button><i className="far fa-life-ring"></i> Help center</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default Home ; 