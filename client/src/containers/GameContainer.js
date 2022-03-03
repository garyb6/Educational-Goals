import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Game from '../components/Game';


const GameContainer = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo, questionNumber, setQuestionNumber }) => {


    const playerOneInput = ["a"]
    const playerTwoInput = ["l"]
  
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
      console.log(combinedInput);
  
      if (combinedInput == ["dl"]) {
          return console.log("SAVE")
      } else if (combinedInput == ["sk"]) {
          return console.log("SAVE")
      } else if (combinedInput == ["aj"]) {
          return console.log("SAVE")
      } else {
          if (questionNumber % 2 !== 0) {
          let tempPlayer = playerOne
          tempPlayer.score += 1
          setPlayerOne(tempPlayer)
      } else {
          let tempPlayer = playerTwo
          tempPlayer.score += 1
          setPlayerTwo(tempPlayer)
      }
          return console.log("GOOOOOOOOOAL")
      }
    }

    const timer = setTimeout(checkGoal, 5000)

    const handleClick = () => {
        setQuestionNumber(questionNumber + 1)
        clearTimeout(timer)
    }

    return (
        <>
            <h2> P1 {playerOne.name} {playerOne.score} </h2>
            <div id="playerAllocation">
                        {(questionNumber % 2 !== 0) ? <h4>{playerOne.name}'s Turn</h4> : <h4>{playerTwo.name}'s Turn</h4>}
                    </div>
            <h2> P2 {playerTwo.name} {playerTwo.score} </h2>
            
            <Link to="/quiz" onClick={handleClick}>Next question</Link>
        </>
    )

}

export default GameContainer;