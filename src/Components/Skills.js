import React from 'react'
import './Skills.css'
import { Devicons, DiAndroid, DiCss3, DiFirebase, DiGithub, DiGithubBadge, DiHtml5, DiJava, DiMongodb, DiPython, DiReact } from "react-icons/di";
import {BsStarFill, BsStarHalf} from "react-icons/bs"
function Skills() {

    return (
        <>
        <div className="Skills">
            <a className="opn-tag">My Skills</a>
        </div>
        <div class="skills">
        <div class="container">
            <div class="skill-card">
                <div class="card">
                    <h4>Android Studio</h4>
                    <p><DiAndroid size="2em"/></p>
                    <p><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></p>
                </div>
                
                <div class="card">
                    <h4>Java</h4>
                    <p><DiJava size="2em"/></p>
                    <p><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></p>
                </div>
                
                <div class="card">
                    <h4>MongoDB</h4>
                    <p><DiMongodb size="2em"/></p>
                    <p><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></p>
                </div>
                
                <div class="card">
                    <h4>Firebase</h4>
                    <p><DiFirebase size="2em"/></p>
                    <p><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></p>
                </div>
                
                <div class="card">
                    <h4>Python</h4>
                    <p><DiPython size="2em"/></p>
                    <p><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></p>
                </div>
                
                <div class="card">
                    <h4>React JS</h4>
                    <p><DiReact size="2em"/></p>
                    <p><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></p>
                </div>
            </div>
            <a href="#">Back to Top</a>
        </div>
    </div>


        </>

    )
}

export default Skills
