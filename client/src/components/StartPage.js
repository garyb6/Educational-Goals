import React from 'react';
import { Link } from 'react-router-dom';
import "./../css/StartPage.css"
import logo from "../images/logo.jpg"
const StartPage = () => {
    
    return (
        <>
        <div id="StartPageBox">
        <div id="upperLeft"></div>
        <div id="upperRight"></div>
        <div id="lowerLeft"></div>
        <div id="lowerRight"></div>

            <div id="header">
                <img id="logo" src={logo}></img>
            </div>
            <button className="startPageButton"><Link to="/start"><div className="startPageButtonText">Start a quiz</div></Link></button>
            <button className="startPageButton"><Link to="/quizzes/create"><div className="startPageButtonText">Create a quiz</div></Link></button>
        </div>
        </>
    )

}

export default StartPage;