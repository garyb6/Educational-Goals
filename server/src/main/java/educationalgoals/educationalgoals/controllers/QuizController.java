package educationalgoals.educationalgoals.controllers;

import educationalgoals.educationalgoals.models.Quiz;
import educationalgoals.educationalgoals.repositories.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class QuizController {

    @Autowired
    QuizRepository quizRepository;

    @GetMapping(value = "/quizzes")
    public ResponseEntity<List<Quiz>> getAllQuizzes(){
        return new ResponseEntity<>(quizRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/quizzes/{id}")
    public ResponseEntity getQuiz(@PathVariable Long id){
        return new ResponseEntity(quizRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/quizzes")
    public ResponseEntity<Quiz> postQuiz(@RequestBody Quiz quiz){
        quizRepository.save(quiz);
        return new ResponseEntity<>(quiz, HttpStatus.CREATED);
    }
}
