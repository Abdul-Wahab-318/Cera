import React from 'react'
import './MemberDirectoryCard.css'
import avatar from '../../assets/avatar-5.jpg'
import comments from '../../assets/chat-white.svg'
import pencil from '../../assets/pencil-white.svg'
import user from '../../assets/user-group-white.svg'
import monitor from '../../assets/monitor.svg'

import {Link} from 'react-router-dom'


export default function MemberDirectoryCard(props) {
    let member = props.member
    return (
        <div className="member-directory-card">
            <div className="member-directory-card-img">
                <div className="user-avatar"><Link to={`/memberprofile/${member.name}`}><img src={avatar} alt="" /></Link></div>
            </div>
            <div className="member-directory-card-details">
                <h6><Link to={`/memberprofile/${member.name}`}>{member.name}</Link></h6>
                <span>{member.email|| "@demo"}</span>
                <div className="user-icons">
                    <Link to={`/memberprofile/${member.name}`}><img src={pencil} alt="" /></Link>
                    <Link to={`/memberprofile/${member.name}`}><img src={comments} alt="" /></Link>
                    <Link to={`/memberprofile/${member.name}`}><img src={monitor} alt="" /></Link>
                    <Link to={`/memberprofile/${member.name}`}><img src={user} alt="" /></Link>

                </div>
            </div>
        </div>
    )
}
