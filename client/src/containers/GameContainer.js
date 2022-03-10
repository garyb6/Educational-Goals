import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScoreDisplay from '../components/ScoreDisplay';
import Animation from '../components/Animation';
import "./../css/GameContainer.css"
import "./../css/Animation.css"
import leftArrow from "./../images/left-arrow.png";
import upArrow from "./../images/top-arrow.png";
import rightArrow from "./../images/right-arrow.png";
import Goal from '../sounds/Goal_chant.wav'
import Miss from '../sounds/Goal_missed.wav'
import Kick from '../sounds/Kick.wav'

const GameContainer = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo, questionNumber, setQuestionNumber, chosenAnswer, setChosenAnswer }) => {

    const [isAnimating, setIsAnimating] = useState(false)
    const [playerOneInput, setPlayerOneInput] = useState(["s"])
    const [playerTwoInput, setPlayerTwoInput] = useState(["k"])
    const [flag1, setFlag1] = useState("Waiting...")
    const [flag2, setFlag2] = useState("Waiting...")

    const shotScored = new Audio(Goal);
    const shotSaved = new Audio(Miss)
    const kick = new Audio(Kick)

    useEffect(() => {
        window.addEventListener('keydown', playerDirection);
        if (!chosenAnswer) {
            setTimeout(checkGoal, 1)
            console.log("ANSWER INCORRECT")
        } else {
            setTimeout(checkGoal, 5000)
            console.log("ANSWER CORRECT")
        }
        return () => {
            window.removeEventListener('keydown', playerDirection);
        };
    }, []);

    const playerDirection = (event) => {

        if (event.key === "d" || event.key === "s" || event.key === "a") {
            let temp = playerOneInput
            temp.push(event.key)
            setPlayerOneInput(temp)
            console.log(playerOneInput)
            setFlag1("has chosen!")
        } else if ((event.key === "l" || event.key === "k" || event.key === "j") && ((playerTwo.name !== "Player 2" || playerTwo.name !== ""))) {
            let temp = playerTwoInput
            temp.push(event.key)
            setPlayerTwoInput(temp)
            console.log(playerTwoInput)
            setFlag2("has chosen!")
        }

        if ((playerTwo.name === "Player 2" || playerTwo.name === "")) {
            let directions = ["l", "k", "j"]
            let temp = playerTwoInput
            temp.push(directions[(Math.floor(Math.random() * 3))])
            setPlayerTwoInput(temp)
            console.log(playerTwoInput)
            setFlag1("has chosen!")
        }
    };

    const checkGoal = () => {

        setIsAnimating(true);
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
            shotSaved.play()
            adjustScore(0)
            console.log('It was saved!');
        }
        else if (combinedInput == ["al"] || combinedInput == ["ak"] || combinedInput == ["sj"] || combinedInput == ["sl"] || combinedInput == ["dj"] || combinedInput == ["dk"]) {
            shotScored.play();
            adjustScore(1)
            console.log('GOOOAL!');
        }
    }

    const handleClick = () => {
        setQuestionNumber(questionNumber + 1)
        setChosenAnswer(null)
        setIsAnimating(false)
    }

    return (
        <>
            <div id="gameContainer">
                <ScoreDisplay playerOne={playerOne} playerTwo={playerTwo} questionNumber={questionNumber} />
                <div id="game-directions">
                    {!chosenAnswer ? null :
                        <div id="player1Instructions">
                            <div className="controls"><span>
                                <h3>
                                    <img className="directions" src={leftArrow}></img>A
                                    <img className="directions" src={upArrow}></img>S
                                    <img className="directions" src={rightArrow}></img>D
                                </h3>
                            </span>
                            </div>
                            <h4>{playerOne.name} {flag1}</h4>
                        </div>
                    }
                    {((playerTwo.name === "Player 2" || playerTwo.name === "")) ? null :
                        !chosenAnswer ? null :
                            <div id="player2Instructions">
                                <div className="controls">
                                    <span>
                                        <h3>
                                            <img className="directions" src={leftArrow}></img> J
                                            <img className="directions" src={upArrow}></img>K
                                            <img className="directions" src={rightArrow}></img>L
                                        </h3>
                                    </span>
                                </div>
                                <h4> {playerTwo.name} {flag2}</h4>

                            </div>
                    }
                </div>
                <Animation playerOne={playerOne} playerTwo={playerTwo} playerOneInput={playerOneInput} playerTwoInput={playerTwoInput} isAnimating={isAnimating} setIsAnimating={setIsAnimating} questionNumber={questionNumber} />
                <div className="next-question">{isAnimating ? kick.play() && <Link onClick={handleClick} id="nextQuestion" to="/quiz"><div id="nextQuestionText">Next question</div></Link> : null}</div>
            </div>
        </>
    )
}

export default GameContainer;