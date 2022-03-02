import React, {useState, useEffect} from 'react';
import {Link, Routes, Router, Route} from 'react-router-dom';
import "./../css/MainContainer.css"


const QuizContainer = ({playerOne, playerTwo, selectedQuiz, requestQuiz, chosenQuiz, questionNumber, setQuestionNumber}) => {
    
    useEffect(() => {requestQuiz(selectedQuiz)}, [])

    if (chosenQuiz === null){
        return (<h1>Quiz not loaded</h1>)
    }

    // const activePlayer = () => {
    //     if(questionNumber%2 !=0){
    //         return <h4>{playerOne}'s Turn</h4>
    //     }
    //     else {return <h4>{playerTwo}'s Turn</h4>}
    // }

    const activePlayer = () => {
        if(questionNumber%2 !=0){
            return <h4>{playerOne}'s Turn</h4>
        }
        else {return <h4>{playerTwo}'s Turn</h4>}
    }

    const handleClick = (event) => {
        console.log(event);
        setQuestionNumber(questionNumber+1);
    }


    return (
        <>
        <div id="whiteboard">
            <div id="scoreboard">
                <div className="playerScore">
                    <h2> {playerOne} </h2>
                </div>
                <div id="playerAllocation">
                    {(questionNumber%2 !==0) ? <h4>{playerOne}'s Turn</h4> : <h4>{playerTwo}'s Turn</h4>}
                </div>    
                <div className="playerScore">
                    <h2> {playerTwo} </h2>
                </div>
            </div>
            <div id="quizBoard">
                <div id="question">
                    <h2>{chosenQuiz.questions[questionNumber-1].ask}</h2>
                </div>
                <div className="answers">
                    <button className="answer"><Link onClick = {handleClick} to = "/game">{chosenQuiz.questions[questionNumber-1].options[0].expression}</Link></button>
                    <button className="answer"><Link onClick = {handleClick} to = "/game">{chosenQuiz.questions[questionNumber-1].options[1].expression}</Link></button>
                    <button className="answer"><Link onClick = {handleClick} to = "/game">{chosenQuiz.questions[questionNumber-1].options[2].expression}</Link></button>
                    <button className="answer"><Link onClick = {handleClick} to = "/game">{chosenQuiz.questions[questionNumber-1].options[3].expression}</Link></button>
                </div>
            </div>
        </div> 
        </>
    )
}
export default QuizContainer;