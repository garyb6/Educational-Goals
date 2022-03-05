import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
    
    return (
        <>
        <h1>This is the start page</h1>
        <Link to="/start">Start a quiz</Link><br/>
        <Link to="/quiz/create">Create a quiz</Link>
        </>
    )

}

export default StartPage;