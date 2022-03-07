import React, {useState} from 'react'
import { motion } from 'framer-motion'
import Crouch from "../images/Crouch.png"
import Football from "../images/Football.png"
import Background from "../images/Background.jpg"
import "../css/Animation.css"
import useSound from 'use-sound';
import Kick from '../sounds/Kick.wav'

function Animation({playerOne, playerTwo, playerOneInput, playerTwoInput, isAnimating, setIsAnimating, questionNumber}) {

    const [playKick] = useSound(Kick)
    const currentPlayer = (questionNumber % 2 === 0) ? "one" : "two";
    const currentGoalie = (questionNumber % 2 === 0) ? playerOne : playerTwo;
    const styles = [
        // Red
        { filter: "invert(24%) sepia(45%) saturate(6956%) hue-rotate(352deg) brightness(105%) contrast(85%)" }, 
        // Green
        { filter: "invert(67%) sepia(13%) saturate(4833%) hue-rotate(72deg) brightness(101%) contrast(81%)" },
        // Blue
        { filter: "invert(18%) sepia(75%) saturate(5707%) hue-rotate(223deg) brightness(102%) contrast(105%)" }
    ]
    const saveAnimations = [
        // Right
        <div className="keeper-container"><motion.img className='crouch'src={Crouch}style={styles[currentGoalie.filter]}animate={{x: isAnimating ? 200 : 0,rotate: isAnimating ? 90:0,}}transition={{type: 'spring',duration: 0.8}}/></div>,
        // Middle
        <div className="keeper-container"><motion.img className='crouch'src={Crouch}style={styles[currentGoalie.filter]}animate={{y: isAnimating ? 10 : 0,}}transition={{type: 'spring',duration: 0.8}}/></div>,
        // Left
        <div className="keeper-container"><motion.img className='crouch'src={Crouch}style={styles[currentGoalie.filter]}animate={{x: isAnimating ? -200 : 0,rotate: isAnimating ? -90:0,}}transition={{type: 'spring',duration: 0.8}}/></div>
    ]

    const shootAnimations = [
        // Right
        <div className="ball-container"><motion.img className="ball"src={Football}animate={{y: isAnimating ? 0 : 230,x: isAnimating ? 220 : 0,rotate: isAnimating ? 360 : 0,scale: isAnimating ? 0.15 : 0.25,}}transition={{type: "spring",stiffness: 40}}/></div>,
        // Middle
        <div className="ball-container"><motion.img className="ball"src={Football}animate={{y: isAnimating ? 0 : 230,rotate: isAnimating ? 360 : 0,scale: isAnimating ? 0.15 : 0.25,}}transition={{type: "spring",stiffness: 40}}/></div>,
        // Left
        <div className="ball-container"><motion.img className="ball"src={Football}animate={{y: isAnimating ? 0 : 230,x: isAnimating ? -220 : 0,rotate: isAnimating ? 360 : 0,scale: isAnimating ? 0.15 : 0.25,}}transition={{type: "spring",stiffness: 40}}/></div>
    ]

    const checkInput = (input, array) => {
        if (input === "d" || input === "l") {
            return (array[0])
        } else if (input === "s" || input === "k"){
            return (array[1])
        } else {
            return (array[2])
        }
    }

    const playSaveAnimation = () => {
        if (currentPlayer === "one") {
            return checkInput(playerOneInput.slice(-1)[0], saveAnimations)
        } else {
            return checkInput(playerTwoInput.slice(-1)[0], saveAnimations)
        }
    }

    const playShootAnimation = () => {
        if (currentPlayer !== "one") {
            return checkInput(playerOneInput.slice(-1)[0], shootAnimations)
        } else {
            return checkInput(playerTwoInput.slice(-1)[0], shootAnimations)
        }
    }

    return(
        <>
        <div className='bigger-background'>
            <div className="background-image">
                <div className="background-container">
                    {playSaveAnimation()}
                    {playShootAnimation()}
                </div>
            </div>
        </div>    
        </>
    )
}

export default Animation;