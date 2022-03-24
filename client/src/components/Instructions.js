import { Link } from 'react-router-dom';
import React from 'react';
import "./../css/Instructions.css"

const Instructions = () => {

    return(
        <>
            <div className="i-container">
                <h1 className="i-title">How to play</h1>
                <h2 className="i-title">Welcome to Educational Goals!</h2>
                <div className="i-text">  
                    Educational Goals is a competitive quiz game which will help you study a variety of topics!
                    <br></br>
                    After answering correct on a question you get to take a penalty. Whoever scores the most penalties wins!
                </div>
                <b className="i-subtitle">Two player mode:</b>
                <p className="i-text"> To begin the two player game you need to input both players' names and goalkeepers and choose a quiz. Each player takes turns answering questions and taking penalties. If you get the question correct you get a chance to score a goal while your opponent controls the keeper.</p>
                <b className="i-subtitle">One player mode:</b>
                <p className="i-text"> To play one player mode simply don't enter a name into player two!</p>
                <b className="i-subtitle">The controls are:</b>
                <div className="i-text"> <b>Player One</b>: <b className="i-button">A = ⬅️</b> <b className="i-button">S = ⬆️</b> <b className="i-button">D = ➡️</b></div>
                <div className="i-text"> <b>Player Two</b>: <b className="i-button">J = ⬅️</b> <b className="i-button">K = ⬆️</b> <b className="i-button">L = ➡️</b></div>
                <p className="i-text">You can also create your own quizzes to play with your friends!</p>
                <Link className="i-home" to="/"><div className="i-home-text">Back to home</div></Link>
            </div>
        </>
    )
}
export default Instructions;