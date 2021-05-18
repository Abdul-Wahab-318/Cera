import React from 'react'
import Header from '../../components/header/Header'
import './MemberDirectory.css'
import earth from '../../assets/earth-white.svg'


function MemberDirectory() {
    return (
        <div className="member-directory">
            <div className="site-wrapper">
                <header>
                    <Header/>
                </header>
                <section className="page-content">
                    <div className="custom-container">

                    <div className="member-search-parent">
                        <div className="member-search-inner">
                            <div className="total-members">
                                <button className="total-members-inner">
                                    <div className="globe-icon"><img src={earth} alt=""  /></div>
                                    <h6>All Members</h6>
                                    <p>6</p>
                                </button>
                                <div className="active-select">
                                    Last Active
                                </div>
                            </div>
                            <div className="member-search">
                                <div className="member-search-form">
                                    <form action="">
                                        <input type="text" name="member" id="member" placeholder="Search Members..." />
                                        <input type="submit" value="search"/>
                                    </form>
                                </div>
                                <div className="search-directory">
                                    
                                </div>
                            </div>
                        </div>
                    </div>


                    </div>
                </section>
            </div>
        </div>
    )
}

export default MemberDirectory