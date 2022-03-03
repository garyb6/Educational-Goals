import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Crouch from "./../images/Crouch.png";
import Stand from "./../images/Stand.png";
import JumpL from "./../images/Jump_left.png";
import "./../css/StartContainer.css"

const StartContainer = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo, quizzes, setSelectedQuiz }) => {

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
                        <label htmlFor="player1Box">Player 1:</label>
                        <input id="player1Box" type="text" onChange={handleChangePlayerOne} />
                        <div className="colourSelector">
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={Stand}
                                        alt="Goalkeeper"
                                    // style={{filter: "invert(18%) sepia(75%) saturate(5707%) hue-rotate(223deg) brightness(102%) contrast(105%)"}}
                                    />
                                    {/* <Carousel.Caption>
                                <h5>Goalkeeper</h5>
                                </Carousel.Caption> */}
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={Stand}
                                        alt="Striker"
                                    // style={{filter: "invert(16%) sepia(96%) saturate(6992%) hue-rotate(357deg) brightness(93%) contrast(118%)"}}
                                    />
                                    {/* <Carousel.Caption>
                                <h5>Striker</h5>
                                </Carousel.Caption> */}
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={Stand}
                                        alt="Diving Goalkeeper"
                                    // style={{filter: "invert(53%) sepia(28%) saturate(5622%) hue-rotate(88deg) brightness(123%) contrast(122%)"}}
                                    />
                                    {/* <Carousel.Caption>
                                <h5>Diving Goalkeeper</h5>
                                </Carousel.Caption> */}
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="player2Select">
                        <label htmlFor="player2Box">Player 2:</label>
                        <input id="player2Box" type="text" onChange={handleChangePlayerTwo} id="Player 2 input" />
                        <div className="colourSelector">
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={Stand}
                                        alt="Goalkeeper"
                                        style={{ filter: "invert(16%) sepia(96%) saturate(6992%) hue-rotate(357deg) brightness(93%) contrast(118%)" }}
                                    />
                                    {/* <Carousel.Caption>
                                <p>Goalkeeper</p>
                                </Carousel.Caption> */}
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={Stand}
                                        alt="Striker"
                                        style={{ filter: "invert(53%) sepia(28%) saturate(5622%) hue-rotate(88deg) brightness(123%) contrast(122%)" }}
                                    />
                                    {/* <Carousel.Caption>
                                <h5>Striker</h5>
                                </Carousel.Caption> */}
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={Stand}
                                        alt="Diving Goalkeeper"
                                        style={{ filter: "invert(18%) sepia(75%) saturate(5707%) hue-rotate(223deg) brightness(102%) contrast(105%)" }}
                                    />
                                    {/* <Carousel.Caption>
                                <h5>Diving Goalkeeper</h5>
                            </Carousel.Caption> */}
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="quizSelector">
                    <form>
                        <label> Choose Quiz: </label>
                        <select defaultValue="" onChange={handleChangeQuizChoice} required>
                            <option value="" disabled >Choose a Quiz</option>
                            {listOfQuizzes}
                        </select>
                    </form>
                    <Link to="/quiz">Start</Link>
                </div>
            </div>
        </>
    )
}

export default StartContainer;