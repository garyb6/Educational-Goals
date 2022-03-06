import React, {useState} from 'react'
import { motion } from 'framer-motion'
import Crouch from "../images/Crouch.png"
import Football from "../images/Football.png"
import Background from "../images/Background.jpg"
import "../css/Animation.css"

function Animation() {

    const [isAnimating, setIsAnimating] = useState(false)


    return(
        <>
        <div className='bigger-background'>
            <div className="background-image">
                 {/* <img className='background' */}
                {/* src={Background}/> */}

       

            {/* <div className="background-container"> */}
                


            

                <div className="keeper-container">
                    <motion.img className='crouch'
                    src={Crouch}
                // style={{filter: "invert(16%) sepia(96%) saturate(6992%) hue-rotate(357deg) brightness(93%) contrast(118%)"}}


                    animate={{
                        // y: isAnimating ? 300 : 0,
                        x: isAnimating ? 200 : 0,
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
                        // style={{filter: "invert(18%) sepia(75%) saturate(5707%) hue-rotate(223deg) brightness(102%) contrast(105%)"}}
                        // style={{filter: "invert(16%) sepia(96%) saturate(5992%) hue-rotate(357deg) brightness(93%) contrast(118%)"}}
                        animate={{
                            y: isAnimating ? 0 : 230,
                            x: isAnimating ? 220 : 0,
                            // opacity: isAnimating ? 1 : 0.5,
                            rotate: isAnimating ? 360 : 0,
                            scale: isAnimating ? 0.15 : 0.25,
                        }}
                        initial={{
                            // opacity:0.1
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 40
                        }}
                        onClick={() => setIsAnimating(!isAnimating)}
                    >
                    </motion.img>
                </div>
                </div>
            {/* </div> */}
        </div>    
        </>
    )

}

export default Animation;