import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartContainer from './StartContainer';
import GameContainer from './GameContainer';
import QuizContainer from './QuizContainer';
import Request from '../helpers/request';


const MainContainer = () => {

    const [playerOne, setPlayerOne] = useState({ name: "Player 1", score: 0 });
    const [playerTwo, setPlayerTwo] = useState({ name: "Player 2", score: 0 });
    const [selectedQuiz, setSelectedQuiz] = useState(0);
    const [chosenQuiz, setChosenQuiz] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1)
    const [chosenAnswer, setChosenAnswer] = useState(null)


    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        requestAll()
    }, [])

    const requestAll = function () {
        const request = new Request();
        request.get('http://localhost:8080/quizzes')
            .then((data) => setQuizzes(data))
    }

    const requestQuiz = function (id) {
        const request = new Request();
        request.get(`http://localhost:8080/quizzes/${id}`)
            .then((data) => setChosenQuiz(data))
    }

    return (

        <Router>
            <Routes>
                <Route path="/start" element={<StartContainer playerOne={playerOne} playerTwo={playerTwo} setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo} quizzes={quizzes} setSelectedQuiz={setSelectedQuiz} />} />
                <Route path="/quiz" element={<QuizContainer playerOne={playerOne} playerTwo={playerTwo} requestQuiz={requestQuiz} selectedQuiz={selectedQuiz} chosenQuiz={chosenQuiz} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} setChosenAnswer={setChosenAnswer} />} />
                <Route path="/game" element={<GameContainer playerOne={playerOne} playerTwo={playerTwo} setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} chosenAnswer={chosenAnswer} setChosenAnswer={setChosenAnswer}/>} />
            </Routes>
        </Router>

    );
}

export default MainContainer;
