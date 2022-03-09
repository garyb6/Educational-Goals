import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Instructions = () => {

    return(
            <>
            <div className="instructions">
            <h1 className="instruction-title">How to play</h1>
            <h2 className="instruction-title">Welcome to Educational Goals!</h2>
            <div className="instruction-paragraph"> Educational Goals is a competitive quiz game which will help you study a variety of topics! </div>
            <div className="instruction-paragraph">After answering correct on a question you get to take a penalty. Whoever scores the most penalties wins!</div>
            <b className="player-title">Two player mode:</b>
            <p className="instruction-paragraph"> To begin the two player game you need to input both players' names and goalkeepers and choose a quiz. Each player takes turns answering questions and taking penalties. If you get the question correct you get a chance to score a goal while your opponent controls the keeper.</p>
            <b className="player-title">One player mode:</b>
            <p className="instruction-paragraph"> To play one player mode simply don't enter a name into player two!</p>
            <b className="instruction-paragraph">The controls are:</b>
            <div className="instruction-paragraph"> <b>Player One</b>: <b className="instruction-button">A = ⬅️</b> <b className="instruction-button">S = ⬆️</b> <b className="instruction-button">D = ➡️</b></div>
            <div className="instruction-paragraph"> <b>Player Two</b>: <b className="instruction-button">J = ⬅️</b> <b className="instruction-button">K = ⬆️</b> <b className="instruction-button">L = ➡️</b></div>
            <p className="instruction-paragraph">You can also create your own quizzes to play with your friends!</p>
            <div className='home-button'><Link id="nextQuestion" to="/"><div id="nextQuestionText">Home</div></Link></div>
            </div>
           </>
           )
}
export default Instructions;