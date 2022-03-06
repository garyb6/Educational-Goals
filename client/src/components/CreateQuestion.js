import React, {useState} from 'react';
import Request from '../helpers/request';
import CreateOptions from './CreateOptions';

const CreateQuestion = ({newQuiz}) => {

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
        <h6>Create a question</h6>
        <form onSubmit={handleSubmit}>
        <label htmlFor="questionName">Question:</label>
        <input id="questionName" type="text" onChange={handleChange}/>
        <button type='submit'>Create question</button>
        </form>

        {newQuestion.hasOwnProperty("id") ? 
        <>
        <CreateOptions newQuestion={newQuestion}/>
        <CreateOptions newQuestion={newQuestion}/> 
        <CreateOptions newQuestion={newQuestion}/> 
        <CreateOptions newQuestion={newQuestion}/>
        </>  
        : <h3>Enter a question above!</h3>}
        </>
    )
}

export default CreateQuestion;