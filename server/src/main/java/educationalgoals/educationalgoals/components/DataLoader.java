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

        Question firstEmperor = new Question (roman, "What was the name of the first emperor of Rome in 27 BC?");
        questionRepository.save(firstEmperor);
        Option tiberius = new Option("Tiberius", firstEmperor);
        optionRespository.save(tiberius);
        firstEmperor.addOption(tiberius);
        Option claudius = new Option("Claudius", firstEmperor);
        optionRespository.save(claudius);
        firstEmperor.addOption(claudius);
        Option vespasian = new Option("Vespasian", firstEmperor);
        optionRespository.save(vespasian);
        firstEmperor.addOption(vespasian);
        Option augustus = new Option("Augustus", firstEmperor, true);
        optionRespository.save(augustus);
        firstEmperor.addOption(augustus);

        roman.addQuestion(firstEmperor);

        Question venusGoddess = new Question (roman, "Who was Venus the Roman goddess of?");
        questionRepository.save(venusGoddess);
        Option loveAndBeauty = new Option("Love and beauty", venusGoddess, true);
        optionRespository.save(loveAndBeauty);
        venusGoddess.addOption(loveAndBeauty);
        Option time = new Option("Time", venusGoddess);
        optionRespository.save(time);
        venusGoddess.addOption(time);
        Option war = new Option("War", venusGoddess);
        optionRespository.save(war);
        venusGoddess.addOption(war);
        Option romance = new Option("Romance", venusGoddess);
        optionRespository.save(romance);
        venusGoddess.addOption(romance);

        roman.addQuestion(venusGoddess);

        Question toiletPaper = new Question (roman, "What did the Romans use instead of toilet paper");
        questionRepository.save(toiletPaper);
        Option cowTongue = new Option("Cow tongue", toiletPaper);
        optionRespository.save(cowTongue);
        toiletPaper.addOption(cowTongue);
        Option spongeOnStick = new Option("A wet sponge on a stick", toiletPaper, true);
        optionRespository.save(spongeOnStick);
        toiletPaper.addOption(spongeOnStick);
        Option oakLeaves = new Option("Oak leaves", toiletPaper);
        optionRespository.save(oakLeaves);
        toiletPaper.addOption(oakLeaves);
        Option horseTails = new Option("Horse tails", toiletPaper);
        optionRespository.save(horseTails);
        toiletPaper.addOption(horseTails);

        roman.addQuestion(toiletPaper);

        Question armyAuxiliary = new Question (roman, "For how many years did auxiliary soldiers in the Roman army have to fight for before becoming Roman citizens?");
        questionRepository.save(armyAuxiliary);
        Option ten = new Option("10 years", armyAuxiliary);
        optionRespository.save(ten);
        armyAuxiliary.addOption(ten);
        Option fifteen = new Option("15 years", armyAuxiliary);
        optionRespository.save(fifteen);
        armyAuxiliary.addOption(fifteen);
        Option twenty = new Option("20 years", armyAuxiliary);
        optionRespository.save(twenty);
        armyAuxiliary.addOption(twenty);
        Option twentyFive = new Option("25 years", armyAuxiliary, true);
        optionRespository.save(twentyFive);
        armyAuxiliary.addOption(twentyFive);

        roman.addQuestion(armyAuxiliary);

        Question toothpaste = new Question (roman, "What did some Romans use as toothpaste?");
        questionRepository.save(toothpaste);
        Option garlic = new Option("Garlic", toothpaste);
        optionRespository.save(garlic);
        toothpaste.addOption(garlic);
        Option mouseBrains = new Option("Mouse brains", toothpaste, true);
        optionRespository.save(mouseBrains);
        toothpaste.addOption(mouseBrains);
        Option duckLivers = new Option("Duck livers", toothpaste);
        optionRespository.save(duckLivers);
        toothpaste.addOption(duckLivers);
        Option pigEars = new Option("Mushed pig ears", toothpaste);
        optionRespository.save(pigEars);
        toothpaste.addOption(pigEars);

        roman.addQuestion(toothpaste);

        Question wall = new Question (roman, "Which emperor built a great wall in the north of England to keep the celts out");
        questionRepository.save(wall);
        Option marcus = new Option("Marcus Aurelius", wall);
        optionRespository.save(marcus);
        firstEmperor.addOption(marcus);
        Option valerian = new Option("Valerian", wall);
        optionRespository.save(valerian);
        firstEmperor.addOption(valerian);
        Option hadrian = new Option("Hadrian", wall, true);
        optionRespository.save(hadrian);
        wall.addOption(hadrian);
        Option commodus = new Option("Commodus", wall);
        optionRespository.save(commodus);
        wall.addOption(commodus);

        roman.addQuestion(wall);

        Question plasters = new Question (roman, "What did the Romans use as plasters for small cuts?");
        questionRepository.save(plasters);
        Option porridge = new Option("Porridge", plasters);
        optionRespository.save(porridge);
        Option mice = new Option("Mice", plasters);
        optionRespository.save(mice);
        plasters.addOption(mice);
        Option snakeskin = new Option("Snakeskin", plasters);
        optionRespository.save(snakeskin);
        plasters.addOption(snakeskin);
        Option cobwebs = new Option("Cobwebs", plasters, true);
        optionRespository.save(cobwebs);
        plasters.addOption(cobwebs);

        roman.addQuestion(plasters);

        Question cleanClothes = new Question (roman, "What did the Romans use to clean their clothes?");
        questionRepository.save(cleanClothes);
        Option sweat = new Option("Sweat", cleanClothes);
        optionRespository.save(sweat);
        cleanClothes.addOption(sweat);
        Option urine = new Option("Urine", cleanClothes, true);
        optionRespository.save(urine);
        cleanClothes.addOption(urine);
        Option honey = new Option("Honey", cleanClothes);
        optionRespository.save(honey);
        cleanClothes.addOption(honey);
        Option cowBrains = new Option("Cow brains", cleanClothes);
        optionRespository.save(cowBrains);
        cleanClothes.addOption(cowBrains);

        roman.addQuestion(cleanClothes);

        Question colosseum = new Question (roman, "Which emperor started building the Colosseum but died before it was fully built?");
        questionRepository.save(colosseum);
        Option jovian = new Option("Jovian", colosseum);
        optionRespository.save(jovian);
        colosseum.addOption(jovian);
        Option vespasian = new Option("Vespasian", colosseum, true);
        optionRespository.save(vespasian);
        colosseum.addOption(vespasian);
        Option nero = new Option("Nero", colosseum);
        optionRespository.save(nero);
        colosseum.addOption(nero);
        Option caracalla = new Option("Caracalla", colosseum);
        optionRespository.save(caracalla);
        colosseum.addOption(caracalla);

        roman.addQuestion(colosseum);
    }
}
