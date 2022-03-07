import React, { useState, useEffect } from 'react';
import { Link, Routes, Router, Route } from 'react-router-dom';
import ScoreDisplay from '../components/ScoreDisplay';
import "./../css/QuizContainer.css"
import useSound from 'use-sound';
import gameMusic from '../sounds/MOTD.mp3'
import whistle from '../sounds/Whistle.wav'

const QuizContainer = ({ playerOne, playerTwo, selectedQuiz, requestQuiz, chosenQuiz, questionNumber, setQuestionNumber, setChosenAnswer }) => {

    const [blowWhistle] = useSound(whistle)

    useEffect(() => { requestQuiz(selectedQuiz) }, [])

    if (chosenQuiz === null) {
        return (<h1>Quiz not loaded!</h1>)
    }

    if (questionNumber > 10) {

        if (playerOne.score.reduce((a, b) => a + b, 0) > playerTwo.score.reduce((a, b) => a + b, 0)){
            return (<h1> {playerOne.name} is the winner!</h1>)
        } else if (playerTwo.score > playerOne.score) {
            return (<h1> {playerTwo.name} is the winner!</h1>)
        } else {
            return (<h1> It's a draw!</h1>)
        }
    }

    const handleClick = (number) => {
        console.log("This is the answer we picked", chosenQuiz.questions[questionNumber - 1].options[number].correct)
        console.log("this is our number", number)
        setChosenAnswer (chosenQuiz.questions[questionNumber - 1].options[number].correct === true)
        blowWhistle()
    }

    return (
        <>
            <div id="whiteboard">
                <div id="scoreboard">
                        <ScoreDisplay playerOne = {playerOne} playerTwo = {playerTwo} questionNumber = {questionNumber}/>
                </div>
                <div id="quizBoard">
                    <div className="Q">
                        <h2>{chosenQuiz.questions[questionNumber - 1].ask}</h2>
                    </div>
                    <button className="A1 answer"><Link onClick={() => handleClick(0)} to="/game">{chosenQuiz.questions[questionNumber - 1].options[0].expression}</Link></button>
                    <button className="A2 answer"><Link onClick={() => handleClick(1)} to="/game">{chosenQuiz.questions[questionNumber - 1].options[1].expression}</Link></button>
                    <button className="A3 answer"><Link onClick={() => handleClick(2)} to="/game">{chosenQuiz.questions[questionNumber - 1].options[2].expression}</Link></button>
                    <button className="A4 answer"><Link onClick={() => handleClick(3)} to="/game">{chosenQuiz.questions[questionNumber - 1].options[3].expression}</Link></button>
                </div>
                <footer>
            <audio controls src={gameMusic} ></audio>
            </footer>
            </div>
        </>
    )
}
export default QuizContainer;