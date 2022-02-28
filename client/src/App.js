import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StartContainer from './containers/StartContainer';
import GameContainer from './containers/GameContainer';
import QuizContainer from './containers/QuizContainer';


function App() {
  return (

    <Router>
        <Routes>
            <Route path = "/start" element={<StartContainer/>}/>
            <Route path = "/quiz" element={<QuizContainer/>}/>
            <Route path = "/game" element={<GameContainer/>}/>
        </Routes>
    </Router>

  );
}

export default App;
