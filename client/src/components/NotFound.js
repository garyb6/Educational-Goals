import React from 'react';
import { Link } from 'react-router-dom';
import "./../css/NotFound.css"
import gameMusic from '../sounds/MOTD.mp3'

const NotFound = () => {

    return (
        <>
        <div id="wrongway">
        <i className="fas fa-map-signs fa-7x"/><br/>
        <div id="pageText">
        <h4>There's nothing to see...</h4>
        <h4>Oh well, play some soothing music:</h4>
        </div>
        <audio controls src={gameMusic} ></audio>
        <Link to="/" className="link"><div id="linkText">Get me out of here!</div></Link>
        </div>
        </>
    )
}

export default NotFound;