let rate;
let index;
let clockRunning = false;
let gameVariables = {
    wrongMsg: "You got it wrong. You gotta be faster next time! The correct answer is ",
    correctMsg: "You got it right! Well done. The answer is ",
    correct: 0,
    incorrect: 0,
    missed: 0,
    timeLeft: 30,
    qCounter: 0,
    endImage: '<img class="images" src="./assets/images/End.gif" alt="End of Game">',

    //method to push and track time left to make a choice
    startTimer: () => {
        console.log('timer working')
        if(!clockRunning){
        rate = setInterval(gameVariables.count, 1000);
        // clockRunning = true;
        }
    },

    count: () => {
        gameVariables.timeLeft--;
        $('#time').html('Time Remaining: ' + gameVariables.timeLeft + ' Seconds!');

        // check if value is 0 to end turn
        if (gameVariables.timeLeft == 0) {
            gameVariables.stopTimer();
            gameVariables.pushMissed();
        }
        

        console.log(gameVariables.timeLeft)
    },    

    // stop timer function
    stopTimer: () => {
        clearInterval(rate);
    },

    // logic for game
    decide: (chosenAns, index) => {

        if (chosenAns == gamePlayArray[index].answer) {
            gameVariables.correct++;
            gameVariables.updateScore();
            gameVariables.clearDivs();
            gameVariables.pushCorrect();
            gameVariables.qCounter++;
        }
        else {
            gameVariables.incorrect++;
            gameVariables.updateScore();
            gameVariables.clearDivs();
            gameVariables.pushWrong();
            gameVariables.qCounter++;
        }
    //     //create check for end of time or buttons clicked
    //     if ((gameVariables.timeLeft <= 0) || (gamePlayArray[i].clicked == true)) {
    //         gameVariables.missed++;
    //         gameVariables.clearDivs();
    //         setTimeout(gameVariables.pushMissed,3000);
    //     }
    
    //     //question to reshow the the start button should the array finish after all is done
    //     if ((gameVariables.correct + gameVariables.incorrect + gameVariables.missed) ==  (gamePlayArray.length-1)) {
    //         gameVariables.clearDivs();
    //         //brings start button back upon completion
    //         $('#startbtn').css({"display":"block"});
    //         $('#startText').css({"display":"block"});
    //     }
    },
    
    //method to clear div's
    clearDivs: () => {
        $('#optionSelect').empty();
        $("#modalTitle").empty();
        $("#modalMsg").empty();
        $("#modalImg").empty();
        $("#modalTime").empty();
        $("#modalFooter").empty();
        // $('#time').empty();
    },

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
    },

    updateScore: () => {
        let reamining = (gamePlayArray.length - gameVariables.correct - gameVariables.incorrect - gameVariables.missed)
        $('#winBox').text(gameVariables.correct);
        $('#lossBox').text(gameVariables.incorrect);
        $('#remainingBox').text(reamining);
        $('#missBox').text(gameVariables.missed);
    },

    //Push wrong response screen
    pushWrong: () => {

        // build next button
        let infoButton = $("<button>", { "id": "nextQBtn", "class": "choices btn btn-dark", "data-dismiss": "modal", "type": "button" });
            $(infoButton).text("Next Question");
            $("#modalFooter").append(infoButton);    

        // Append Data
        $("#modalTitle").text("Incorrect!");
        $('#modalMsg').append(gameVariables.wrongMsg + "\"" + gamePlayArray[gameVariables.qCounter].answer + "\"!");
        $('#modalTime').append("Time Left: " + gameVariables.timeLeft);
        $('#modalImg').append(gamePlayArray[gameVariables.qCounter].gif);
        $("#infoModal").modal({ show: true, backdrop: 'static', keyboard: false, focus: true });
    },

    //Push correct response screen
    pushCorrect: () => {

        // build next button
        let infoButton = $("<button>", { "id": "nextQBtn", "class": "choices btn btn-dark", "data-dismiss": "modal", "type": "button" });
            $(infoButton).text("Next Question");
            $("#modalFooter").append(infoButton);   

        // Append Data
        $("#modalTitle").text("Correct!");
        $('#modalMsg').append(gameVariables.correctMsg + "\"" +  gamePlayArray[gameVariables.qCounter].answer + "\"!");
        $('#modalTime').append("Time Left: " + gameVariables.timeLeft)
        $('#modalImg').append(gamePlayArray[gameVariables.qCounter].gif);
        $("#infoModal").modal({ show: true, backdrop: 'static', keyboard: false, focus: true });
    },

    pushResults: () => {

        // build next button
        let infoResultButton = $("<button>", { "id": "playAgainBtn", "class": "choices btn btn-dark", "data-dismiss": "modal", "type": "button" });
            $(infoResultButton).text("Play Again!");
            $("#modalFooter").append(infoResultButton);  

        // Append Data
        $("#modalTitle").text("Final Results!");
        $('#modalBody').append("Number Correct: " + gameVariables.correct);
        $('#modalBody').append("Number Incorrect: " + gameVariables.incorrect);
        $('#modalBody').append("Number Unanswered: " + gameVariables.missed);
        $('#modalImg').append(gameVariables.endImage);
        $("#infoModal").modal('show');
    },

    pushMissed: () => {
        $("#modalTitle").text("Correct!");
        $('#modalMsg').append("You missed it! Let's try on the next Question!");
    }
        
    };

//~~*~~*~~ Question Array Variables ~~*~~*~~

var gamePlayArray = [
    // Sonic
    {
        question: 'Name a famous SEGA character that is ultra fast, was a flagship for the system and has over 100 titles to date!',
        choices: ['A. Purple Durple', 'B. Buzby', 'C. Sonic', 'D. Tails'],
        gif: '<img class="images" src="./assets/images/Sonic.gif" alt="Sonic The Hedgehog">',
        audio: '',
        answer: 'C. Sonic'
        
    },
    // Mario
    {
        question: 'Name a famous Nintendo Character that is from a famous 2d side scoller and is always trying to rescue a princess!',
        choices: ['A. Mario', 'B. Donkey Kong', 'C. Spider-man', 'D. The Terminator'],
        gif: '<img class="images" src="./assets/images/Mario.gif" alt="Mario">',
        audio: '',
        answer: 'A. Mario'
    },
    // Crash
    {
        question: 'What terrestrial marsupial would work through portals and spin in order to defeat the evil Dr. Neo Cortex!',
        choices: ['A. Pickle Rick', 'B. Donkey Kong', 'C. Crash Bandicoot', 'D. Toad'],
        gif: '<img class="images" src="./assets/images/crashBandicoot.gif" alt="Crash Bandicoot">',
        audio: '',
        answer: 'C. Crash Bandicoot'
    },
    // comixZone
    {
        question: 'A video game famous for traversing the pages of graphic novels in its gameplay.',
        choices: ['A. Teenage Mutant Ninja Turtles', 'B. ComixZone', 'C. Spider-man', 'D. Paperboy'],
        gif: '<img class="images" src="./assets/images/comixZone.gif" alt="Comix Zone">',
        audio: '',
        answer: 'B. ComixZone'
    },
    // earthWormJim
    {
        question: 'Can you name a galaxy crusading annelid taking on the evils of the universe?',
        choices: ['A. Earthworm Jim', 'B. Bob Barker', 'C. Cypher', 'D. Galactic Earthworm Crusader'],
        gif: '<img class="images" src="./assets/images/earthwormJim.gif" alt="Earthworm Jim">',
        audio: '',
        answer: 'A. Earthworm Jim'
    },
    // masterChief
    {
        question: 'What famous super soldier fought the covenant and the flood just for starters while protecting the planet earth?',
        choices: ['A. Tom Clancy', 'B. Logan', 'C. Batman', 'D. Master Chief'],
        gif: '<img class="images" src="./assets/images/masterChief.gif" alt="Master Chief">',
        audio: '',
        answer: 'D. Master Chief'
    },
    // mortalCombat
    {
        question: 'Name a famous video game series that not only was a great fighting game, but was famous for its finishing moves!',
        choices: ['A. Street Fighter', 'B. Mortal Combat', 'C. Marvel vs. Capcom', 'D. Battle Toads'],
        gif: '<img class="images" src="./assets/images/mortalCombat.gif" alt="Mortal Combat">',
        audio: '',
        answer: 'B. Mortal Combat'
    },

];


$(document).ready(function() {

    // Setup Scores to Start
    gameVariables.updateScore();

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
        gameVariables.startTimer();
        
    });
        
        
    //Clickable Button Section
    $("#optionSelect").on("click", ".choices", function(e){
        e.preventDefault();
        // Capture value of clicked button
        let chosenAns = $(this).text();
        let index = gameVariables.qCounter;
        gameVariables.clockRunning = true;
        gameVariables.decide(chosenAns, index);
        
    });

    // Reset Play Again Button
    $("#playAgainBtn").on("click", ".choices", function(e){
        e.preventDefault();
        $("#infoModal").modal('hide');
        console.log('lets go again!');
    });

    // Reset PLay Again Button
    $("#modalFooter").on("click", "#nextQBtn", function(e){
        e.preventDefault();
        gameVariables.pushQs();
        $("#infoModal").modal('hide');
    });
    
});  
    
    
    // check to see if you want to add button to close for different functionality (prob best)
    // check how to add and maniplate index if should be global variable or localized
    
 



