import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScoreDisplay from '../components/ScoreDisplay';
import { motion } from 'framer-motion'
import "./../css/QuizContainer.css"
import useSound from 'use-sound';
import gameMusic from '../sounds/MOTD.mp3'
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
        <button id="back-home"><Link to="/"><div id='back-text'>Back to home</div></Link></button>
        </div>)

    }

    if (questionNumber > 10) {

        if (playerOne.score.reduce((a, b) => a + b, 0) > playerTwo.score.reduce((a, b) => a + b, 0)) {
            return (
                <>
                    <Confetti />
                    {championMusic()}
                    <div className='winner-container'><h1>{playerOne.name} is the winner!</h1></div>
                    <div className="trophy-container">
                        <motion.div className='trophy'
                            drag
                            dragConstraints={{ right: 1, left: 1, bottom: 1, top: 1 }}
                        >
                            <div className='winner-name'>{playerOne.name}</div>
                        </motion.div>
                    </div>
                </>)
        } else if (playerTwo.score > playerOne.score) {
            return (
            <>
                <Confetti/>
                    {championMusic()}
                    <div className='winner-container'><h1 className='winner-font'>{playerOne.name} is the winner!</h1>
                    <button id="back-home"><Link to="/"><div id='back-text'>Play again</div></Link></button>
                    </div>
                        <div className = "trophy-container">
                            <motion.div className='trophy'

                            drag
                            dragConstraints={{ right: 1, left: 1, bottom: 1, top: 1 }}
                        >
                            <div className='winner-name'>{playerOne.name}</div>
                        </motion.div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                {drawSound()}
                <div className = "draw">
                <h1>It's a draw!</h1> 
                <button id="back-home"><Link to="/"><div id='back-text'>Play again?</div></Link></button>
                </div>
                <div className = "handshake-container">
                            <motion.div className='handshake'
                            drag
                            dragConstraints={{ right:1,left:1,bottom:1,top: 1}}
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
                    <div id="scoreboard">
                            <ScoreDisplay playerOne = {playerOne} playerTwo = {playerTwo} questionNumber = {questionNumber}/>
                    </div>
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