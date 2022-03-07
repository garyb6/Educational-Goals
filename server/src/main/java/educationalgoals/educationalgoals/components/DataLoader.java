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
        Quiz roman = new Quiz("Romans");
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

        Question kingJames = new Question (scotland, "In 1603 the Union of the Crowns occurred when King James became James 1st of England. But which number James of Scotland was he?");
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
        questionRepository.save(darienColony);
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
        questionRepository.save(unesco);
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

        Question irnBru = new Question (scotland, "Irn Bru is made from girders, but in which year was it first introduced?");
        questionRepository.save(irnBru);
        Option nineteen01 = new Option("1901", irnBru, true);
        optionRespository.save(nineteen01);
        irnBru.addOption(nineteen01);
        Option nineteen31 = new Option("1931", irnBru);
        optionRespository.save(nineteen31);
        irnBru.addOption(nineteen31);
        Option nineteen61 = new Option("1961", irnBru);
        optionRespository.save(nineteen61);
        irnBru.addOption(nineteen61);
        Option nineteen11 = new Option("1911", irnBru);
        optionRespository.save(nineteen11);
        irnBru.addOption(nineteen11);

        scotland.addQuestion(irnBru);

        Question capital = new Question (scotland, "Edinburgh is the current capital city, but where did it replace?");
        questionRepository.save(capital);
        Option glasgow = new Option("Glasgow", capital);
        optionRespository.save(glasgow);
        capital.addOption(glasgow);
        Option dumbarton = new Option("Dumbarton", capital);
        optionRespository.save(dumbarton);
        capital.addOption(dumbarton);
        Option inverness = new Option("Inverness", capital);
        optionRespository.save(inverness);
        capital.addOption(nineteen61);
        Option scone = new Option("Scone", capital, true);
        optionRespository.save(scone);
        capital.addOption(scone);

        scotland.addQuestion(capital);

        Quiz science = new Quiz("Science");
        quizRepository.save(science);

        Question scienceBones = new Question (science, "How many bones are there in the human body?");
        questionRepository.save(scienceBones);

        Option threeSevenThree = new Option("373", scienceBones);
        optionRespository.save(threeSevenThree);
        scienceBones.addOption(threeSevenThree);

        Option twoZeroSix = new Option("206", scienceBones, true);
        optionRespository.save(twoZeroSix);
        scienceBones.addOption(twoZeroSix);

        Option oneTwoZeroNine = new Option("1209", scienceBones);
        optionRespository.save(oneTwoZeroNine);
        scienceBones.addOption(oneTwoZeroNine);

        Option fiveFiveThree = new Option("553", scienceBones);
        optionRespository.save(fiveFiveThree);
        scienceBones.addOption(fiveFiveThree);

        science.addQuestion(scienceBones);

        Question scienceEarth = new Question (science, "What is the hardest natural substance on Earth?");
        questionRepository.save(scienceEarth);

        Option lonsdaleite = new Option("Lonsdaleite", scienceEarth);
        optionRespository.save(lonsdaleite);
        scienceEarth.addOption(lonsdaleite);

        Option graphene = new Option("Graphene", scienceEarth);
        optionRespository.save(graphene);
        scienceEarth.addOption(graphene);

        Option siliconCarbide = new Option("Silicon carbide", scienceEarth);
        optionRespository.save(siliconCarbide);
        scienceEarth.addOption(siliconCarbide);

        Option diamond = new Option("Diamond", scienceEarth, true);
        optionRespository.save(diamond);
        scienceEarth.addOption(diamond);

        science.addQuestion(scienceEarth);

        Question scienceTemperature = new Question (science, "At what temperature are Celsius and Fahrenheit equal?");
        questionRepository.save(scienceTemperature);

        Option sevenEight = new Option("78", scienceTemperature);
        optionRespository.save(sevenEight);
        scienceTemperature.addOption(sevenEight);

        Option minusFourZero = new Option("-40", scienceTemperature, true);
        optionRespository.save(minusFourZero);
        scienceTemperature.addOption(minusFourZero);

        Option minusTwoNine = new Option("-29", scienceTemperature);
        optionRespository.save(minusTwoNine);
        scienceTemperature.addOption(minusTwoNine);

        Option fourThree = new Option("43", scienceTemperature);
        optionRespository.save(fourThree);
        scienceTemperature.addOption(fourThree);

        science.addQuestion(scienceTemperature);

        Question scienceSun = new Question (science, "Roughly how long does it take for the sun’s light to reach earth?");
        questionRepository.save(scienceSun);

        Option eightSeconds = new Option("8 seconds", scienceSun);
        optionRespository.save(eightSeconds);
        scienceSun.addOption(eightSeconds);

        Option eightHours = new Option("8 hours", scienceSun);
        optionRespository.save(eightHours);
        scienceSun.addOption(eightHours);

        Option eightMinutes = new Option("8 minutes", scienceSun, true);
        optionRespository.save(eightMinutes);
        scienceSun.addOption(eightMinutes);

        Option eightDays = new Option("8 days", scienceSun);
        optionRespository.save(eightDays);
        scienceSun.addOption(eightDays);

        science.addQuestion(scienceSun);

        Question scienceMushrooms = new Question (science, "What is the study of mushrooms called?");
        questionRepository.save(scienceMushrooms);

        Option fungology = new Option("Fungology", scienceMushrooms);
        optionRespository.save(fungology);
        scienceMushrooms.addOption(fungology);

        Option mycology = new Option("Mycology", scienceMushrooms, true);
        optionRespository.save(mycology);
        scienceMushrooms.addOption(mycology);

        Option nephology = new Option("Nephology", scienceMushrooms);
        optionRespository.save(nephology);
        scienceMushrooms.addOption(nephology);

        Option pomology = new Option("Pomology", scienceMushrooms);
        optionRespository.save(pomology);
        scienceMushrooms.addOption(pomology);

        science.addQuestion(scienceMushrooms);

        Question scienceCountry = new Question (science, "What modern day country was Marie Curie born in?");
        questionRepository.save(scienceCountry);

        Option netherlands = new Option("Netherlands", scienceCountry);
        optionRespository.save(netherlands);
        scienceCountry.addOption(netherlands);

        Option slovenia = new Option("Slovenia", scienceCountry);
        optionRespository.save(slovenia);
        scienceCountry.addOption(slovenia);

        Option uk = new Option("UK", scienceCountry);
        optionRespository.save(uk);
        scienceCountry.addOption(uk);

        Option poland = new Option("Poland", scienceCountry, true);
        optionRespository.save(poland);
        scienceCountry.addOption(poland);

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

        Option dense = new Option("Dense", scienceElectric);
        optionRespository.save(dense);
        scienceElectric.addOption(dense);

        Option liquid = new Option("Liquid", scienceElectric);
        optionRespository.save(liquid);
        scienceElectric.addOption(liquid);

        Option insulator  = new Option("Insulator", scienceElectric, true);
        optionRespository.save(insulator);
        scienceElectric.addOption(insulator);

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

        Option twoPounds  = new Option("2 pounds", sciencePound);
        optionRespository.save(twoPounds);
        sciencePound.addOption(twoPounds);

        Option twoPointTwoPounds = new Option("2.2 pounds", sciencePound);
        optionRespository.save(twoPointTwoPounds);
        sciencePound.addOption(twoPointTwoPounds);

        Option zeroPointTwoPounds = new Option("0.2 pounds", sciencePound);
        optionRespository.save(zeroPointTwoPounds);
        sciencePound.addOption(zeroPointTwoPounds);

        Option zeroZeroTwoPounds  = new Option("0.02 pounds", sciencePound, true);
        optionRespository.save(zeroZeroTwoPounds);
        sciencePound.addOption(zeroZeroTwoPounds);

        science.addQuestion(sciencePound);

        Quiz grammar = new Quiz("Grammar");
        quizRepository.save(grammar);

        Question grammarLottery = new Question (grammar, "If I won the lottery...");
        questionRepository.save(grammarLottery);

        Option car  = new Option("I will buy a car", grammarLottery);
        optionRespository.save(car);
        grammarLottery.addOption(car);

        Option computer = new Option("I buy a computer", grammarLottery);
        optionRespository.save(computer);
        grammarLottery.addOption(computer);

        Option mansion  = new Option("I would buy a mansion", grammarLottery, true);
        optionRespository.save(mansion);
        grammarLottery.addOption(mansion);

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

        Option smart  = new Option("I would be very smart", grammarStudied);
        optionRespository.save(smart);
        grammarStudied.addOption(smart);

        Option passed  = new Option("I would have passed the exam", grammarStudied, true);
        optionRespository.save(passed);
        grammarStudied.addOption(passed);

        Option things = new Option("I will know more things", grammarStudied);
        optionRespository.save(things);
        grammarStudied.addOption(things);

        Option exam = new Option("I fail the exam", grammarStudied);
        optionRespository.save(exam);
        grammarStudied.addOption(exam);

        grammar.addQuestion(grammarStudied);

        Question grammarFood = new Question (grammar, "If I could only eat one food for the rest of my life...");
        questionRepository.save(grammarFood);

        Option pasta  = new Option("It will be pasta", grammarFood);
        optionRespository.save(pasta);
        grammarFood.addOption(pasta);

        Option tacos = new Option("It is tacos", grammarFood);
        optionRespository.save(tacos);
        grammarFood.addOption(tacos);

        Option burgers = new Option("It would have been burgers", grammarFood);
        optionRespository.save(burgers);
        grammarFood.addOption(burgers);

        Option pizza = new Option("It would be pizza", grammarFood, true);
        optionRespository.save(pizza);
        grammarFood.addOption(pizza);

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

        Option hungry  = new Option("I won’t be hungry", grammarFood1);
        optionRespository.save(hungry);
        grammarFood1.addOption(hungry);

        Option full = new Option("I will be full", grammarFood1);
        optionRespository.save(full);
        grammarFood1.addOption(full);

        Option sick = new Option("I would have been sick", grammarFood1, true);
        optionRespository.save(sick);
        grammarFood1.addOption(sick);

        Option pizza2 = new Option("I choose the pizza", grammarFood1);
        optionRespository.save(pizza2);
        grammarFood1.addOption(pizza2);

        grammar.addQuestion(grammarFood1);

        Question grammarGame = new Question (grammar, "If I lose this game...");
        questionRepository.save(grammarGame);

        Option angry2  = new Option("I would be angry", grammarGame);
        optionRespository.save(angry2);
        grammarGame.addOption(angry2);

        Option studied = new Option("I would have studied more", grammarGame);
        optionRespository.save(studied);
        grammarGame.addOption(studied);

        Option lose = new Option("I lose", grammarGame);
        optionRespository.save(lose);
        grammarGame.addOption(lose);

        Option sad1 = new Option("I will be sad", grammarGame, true);
        optionRespository.save(sad1);
        grammarGame.addOption(sad1);

        grammar.addQuestion(grammarGame);

        Question grammarEarlier = new Question (grammar, "If you had told me earlier...");
        questionRepository.save(grammarEarlier);

        Option helped = new Option("I would have helped you", grammarEarlier, true);
        optionRespository.save(helped);
        grammarEarlier.addOption(helped);

        Option would  = new Option("I would help you", grammarEarlier);
        optionRespository.save(would);
        grammarEarlier.addOption(would);

        Option will = new Option("I will help you", grammarEarlier);
        optionRespository.save(will);
        grammarEarlier.addOption(will);

        Option help = new Option("I help you", grammarEarlier);
        optionRespository.save(help);
        grammarEarlier.addOption(help);

        grammar.addQuestion(grammarEarlier);

        Question grammarCelebrity = new Question (grammar, "If I met a celebrity...");
        questionRepository.save(grammarCelebrity);

        Option autograph  = new Option("I will ask for an autograph", grammarCelebrity);
        optionRespository.save(autograph);
        grammarCelebrity.addOption(autograph);

        Option selfie = new Option("I would take a selfie", grammarCelebrity, true);
        optionRespository.save(selfie);
        grammarCelebrity.addOption(selfie);

        Option hello3 = new Option("I would have said “hello”", grammarCelebrity);
        optionRespository.save(hello3);
        grammarCelebrity.addOption(hello3);

        Option photo2 = new Option("I take a photo", grammarCelebrity);
        optionRespository.save(photo2);
        grammarCelebrity.addOption(photo2);

        grammar.addQuestion(grammarCelebrity);

        Question grammarGame1 = new Question (grammar, "If I win this game...");
        questionRepository.save(grammarGame1);

        Option lost  = new Option("I would have lost this game", grammarGame1);
        optionRespository.save(lost);
        grammarGame1.addOption(lost);

        Option celebrate = new Option("I would celebrate”", grammarGame1);
        optionRespository.save(celebrate);
        grammarGame1.addOption(celebrate);

        Option study3 = new Option("I study more", grammarGame1);
        optionRespository.save(study3);
        grammarGame1.addOption(study3);

        Option happy = new Option("I will be very happy", grammarGame1, true);
        optionRespository.save(happy);
        grammarGame1.addOption(happy);

        grammar.addQuestion(grammarGame1);

    }
}
