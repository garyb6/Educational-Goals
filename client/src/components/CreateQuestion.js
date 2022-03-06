import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Request from '../helpers/request';
import CreateOptions from './CreateOptions';

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
        {newQuestion.hasOwnProperty("id") ? <h6>Creating {newQuestion.ask}</h6>
        :<form onSubmit={handleSubmit}>
        <label htmlFor="questionName">Question:</label>
        <input id="questionName" type="textarea" onChange={handleChange}/>
        <button type='submit'>Create question</button>
        </form>
        }
        {newQuestion.hasOwnProperty("id") ? 
        <CreateOptions newQuestion={newQuestion} setNewQuestion={setNewQuestion} newQuiz={newQuiz} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
        : <h3>Enter question {questionNumber} above!</h3>
        }
        </>
    )
}

export default CreateQuestion;