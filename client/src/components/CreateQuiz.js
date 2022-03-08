import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Request from '../helpers/request';
import CreateQuestion from './CreateQuestion';
import "./../css/Create.css"
import logo from "../images/logo.jpg"

const CreateQuiz = () => {

    const [newQuiz, setNewQuiz] = useState({
        title: ""
        })

    const [questionNumber, setQuestionNumber] = useState(1)

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


    if (questionNumber <= 10){
        return (
            <>
            <div className="createBox">
                <div className="headerCreate">
                    <img className="logoQuiz" src={logo}></img>
                </div>

                {newQuiz.hasOwnProperty("id") ? 
                    <>
                    <h3>Creating the {newQuiz.title} quiz.</h3>
                    <CreateQuestion newQuiz={newQuiz} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
                    <ul>
                        <li>Each quiz has 10 questions</li>
                        <li>Each question has 4 answers</li>
                        <li>Mark answers as correct or incorrect - there can be more than one correct answer</li>
                    </ul>
                    </>
                    :
                    <>
                    <h4>Enter a quiz name below!</h4>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="quizName">Quiz Name:</label>
                        <input id="quizName" type="text" required onChange={handleChange}/>
                        <button className="createButton" type='submit'>Create quiz</button>
                    </form>
                    <ul>
                        <li>Enter a quiz name first</li>
                        <li>Each quiz has 10 questions</li>
                        <li>Each question has 4 answers</li>
                        <li>Mark answers as correct or incorrect - there can be more than one correct answer</li>
                    </ul>
                    </>
                } 

            </div>
            </>
        )
    } else {
        return (
        <>
        <h3>Quiz created!</h3>
        <Link to="/">Back to home.</Link>
        </>
        )
}

}

export default CreateQuiz;