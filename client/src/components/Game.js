const Game = () => {

    const playerOneInput = []
    const playerTwoInput = []
  
    const playerDirection = (event) => {
  
      if (event.key === "d"){
  
      playerOneInput.push("d")
  
      console.log('shoot right', event.keyCode);
      }
  
      else if (event.key === "s"){
  
        playerOneInput.push("s")
        console.log('shoot middle', event.keyCode)
      }
  
      else if (event.key === "a"){
        playerOneInput.push("a")
        console.log('shoot left', event.keyCode)
      }
  
      else if (event.key === "l"){
        playerTwoInput.push("l")
        console.log('save right', event.keyCode);
    }
  
    else if (event.key === "k"){
      playerTwoInput.push("k")
      console.log('save middle', event.keyCode)
    }
  
    else if (event.key === "j"){
      playerTwoInput.push("j")
      console.log('save left', event.keyCode)
    }
    };
  
  
    React.useEffect(() => {
  
      window.addEventListener('keydown', playerDirection);
  
  
  
      return () => {
  
        window.removeEventListener('keydown', playerDirection);
  
      };
  
    }, []);
  
    const checkGoal = () => {
      const playerOneFinalInput = playerOneInput.slice(-1)[0]
      const playerTwoFinalInput = playerTwoInput.slice(-1)[0]
  
      if (playerOneFinalInput == ["d"] && playerTwoFinalInput == ["l"]){
        return console.log("SAVE")
      } 
      
      else if (playerOneFinalInput == ["s"] && playerTwoFinalInput == ["k"]){
        return console.log("SAVE")
      }
  
      else if (playerOneFinalInput == ["a"] && playerTwoFinalInput == ["j"]){
        return console.log("SAVE")
      }
  
      else {
        return console.log("GOOOOOOOOOL")
      }
  
    }
  
  
    return (
  
      
  
      <div className='container'>
  
        <h1>hi</h1>
  
      </div>
  
    );
  
  };
  
  
  export default Game;
  