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

        Option fourThree = new Option("43", scienceTemperature);
        optionRespository.save(fourThree);
        scienceBones.addOption(fourThree);

        science.addQuestion(scienceTemperature);

        Question scienceSun = new Question (science, "Roughly how long does it take for the sun’s light to reach earth?");
        questionRepository.save(scienceSun);

        Option eightMinutes = new Option("8 minutes", scienceSun, true);
        optionRespository.save(eightMinutes);
        scienceBones.addOption(eightMinutes);

        Option eightSeconds = new Option("8 seconds", scienceSun);
        optionRespository.save(eightSeconds);
        scienceBones.addOption(eightSeconds);

        Option eightHours = new Option("8 hours", scienceSun);
        optionRespository.save(eightHours);
        romanRiver.addOption(eightHours);

        Option eightDays = new Option("8 days", scienceSun);
        optionRespository.save(eightDays);
        scienceBones.addOption(eightDays);

        science.addQuestion(scienceSun);

        Question scienceMushrooms = new Question (science, "What is the study of mushrooms called?");
        questionRepository.save(scienceMushrooms);

        Option mycology = new Option("Mycology", scienceMushrooms, true);
        optionRespository.save(mycology);
        scienceBones.addOption(mycology);

        Option fungology = new Option("Fungology", scienceMushrooms);
        optionRespository.save(fungology);
        scienceBones.addOption(fungology);

        Option nephology = new Option("Nephology", scienceMushrooms);
        optionRespository.save(nephology);
        romanRiver.addOption(nephology);

        Option pomology = new Option("Pomology", scienceMushrooms);
        optionRespository.save(pomology);
        scienceBones.addOption(pomology);

        science.addQuestion(scienceMushrooms);

        Question scienceCountry = new Question (science, "What modern day country was Marie Curie born in?");
        questionRepository.save(scienceCountry);

        Option poland = new Option("Poland", scienceCountry, true);
        optionRespository.save(poland);
        scienceBones.addOption(poland);

        Option netherlands = new Option("Netherlands", scienceCountry);
        optionRespository.save(netherlands);
        scienceBones.addOption(netherlands);

        Option slovenia = new Option("Slovenia", scienceCountry);
        optionRespository.save(slovenia);
        romanRiver.addOption(slovenia);

        Option uk = new Option("UK", scienceCountry);
        optionRespository.save(uk);
        scienceBones.addOption(uk);

        science.addQuestion(scienceCountry);

        Question sciencePhysician = new Question (science, "Which oath of ethics taken by doctors is named after an Ancient Greek physician?");
        questionRepository.save(sciencePhysician);

        Option hippocratic  = new Option("Hippocratic ", sciencePhysician, true);
        optionRespository.save(hippocratic);
        scienceBones.addOption(hippocratic);

        Option autocratic = new Option("Autocratic", sciencePhysician);
        optionRespository.save(autocratic);
        scienceBones.addOption(autocratic);

        Option mesocratic = new Option("Mesocratic", sciencePhysician);
        optionRespository.save(mesocratic);
        romanRiver.addOption(mesocratic);

        Option theocratic = new Option("Theocratic", sciencePhysician);
        optionRespository.save(theocratic);
        scienceBones.addOption(theocratic);

        science.addQuestion(sciencePhysician);

        Question scienceElectric = new Question (science, "What is a material that will not carry an electric charge called?");
        questionRepository.save(scienceElectric);

        Option insulator  = new Option("Insulator", scienceElectric, true);
        optionRespository.save(insulator);
        scienceBones.addOption(insulator);

        Option dense = new Option("Dense", scienceElectric);
        optionRespository.save(dense);
        scienceBones.addOption(dense);

        Option liquid = new Option("Liquid", scienceElectric);
        optionRespository.save(liquid);
        romanRiver.addOption(liquid);

        Option vulcanised = new Option("Vulcanised", scienceElectric);
        optionRespository.save(vulcanised);
        scienceBones.addOption(vulcanised);

        science.addQuestion(scienceElectric);

        Question scienceMetal = new Question (science, "What is the lightest metal?");
        questionRepository.save(scienceMetal);

        Option lithium  = new Option("Lithium", scienceMetal, true);
        optionRespository.save(lithium);
        scienceBones.addOption(lithium);

        Option aluminium  = new Option("Aluminium ", scienceMetal);
        optionRespository.save(aluminium);
        scienceBones.addOption(aluminium);

        Option magnesium = new Option("Magnesium", scienceMetal);
        optionRespository.save(magnesium);
        romanRiver.addOption(magnesium);

        Option potassium = new Option("Potassium", scienceMetal);
        optionRespository.save(potassium);
        scienceBones.addOption(potassium);

        science.addQuestion(scienceMetal);

    }
}
