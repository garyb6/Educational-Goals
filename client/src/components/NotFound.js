import React from 'react';
import { Link } from 'react-router-dom';
import gameMusic from '../sounds/MOTD.mp3'
import "./../css/NotFound.css"

const NotFound = () => {

    return (
        <>
        <div id="wrongway">
        <i className="fas fa-map-signs fa-7x"/><br/>
        <h4>There's nothing to see...</h4>
        <h4>Oh well, play some soothing music:</h4>
        <audio controls src={gameMusic} ></audio>
        <Link to="/" className="help"><div id="helpText">Get me out of here!</div></Link>
        </div>
        </>
    )


}

export default NotFound;