import React from 'react'
import './MemberDirectoryCard.css'
import avatar from '../../assets/avatar-5.jpg'

export default function MemberDirectoryCard(props) {
    let member = props.member
    return (
        <div className="member-directory-card">
            <div className="member-directory-card-img">
                <div className="user-avatar"><img src={avatar} alt="" /></div>
            </div>
            <div className="member-directory-card-details">
                <h6>{member.name}</h6>
                <span>{member.email|| "@demo"}</span>
                <div className="user-icons">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    )
}
