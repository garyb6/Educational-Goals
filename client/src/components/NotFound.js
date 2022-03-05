import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <>
        <i className="fas fa-map-signs"/><br/>
        <h4>There's nothing to see...</h4>
        <Link to="/">Get me out of here!</Link>
        </>
    )


}

export default NotFound;