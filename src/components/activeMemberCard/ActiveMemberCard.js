import React from 'react'
import './ActiveMemberCard.css'
import avatar from '../../assets/avatar-4.jpg';
import {Link} from 'react-router-dom'


export default function ActiveMemberCard(props) {
    let member = props.member;
    return (
        <div className="member-card">
            <div className="member-avatar">
                <Link to="/memberprofile"><img src={avatar} alt="" /></Link>
            </div>
            <Link to ="/memberprofile"><h6 className="member-name">{member.name}</h6></Link>
            
            <div className="member-details">
                <Link to="/memberprofile"><span>{member.number}.</span> <span>{member.career}</span></Link>
            </div>
        </div>
    )
}
