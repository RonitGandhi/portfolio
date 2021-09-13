import React from 'react'
import './Projects.css'
import {AiOutlineArrowRight} from "react-icons/ai"



function Projects() {
   
 
    return (
        <>
        <a className="tag" title="Check all projects" >My Projects 
        <a href="https://github.com/RonitGandhi"><AiOutlineArrowRight size="22px"/> </a>
        </a>

        <div className="Projects">
           <div className="card-projects" title="Check out this project">
                <h1 className="body" >Project 1  
                <a href="https://github.com/RonitGandhi/ExpenseTracker">
                    <AiOutlineArrowRight size="22px"/></a></h1>
                <h2 className="body"> Expense Tracker</h2>
               
            </div>
            <div className="card-projects" title="Check out this project">
                <h1 className="body">Project 2
                <a href="https://github.com/RonitGandhi/MyMovieDb">
                    <AiOutlineArrowRight size="22px"/></a></h1>
                <h2 className="body">Spotify Clone</h2>
            </div>  
            <div className="card-projects" title="Check out this project">
                <h1 className="body">Project 3 <a href="https://github.com/RonitGandhi/StudentDb">
                    <AiOutlineArrowRight size="22px"/></a></h1>
                <h2 className="body">Student Db Manager</h2>
                
            </div>
            <div className="card-projects" title="Check out this project">
                <h1 className="body">Project 4 <a href="https://github.com/RonitGandhi/RealtimeDatabase">
                    <AiOutlineArrowRight size="22px"/></a></h1>
                <h2 className="body"> Inventory Manager App</h2>
            </div>
            <div className="backtotop">
            <a href="#">Back to Top</a>
            </div>
        </div>
        

        </>
    )
}

export default Projects


