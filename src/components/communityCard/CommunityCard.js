import React from 'react'
import './CommunityCard.css'
import avatar from '../../assets/avatar-2.jpg'
export default function CommunityCard(props) {
    let community = props.community
    return (
        <div className="community-card">
            <button className="community-card-inner">
            <div className="community-avatar">
                <div><img src={avatar} alt="" /></div>
            </div>
            <div><h6 className="community-name">{community.name}</h6></div>
            
            <div className="community-details">
                <div><span>{community.date}</span></div>
            </div>
            </button>
        </div>
    )
}
