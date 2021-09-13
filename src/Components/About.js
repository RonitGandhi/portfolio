import React from 'react'
import './About.css'
import {BsDot} from "react-icons/bs"

function About() {
    return (
        <>
        <div className="box">
            <div className="card">
                <a className="bodye">Hi, I'm Ronit Gandhi.</a>
                <h2 className="body3"> I'm a results-driven computer science student passionate about developing
                user-friendly software applications . Excellent problem-solving
                skills and ability to perform well in a team. My forte lies in Android and Web development. I love working with new tech and implementing it. Seeking to help
                develop products as an app developer, as well as grow and
                develop my own skills.</h2>
            </div>
            
        </div>
        <div className="box">
            <div className="card2">
                <a className="body">Education</a>
                <h2 className="body3"><BsDot/>Sardar Patel Institue of Technology</h2>
                <h3 className="sub-body">2019-present</h3>
                <h4 className="sub-body-2"> Electronics Engineering and Computer Science</h4>
                <h2 className="body3"><BsDot/>SPace Junior Science College</h2>
                <h3 className="sub-body">2017-2019</h3>
                <h4 className="sub-body-2"> Science</h4>
                <h2 className="body3"><BsDot/>Arya Vidya Mandir</h2>
                <h3 className="sub-body">2007-2017</h3>
                <h4 className="sub-body-2"> Schooling</h4>
            </div>
        </div>
        <a className="body">What I'm good at</a>
        <div className="good-at">
        <div class="card-design">
            <h2 className="text">Writing robust code.</h2>
            <h2 className="font-text">That can run on anything.</h2>
        </div>
        <div class="card-design">
            <h2 className="text">Creating clean designs.</h2>
            <h2 className="font-text">That are asthetic.</h2>
        </div>
        <div class="card-design">
            <h2 className="text">Doing proper research.</h2>
            <h2 className="font-text">For minimum refactor.</h2>
        </div>
        <div class="card-design">
            <h2 className="text">Team adaptibility.</h2>
            <h2 className="font-text">For better productivity.</h2>
        </div>
        <div class="card-design">
            <h2 className="text"> Learning new tech.</h2>
            <h2 className="font-text">Cause the sky is the limit!</h2>
        </div>
        
        <div class="card-design">
            <h2 className="text">Always improving.</h2>
            <h2 className="font-text">Cause why not! </h2>
        </div>
        </div>
        <div className="backtotop2">
            <a href="#">Back to Top</a>
            </div>
        </>
    )
}

export default About
