import React from 'react';
import { Link } from 'react-router-dom';
import "./../css/StartPage.css"
import logo from "../images/logo.jpg"

const StartPage = () => {
    
    return (
        <>
        <div id="StartPageBox">
            <div id="header">
                <img id="logo" src={logo}></img>
            </div>
            <Link to="/start" className="startPageButton"><div className="startPageButtonText">Play a quiz</div></Link>
            <Link to="/quizzes/create" className="startPageButton"><div className="startPageButtonText">Create a quiz</div></Link>
            <Link to="/start/instructions" className="startPageButton"><div className="startPageButtonText">How to play</div></Link>
        </div>
        </>
    )

}

export default StartPage;