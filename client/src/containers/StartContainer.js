import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Crouch from "./../images/Crouch.png";
import Stand from "./../images/Stand.png";
import JumpL from "./../images/Jump_left.png";
import logo from "../images/logo.jpg"
import "./../css/StartContainer.css"
import "./../css/Animation.css"
import useSound from 'use-sound';
import gameMusic from '../sounds/MOTD.mp3'
import {Howl, Howler} from 'howler';
import Request from '../helpers/request';
import { styles } from '../data/Styles'


const StartContainer = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo, quizzes, setQuizzes, setSelectedQuiz, setChosenQuiz}) => {

    useEffect(() => {
        requestAll()
    }, [])

    const requestAll = function () {
        const request = new Request();
        request.get('http://localhost:8080/quizzes')
            .then((data) => setQuizzes(data))
    }

    const handleChangePlayerOneName = (event) => {
        const tempPlayer = playerOne;
        tempPlayer.name = event.target.value
        setPlayerOne(tempPlayer)
    }

    const handleChangePlayerOneColour = (event) => {
        const tempPlayer = playerOne;
        tempPlayer.filter = event
        setPlayerOne(tempPlayer)
    }

    const handleChangePlayerTwoName = (event) => {
        const tempPlayer = playerTwo;
        tempPlayer.name = event.target.value
        setPlayerTwo(tempPlayer)
    }

    const handleChangePlayerTwoColour = (event) => {
        const tempPlayer = playerTwo;
        tempPlayer.filter = event
        setPlayerTwo(tempPlayer)
    }

    const handleChangeQuizChoice = (event) => {
        setSelectedQuiz(parseInt(event.target.value));
    }

    const listOfQuizzes = quizzes.map((quiz, index) => {
        return <option key={index} value={quiz.id}> {quiz.title} </option>
    });

    return (
        <>
            <div className="startContainer">
            <img id="logoStart" src={logo}></img>
                <div className="players">
                    <div className="player1Select">
                        <label className="playerLabel" htmlFor="player1Box">Player 1:</label>
                        <input id="player1Box" type="text" onChange={handleChangePlayerOneName} placeholder="type in your name"/>
                        <div className="colourSelector">
                            <Carousel interval = {null} onSelect={handleChangePlayerOneColour}>
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={Stand}
                                        alt="Red Player"
                                        style={styles[0]}
                                    />
                                    <Carousel.Caption>
                                        <h5>Pick the Red Player</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={Stand}
                                        alt="Green Player"
                                        style={styles[1]}
                                    />
                                    <Carousel.Caption>
                                        <h5>Pick the Green Player</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={Stand}
                                        alt="Blue Player"
                                        style={styles[2]}
                                    />
                                    <Carousel.Caption>
                                        <h5>Pick the Blue Player</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="player2Select">
                        <label className="playerLabel" htmlFor="player2Box">Player 2:</label>
                        <input id="player2Box" type="text" onChange={handleChangePlayerTwoName} placeholder="type in your name"/>
                        <div className="colourSelector">
                            <Carousel interval = {null} onSelect={handleChangePlayerTwoColour}>
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={Stand}
                                        alt="Red Player"
                                        style={styles[0]}
                                    />
                                    <Carousel.Caption>
                                        <h5>Pick the Red Player</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={Stand}
                                        alt="Green Player"
                                        style={styles[1]}
                                    />
                                    <Carousel.Caption>
                                        <h5>Pick the Green Player</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={Stand}
                                        alt="Blue Player"
                                        style={styles[2]}
                                    />
                                    <Carousel.Caption>
                                        <h5>Pick the Blue Player</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="quizSelector">
                    <form>
                        <label className="quizSelectText"> Choose Quiz: </label>
                        <select defaultValue="" onChange={handleChangeQuizChoice} required>
                            <option value="" disabled ></option>
                            {listOfQuizzes}
                        </select>
                    </form>
                    <button id="quizStartButton" ><Link to="/quiz"><div id="quizStartButtonText">Start</div></Link></button>
                </div>
            </div>
            <footer>
            <audio controls src={gameMusic} ></audio>
            </footer>
        </>
    )
}

export default StartContainer;

// onClick={playGameMusic}