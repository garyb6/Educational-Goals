import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import ScoreDisplay from '../components/ScoreDisplay';
import Animation from '../components/Animation';
import useSound from 'use-sound';
import goal from '../sounds/Goal_chant.wav'
import miss from '../sounds/Goal_missed.wav'
import "./../css/GameContainer.css"
import "./../css/Animation.css"

const GameContainer = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo, questionNumber, setQuestionNumber, chosenAnswer, setChosenAnswer }) => {

    const [shotScored] = useSound(goal)
    const [shotSaved] = useSound(miss)

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
            shotSaved()
            console.log('It was saved!');
        } 
        
        if (combinedInput == ["al"] || combinedInput == ["ak"] || combinedInput == ["sj"] || combinedInput == ["sl"] || combinedInput == ["dj"] || combinedInput == ["dk"]) {
            adjustScore(1);
            shotScored()
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
            <div id="game-directions">
                <div>
                <h3> Left: A Middle: S Right: D</h3>
                </div>
                <div>
                <h3> Left: J Middle: K Right: L</h3>
                </div>
            </div>
            <Animation/>
            <Link onClick={handleClick} id="nextQuestion" to="/quiz"><div id="nextQuestionText">Next question</div></Link>
        </>
    )

}

export default GameContainer;