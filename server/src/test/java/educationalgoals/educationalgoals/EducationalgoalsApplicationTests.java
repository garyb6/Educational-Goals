package educationalgoals.educationalgoals;

import educationalgoals.educationalgoals.models.Option;
import educationalgoals.educationalgoals.models.Question;
import educationalgoals.educationalgoals.models.Quiz;
import educationalgoals.educationalgoals.repositories.OptionRespository;
import educationalgoals.educationalgoals.repositories.QuestionRepository;
import educationalgoals.educationalgoals.repositories.QuizRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class EducationalGoalsApplicationTests {

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
	public void canSaveQuiz() {
		Quiz roman = new Quiz("Roman");
		quizRepository.save(roman);
	}

	@Test
	public void canSaveQuestion(){
		Quiz roman = new Quiz("Roman");
		quizRepository.save(roman);
		Question romanRiver = new Question (roman, "Which river was the city of Rome built next to?");
		questionRepository.save(romanRiver);
	}

	@Test
	public void canSaveFalseOption(){
		Quiz roman = new Quiz("Roman");
		quizRepository.save(roman);
		Question romanRiver = new Question (roman, "Which river was the city of Rome built next to?");
		questionRepository.save(romanRiver);
		Option po = new Option("The Po", romanRiver);
		optionRespository.save(po);}

	@Test
	public void canSaveTrueOption() {
		Quiz roman = new Quiz("Roman");
		quizRepository.save(roman);
		Question romanRiver = new Question(roman, "Which river was the city of Rome built next to?");
		questionRepository.save(romanRiver);
		Option tiber = new Option("The Tiber", romanRiver, true);
		optionRespository.save(tiber);
	}

	@Test
	public void canAddMoreThanOneOptionToQuestion(){
		Quiz roman = new Quiz("Roman");
		quizRepository.save(roman);
		Question romanRiver = new Question(roman, "Which river was the city of Rome built next to?");
		questionRepository.save(romanRiver);
		Option tiber = new Option("The Tiber", romanRiver, true);
		optionRespository.save(tiber);
		Option po = new Option("The Po", romanRiver);
		optionRespository.save(po);
		romanRiver.addOption(tiber);
		romanRiver.addOption(po);
		assertEquals(2, romanRiver.optionsAmount());
	}
}
