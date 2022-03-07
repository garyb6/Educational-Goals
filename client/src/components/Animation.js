import React, {useState} from 'react'
import { motion } from 'framer-motion'
import Crouch from "../images/Crouch.png"
import Football from "../images/Football.png"
import Background from "../images/Background.jpg"
import "../css/Animation.css"
import useSound from 'use-sound';
import Kick from '../sounds/Kick.wav'

function Animation({playerOneInput, playerTwoInput, isAnimating, setIsAnimating, questionNumber}) {

    const [playKick] = useSound(Kick)
    const currentPlayer = (questionNumber % 2 === 0) ? "one" : "two";

    const playSaveAnimation = () => {
    if (currentPlayer === "one") {
        if (playerOneInput.slice(-1)[0] === "d") {
            return (<div className="keeper-container">
                <motion.img className='crouch'
                src={Crouch}
                animate={{
                    x: isAnimating ? 200 : 0,
                    rotate: isAnimating ? 90:0,
                }}
                transition={{
                    type: 'spring',
                    duration: 0.8
                }}/>
            </div>)
        } else if (playerOneInput.slice(-1)[0] === "s"){
            return (<div className="keeper-container">
            <motion.img className='crouch'
            src={Crouch}
            animate={{
                y: isAnimating ? 10 : 0,
            }}
            transition={{
                type: 'spring',
                duration: 0.8
            }}/>
        </div>)
        } else {
            return (<div className="keeper-container">
                        <motion.img className='crouch'
                        src={Crouch}
                        animate={{
                            x: isAnimating ? -200 : 0,
                            rotate: isAnimating ? -90:0,
                        }}
                        transition={{
                            type: 'spring',
                        duration: 0.8
                        }}/>
            </div>)
        }
    } else {
        if (playerTwoInput.slice(-1)[0] === "l") {
            return (<div className="keeper-container">
                <motion.img className='crouch'
                src={Crouch}
                animate={{
                    x: isAnimating ? 200 : 0,
                    rotate: isAnimating ? 90:0,
                }}
                transition={{
                    type: 'spring',
                    duration: 0.8
                }}/>
            </div>)
        } else if (playerTwoInput.slice(-1)[0] === "k"){
            return (<div className="keeper-container">
            <motion.img className='crouch'
            src={Crouch}
            animate={{
                y: isAnimating ? 10 : 0,
            }}
            transition={{
                type: 'spring',
                duration: 0.8
            }}/>
        </div>)
        } else {
            return (<div className="keeper-container">
                        <motion.img className='crouch'
                        src={Crouch}
                        animate={{
                            x: isAnimating ? -200 : 0,
                            rotate: isAnimating ? -90:0,
                        }}
                        transition={{
                            type: 'spring',
                        duration: 0.8
                        }}/>
            </div>)
        }
    }
    }

    const playShootAnimation = () => {
        if (currentPlayer !== "one") {
            if (playerOneInput.slice(-1)[0] === "d") {
                return (<div className="ball-container">
                <motion.img
                    className="ball"
                    src={Football}
                    animate={{
                        y: isAnimating ? 0 : 230,
                        x: isAnimating ? 220 : 0,
                        rotate: isAnimating ? 360 : 0,
                        scale: isAnimating ? 0.15 : 0.25,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 40
                    }}
                    // onClick={() => setIsAnimating(!isAnimating)}
                />
            </div>)
            } else if (playerOneInput.slice(-1)[0] === "s"){
                return (<div className="ball-container">
                <motion.img
                    className="ball"
                    src={Football}
                    animate={{
                        y: isAnimating ? 0 : 230,
                        // x: isAnimating ? -220 : 0,
                        rotate: isAnimating ? 360 : 0,
                        scale: isAnimating ? 0.15 : 0.25,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 40
                    }}
                    // onClick={() => setIsAnimating(!isAnimating)} {...playKick()}
                />
            </div>)
            } else {
                return (<div className="ball-container">
                <motion.img
                    className="ball"
                    src={Football}
                    animate={{
                        y: isAnimating ? 0 : 230,
                        x: isAnimating ? -220 : 0,
                        rotate: isAnimating ? 360 : 0,
                        scale: isAnimating ? 0.15 : 0.25,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 40
                    }}
                    // onClick={() => setIsAnimating(!isAnimating)}
                />
            </div>)
            }
        } else {
            if (playerTwoInput.slice(-1)[0] === "l") {
                return (<div className="ball-container">
                <motion.img
                    className="ball"
                    src={Football}
                    animate={{
                        y: isAnimating ? 0 : 230,
                        x: isAnimating ? 220 : 0,
                        rotate: isAnimating ? 360 : 0,
                        scale: isAnimating ? 0.15 : 0.25,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 40
                    }}
                    // onClick={() => setIsAnimating(!isAnimating)}
                />
            </div>)
            } else if (playerTwoInput.slice(-1)[0] === "k"){
                return (<div className="ball-container">
                <motion.img
                    className="ball"
                    src={Football}
                    animate={{
                        y: isAnimating ? 0 : 230,
                        // x: isAnimating ? -220 : 0,
                        rotate: isAnimating ? 360 : 0,
                        scale: isAnimating ? 0.15 : 0.25,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 40
                    }}
                    // onClick={() => setIsAnimating(!isAnimating)} {...playKick()}
                />
            </div>)
            } else {
                return (<div className="ball-container">
                <motion.img
                    className="ball"
                    src={Football}
                    animate={{
                        y: isAnimating ? 0 : 230,
                        x: isAnimating ? -220 : 0,
                        rotate: isAnimating ? 360 : 0,
                        scale: isAnimating ? 0.15 : 0.25,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 40
                    }}
                    // onClick={() => setIsAnimating(!isAnimating)}
                />
            </div>)
            }
        }
    
        }

    return(
        <>
        <div className='bigger-background'>
            <div className="background-image">

            <div className="background-container">
                {playSaveAnimation()}
                {playShootAnimation()}
                    {/* dive right */}
                    {/* <div className="keeper-container">
                        <motion.img className='crouch'
                        src={Crouch}
                        animate={{
                            x: isAnimating ? 200 : 0,
                            rotate: isAnimating ? 90:0,
                        }}
                        transition={{
                            type: 'spring',
                            duration: 0.8
                        }}

                        onClick={() => setIsAnimating(!isAnimating)}
                        >

                        </motion.img>
                    </div> */}

                    {/* dive left  */}
                    {/* <div className="keeper-container">
                        <motion.img className='crouch'
                        src={Crouch}
                        animate={{
                            x: isAnimating ? -200 : 0,
                            rotate: isAnimating ? -90:0,
                        }}
                        transition={{
                            type: 'spring',
                        duration: 0.8
                        }}

                        onClick={() => setIsAnimating(!isAnimating)}
                        >

                        </motion.img>
                    </div>  */}

                    {/* save middle */}
                    {/* <div className="keeper-container">
                        <motion.img className='crouch'
                        src={Crouch}
                        animate={{
                            y: isAnimating ? 10 : 0,
                        }}
                        transition={{
                            type: 'spring',
                            duration: 0.8
                        }}

                        onClick={() => setIsAnimating(!isAnimating)}
                        >

                        </motion.img>
                    </div> */}
            
                    {/* shoot right */}
                    {/* <div className="ball-container">
                        <motion.img
                            className="ball"
                            src={Football}
                            animate={{
                                y: isAnimating ? 0 : 230,
                                x: isAnimating ? 220 : 0,
                                rotate: isAnimating ? 360 : 0,
                                scale: isAnimating ? 0.15 : 0.25,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 40
                            }}
                            onClick={() => setIsAnimating(!isAnimating)}
                        >
                        </motion.img>
                    </div> */}

                        {/* shoot left */}
                        {/* <div className="ball-container">
                        <motion.img
                            className="ball"
                            src={Football}
                            animate={{
                                y: isAnimating ? 0 : 230,
                                x: isAnimating ? -220 : 0,
                                rotate: isAnimating ? 360 : 0,
                                scale: isAnimating ? 0.15 : 0.25,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 40
                            }}
                            onClick={() => setIsAnimating(!isAnimating)}
                        >
                        </motion.img>
                    </div> */}

                        {/* shoot middle score */}
                        {/* <div className="ball-container">
                        <motion.img
                            className="ball"
                            src={Football}
                            animate={{
                                y: isAnimating ? 0 : 230,
                                // x: isAnimating ? -220 : 0,
                                rotate: isAnimating ? 360 : 0,
                                scale: isAnimating ? 0.15 : 0.25,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 40
                            }}
                            onClick={() => setIsAnimating(!isAnimating)} {...playKick()}
                        >
                        </motion.img>
                    </div> */}

                    
                </div>
            </div>
        </div>    

        </>
    )

}

export default Animation;