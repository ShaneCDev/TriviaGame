# Trivia Game

This is a simple trivia game for anyone who wants to test their knowledge under the following four categories, Movies, Games, TV Shows and Sports. The main purpose of this site is to test users knowledge of various different categories.
![AmIResponsive](assets/img/amiresponsive.png)
The website can be viewed here. [Trivia Game](https://shanecdev.github.io/quiz/)

# Index - Table of Contents

- [User Experience (UX)](https://github.com/ShaneCDev/quiz#user-experience-ux)
- [Features](https://github.com/ShaneCDev/quiz#features)
- [Technologies Used](https://github.com/ShaneCDev/quiz#technologies-used)
- [Testing](https://github.com/ShaneCDev/quiz#testing)
- [Deployment](https://github.com/ShaneCDev/quiz#deployment)
- [Credits](https://github.com/ShaneCDev/quiz#credits)
- [Acknowledgments](https://github.com/ShaneCDev/quiz#acknowledgments)

# User Experience (UX)

## User Stories

- ## As a website owner I want:
1. The website to read in a random quiz everytime so all the answers are not always the same.
2. The website to track the users score and store it in a leaderboard.
3. The website provides users a place to come and test their knowledge.

- ## As a website user I want:
1. To easily understand the purpose of the site.
2. To be able to track my score and see where I rank among other users.
3. To test my knowledge of Movies, Games, TV Shows and Sports.

- As a Returning Website User I want:
1. The quiz to be different so that the answers ain't the same.

# 1. Strategy
- The main purpose for creating this website is to provide users with a place to test their knowledge.

# 2. Scope
- The multipage design is relatively simple and the quiz and how to play is provided to the user clearly and concisely.
- The information and quiz can be accessed and played on all devices.

# 3. Structure
- Users will find themselves on the homepage where they will met with 6 buttons.
- The 6 buttons are, "How to play", "Leaderboard", "Movies", Games", "Shows", and "Sports".
- The "How to play" button when clicked will show a popup that will explain the rules and how to play.
- The "Leaderboard" button when clicked will take you to the leaderboard page where you can see where you rank among others.
- When either of the other four buttons are clicked they will take you to the quiz page and will display questions and answers based on what was clicked, so for example if the user clicks the "Movies" button they will be brought to a page that will display movie questions and answers.

# 4. Skeleton
## Wireframes
The wireframes were made using Balsamiq.
- [Home](/assets/img/wireframes/index.png)
- [Quiz](/assets/img/wireframes/quiz.png)
- [End](/assets/img/wireframes/end.png)
- [Leaderboard](/assets/img/wireframes/leaderboard.png)

# 5. Surface
- ## Colour
![Colour Palette](assets/img/colourpalette.png)

The colour palette is based on another idea I had for a website.

- ## Fonts
'Yellowtail' and 'Lato' are the fonts used for this website and have been imported from Google fonts.

# Features
## Existing Features

# Technologies Used

- ## Languages 
1. [HTML5](https://en.wikipedia.org/wiki/HTML5)
2. [CSS3](https://en.wikipedia.org/wiki/CSS)
3. [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

- ## Misc Software
- [Google Fonts](https://fonts.google.com/) - To import fonts used on the site.
- [Gitpod](https://gitpod.io/) - IDE used to create the site.
- [Balsamiq](https://balsamiq.com/) - Used to create wireframes.
- [Github](https://github.com/) - To save and store the files for the site.
- [Google Developer Tools](https://developer.chrome.com/docs/) - To troubleshoot and test features and solve issues with responsiveness.
- [Open Trivia Database](https://opentdb.com/) - API used for the quiz.

# Testing
- ## HTML Validator
    At various stages HTML Validation was done.
    ![HTML Validation](/assets/img/index%20html%20validator.png)
- ## CSS Validator
    At various stages CSS Validation was done.
    ![CSS Validation](/assets/img/css%20validator.png)

- ## Lighthouse
    At various stages Lighthouse testing was done.

    ![Lighthouse](/assets/img/lighthouse%20desktop%20quiz.png)
    ![Lighthouse](/assets/img/lighthouse%20mobile.png)

- ## Solved Bugs

| No | Bug | How I solved the issue |
| :--- | :--- | :--- |
| 1 | The user was able to click the 'Next Question' button without actually selecting an answer. | I added a boolean value which made it so that you could not click the 'Next Question' button without selecting an answer first.
| 2 | I couldn't add the 'wrong-ans' and 'right-ans' classes to whatever button the user clicked. | I was watching a few quiz videos on youtube whilst learning how to go about writing this quiz and came across Web Dev Simplifieds quiz and he went over it in his video so I implemented his solution by returning the answer buttons as a nodelist and then converting them to an array using 'Array.from' I was able to solve the issue.
| 3 | When playing the quiz I have a 'Question No:' counter that should show the relative Question number and when you click the 'Next Question' button that question number increments by 1. But when I got to the last question it was stuck at 9/10 instead of 10/10. | I added a currentQuestionIndex variable and added an if statement which said if currentQuestionIndex = 10 the 'Question No: 10/10'

- ## Browser Compatability
The website was tested on the following browsers:
- Google Chrome: Version 105.0.5195.127 (Official Build) (64-bit)
- Mozilla Firefox: Version 104.0.2 (64-bit)
- OperaGX: Version 90.0.4480.100


# Deployment & Local Development
## Deployment
The website was deployed using GitHub Pages - [Trivia Game](https://shanecdev.github.io/quiz/index.html)

To deploy the site using GitHub pages: 

1. Go into a repository, click on Settings.
2. Click on GitHub Pages.
3. Click on branches and select "main" from the dropdown.
4. Once "main" is selected, the page will be refreshed automatically and the page will indicate successful deployment and the link will appear.
5. Further changes will be automatically deployed to the live site using the "git push" command from the development environment.

## Local Development

### How to fork

To fork the repository: 

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [ShaneCDev/quiz](https://github.com/ShaneCDev/quiz)
3. Click the fork button in the top right corner.

### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [ShaneCDev/quiz](https://github.com/ShaneCDev/quiz)
3. Click on the code button, select whether you would like to with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste hte link you copied in step 3. Press enter.

# Credits
- ## Coding
- Some functions of the quiz were built following a tutorial from Web Dev Simplified. [Click here for video](https://www.youtube.com/watch?v=riDzcEQbX6k)

# Acknowledgments
I would like to thank:
- My mentor Rahul Lakhanpal for his feedback, guidance and support whilst working on this project.
- Slack Community especially Dave Horrucks the man is a hero.