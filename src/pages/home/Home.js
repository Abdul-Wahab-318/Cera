import ActiveMemberCard from '../../components/activeMemberCard/ActiveMemberCard'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import LeadText from '../../components/leadText/LeadText'
import './Home.css'

function Home()
{
    return(
        <div className="home">
            <Header/>
            <Hero/>
            <div className="active-members-parent">
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
            </div>
            <Footer/>
        </div>
    )
}

export default Home ; 