package educationalgoals.educationalgoals.components;

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
    AnswerRepository answerRepository;
    QuestionRepository questionRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {



    }
}
