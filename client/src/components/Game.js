import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import React from 'react';


const Game = ({ setPlayerOne, setPlayerTwo, questionNumber, playerOne, playerTwo}) => {

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


  React.useEffect(() => {
    window.addEventListener('keydown', playerDirection);
    setTimeout(checkGoal, 5000)

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
  return (null);
};

export default Game;