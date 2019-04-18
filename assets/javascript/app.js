var rate;
var clockRunning = false;
var gameVariables = {
    correct: 0,
    incorrect: 0,
    missed: 0,
    timeLeft: 30,
    qCounter: 0,
    endImage: '<img class="images" src="./assets/images/End.gif" alt="End of Game">',
    //method to push and track time left to make a choice
    timer: () => {
        console.log('timer working')
        if(!clockRunning){
        rate = setInterval(gameVariables.count, 1000);
        clockRunning = true;
    }
    },
    
    count: () => {
        gameVariables.timeLeft--; 
        $('#time').html('Time Remaining: ' + gameVariables.timeLeft + ' Seconds!');

        console.log(gameVariables.timeLeft)
    },    
    
    // logic for game
    decide: () => {
        //create check for end of time or buttons clicked
        if ((gameVariables.timeLeft <= 0) || (gamePlayArray[i].clicked == true)) {
            gameVariables.missed++;
            gameVariables.clearDivs();
            setTimeout(gameVariables.pushMissed,3000);
        }
    
        //question to reshow the the start button should the array finish after all is done
        if ((gameVariables.correct + gameVariables.incorrect + gameVariables.missed) ==  (gamePlayArray.length-1)) {
            gameVariables.clearDivs();
            //brings start button back upon completion
            $('#startbtn').css({"display":"block"});
            $('#startText').css({"display":"block"});
        }
    },
    
    //method to clear div's
    clearDivs: () => {
        $('#optionSelect').empty();
        // $('#time').empty();
    },
    // <button type="button" class="btn btn-dark"> B. Buzby </button>
    //Method to push question and choices from array
    pushQs: () => {

        let index = gameVariables.qCounter;
        gameVariables.clearDivs();
        // Append question text to question div
        $("#question").text((gamePlayArray[index].question));

        gamePlayArray[index].choices.forEach((choice) => {
            let button = $("<button>", { "class": "choices btn btn-dark" });
            $(button).text(choice);
            $("#optionSelect").append(button);           
        })

        gameVariables.qCounter++;
    },

    //Push wrong response screen
    pushWrong: () => {
        $('#question').append(gamePlayArray[i].wrongAnswer);
        $('#choiceA').append("Time Left: " + gameVariables.timeLeft);
        $('#choiceB').append(gamePlayArray[i].gif);
    },

    //Push correct response screen
    pushCorrect: () => {
        $('#question').append(gamePlayArray[i].rightAnswer);
        $('#choiceA').append("Time Left: " + gameVariables.timeLeft)
        $('#choiceB').append(gamePlayArray[i].gif);
    },

    pushResults: () => {
        $('#question').append("Number Correct: " + gameVariables.correct);
        $('#choiceA').append("Number Incorrect: " + gameVariables.incorrect);
        $('#choiceB').append("Number Unanswered: " + gameVariables.missed);
        $('#choiceC').append(gameVariables.endImage);
    },

    pushMissed: () => {
        $('#question').append("You missed it! Let's try on the next Question!");
    }
        
    };



//~~*~~*~~ Question Array Variables ~~*~~*~~

var gamePlayArray = [
    // Sonic
    {
        question: 'Name a famous SEGA character that is ultra fast, was a flagship for the system and has over 100 titles to date!',
        choices: ['A. Purple Durple', 'B. Buzby', 'C. Sonic', 'D. Tails'],
        rightAnswer: 'You got it right! Well done. The answer is Sonic!',
        wrongAnswer: 'You got it wrong! The correct answer is Sonic! You gotta be faster next time..!',
        gif: '<img class="images" src="./assets/images/Sonic.gif" alt="Sonic The Hedgehog">',
        audio: '',
        answer: 'C. Sonic'
        
    },
    // Mario
    {
        question: 'Name a famous Nintendo Character that is from a famous 2d side scoller and is always trying to rescue a princess!',
        choices: ['A. Mario', 'B. Donkey Kong', 'C. Spider-man', 'D. The Terminator'],
        rightAnswer: 'You got it right! Well done. The answer is Mario!',
        wrongAnswer: 'You got it wrong! The correct answer is Mario! You gott abe faster next time..!',
        gif: '<img class="images" src="./assets/images/Mario.gif" alt="Mario">',
        audio: '',
        answer: 'A. Mario'
    },
    // Crash
    {
        question: 'What terrestrial marsupial would work through portals and spin in order to defeat the evil Dr. Neo Cortex!',
        choices: ['A. Pickle Rick', 'B. Donkey Kong', 'C. Crash Bandicoot', 'D. Toad'],
        rightAnswer: 'You got it right! Well done. The answer is Crash Bandicoot!',
        wrongAnswer: 'You got it wrong! The correct answer is Crash Bandicoot! You gott abe faster next time..!',
        gif: '<img class="images" src="./assets/images/crashBandicoot.gif" alt="Crash Bandicoot">',
        audio: '',
        answer: 'C. Crash Bandicoot'
    },
    // comixZone
    {
        question: 'A video game famous for traversing the pages of graphic novels in its gameplay.',
        choices: ['A. Teenage Mutant Ninja Turtles', 'B. ComixZone', 'C. Spider-man', 'D. Paperboy'],
        rightAnswer: 'You got it right! Well done. The answer is ComixZone!',
        wrongAnswer: 'You got it wrong! The correct answer is ComixZone! lets turn that page!',
        gif: '<img class="images" src="./assets/images/comixZone.gif" alt="Comix Zone">',
        audio: '',
        answer: 'B. ComixZone'
    },
    // earthWormJim
    {
        question: 'Can you name a galaxy crusading annelid taking on the evils of the universe?',
        choices: ['A. Earthworm Jim', 'B. Bob Barker', 'C. Cypher', 'D. Galactic Earthworm Crusader'],
        rightAnswer: 'You got it right! Well done. The answer is Earthworm Jim!',
        wrongAnswer: 'You got it wrong! The correct answer is Earthworm Jim! Not so groovy!',
        gif: '<img class="images" src="./assets/images/earthwormJim.gif" alt="Earthworm Jim">',
        audio: '',
        answer: 'A. Earthworm Jim'
    },
    // masterChief
    {
        question: 'What famous super soldier fought the covenant and the flood just for starters while protecting the planet earth?',
        choices: ['A. Tom Clancy', 'B. Logan', 'C. Batman', 'D. Master Chief'],
        rightAnswer: 'You got it right! Well done. The answer is Master Chief!',
        wrongAnswer: 'You got it wrong! The correct answer is Master Chief! Better luck next time soldier!',
        gif: '<img class="images" src="./assets/images/masterChief.gif" alt="Master Chief">',
        audio: '',
        answer: 'D. Master Chief'
    },
    // mortalCombat
    {
        question: 'Name a famous video game series that not only was a great fighting game, but was famous for its finishing moves!',
        choices: ['A. Street Fighter', 'B. Mortal Combat', 'C. Marvel vs. Capcom', 'D. Battle Toads'],
        rightAnswer: 'You got it right! Well done. The answer is Mortal Combat!',
        wrongAnswer: 'You got it wrong! The correct answer is Mortal Combat! Finish Him!',
        gif: '<img class="images" src="./assets/images/mortalCombat.gif" alt="Mortal Combat">',
        audio: '',
        answer: 'B. Mortal Combat'
    },

];


$(document).ready(function() {
    // Start game on start button click
    $("#startbtn").click(function(e){
        e.preventDefault();
        $('#startbtn').css({"display":"none"});
        $('#startText').css({"display":"none"});
        // gameVariables.timer();
        
        //Clearing out Divs as precaution each time
        gameVariables.clearDivs();
        
        //push question details
        gameVariables.pushQs();
        
        //timer countdown
        gameVariables.timer();
        
    });
        
        
    //Clickable Button Section
    $("#optionSelect").on("click", ".choices", function(e){
        e.preventDefault();
        console.log("I'm clicked!");
        gameVariables.clockRunning = true;
        gameVariables.pushQs();


        // if (gamePlayArray[i].choiceInput1 == gamePlayArray[i].answer) {
        //     gameVariables.correct++;
        //     gameVariables.clearDivs();
        //     setTimeout(gameVariables.pushCorrect,3000);
        // }
        // else {
        //     gameVariables.incorrect++;
        //     gameVariables.clearDivs();
        //     setTimeout(gameVariables.pushWrong,3000);
            
        // }
    });

    // $('#choiceB').click(function(i){
    //     gamePlayArray.clicked = true;
    //     if (gamePlayArray[i].choiceInput2 == gamePlayArray[i].answer) {
    //         gameVariables.correct++;
    //         gameVariables.clearDivs();
    //         setTimeout(gameVariables.pushCorrect,3000);
    //     }
    //     else {
    //         gameVariables.incorrect++;
    //         gameVariables.clearDivs();
    //         setTimeout(gameVariables.pushWrong,3000);
    //     }
    // });

    // $('#choiceC').click(function(i){
    //     gamePlayArray.clicked = true;
    //     if (gamePlayArray[i].choiceInput3 == gamePlayArray[i].answer) {
    //         gameVariables.correct++;
    //         gameVariables.clearDivs();
    //         setTimeout(gameVariables.pushCorrect,3000);
            
    //     }
    //     else {
    //         gameVariables.incorrect++;
    //         gameVariables.clearDivs();
    //         setTimeout(gameVariables.pushWrong,3000);
    //     }
    // });

    // $('#choiceD').click(function(i){
    //     gamePlayArray.clicked = true;
    //     gameVariables.correct++;
        
    //     if (gamePlayArray[i].choiceInput4 == gamePlayArray[i].answer) {
    //         gameVariables.correct++;
    //         gameVariables.clearDivs();
    //         setTimeout(gameVariables.pushCorrect,3000);
    //     }
    //     else {
    //         gameVariables.incorrect++;
    //         gameVariables.clearDivs();
    //         setTimeout(gameVariables.pushWrong,3000);
    //     }
        
    // });

    
});  
    
    
    
    
 



