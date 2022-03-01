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
        <h1>Educational Goals</h1>
        <input type = "text" onChange={handleChangePlayerOne} id = "Player 1 input" /> 
        <Carousel variant="dark">
    <Carousel.Item>
        <img
        className="d-block w-100"
        src= {Crouch}
        alt="Goalkeeper"
        />
        <Carousel.Caption>
        <h5>Goalkeeper</h5>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
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
        className="d-block w-100"
        src={JumpL}
        alt="Diving Goalkeeper"
        />
        <Carousel.Caption>
        <h5>Diving Goalkeeper</h5>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
    <input type = "text" onChange={handleChangePlayerTwo} id = "Player 2 input"/> 
    <h2> This is the carousel </h2> 
    <form>
        <label> Choose Quiz </label>
        <select>
        <option value = ""> Jamie's Quiz </option>
        <option value = ""> Fraser's Quiz </option>
        <option value = ""> Andrew's Quiz </option>
        <option value = ""> Gary's Quiz </option>
        </select>
    </form>
        <Link to = "/quiz">Start</Link>
        </>
    
    )
    
}

export default StartContainer;