import React from 'react';

const ScoreDisplay = ({playerOne, playerTwo, questionNumber}) => {

    const currentPlayer = (questionNumber % 2 === 0) ? playerTwo.name : playerOne.name;

    const playerScore = (player) => {

        return (
            player.score.map((value) => {
                if(value === 'x'){
                    return <i className="shotNotTaken" class="far fa-circle"/>
                } else if (value === 0) {
                    return <i className="shotNoPoint" class="fas fa-futbol"/>
                } else {
                    return <i className="shotPointScore" class="fas fa-futbol"/>
                }
            }) 
        )
    }

    return (
        <>
        <div className='playerScore'>
            {playerOne.name} {playerScore(playerOne)}
        </div>
        <div className='currentPlayer'>
        <h2>It is {currentPlayer}'s go</h2>
        </div>
        <div className='playerScore'>
            {playerTwo.name} {playerScore(playerTwo)}
        </div>
        </>
    )
}

export default ScoreDisplay;