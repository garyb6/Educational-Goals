//package educationalgoals.educationalgoals.controllers;
//
//import educationalgoals.educationalgoals.models.Answer;
//import educationalgoals.educationalgoals.repositories.AnswerRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//public class AnswerController {
//
//    @Autowired
//    AnswerRepository answerRepository;
//
//    @GetMapping(value = "/answers")
//    public ResponseEntity<List<Answer>> getAllAnswers(){
//        return new ResponseEntity<>(answerRepository.findAll(), HttpStatus.OK);
//    }
//
//    @GetMapping(value = "/answers/{id}")
//    public ResponseEntity getAnswer(@PathVariable Long id){
//        return new ResponseEntity(answerRepository.findById(id), HttpStatus.OK);
//    }
//
//    @PostMapping(value = "/answers")
//    public ResponseEntity<Answer> postAnswer(@RequestBody Answer answer){
//        answerRepository.save(answer);
//        return new ResponseEntity<>(answer, HttpStatus.CREATED);
//    }
//}
