package educationalgoals.educationalgoals.controllers;

import educationalgoals.educationalgoals.models.Answer;
import educationalgoals.educationalgoals.models.Option;
import educationalgoals.educationalgoals.repositories.AnswerRepository;
import educationalgoals.educationalgoals.repositories.OptionRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OptionController {

    @Autowired
    OptionRespository optionRepository;

    @GetMapping(value = "/options")
    public ResponseEntity<List<Option>> getAllOptions(){
        return new ResponseEntity<>(optionRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/options/{id}")
    public ResponseEntity getOption(@PathVariable Long id){
        return new ResponseEntity(optionRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/options")
    public ResponseEntity<Option> postOption(@RequestBody Option option){
        optionRepository.save(option);
        return new ResponseEntity<>(option, HttpStatus.CREATED);
    }
}
