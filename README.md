![Educational Goals](/client/src/images/Logo-round.jpg)

## We proudly present:
<br>

# **Educational Goals**

### Our Own Goals:
<br>
<p>This app is designed as a teaching tool in the form of a penalty shoot out based game to be used either in small group settings and/or over Zoom to revise material taught in the lesson/session.
</p>

<p>
It revolves around a competitive quiz element where a correct answer lets the player take a penalty and ideally would be two players with a single player mode to be created after this is achieved. 
</p>

## Run Educational Goals

1. Fork the project by navigating to the top right hand corner of the page:

![Fork](/imgReadMe/readMe1.jpg)

2. Now, navigate to your new fork. Its name should be:

```
https://github.com/YOUR-USER-NAME/Educational-Goals
```

3. Ensuring you are on your own forked version of the app, click on the green "Code" icon, again towards the top right of the page (but under the fork button):

![Code](/imgReadMe/readMe2.jpg)

4. Chose your preferred clone option, we will select HTTPS and copy the URL for your repository. 

5. Open the command line and CD to your chosen directory.

6. Use the command git clone and the URL to your forked repository:

```
git clone https://github.com/YOUR-USER-NAME/Educational-Goals.git 
```

7. You have now made a local copy of the repository. You can double check that the directory exists using the ```ls``` command in the terminal.

8. Open the server package in your favoured IDE (IntelliJ recommended), and run the application to load the database of questions/answers:

![backendRun](/imgReadMe/readMe3.jpg)

9. CD into the client package and run an npm install and start commands in the command line to start the React aspect of the app. 

```
npm install 
npm start
```

10. Open [http://localhost:3000](http://localhost:3000) to view it in your browser (Google Chrome recommended).

![appHome](/imgReadMe/readMe4.jpg)

### Our MVP:

* The user must be able to answer questions coming from a self-made API.
* The players must be able to control the striker and goalkeeper in the penalty.
* The score should be displayed throughout the game.
* The app must have a start screen with at least a name selector.

### Tools and Resources used:

* VS Code
* IntelliJ
* React
* Spring Boot
* Bootstrap
* Hibernate
* Framer

### Key Features:

* Single and Two Player modes available.
* 9 player colours to choose from and can enter their own names. 
* Play a football themed tune whilst you set up.
* Each quiz has 10 questions, giving each player 5 chances of playing the penalty aspect, just like a normal penalty shootout!
* If the question is answered correctly, the player who answered then attempts to score their penalty whilst the other player controls the goalkeeper, trying to save the penalty. 
* If they get an answer wrong, they automatically miss the penalty. 
* Both sound and animation indicate to the players whether a penalty has been scored or missed and a scoreboard updates to track who's winning the shootout. 
* Animations for a player win or a draw appear after the last penalty.
* There are 4 preloaded quizzes drawn from the constructed API - Romans, Scotland, Science & Grammar. 
* You can also create your own quiz to play with game with, following the step by step instructions. 

## Screenshots

### Game set-up:
\
![setup](/imgReadMe/readMe5.jpg)


___

### Game Questions:
\
![questions](/imgReadMe/readMe6.jpg)

___

### Penalty Scored:
\
![questions](/imgReadMe/readMe7.jpg)

___

### Penalty Missed: 
\
![questions](/imgReadMe/readMe8.jpg)
