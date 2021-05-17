import React from 'react'
import './CommunityCard.css'
import avatar from '../../assets/avatar-2.jpg'
export default function CommunityCard() {
    return (
        <div className="community-card">
            <button className="community-card-inner">
            <div className="community-avatar">
                <div><img src={avatar} alt="" /></div>
            </div>
            <div><h6 className="community-name">Self-financing company</h6></div>
            
            <div className="community-details">
                <div><span>created 2 days ago,</span> <span>2 hours ago</span></div>
            </div>
            </button>
        </div>
    )
}
