import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StartContainer from './StartContainer';
import GameContainer from './GameContainer';
import QuizContainer from './QuizContainer';

const MainContainer = () => {

    const [playerOne, setPlayerOne] = useState("Player 1");
    const [playerTwo, setPlayerTwo] = useState("Player 2");

  return (

    <Router>
        <Routes>
            <Route path = "/start" element={<StartContainer playerOne = {playerOne} playerTwo = {playerTwo} setPlayerOne = {setPlayerOne} setPlayerTwo = {setPlayerTwo}/>}/>
            {/* <Route path = "/start" element={<StartContainer />}/> */}
            <Route path = "/quiz" element={<QuizContainer/>}/>
            <Route path = "/game" element={<GameContainer/>}/>
        </Routes>
    </Router>

  );
}

export default MainContainer;
