package educationalgoals.educationalgoals.components;

import educationalgoals.educationalgoals.models.Answer;
import educationalgoals.educationalgoals.models.Question;
import educationalgoals.educationalgoals.models.Quiz;
import educationalgoals.educationalgoals.repositories.AnswerRepository;
import educationalgoals.educationalgoals.repositories.QuestionRepository;
import educationalgoals.educationalgoals.repositories.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    QuizRepository quizRepository;

    @Autowired
    AnswerRepository answerRepository;

    @Autowired
    QuestionRepository questionRepository;

    public DataLoader() {}

    @Override
    public void run(ApplicationArguments args) {
        Quiz roman = new Quiz("Roman");
        quizRepository.save(roman);
        Answer tiber = new Answer("The Tiber", romanRiver);
        Question romanRiver = new Question ("Which river was the city of Rome built next to?", tiber, roman );
        Answer tiber = new Answer("The Tiber", romanRiver);
        answerRepository.save(tiber);
    }
}
