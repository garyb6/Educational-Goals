import React, {useState} from 'react';
import {Link} from 'react-router-dom';



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
        <h2> This is the carousel </h2> 
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