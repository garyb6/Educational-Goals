import React from 'react';
import { Link } from 'react-router-dom';
import "./../css/StartPage.css"
import football from "./../images/small-ball.png";

const StartPage = () => {
    
    return (
        <>
        <div id="StartPageBox">
            <div id="header">
                <img className="logo" src= {football}></img>
                <h1>Educational Goals </h1>
                <img className="logo" src= {football}></img>
            </div>
            <div ><Link to="/start"><div className="startPageButtonText">Start a quiz</div></Link></div>
            <button className="startPageButton"><Link to="/quizzes/create"><div className="startPageButtonText">Create a quiz</div></Link></button>
        </div>
        </>
    )

}

export default StartPage;