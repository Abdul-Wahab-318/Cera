import React from 'react'
import Header from '../../components/header/Header'
import './MemberDirectory.css'
import earth from '../../assets/earth-white.svg'
import downArrowBlack from '../../assets/down-arrow-black.svg'
import filter from '../../assets/filter.svg'
import {members} from '../../dataActiveMembers'
import MemberDirectoryCard from '../../components/memberDirectoryCard/MemberDirectoryCard'

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
                                    <img src={downArrowBlack} width="10px" alt="" />
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
                                    <img src={filter} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="member-directory-cards">
                        {members.map((m,index)=> <MemberDirectoryCard key={index} member={m} />)}
                    </div>

                    <div className="page-count">
                        <h5>Viewing 1 - 18 of 38 active members</h5>
                        <div className="page-numbers-parent">
                            <button className="page-number">1</button>
                            <button className="page-number">2</button>
                            <button className="page-number">3</button>
                            <button className="page-number">4</button>
                        </div>
                    </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default MemberDirectory