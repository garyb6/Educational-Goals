import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Crouch from "./../images/Crouch.png";
import Stand from "./../images/Stand.png";
import JumpL from "./../images/Jump_left.png";
import "./../css/StartContainer.css"
import "./../css/Animation.css"
import useSound from 'use-sound';
import gameMusic from '../sounds/MOTD.mp3'
import {Howl, Howler} from 'howler';
import Request from '../helpers/request';

const StartContainer = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo, quizzes, setQuizzes, setSelectedQuiz, setChosenQuiz}) => {

    // const [playGameMusic] = useSound(gameMusic)
    // const gameMusic = new Howl({
    //     src: ['../sounds/Game_music.wav']
    // });

    // const playGameMusic = () => (new Audio (gameMusic).play())

    useEffect(() => {
        requestAll()
    }, [])

    const requestAll = function () {
        const request = new Request();
        request.get('http://localhost:8080/quizzes')
            .then((data) => setQuizzes(data))
    }

    const handleChangePlayerOne = (event) => {
        const tempPlayer = playerOne;
        tempPlayer.name = event.target.value
        setPlayerOne(tempPlayer)
    }

    const handleChangePlayerTwo = (event) => {
        const tempPlayer = playerTwo;
        tempPlayer.name = event.target.value
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
                <h1>Educational Goals</h1>
                <div className="players">
                    <div className="player1Select">
                        <label className="playerLabel" htmlFor="player1Box">Player 1:</label>
                        <input id="player1Box" type="text" onChange={handleChangePlayerOne} placeholder="type in your name"/>
                        <div className="colourSelector">
                            <Carousel interval = {null}>
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={Stand}
                                        alt="Red Player"
                                        style={{ filter: "invert(24%) sepia(45%) saturate(6956%) hue-rotate(352deg) brightness(105%) contrast(85%)" }}
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
                                        style={{ filter: "invert(67%) sepia(13%) saturate(4833%) hue-rotate(72deg) brightness(101%) contrast(81%)" }}
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
                                        style={{ filter: "invert(18%) sepia(75%) saturate(5707%) hue-rotate(223deg) brightness(102%) contrast(105%)" }}
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
                        <input id="player2Box" type="text" onChange={handleChangePlayerTwo} placeholder="type in your name"/>
                        <div className="colourSelector">
                            <Carousel interval = {null}>
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={Stand}
                                        alt="Red Player"
                                        style={{ filter: "invert(24%) sepia(45%) saturate(6956%) hue-rotate(352deg) brightness(105%) contrast(85%)" }}
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
                                        style={{ filter: "invert(67%) sepia(13%) saturate(4833%) hue-rotate(72deg) brightness(101%) contrast(81%)" }}
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
                                        style={{ filter: "invert(18%) sepia(75%) saturate(5707%) hue-rotate(223deg) brightness(102%) contrast(105%)" }}
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
                    <button id="quizStartButton" ><Link to="/quiz">Start</Link></button>
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