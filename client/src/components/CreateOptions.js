import React, { useState } from "react";
import Request from "../helpers/request";

const CreateOptions = ({ newQuestion, setNewQuestion, newQuiz, questionNumber, setQuestionNumber }) => {

    const [newOption, setNewOption] = useState([
        {
            expression: "",
            question: { id: newQuestion.id },
            correct: false
        },
        {
            expression: "",
            question: { id: newQuestion.id },
            correct: false
        },
        {
            expression: "",
            question: { id: newQuestion.id },
            correct: false
        },
        {
            expression: "",
            question: { id: newQuestion.id },
            correct: false
        }
    ])

    const handleChange = (event) => {
        let temp = newOption;
        if (event.target.tagName === 'INPUT') {
            temp[parseInt((event.target.id).charAt(0))].expression = event.target.value
        } else {
            temp[parseInt((event.target.id).charAt(0))].correct = event.target.value
        }
        setNewOption(temp)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handlePost(newOption)
    }

    const handlePost = (newOption) => {
        const request = new Request();
        Promise.all(newOption.map(option => (
            request.post("http://localhost:8080/options", option))))
            .then(() => setNewQuestion(
                {
                    ask: "",
                    quiz: { id: newQuiz.id }
                }
            ))
            .then(() => setQuestionNumber(questionNumber + 1))
    }

    return (
        <>
            <form className="optionsForm" onSubmit={handleSubmit}>
                <div className="optionsFormBoxes">
                    <label id="optionLabel" htmlFor="0option">1: </label>
                    <input id="0option" type="text" required onChange={handleChange} />
                    <select id="0select" onChange={handleChange}>
                        <option value={false}>Not correct</option>
                        <option value={true}>Correct</option>
                    </select>
                    <label id="optionLabel" htmlFor="1option">3: </label>
                    <input id="1option" type="text" required onChange={handleChange} />
                    <select id="1select" onChange={handleChange}>
                        <option value={false}>Not correct</option>
                        <option value={true}>Correct</option>
                    </select>
                </div>
                <div className="optionsFormBoxes">
                    <label id="optionLabel" htmlFor="2option">2: </label>
                    <input id="2option" type="text" required onChange={handleChange} />
                    <select id="2select" onChange={handleChange}>
                        <option value={false}>Not correct</option>
                        <option value={true}>Correct</option>
                    </select>
                    <label id="optionLabel" htmlFor="3option">4: </label>
                    <input id="3option" type="text" required onChange={handleChange} />
                    <select id="3select" onChange={handleChange}>
                        <option value={false}>Not correct</option>
                        <option value={true}>Correct</option>
                    </select>
                </div>
                <button className="createOptions" type='submit'>Create options</button>
            </form>
        </>
    )

}

export default CreateOptions