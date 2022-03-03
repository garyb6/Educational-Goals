import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Game from '../components/Game';
import ScoreDisplay from '../components/ScoreDisplay';


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
    console.log(combinedInput);

    const scoreIndex = Math.floor(questionNumber / 2);
    const playerGo = (questionNumber % 2 !== 0);

    

    if (combinedInput == ["dl"] || combinedInput == ["sk"] || combinedInput == ["aj"]) {
        if (playerGo) {
            let tempPlayer = playerOne
            tempPlayer.score[scoreIndex] = 0
            setPlayerOne(tempPlayer)
        } else {
            let tempPlayer = playerTwo
            tempPlayer.score[scoreIndex - 1] = 0
            setPlayerTwo(tempPlayer)
        }
    } else {
        if (playerGo) {
            let tempPlayer = playerOne
            tempPlayer.score[scoreIndex] = 1
            setPlayerOne(tempPlayer)
        } else {
            let tempPlayer = playerTwo
            tempPlayer.score[scoreIndex - 1] = 1
            setPlayerTwo(tempPlayer)
        }
    }
}

        
    if (chosenAnswer === false){
        setTimeout(checkGoal, 1)
        console.log(chosenAnswer)
        console.log("ANSWER INCORRECT")
    } else {
        setTimeout(checkGoal, 5000)
        console.log(chosenAnswer)
        console.log("ANSWER CORRECT")
    }

    const handleClick = () => {
        setQuestionNumber(questionNumber + 1)
        setChosenAnswer(null)
        console.log(chosenAnswer)

    }

    return (
        <>
            <div id="scoreboard">
                        <ScoreDisplay playerOne = {playerOne} playerTwo = {playerTwo} questionNumber = {questionNumber}/>
            </div>
            
            <Link to="/quiz" onClick={handleClick}>Next question</Link>
        </>
    )

}

export default GameContainer;