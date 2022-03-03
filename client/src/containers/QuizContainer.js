import React, { useState, useEffect } from 'react';
import { Link, Routes, Router, Route } from 'react-router-dom';
import "./../css/QuizContainer.css"


const QuizContainer = ({ playerOne, playerTwo, selectedQuiz, requestQuiz, chosenQuiz, questionNumber, setQuestionNumber }) => {

    useEffect(() => { requestQuiz(selectedQuiz) }, [])

    if (chosenQuiz === null) {
        return (<h1>Quiz not loaded</h1>)
    }

    if (questionNumber > 10) {

        if (playerOne.score > playerTwo.score){
            return (<h1> {playerOne.name} is the winner!</h1>)
        } else if (playerTwo.score > playerOne.score) {
            return (<h1> {playerTwo.name} is the winner!</h1>)
        } else {
            return (<h1> It's a draw!</h1>)
        }

    }

    const handleClick = (event) => {
        console.log(event);
    }

    return (
        <>
            <div id="whiteboard">
                <div id="scoreboard">
                    <div className="playerScore">
                        <h2> {playerOne.name} {playerOne.score}</h2>
                    </div>
                    <div id="playerAllocation">
                        {(questionNumber % 2 !== 0) ? <h4>{playerOne.name}'s Turn</h4> : <h4>{playerTwo.name}'s Turn</h4>}
                    </div>
                    <div className="playerScore">
                        <h2> {playerTwo.name} {playerTwo.score}</h2>
                    </div>
                </div>
                <div id="quizBoard">
                    <div className="Q">
                        <h2>{chosenQuiz.questions[questionNumber - 1].ask}</h2>
                    </div>
                    <button className="A1 answer"><Link onClick={handleClick} to="/game">{chosenQuiz.questions[questionNumber - 1].options[0].expression}</Link></button>
                    <button className="A2 answer"><Link onClick={handleClick} to="/game">{chosenQuiz.questions[questionNumber - 1].options[1].expression}</Link></button>
                    <button className="A3 answer"><Link onClick={handleClick} to="/game">{chosenQuiz.questions[questionNumber - 1].options[2].expression}</Link></button>
                    <button className="A4 answer"><Link onClick={handleClick} to="/game">{chosenQuiz.questions[questionNumber - 1].options[3].expression}</Link></button>
                </div>
            </div>
        </>
    )
}
export default QuizContainer;