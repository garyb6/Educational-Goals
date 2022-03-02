import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StartContainer from './StartContainer';
import GameContainer from './GameContainer';
import QuizContainer from './QuizContainer';
import Request from '../helpers/request';


const MainContainer = () => {

    const [playerOne, setPlayerOne] = useState("Player 1");
    const [playerTwo, setPlayerTwo] = useState("Player 2");
    const [selectedQuiz, setSelectedQuiz] = useState(1);

    const [quizzes, setQuizzes] = useState([]);
    useEffect(()=>{
        requestAll()
    }, [])

    const requestAll = function(){
        const request = new Request();
        request.get('http://localhost:8080/quizzes')
        .then((data) => setQuizzes(data))
    }

    const requestQuiz = function(id){
      const request = new Request();
      request.get(`http://localhost:8080/quizzes/${id}`)
      .then((data) => setQuizzes(data))
  }


  return (

    <Router>
        <Routes>
            <Route path = "/start" element={<StartContainer playerOne = {playerOne} playerTwo = {playerTwo} setPlayerOne = {setPlayerOne} setPlayerTwo = {setPlayerTwo} quizzes={quizzes} setSelectedQuiz = {setSelectedQuiz}/>}/>
            <Route path = "/quiz" element={<QuizContainer playerOne = {playerOne} playerTwo = {playerTwo} requestQuiz = {requestQuiz} selectedQuiz = {selectedQuiz}/>}/>
            <Route path = "/game" element={<GameContainer playerOne = {playerOne} playerTwo = {playerTwo}/>}/>
        </Routes>
    </Router>

  );
}

export default MainContainer;
