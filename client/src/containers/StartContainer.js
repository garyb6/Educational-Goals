import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { styles } from '../data/Styles'
import Request from '../helpers/request';
import "./../css/StartContainer.css"
import "./../css/Animation.css"
import Stand from "./../images/Stand.png";
import logo from "../images/logo.jpg"
import gameMusic from '../sounds/MOTD.mp3'


const StartContainer = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo, quizzes, setQuizzes, setSelectedQuiz, setChosenQuiz}) => {

    useEffect(() => {
        requestAll()
    }, [])

    const requestAll = function () {
        const request = new Request();
        request.get('http://localhost:8080/quizzes')
            .then((data) => setQuizzes(data))
    }

    const handleChangePlayerOneName = (event) => {
        const tempPlayer = playerOne;
        tempPlayer.name = event.target.value
        setPlayerOne(tempPlayer)
    }

    const handleChangePlayerOneColour = (event) => {
        const tempPlayer = playerOne;
        tempPlayer.filter = event
        setPlayerOne(tempPlayer)
    }

    const handleChangePlayerTwoName = (event) => {
        const tempPlayer = playerTwo;
        tempPlayer.name = event.target.value
        setPlayerTwo(tempPlayer)
    }

    const handleChangePlayerTwoColour = (event) => {
        const tempPlayer = playerTwo;
        tempPlayer.filter = event
        setPlayerTwo(tempPlayer)
    }

    const handleChangeQuizChoice = (event) => {
        setSelectedQuiz(parseInt(event.target.value));
    }

    const carouselComponent = () => {
        return (
            <div className="carousel-wrapper">
                <Carousel infiniteLoop useKeyboardArrows showArrows showIndicators>
                    <div>
                        <img src="./../images/Stand.png" />
                    </div>
                    <div>
                        <img src="./../images/Stand.png" />
                    </div>
                    <div>
                        <img src="./../images/Stand.png" />
                    </div>
                </Carousel>
            </div>
        );
    }

    const listOfQuizzes = quizzes.map((quiz, index) => {
        if (quiz.questions.length >= 10){
        return <option key={index} value={quiz.id}> {quiz.title} </option>
        }
    });

    const carouselItems = styles.map((item, index) => {
        return <Carousel.Item key={index}>
        <img
            className="d-block"
            src={Stand}
            alt={item.colour}
            style={item.filter}
        />
        <Carousel.Caption>
            <h5 className="colourPickText">Pick the {item.colour} Player</h5>
        </Carousel.Caption>
    </Carousel.Item>
    })

    return (
        <>
            <div className="startContainer">
            <img id="logoStart" src={logo}></img>
                <div className="players">
                    <div className="player1Select">
                        <label className="playerLabel" htmlFor="player1Box">Player 1:</label>
                        <input id="player1Box" type="text" onChange={handleChangePlayerOneName} placeholder="Type in your name"/>
                        <div className="colourSelector">
                            <Carousel interval = {null} onSelect={handleChangePlayerOneColour}>
                                {carouselItems}
                            </Carousel>
                        </div>
                    </div>
                    <div className="player2Select">
                        <label className="playerLabel" htmlFor="player2Box">Player 2:</label>
                        <input id="player2Box" type="text" onChange={handleChangePlayerTwoName} placeholder="Type in your name"/>
                        <div className="colourSelector">
                            <Carousel interval = {null} onSelect={handleChangePlayerTwoColour}>
                                {carouselItems}
                            </Carousel>
                        </div>
                    </div>


                </div>
                <div className="quizSelector">
                    <form>
                        <label className="quizSelectText"> Choose a Quiz: </label>
                        <select defaultValue="" onChange={handleChangeQuizChoice} required>
                            <option value="" disabled ></option>
                            {listOfQuizzes}
                        </select>
                    </form>
                    <Link to="/quiz" id="quizStartButton"><div id="quizStartButtonText">Start</div></Link>
                </div>
            </div>
            <div>{carouselComponent}</div>
            <div id="upperRight">
            <p>Listen to a tune while you setup!</p>
            <audio id="controller" controls src={gameMusic} ></audio>
            </div>
        </>
    )
}

export default StartContainer;