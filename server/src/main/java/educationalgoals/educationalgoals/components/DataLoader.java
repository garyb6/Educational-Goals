package educationalgoals.educationalgoals.components;

import educationalgoals.educationalgoals.models.Option;
import educationalgoals.educationalgoals.models.Question;
import educationalgoals.educationalgoals.models.Quiz;
import educationalgoals.educationalgoals.repositories.OptionRespository;
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
    OptionRespository optionRespository;

    @Autowired
    QuestionRepository questionRepository;

    public DataLoader() {}

    @Override
    public void run(ApplicationArguments args) {
        Quiz roman = new Quiz("Roman");
        quizRepository.save(roman);

        Question romanRiver = new Question (roman, "Which river was the city of Rome built next to?");
        questionRepository.save(romanRiver);

        Option tiber = new Option("The Tiber", romanRiver, true);
        optionRespository.save(tiber);
        romanRiver.addOption(tiber);

        Option po = new Option("The Po", romanRiver);
        optionRespository.save(po);
        romanRiver.addOption(po);

        Option arno = new Option("The Arno", romanRiver);
        optionRespository.save(arno);
        romanRiver.addOption(arno);

        Option rhine = new Option("The Rhine", romanRiver);
        optionRespository.save(rhine);
        romanRiver.addOption(rhine);

        roman.addQuestion(romanRiver);

        Quiz science = new Quiz("Science");
        quizRepository.save(science);

        Question scienceBones = new Question (science, "How many bones are there in the human body?");
        questionRepository.save(scienceBones);

        Option twoZeroSix = new Option("206", scienceBones, true);
        optionRespository.save(twoZeroSix);
        scienceBones.addOption(twoZeroSix);

        Option onceTwoZeroNine = new Option("1209", scienceBones);
        optionRespository.save(onceTwoZeroNine);
        scienceBones.addOption(onceTwoZeroNine);


        Option threeSevenThree = new Option("373", scienceBones);
        optionRespository.save(threeSevenThree);
        romanRiver.addOption(threeSevenThree);

        Option fiveFiveThree = new Option("553", scienceBones);
        optionRespository.save(fiveFiveThree);
        scienceBones.addOption(fiveFiveThree);

        science.addQuestion(scienceBones);

        Question scienceEarth = new Question (science, "What is the hardest natural substance on Earth?");
        questionRepository.save(scienceEarth);

        Option diamond = new Option("Diamond", scienceEarth, true);
        optionRespository.save(diamond);
        scienceBones.addOption(diamond);

        Option lonsdaleite = new Option("Lonsdaleite", scienceEarth);
        optionRespository.save(lonsdaleite);
        scienceBones.addOption(lonsdaleite);

        Option graphene = new Option("Graphene", scienceEarth);
        optionRespository.save(graphene);
        romanRiver.addOption(graphene);

        Option siliconCarbide = new Option("Silicon carbide", scienceEarth);
        optionRespository.save(siliconCarbide);
        scienceBones.addOption(siliconCarbide);

        science.addQuestion(scienceEarth);

        Question scienceTemperature = new Question (science, "At what temperature are Celsius and Fahrenheit equal?");
        questionRepository.save(scienceTemperature);

        Option minusFourZero = new Option("-40", scienceTemperature, true);
        optionRespository.save(minusFourZero);
        scienceBones.addOption(minusFourZero);

        Option sevenEight = new Option("78", scienceTemperature);
        optionRespository.save(sevenEight);
        scienceBones.addOption(sevenEight);

        Option minusTwoNine = new Option("-29", scienceTemperature);
        optionRespository.save(minusTwoNine);
        romanRiver.addOption(minusTwoNine);

        Option siliconCarbide = new Option("Silicon carbide", scienceEarth);
        optionRespository.save(siliconCarbide);
        scienceBones.addOption(siliconCarbide);

        science.addQuestion(scienceEarth);

    }
}
