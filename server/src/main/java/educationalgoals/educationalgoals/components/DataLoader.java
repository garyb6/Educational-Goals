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
        scienceBones.addOption(threeSevenThree);

        Option fiveFiveThree = new Option("553", scienceBones);
        optionRespository.save(fiveFiveThree);
        scienceBones.addOption(fiveFiveThree);

        science.addQuestion(scienceBones);

        Question scienceEarth = new Question (science, "What is the hardest natural substance on Earth?");
        questionRepository.save(scienceEarth);

        Option diamond = new Option("Diamond", scienceEarth, true);
        optionRespository.save(diamond);
        scienceEarth.addOption(diamond);

        Option lonsdaleite = new Option("Lonsdaleite", scienceEarth);
        optionRespository.save(lonsdaleite);
        scienceEarth.addOption(lonsdaleite);

        Option graphene = new Option("Graphene", scienceEarth);
        optionRespository.save(graphene);
        scienceEarth.addOption(graphene);

        Option siliconCarbide = new Option("Silicon carbide", scienceEarth);
        optionRespository.save(siliconCarbide);
        scienceEarth.addOption(siliconCarbide);

        science.addQuestion(scienceEarth);

        Question scienceTemperature = new Question (science, "At what temperature are Celsius and Fahrenheit equal?");
        questionRepository.save(scienceTemperature);

        Option minusFourZero = new Option("-40", scienceTemperature, true);
        optionRespository.save(minusFourZero);
        scienceTemperature.addOption(minusFourZero);

        Option sevenEight = new Option("78", scienceTemperature);
        optionRespository.save(sevenEight);
        scienceTemperature.addOption(sevenEight);

        Option minusTwoNine = new Option("-29", scienceTemperature);
        optionRespository.save(minusTwoNine);
        scienceTemperature.addOption(minusTwoNine);

        Option fourThree = new Option("43", scienceTemperature);
        optionRespository.save(fourThree);
        scienceTemperature.addOption(fourThree);

        science.addQuestion(scienceTemperature);

        Question scienceSun = new Question (science, "Roughly how long does it take for the sun’s light to reach earth?");
        questionRepository.save(scienceSun);

        Option eightMinutes = new Option("8 minutes", scienceSun, true);
        optionRespository.save(eightMinutes);
        scienceSun.addOption(eightMinutes);

        Option eightSeconds = new Option("8 seconds", scienceSun);
        optionRespository.save(eightSeconds);
        scienceSun.addOption(eightSeconds);

        Option eightHours = new Option("8 hours", scienceSun);
        optionRespository.save(eightHours);
        scienceSun.addOption(eightHours);

        Option eightDays = new Option("8 days", scienceSun);
        optionRespository.save(eightDays);
        scienceSun.addOption(eightDays);

        science.addQuestion(scienceSun);

        Question scienceMushrooms = new Question (science, "What is the study of mushrooms called?");
        questionRepository.save(scienceMushrooms);

        Option mycology = new Option("Mycology", scienceMushrooms, true);
        optionRespository.save(mycology);
        scienceMushrooms.addOption(mycology);

        Option fungology = new Option("Fungology", scienceMushrooms);
        optionRespository.save(fungology);
        scienceMushrooms.addOption(fungology);

        Option nephology = new Option("Nephology", scienceMushrooms);
        optionRespository.save(nephology);
        scienceMushrooms.addOption(nephology);

        Option pomology = new Option("Pomology", scienceMushrooms);
        optionRespository.save(pomology);
        scienceMushrooms.addOption(pomology);

        science.addQuestion(scienceMushrooms);

        Question scienceCountry = new Question (science, "What modern day country was Marie Curie born in?");
        questionRepository.save(scienceCountry);

        Option poland = new Option("Poland", scienceCountry, true);
        optionRespository.save(poland);
        scienceCountry.addOption(poland);

        Option netherlands = new Option("Netherlands", scienceCountry);
        optionRespository.save(netherlands);
        scienceCountry.addOption(netherlands);

        Option slovenia = new Option("Slovenia", scienceCountry);
        optionRespository.save(slovenia);
        scienceCountry.addOption(slovenia);

        Option uk = new Option("UK", scienceCountry);
        optionRespository.save(uk);
        scienceCountry.addOption(uk);

        science.addQuestion(scienceCountry);

        Question sciencePhysician = new Question (science, "Which oath of ethics taken by doctors is named after an Ancient Greek physician?");
        questionRepository.save(sciencePhysician);

        Option hippocratic  = new Option("Hippocratic ", sciencePhysician, true);
        optionRespository.save(hippocratic);
        sciencePhysician.addOption(hippocratic);

        Option autocratic = new Option("Autocratic", sciencePhysician);
        optionRespository.save(autocratic);
        sciencePhysician.addOption(autocratic);

        Option mesocratic = new Option("Mesocratic", sciencePhysician);
        optionRespository.save(mesocratic);
        sciencePhysician.addOption(mesocratic);

        Option theocratic = new Option("Theocratic", sciencePhysician);
        optionRespository.save(theocratic);
        sciencePhysician.addOption(theocratic);

        science.addQuestion(sciencePhysician);

        Question scienceElectric = new Question (science, "What is a material that will not carry an electric charge called?");
        questionRepository.save(scienceElectric);

        Option insulator  = new Option("Insulator", scienceElectric, true);
        optionRespository.save(insulator);
        scienceElectric.addOption(insulator);

        Option dense = new Option("Dense", scienceElectric);
        optionRespository.save(dense);
        scienceElectric.addOption(dense);

        Option liquid = new Option("Liquid", scienceElectric);
        optionRespository.save(liquid);
        scienceElectric.addOption(liquid);

        Option vulcanised = new Option("Vulcanised", scienceElectric);
        optionRespository.save(vulcanised);
        scienceElectric.addOption(vulcanised);

        science.addQuestion(scienceElectric);

        Question scienceMetal = new Question (science, "What is the lightest metal?");
        questionRepository.save(scienceMetal);

        Option lithium  = new Option("Lithium", scienceMetal, true);
        optionRespository.save(lithium);
        scienceMetal.addOption(lithium);

        Option aluminium  = new Option("Aluminium ", scienceMetal);
        optionRespository.save(aluminium);
        scienceMetal.addOption(aluminium);

        Option magnesium = new Option("Magnesium", scienceMetal);
        optionRespository.save(magnesium);
        scienceMetal.addOption(magnesium);

        Option potassium = new Option("Potassium", scienceMetal);
        optionRespository.save(potassium);
        scienceMetal.addOption(potassium);

        science.addQuestion(scienceMetal);

        Question sciencePound = new Question (science, "How much does a British £2 coin weigh?");
        questionRepository.save(sciencePound);

        Option zeroZeroTwoPounds  = new Option("0.02 pounds", sciencePound, true);
        optionRespository.save(zeroZeroTwoPounds);
        sciencePound.addOption(zeroZeroTwoPounds);

        Option twoPounds  = new Option("2 pounds", sciencePound);
        optionRespository.save(twoPounds);
        sciencePound.addOption(twoPounds);

        Option twoPointTwoPounds = new Option("2.2 pounds", sciencePound);
        optionRespository.save(twoPointTwoPounds);
        sciencePound.addOption(twoPointTwoPounds);

        Option zeroPointTwoPounds = new Option("0.2 pounds", sciencePound);
        optionRespository.save(zeroPointTwoPounds);
        sciencePound.addOption(zeroPointTwoPounds);

        science.addQuestion(sciencePound);

        Quiz grammar = new Quiz("Grammar");
        quizRepository.save(grammar);

        Question grammarLottery = new Question (grammar, "If I won the lottery...");
        questionRepository.save(grammarLottery);

        Option mansion  = new Option("I would buy a mansion", grammarLottery, true);
        optionRespository.save(mansion);
        grammarLottery.addOption(mansion);

        Option car  = new Option("I will buy a car", grammarLottery);
        optionRespository.save(car);
        grammarLottery.addOption(car);

        Option computer = new Option("I buy a computer", grammarLottery);
        optionRespository.save(computer);
        grammarLottery.addOption(computer);

        Option ps5 = new Option("I would have bought a PS5", grammarLottery);
        optionRespository.save(ps5);
        grammarLottery.addOption(ps5);

        grammar.addQuestion(grammarLottery);

        Question grammarRain = new Question (grammar, "If it rains tomorrow...");
        questionRepository.save(grammarRain);

        Option rain  = new Option("I will bring an umbrella", grammarRain, true);
        optionRespository.save(rain);
        grammarRain.addOption(rain);

        Option inside  = new Option("I would stay inside", grammarRain);
        optionRespository.save(inside);
        grammarRain.addOption(inside);

        Option jacket = new Option("I would have bought a jacket", grammarRain);
        optionRespository.save(jacket);
        grammarRain.addOption(jacket);

        Option coat = new Option("I wear a coat", grammarRain);
        optionRespository.save(coat);
        grammarRain.addOption(coat);

        grammar.addQuestion(grammarRain);

        Question grammarStudied = new Question (grammar, "If I had studied more...");
        questionRepository.save(grammarStudied);

        Option passed  = new Option("I would have passed the exam.", grammarStudied, true);
        optionRespository.save(passed);
        grammarStudied.addOption(passed);

        Option smart  = new Option("I would be very smart.", grammarStudied);
        optionRespository.save(smart);
        grammarStudied.addOption(smart);

        Option things = new Option("I will know more things", grammarStudied);
        optionRespository.save(things);
        grammarStudied.addOption(things);

        Option exam = new Option("I fail the exam", grammarStudied);
        optionRespository.save(exam);
        grammarStudied.addOption(exam);

        grammar.addQuestion(grammarStudied);

        Question grammarFood = new Question (grammar, "If I could only eat one food for the rest of my life...");
        questionRepository.save(grammarFood);

        Option pizza = new Option("It would be pizza", grammarFood, true);
        optionRespository.save(pizza);
        grammarFood.addOption(pizza);

        Option pasta  = new Option("It will be pasta", grammarFood);
        optionRespository.save(pasta);
        grammarFood.addOption(pasta);

        Option tacos = new Option("It is tacos", grammarFood);
        optionRespository.save(tacos);
        grammarFood.addOption(tacos);

        Option burgers = new Option("It would have been burgers", grammarFood);
        optionRespository.save(burgers);
        grammarFood.addOption(burgers);

        grammar.addQuestion(grammarFood);

        Question grammarWeather = new Question (grammar, "If it is sunny tomorrow...");
        questionRepository.save(grammarWeather);

        Option glasses = new Option("I will wear sunglasses", grammarWeather, true);
        optionRespository.save(glasses);
        grammarWeather.addOption(glasses);

        Option miracle1  = new Option("It would be a miracle", grammarWeather);
        optionRespository.save(miracle1);
        grammarWeather.addOption(miracle1);

        Option cream = new Option("I would have put on sun cream", grammarWeather);
        optionRespository.save(cream);
        grammarWeather.addOption(cream);

        Option cap = new Option("I wear a cap", grammarWeather);
        optionRespository.save(cap);
        grammarWeather.addOption(cap);

        grammar.addQuestion(grammarWeather);

        Question grammarFood1 = new Question (grammar, "If I had eaten more...");
        questionRepository.save(grammarFood1);

        Option sick = new Option("I would have been sick", grammarFood1, true);
        optionRespository.save(sick);
        grammarFood1.addOption(sick);

        Option hungry  = new Option("I won’t be hungry", grammarFood1);
        optionRespository.save(hungry);
        grammarFood1.addOption(hungry);

        Option full = new Option("I will be full", grammarFood1);
        optionRespository.save(full);
        grammarFood1.addOption(full);

        Option pizza2 = new Option("I choose the pizza", grammarFood1);
        optionRespository.save(pizza2);
        grammarFood1.addOption(pizza2);

        grammar.addQuestion(grammarFood1);

    }
}
