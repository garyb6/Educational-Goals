import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Request from '../helpers/request';
import CreateOptions from './CreateOptions';
import "./../css/Create.css"

const CreateQuestion = ({newQuiz, questionNumber, setQuestionNumber}) => {

    const [newQuestion, setNewQuestion] = useState({
        ask: "",
        quiz: {id: newQuiz.id}
    })
    
    const handleChange = (event) => {
        let temp = {...newQuestion};
        temp.ask = event.target.value
        setNewQuestion(temp)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        handlePost(newQuestion)
    }
    
    const handlePost = (question) => {
        const request = new Request();
        request.post("http://localhost:8080/questions", question)
        .then((res) => res.json())
        .then((data) => setNewQuestion(data))
    }


    return (
        <>
        {newQuestion.hasOwnProperty("id") ?
        <div className='questionBox'> 
        <h4>{newQuestion.ask}</h4>
        <CreateOptions newQuestion={newQuestion} setNewQuestion={setNewQuestion} newQuiz={newQuiz} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
        </div>
        :
        <div className='questionBox'>
        <h4>Enter question {questionNumber} below!</h4>
        <form onSubmit={handleSubmit}>
        <textarea id="questionName" type="text" required onChange={handleChange}/>
        {/* <input id="questionName" type="text" required onChange={handleChange}/> */}
        <button className="createButton" type='submit'>Create question</button>
        </form>
        </div>
        }
        </>
    )
}

export default CreateQuestion;