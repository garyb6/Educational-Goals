import React, {useState, useEffect} from 'react';
import {Link, Routes, Router, Route} from 'react-router-dom';
import Request from '../helpers/request';
const QuizContainer = ({playerOne, playerTwo}) => {
    const [quizzes, setQuizzes] = useState([]);
    useEffect(()=>{
        requestAll()
    }, [])
    const requestAll = function(){
        const request = new Request();
        request.get('http://localhost:8080/quizzes')
        .then((data) => setQuizzes(data))
    }
    const findQuizById = function(id){
        return quizzes.find((quiz) => {
            return quiz.id === parseInt(id);
        })
    }
    if(!quizzes){
        return null
    }
    return (
        <>
        <h1>This is the quiz page</h1>
        <h2> {playerOne} is player one </h2>
        <h3> This is the score counter</h3>
        <h2> {playerTwo} is player two </h2>
        <h3> This is the score counter</h3>
        <h2> This is the question </h2>
        <Link to = "/game">Answer 1</Link>
        <Link to = "/game">Answer 2</Link>
        <Link to = "/game">Answer 3</Link>
        <Link to = "/game">Answer 4</Link>
        </>
    )
}
export default QuizContainer;