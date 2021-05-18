import React from 'react'
import './ActiveMemberCard.css'
import avatar from '../../assets/avatar-4.jpg';



export default function ActiveMemberCard(props) {
    let member = props.member;
    return (
        <div className="member-card">
            <div className="member-avatar">
                <button><img src={avatar} alt="" /></button>
            </div>
            <button><h6 className="member-name">{member.name}</h6></button>
            
            <div className="member-details">
                <button><span>{member.number}.</span> <span>{member.career}</span></button>
            </div>
        </div>
    )
}
