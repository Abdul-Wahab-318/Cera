import React from 'react'
import {Link} from 'react-router-dom'
import './CustomHeader.css'
export default function CustomHeader(props) {
    return (
        <div className="custom-header-parent">
            <div className="custom-header-caption">
                <div>
                    <Link to="/">Home</Link> <span>{props.heading || "Login"}</span>
                </div>
                <h1>{props.heading || "Login"}</h1>
            </div>
        </div>
    )
}
