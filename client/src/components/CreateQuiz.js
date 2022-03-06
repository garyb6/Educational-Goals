import React, {useState} from 'react';
import Request from '../helpers/request';

const CreateQuiz = () => {

    const [newQuiz, setNewQuiz] = useState({
        title: ""
        })

    const handleSubmit = (event) => {
        event.preventDefault();
        handlePost(newQuiz)
    }

    const handleChange = (event) => {
        let temp = {...newQuiz};
        temp.title = event.target.value
        setNewQuiz(temp)
    }

    const handlePost = function(quiz){
        const request = new Request();
        request.post("http://localhost:8080/quizzes", quiz)
        .then((res) => res.json())
        .then((data) => setNewQuiz(data))
      }


    return (
        <>
        <h1>This is the create quiz</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="quizName">Quiz Name:</label>
        <input id="quizName" type="text" onChange={handleChange}/>

        <button type='submit'>Save quiz</button>
        </form>

        {/* <label htmlFor="questionOne">Question 1:</label>
        <input id="questionOne" type="text"/><br/><br/>

        <label htmlFor="questionTwo">Question 2:</label>
        <input id="questionTwo" type="text"/><br/><br/>

        <label htmlFor="questionThree">Question 3:</label>
        <input id="questionThree" type="text"/><br/><br/>

        <label htmlFor="questionFour">Question 4:</label>
        <input id="questionFour" type="text"/><br/><br/>

        <label htmlFor="questionFive">Question 5:</label>
        <input id="questionFive" type="text"/><br/><br/>

        <label htmlFor="questionSix">Question 6:</label>
        <input id="questionSix" type="text"/><br/><br/>

        <label htmlFor="questionSeven">Question 7:</label>
        <input id="questionSeven" type="text"/><br/><br/>

        <label htmlFor="questionEight">Question 8:</label>
        <input id="questionEight" type="text"/><br/><br/>

        <label htmlFor="questionNine">Question 9:</label>
        <input id="questionNine" type="text"/><br/><br/>

        <label htmlFor="questionTen">Question 10:</label>
        <input id="questionTen" type="text"/><br/><br/> */}
        </>
    )

}

export default CreateQuiz;