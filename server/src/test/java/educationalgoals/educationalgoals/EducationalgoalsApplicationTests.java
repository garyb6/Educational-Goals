package educationalgoals.educationalgoals;

import educationalgoals.educationalgoals.models.Option;
import educationalgoals.educationalgoals.models.Quiz;
import educationalgoals.educationalgoals.repositories.OptionRespository;
import educationalgoals.educationalgoals.repositories.QuestionRepository;
import educationalgoals.educationalgoals.repositories.QuizRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class EducationalgoalsApplicationTests {

	@Autowired
	QuizRepository quizRepository;

	@Autowired
	OptionRespository optionRespository;

	@Autowired
	QuestionRepository questionRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canSaveQuiz(){
		Quiz roman = new Quiz("Roman");
		quizRepository.save(roman);

//	@Test
//	public void canSaveFalseOption(){
//		Option po = new Option("The Po", romanRiver);
//		optionRespository.save(po);


	}

}
