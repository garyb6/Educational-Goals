import React from 'react';


const Game = () => {

  const playerOneInput = []
  const playerTwoInput = []

  const playerDirection = (event) => {

    if (event.key === "d"){

    playerOneInput.push("d")

    console.log('p1 right', event.keyCode);
    }

    else if (event.key === "s"){

      playerOneInput.push("s")
      console.log('p1 middle', event.keyCode)
    }

    else if (event.key === "a"){
      playerOneInput.push("a")
      console.log('p1 left', event.keyCode)
    }

    else if (event.key === "l"){
      playerTwoInput.push("l")
      console.log('p2 right', event.keyCode);
  }

  else if (event.key === "k"){
    playerTwoInput.push("k")
    console.log('p2 middle', event.keyCode)
  }

  else if (event.key === "j"){
    playerTwoInput.push("j")
    console.log('p2 left', event.keyCode)
  }
  };


  React.useEffect(() => {

    window.addEventListener('keydown', playerDirection);



    return () => {

      window.removeEventListener('keydown', playerDirection);


    };

    setTimeout(checkGoal, 5000)

  }, []);

  const checkGoal = () => {
    
    const combinedInput = playerOneInput.slice(-1)[0].concat(playerTwoInput.slice(-1)[0])

    
    if (combinedInput == ["d", "l"]){
      return console.log("SAVE")
    } 
    
    else if (combinedInput == ["s","k"]){
      return console.log("SAVE")
    }

    else if (combinedInput == ["a", "j"]){
      return console.log("SAVE")
    }

    else {
      return console.log("GOOOOOOOOOL")
    }

  }
};