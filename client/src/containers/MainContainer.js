import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartContainer from './StartContainer';
import GameContainer from './GameContainer';
import QuizContainer from './QuizContainer';
import Request from '../helpers/request';
import CreateQuiz from '../components/CreateQuiz';
import StartPage from '../components/StartPage';
import NotFound from '../components/NotFound';


const MainContainer = () => {

    const [playerOne, setPlayerOne] = useState({ name: "Player 1", score: ['x', 'x', 'x', 'x', 'x'], filter: 0  });
    const [playerTwo, setPlayerTwo] = useState({ name: "Player 2", score: ['x', 'x', 'x', 'x', 'x'], filter: 0  });
    const [selectedQuiz, setSelectedQuiz] = useState(0);
    const [chosenQuiz, setChosenQuiz] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1)
    const [chosenAnswer, setChosenAnswer] = useState(null)
    const [quizzes, setQuizzes] = useState([]);

    return (

        <Router>
            <Routes>
                <Route path="/" element={<StartPage/>}/>
                <Route path="/start" element={<StartContainer playerOne={playerOne} playerTwo={playerTwo} setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo} quizzes={quizzes} setQuizzes={setQuizzes} setSelectedQuiz={setSelectedQuiz} />} />
                <Route path="/quizzes/create" element={<CreateQuiz/>}/>
                <Route path="/quiz" element={<QuizContainer playerOne={playerOne} playerTwo={playerTwo} selectedQuiz={selectedQuiz} chosenQuiz={chosenQuiz} setChosenQuiz={setChosenQuiz}questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} setChosenAnswer={setChosenAnswer} />} />
                <Route path="/game" element={<GameContainer playerOne={playerOne} playerTwo={playerTwo} setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} chosenAnswer={chosenAnswer} setChosenAnswer={setChosenAnswer}/>} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>

    );
}

export default MainContainer;
