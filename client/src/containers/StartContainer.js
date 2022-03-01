import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Carousel } from 'react-bootstrap';



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
        src="holder.js/800x400?text=First slide&bg=f5f5f5"
        alt="First slide"
        />
        <Carousel.Caption>
        <h5>First slide label</h5>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="holder.js/800x400?text=Second slide&bg=eee"
        alt="Second slide"
        />
        <Carousel.Caption>
        <h5>Second slide label</h5>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="holder.js/800x400?text=Third slide&bg=e5e5e5"
        alt="Third slide"
        />
        <Carousel.Caption>
        <h5>Third slide label</h5>
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