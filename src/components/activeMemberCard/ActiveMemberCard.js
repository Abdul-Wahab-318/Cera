import React from 'react'
import './ActiveMemberCard.css'
import avatar from '../../assets/avatar-4.jpg';

export default function ActiveMemberCard() {
    return (
        <div className="member-card">
            <div className="member-avatar">
                <button><img src={avatar} alt="" /></button>
            </div>
            <button><h6 className="member-name">John Lars</h6></button>
            
            <div className="member-details">
                <button><span>33 .</span> <span>Account manager </span></button>
            </div>
        </div>
    )
}
