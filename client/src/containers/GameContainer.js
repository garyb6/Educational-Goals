import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Game from '../components/Game';
import ScoreDisplay from '../components/ScoreDisplay';
import Animation from '../components/Animation';


const GameContainer = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo, questionNumber, setQuestionNumber, chosenAnswer, setChosenAnswer }) => {


    const playerOneInput = ["s"]
    const playerTwoInput = ["k"]

    const playerDirection = (event) => {

        if (event.key === "d") {
            playerOneInput.push("d")
            console.log('p1 right', event.keyCode);
        } else if (event.key === "s") {
            playerOneInput.push("s")
            console.log('p1 middle', event.keyCode)
        } else if (event.key === "a") {
            playerOneInput.push("a")
            console.log('p1 left', event.keyCode)
        } else if (event.key === "l") {
            playerTwoInput.push("l")
            console.log('p2 right', event.keyCode);
        } else if (event.key === "k") {
            playerTwoInput.push("k")
            console.log('p2 middle', event.keyCode)
        } else if (event.key === "j") {
            playerTwoInput.push("j")
            console.log('p2 left', event.keyCode)
        }
    };


    useEffect(() => {
        window.addEventListener('keydown', playerDirection);

        return () => {
        window.removeEventListener('keydown', playerDirection);
        };
    }, []);

    const checkGoal = () => {

        const combinedInput = playerOneInput.slice(-1)[0].concat(playerTwoInput.slice(-1)[0])
        const scoreIndex = Math.floor(questionNumber / 2);
        const playerGo = (questionNumber % 2 !== 0);
        const adjustScore = (num) => {
            if (playerGo) {
                let tempPlayer = playerOne
                tempPlayer.score[scoreIndex] = num
                setPlayerOne(tempPlayer)
            } else {
                let tempPlayer = playerTwo
                tempPlayer.score[scoreIndex - 1] = num
                setPlayerTwo(tempPlayer)
            }
        }
        
        if (combinedInput == ["dl"] || combinedInput == ["sk"] || combinedInput == ["aj"]) {
            adjustScore(0);
            console.log('It was saved!');
        } else {
            adjustScore(1);
            console.log('GOOOAL!');
        }
    }

    if (chosenAnswer === false){
        setTimeout(checkGoal, 1)
        console.log("ANSWER INCORRECT")
    } else {
        setTimeout(checkGoal, 5000)
        console.log("ANSWER CORRECT")
    }

    const handleClick = () => {
        setQuestionNumber(questionNumber + 1)
        setChosenAnswer(null)
    }

    return (
        <>
            <div id="scoreboard">
                        <ScoreDisplay playerOne = {playerOne} playerTwo = {playerTwo} questionNumber = {questionNumber}/>
            </div>
            <Animation/>
            <Link to="/quiz" onClick={handleClick}>Next question</Link>
        </>
    )

}

export default GameContainer;