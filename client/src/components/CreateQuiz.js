import React, {useState} from 'react';
import Request from '../helpers/request';
import CreateQuestion from './CreateQuestion';

const CreateQuiz = () => {

    const [newQuiz, setNewQuiz] = useState({
        title: ""
        })

    const handleChange = (event) => {
        let temp = {...newQuiz};
        temp.title = event.target.value
        setNewQuiz(temp)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handlePost(newQuiz)
    }

    const handlePost = (quiz) => {
        const request = new Request();
        request.post("http://localhost:8080/quizzes", quiz)
        .then((res) => res.json())
        .then((data) => setNewQuiz(data))
      }


    return (
        <>
        <h1>This is the create quiz</h1>

        {newQuiz.hasOwnProperty("id") ? 
        <h4>Creating the {newQuiz.title} quiz</h4>
        :
        <form onSubmit={handleSubmit}>
        <label htmlFor="quizName">Quiz Name:</label>
        <input id="quizName" type="text" onChange={handleChange}/>
        <button type='submit'>Create quiz</button>
        </form>
        }

        {newQuiz.hasOwnProperty("id") ? 
        <CreateQuestion newQuiz={newQuiz}/> 
        : <h3>Enter a quiz name above!</h3>}
        </>
    )

}

export default CreateQuiz;