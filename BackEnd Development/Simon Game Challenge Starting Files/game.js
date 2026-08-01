var acceptingInput = false;
var level = 0;
var userStep = 0;
var colorSet = ["green", "red", "yellow", "blue"];
var colorSequence = [];
var defaultBodyBackgroundColor = $("body").css("background-color");


$(document).off("keypress click touchstart").on("keypress click touchstart",function (){
    StartTheGame();
});


function StartTheGame(){ //game start completed V
    $(document).off("keypress click touchstart");
    level = 0;
    colorSequence = [];
    $("h1").text("level " + level);
    $("h2").hide();
    gameContinues();
}

function gameContinues(){
    userStep = 0;    
    level++;
    $("h1").text("level " + level);
    nextInSequence();
    acceptingInput = false;
    sequencePop();
    checkWhosClicking();
}

function nextInSequence(){
    colorSequence.push(colorSet[Math.floor(Math.random()*4)]);
}

function sequencePop(){
    let i=0;
    let interval = setInterval(function(){
        popTheColor(colorSequence[i]);
        playTheSoundOf(colorSequence[i]);
        i++;
        if(i>=colorSequence.length)
        {
            clearInterval(interval);
            acceptingInput = true;
        }

    },600)
    
}

function checkWhosClicking(){
    $(".btn").click(function(){
    if (!acceptingInput) return;
    var clickedColor = this.id;
    popTheColor(clickedColor);

    if (clickedColor === colorSequence[userStep]) {
        playTheSoundOf(clickedColor);
        userStep++;
        if (userStep === colorSequence.length) {
            acceptingInput = false;
            $(".btn").off("click");
            setTimeout(gameContinues, 800);
        }
    } else {
        clickedWrong();
    }
});
}

function popTheColor(chosenColor){ // Pop the color Completed
            $("#" + chosenColor).animate({
            backgroundColor: "#FF007F",
            opacity: 0.5 ,
            borderWidth : "20px",
            borderColor : "#FFFFFF"}, 100).animate({
            backgroundColor: chosenColor,
            opacity: 1 ,
            borderWidth : "10px",
            borderColor : "#000000"}, 100).delay(500);
}

function clickedWrong(){
    $(".btn").off("click");
    playTheSoundOf("wrong");
   $("body").animate({
        backgroundColor: "red",
        opacity: 0.8 }, 100).animate({
        backgroundColor: defaultBodyBackgroundColor,
        opacity: 1 }, 100);
    $("h1").text("Game Over, Press Any Key To Restart");
    $(document).keypress(function(){StartTheGame();});
}

function  playTheSoundOf(chosenSound){ // playTheSoundOff Comleted V
    switch(chosenSound)
    {
        case 'green':
            const greenSound = new Audio("./sounds/green.mp3");
            greenSound.play();
            break;
        case 'red':
            const redSound = new Audio("./sounds/red.mp3");
            redSound.play();
            break;
        case 'yellow':
            const yellownSound = new Audio("./sounds/yellow.mp3");
            yellownSound.play();
            break;
        case 'blue':
            const blueSound = new Audio("./sounds/blue.mp3");
            blueSound.play();
            break;
        case 'wrong':
            const wrongSound = new Audio("./sounds/wrong.mp3");
            wrongSound.play();
            break;
        default: alert("INFRA sound is PLAYING")
    }
}


