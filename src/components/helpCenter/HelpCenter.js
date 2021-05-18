import React from 'react'
import './HelpCenter.css'
export default function HelpCenter() {
    return (
        <div className="help-center">
            <div className="custom-section-padding">
                <div className="custom-container">
                    <div className="help-center-inner">
                        <h1>We are all close together</h1>
                        <p>A problem, a question, an emergency? <br /> Do not hesitate to visit the help center, <span>we can help you</span></p>
                        <button><i className="far fa-life-ring"></i> Help center</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
