import React from 'react';

const ScoreDisplay = ({playerOne, playerTwo, questionNumber}) => {

    const currentPlayer = (questionNumber % 2 === 0) ? playerTwo.name : playerOne.name;

    return (
        <>
        <div>
            <h2>This is playerOne score</h2>
        </div>
        <div>
        <h2>It is {currentPlayer}'s go</h2>
        </div>
        <div>
        <h2>This is playerTwo score</h2>
        </div>
        </>
    )

}

export default ScoreDisplay;