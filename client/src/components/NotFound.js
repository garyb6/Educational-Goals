import React from 'react';
import { Link } from 'react-router-dom';
import gameMusic from '../sounds/MOTD.mp3'

const NotFound = () => {

    return (
        <>
        <i className="fas fa-map-signs"/><br/>
        <h4>There's nothing to see...</h4>
        <Link to="/">Get me out of here!</Link>
        <h5>Or play some soothing music below</h5>
        <audio controls src={gameMusic} ></audio>

        </>
    )


}

export default NotFound;