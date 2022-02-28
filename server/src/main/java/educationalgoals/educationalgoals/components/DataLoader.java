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
        Option titus = new Option("Titus", firstEmperor);
        optionRespository.save(titus);
        firstEmperor.addOption(titus);
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
        Option cowTongue = new Option("Cow tongues", toiletPaper);
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
        Option caligula = new Option("Caligula", colosseum);
        optionRespository.save(caligula);
        colosseum.addOption(caligula);

        roman.addQuestion(colosseum);

        Quiz scotland = new Quiz("Scotland");
        quizRepository.save(scotland);

        Question nationalAnimal = new Question (scotland, "What is Scotland’s national animal?");
        questionRepository.save(nationalAnimal);
        Option unicorn = new Option("Unicorn", nationalAnimal, true);
        optionRespository.save(unicorn);
        nationalAnimal.addOption(unicorn);
        Option lochNessMonster = new Option("Loch Ness Monster", nationalAnimal);
        optionRespository.save(lochNessMonster);
        nationalAnimal.addOption(lochNessMonster);
        Option lion = new Option("Lion", nationalAnimal);
        optionRespository.save(lion);
        nationalAnimal.addOption(lion);
        Option stag = new Option("Stag", nationalAnimal);
        optionRespository.save(stag);
        nationalAnimal.addOption(stag);

        scotland.addQuestion(nationalAnimal);

        Question kingJames = new Question (scotland, "What is Scotland’s national animal?");
        questionRepository.save(kingJames);
        Option sixth = new Option("James VI", kingJames, true);
        optionRespository.save(sixth);
        kingJames.addOption(sixth);
        Option fourth = new Option("James IV", kingJames);
        optionRespository.save(fourth);
        kingJames.addOption(fourth);
        Option seventh = new Option("James VII", kingJames);
        optionRespository.save(seventh);
        kingJames.addOption(seventh);
        Option third = new Option("James III", kingJames);
        optionRespository.save(third);
        kingJames.addOption(third);

        scotland.addQuestion(kingJames);

        Question darienColony = new Question (scotland, "In which modern day Central American country was the ill-fated Darien colony located?");
        questionRepository.save(kingJames);
        Option guatemala = new Option("Guatemala", darienColony);
        optionRespository.save(guatemala);
        darienColony.addOption(guatemala);
        Option panama = new Option("Panama", darienColony, true);
        optionRespository.save(panama);
        darienColony.addOption(panama);
        Option costaRica = new Option("Costa Rica", darienColony);
        optionRespository.save(costaRica);
        darienColony.addOption(costaRica);
        Option nicaragua = new Option("Nicaragua", darienColony);
        optionRespository.save(nicaragua);
        darienColony.addOption(nicaragua);

        scotland.addQuestion(darienColony);

        Question unesco = new Question (scotland, "Which of these options is NOT one of the UNESCO world heritage sites in Scotland?");
        questionRepository.save(kingJames);
        Option castle = new Option("Edinburgh Castle", unesco, true);
        optionRespository.save(castle);
        unesco.addOption(castle);
        Option newLanark = new Option("New Lanark", unesco);
        optionRespository.save(newLanark);
        unesco.addOption(newLanark);
        Option orkney = new Option("Neolithic Heart of Orkney", unesco);
        optionRespository.save(orkney);
        unesco.addOption(orkney);
        Option bridge = new Option("Forth Bridge", unesco);
        optionRespository.save(bridge);
        unesco.addOption(bridge);

        scotland.addQuestion(unesco);

        Question cave = new Question (scotland, "Robert the Bruce spent several months hiding out in a cave from the glorious English, where he was inspired by which animal?");
        questionRepository.save(cave);
        Option bear = new Option("Bear", cave);
        optionRespository.save(bear);
        cave.addOption(bear);
        Option mouse = new Option("Mouse", cave);
        optionRespository.save(mouse);
        cave.addOption(mouse);
        Option spider = new Option("Spider", cave, true);
        optionRespository.save(spider);
        cave.addOption(spider);
        Option crow = new Option("Crow", cave);
        optionRespository.save(crow);
        cave.addOption(crow);

        scotland.addQuestion(cave);

        Question islands = new Question (scotland, "How many islands are there in Scotland?");
        questionRepository.save(islands);
        Option twentyOne = new Option("21", islands);
        optionRespository.save(twentyOne);
        islands.addOption(twentyOne);
        Option fiftySeven = new Option("57", islands);
        optionRespository.save(fiftySeven);
        islands.addOption(fiftySeven);
        Option twoHundred = new Option("200+", islands);
        optionRespository.save(twoHundred);
        islands.addOption(twoHundred);
        Option nineHundred = new Option("900+", islands, true);
        optionRespository.save(nineHundred);
        islands.addOption(nineHundred);

        scotland.addQuestion(islands);

        Question munro = new Question (scotland, "What makes a Munro a Munro?");
        questionRepository.save(munro);
        Option hughMunro = new Option("Sir Hugh Munro climbed it during his life", munro);
        optionRespository.save(hughMunro);
        munro.addOption(hughMunro);
        Option drop = new Option("There must be a 500ft drop on every side", munro);
        optionRespository.save(drop);
        munro.addOption(drop);
        Option tall = new Option("Must be over 3000ft tall", munro, true);
        optionRespository.save(tall);
        munro.addOption(tall);
        Option noRule = new Option("There is no special rule", munro);
        optionRespository.save(noRule);
        munro.addOption(noRule);

        scotland.addQuestion(munro);

        Question loch = new Question (scotland, "Which Loch has the deepest point in Scotland?");
        questionRepository.save(loch);
        Option ness = new Option("Loch Ness", loch);
        optionRespository.save(ness);
        loch.addOption(ness);
        Option morar = new Option("Loch Morar", loch, true);
        optionRespository.save(morar);
        loch.addOption(morar);
        Option tay = new Option("Loch Tay", loch);
        optionRespository.save(tay);
        loch.addOption(tay);
        Option lomond = new Option("Loch Lomond", loch);
        optionRespository.save(lomond);
        loch.addOption(lomond);

        scotland.addQuestion(loch);

        Question loch = new Question (scotland, "Which Loch has the deepest point in Scotland?");
        questionRepository.save(loch);
        Option ness = new Option("Loch Ness", loch);
        optionRespository.save(ness);
        loch.addOption(ness);
        Option morar = new Option("Loch Morar", loch, true);
        optionRespository.save(morar);
        loch.addOption(morar);
        Option tay = new Option("Loch Tay", loch);
        optionRespository.save(tay);
        loch.addOption(tay);
        Option lomond = new Option("Loch Lomond", loch);
        optionRespository.save(lomond);
        loch.addOption(lomond);

        scotland.addQuestion(loch);
    }
}
