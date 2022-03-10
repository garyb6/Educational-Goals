import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScoreDisplay from '../components/ScoreDisplay';
import { motion } from 'framer-motion'
import "./../css/QuizContainer.css"
import useSound from 'use-sound';
import whistle from '../sounds/Whistle.wav'
import Champions_league from '../sounds/Champions_league.mp3'
import Draw from '../sounds/Draw.mp3'
import Request from '../helpers/request';
import Confetti from 'react-confetti'

const QuizContainer = ({ playerOne, playerTwo, selectedQuiz, chosenQuiz, setChosenQuiz, questionNumber, setQuestionNumber, setChosenAnswer }) => {

    const [blowWhistle] = useSound(whistle)
    const [championMusic] = useSound(Champions_league)
    const [drawSound] = useSound(Draw)

    useEffect(() => { requestQuiz(selectedQuiz) }, [])

    const requestQuiz = function (id) {
        const request = new Request();
        request.get(`http://localhost:8080/quizzes/${id}`)
            .then((data) => setChosenQuiz(data))
    }

    if (chosenQuiz === null) {
        return (
        <div className = "not-found">
        <h2 className='not-loaded'>Quiz not loaded yet</h2> 
        <h4 className='please-wait'>Please wait or return to home page</h4>
        <Link className="not-loaded-button not-loaded-home" to="/"><div id="nextQuestionText">Home</div></Link>
        </div>)
    }

    const playerVictory = (player) => {
        return (
            <>
                <Confetti />
                {championMusic()}
                <div className='winner-container'><h1>{player.name} is the winner!</h1></div>
                <div className="trophy-container">
                    <motion.div className='trophy'
                        drag
                        dragConstraints={{ right: 1, left: 1, bottom: 1, top: 1 }}
                    >
                        <div className='winner-name'>{player.name}</div>
                    </motion.div>
                </div>
                <a href='/' className="winner-home winner-text">Play again?</a>
            </>)
    }

    if (questionNumber > 10) {

        if (playerTwo.name === "Player 2" || playerTwo.name === ""){
            return <>
                {playerVictory(playerOne)}
                <h2>You scored {(playerOne.score.reduce((a, b) => a + b, 0) + playerTwo.score.reduce((a, b) => a + b, 0))} out of 10 goals!</h2>
                </>
        }

        if (playerOne.score > playerTwo.score) {
            return playerVictory(playerOne)
        } else if (playerTwo.score > playerOne.score) {
            return playerVictory(playerTwo)
        } else {
            return (
                <>
                {drawSound()}
                <div className = "draw">
                <h1>It's a draw!</h1> 
                <a href='/' className="back-home back-text">Play again?</a>
                </div>
                <div className = "handshake-container">
                            <motion.div className='handshake'
                            drag
                            dragConstraints={{ right: 1, left: 1, bottom: 1, top: 1 }}
                        >
                        </motion.div>
                    </div>
                </>)
        }
    }

    const handleClick = (number) => {
        console.log("This is the answer we picked", chosenQuiz.questions[questionNumber - 1].options[number].correct)
        console.log("this is our number", number)
        blowWhistle()
        setChosenAnswer(chosenQuiz.questions[questionNumber - 1].options[number].correct === true)
    }


    return (
        <>
            <div id="quizContainer">
                <div id="whiteboard">
                        <ScoreDisplay playerOne={playerOne} playerTwo={playerTwo} questionNumber={questionNumber} />
                    <div id="quizBoard">
                        <div className="Q">
                            <h2>{chosenQuiz.questions[questionNumber - 1].ask}</h2>
                        </div>
                        <Link className="A1 answer" onClick={() => handleClick(0)} to="/game" style={{ textDecoration: 'none' }}><div>{chosenQuiz.questions[questionNumber - 1].options[0].expression}</div></Link>
                        <Link className="A2 answer" onClick={() => handleClick(1)} to="/game" style={{ textDecoration: 'none' }}><div>{chosenQuiz.questions[questionNumber - 1].options[1].expression}</div></Link>
                        <Link className="A3 answer" onClick={() => handleClick(2)} to="/game" style={{ textDecoration: 'none' }}><div>{chosenQuiz.questions[questionNumber - 1].options[2].expression}</div></Link>
                        <Link className="A4 answer" onClick={() => handleClick(3)} to="/game" style={{ textDecoration: 'none' }}><div>{chosenQuiz.questions[questionNumber - 1].options[3].expression}</div></Link>
                    </div>
                </div>
                <div id="penArea"></div>
            </div>
        </>
    )
}
export default QuizContainer;