import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Crouch from "./../images/Crouch.png";
import Stand from "./../images/Stand.png";
import JumpL from "./../images/Jump_left.png";
import "./../css/StartContainer.css"

const StartContainer = ({playerOne, playerTwo, setPlayerOne, setPlayerTwo}) => {
    
    const handleChangePlayerOne = (event) => {

        setPlayerOne(event.target.value);

        console.log(playerOne);
    }
    const handleChangePlayerTwo = (event) => {

        setPlayerTwo(event.target.value);

        console.log(playerTwo);
    }

    return (
    <>  
        <div className="startContainer">
            <h1>Educational Goals</h1>
            <div className="players">
                <div className="player1Select">
                    <label for="player1Box">Player 1:</label>
                    <input id = "player1Box" type = "text" onChange={handleChangePlayerOne} id = "Player 1 input" />
                    <div className="colourSelector">
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                className="d-block"
                                src= {Stand}
                                alt="Goalkeeper"
                                />
                                <Carousel.Caption>
                                <h5>Goalkeeper</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block"
                                src={Stand}
                                alt="Striker"
                                style={{filter: "invert(18%) sepia(75%) saturate(5707%) hue-rotate(223deg) brightness(102%) contrast(105%)"}}
                                />
                                <Carousel.Caption>
                                <h5>Striker</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block"
                                src={Stand}
                                alt="Diving Goalkeeper"
                                />
                                <Carousel.Caption>
                                <h5>Diving Goalkeeper</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    </div>
                    <div className="player2Select">
                        <label for="player2Box">Player 2:</label>
                        <input id = "player2Box" type = "text" onChange={handleChangePlayerTwo} id = "Player 2 input"/> 
                        <div className="colourSelector">
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                className="d-block"
                                src= {Stand}
                                alt="Goalkeeper"
                                />
                                <Carousel.Caption>
                                <p>Goalkeeper</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block"
                                src={Stand}
                                alt="Striker"
                                style={{filter: "invert(18%) sepia(75%) saturate(5707%) hue-rotate(223deg) brightness(102%) contrast(105%)"}}
                                />
                                <Carousel.Caption>
                                <h5>Striker</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block"
                                src={Stand}
                                alt="Diving Goalkeeper"
                                />
                            <Carousel.Caption>
                                <h5>Diving Goalkeeper</h5>
                            </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                </div>
            <div className="quizSelector">
                <form>
                    <label> Choose Quiz: </label>
                    <select>
                    <option value = ""> Jamie's Quiz </option>
                    <option value = ""> Fraser's Quiz </option>
                    <option value = ""> Andrew's Quiz </option>
                    <option value = ""> Gary's Quiz </option>
                    </select>
                </form>
                <Link to = "/quiz">Start</Link>
            </div>
        </div>
    </>
    )    
}

export default StartContainer;