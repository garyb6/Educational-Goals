import React, {useState} from 'react'
import { motion } from 'framer-motion'
import Jump_left from "../images/Jump_left.png"
import Football from "../images/Football.png"

function Animation() {

    const [isAnimating, setIsAnimating] = useState(false)


    return(
        <>
            <div className="crouch-container">
                 <motion.img className='crouch'
                src={Jump_left}


                animate={{
                    // y: isAnimating ? 300 : 0,
                    x: isAnimating ? 0 : "50vw",
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
                        x: isAnimating ? 0 : 200,
                        // opacity: isAnimating ? 1 : 0.5,
                        rotate: isAnimating ? 360 : 0,
                        scale: isAnimating ? -0.5 : -0.2,
                    }}
                    initial={{
                        // opacity:0.1
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 60
                    }}
                    onClick={() => setIsAnimating(!isAnimating)}
                >
                </motion.img>
            </div>
        </>
    )

}

export default Animation;