import React from 'react'
import './Connect.css'
import {FaGithub, FaEnvelope, FaLinkedin, FaMobile} from "react-icons/fa";

function Connect() {
    return (
        <>
        <a className="tag">Connect with me</a>
        <div className="Connect">
            <span>
            <div className="social-media">
            <div className="github"><FaGithub size="2em"/>
            <a href="https://github.com/RonitGandhi" className="-link"> github.com/RonitGandhi</a></div>
            <div className="email"><FaEnvelope size="2em"/>
            <a href="ronitgandhi.16@gmail.com" className="-link"> ronitgandhi.16@gmail.com</a></div>
            <div className="linkedIn"><FaLinkedin size="2em"/>
            <a href="https://www.linkedin.com/in/ronit-gandhi-5a65941aa" className="-link">www.linkedin.com</a></div>
            </div>
            <div className="mobile"><FaMobile size="2em"/>
            <a href="8850889501" className="-link">+91 8850889501</a></div>
            </span>
        </div>
        </>
    )
}

export default Connect
