import './LeadText.css'
import React from 'react'


export default function LeadText(props) {
    
    return (
        <div className="lead-text-parent">
            <h5>{props.heading || "Our Active Members"}</h5>
            <button>{props.link || "View all members"}</button>
        </div>
    )
}

