import React, {useState, useEffect} from 'react';
import {Link, Routes, Router, Route} from 'react-router-dom';

const QuizContainer = ({playerOne, playerTwo, selectedQuiz, requestQuiz, chosenQuiz, questionNumber, setQuestionNumber}) => {
    
    useEffect(() => {requestQuiz(selectedQuiz)}, [])

    const handleClick = (event) => {
        console.log(event);
        setQuestionNumber(questionNumber+1);
    }

    if (chosenQuiz === null){
        return (<h1>Quiz not loaded</h1>)
    }


    return (
        <>
        <div className="nav">
        <h2> {playerOne} is player one </h2>
        <h3> This is the score counter</h3>
        <h1>This is a question counter, the count is {questionNumber}</h1>
        <h2> {playerTwo} is player two </h2>
        <h3> This is the score counter</h3>
        </div>
        <div className="question">
        <h2>{chosenQuiz.questions[questionNumber-1].ask}</h2>
        </div>

        <Link onClick = {handleClick} to = "/game">{chosenQuiz.questions[questionNumber-1].options[0].expression}</Link>
        <Link onClick = {handleClick} to = "/game">{chosenQuiz.questions[questionNumber-1].options[1].expression}</Link>
        <Link onClick = {handleClick} to = "/game">{chosenQuiz.questions[questionNumber-1].options[2].expression}</Link>
        <Link onClick = {handleClick} to = "/game">{chosenQuiz.questions[questionNumber-1].options[3].expression}</Link>
        </>
    )
}
export default QuizContainer;