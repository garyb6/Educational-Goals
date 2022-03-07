import React, {useState} from 'react'
import { motion } from 'framer-motion'
import Jump_left from "../images/Jump_left.png"
import Football from "../images/Football.png"
import "../css/Animation.css"
import useSound from 'use-sound';
import Kick from '../sounds/Kick.wav'

function Animation() {

    const [isAnimating, setIsAnimating] = useState(false)
    const [playKick] = useSound(Kick)

    return(
        <>

            <div className="background-container">
            <div className="crouch-container">
                <motion.img className='crouch'
                src={Jump_left}
                animate={{
                    // y: isAnimating ? 300 : 0,
                    x: isAnimating ? "50vw" : 0,
                    // opacity: isAnimating ? 1 : 0.5,
                    // rotate: isAnimating ? 90:180,
                }}
                transition={{
                    type: 'spring',
                    duration: 0.8
                }}
                onClick={() => setIsAnimating(!isAnimating)}
                >
                </motion.img>
            </div>
            <div className="ball-container">
                <motion.img
                    className="ball"
                    src={Football}
                    animate={{
                        y: isAnimating ? 300 : 0,
                        x: isAnimating ? 400 : 0,
                        // opacity: isAnimating ? 1 : 0.5,
                        rotate: isAnimating ? 360 : 0,
                        scale: isAnimating ? 0.25 : 0.1,
                    }}
                    initial={{
                        // opacity:0.1
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 60
                    }}
                    onClick={() => {setIsAnimating(!isAnimating); playKick()}}
                >
                </motion.img>
            </div>
            </div>
        </>
    )

}

export default Animation;