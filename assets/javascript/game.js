var gameNumber = 0;
var userNumber = 0;
var heartlessValues = [];
var gameOver = false;

var wins = 0;
var losses = 0;

var basicHeartless = new Audio("assets/sounds/attack1.wav");
var heartlessSoldier = new Audio("assets/sounds/attack2.wav");
var heartlessNeoshadow = new Audio("assets/sounds/attack3.wav");
var whiteHeartless = new Audio("assets/sounds/attack4.mp3");
var gobust = new Audio("assets/sounds/gobust.wav");
var win = new Audio("assets/sounds/win.wav");



function newGame() {
    gameOver = false;
    userNumber = 0;
    heartlessValues = [];
    gameNumber = Math.floor(Math.random() * (120 - 19) + 19);

    $("#userNumber").html(userNumber);
    $("#userNumber").removeClass("winning-number");
    $("#userNumber").removeClass("losing-number");
    $("#gameNumber").html(gameNumber);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);


    while (heartlessValues.length < 4) {
        var values = Math.floor((Math.random() * 12) + 1);
        if (heartlessValues.indexOf(values) < 0) {
            heartlessValues.push(values);
        }
    }

}

$("#basic-heartless").click(function () {
    if (gameOver === false) {
        userNumber = userNumber + heartlessValues[0];
        basicHeartless.play();
        $("#userNumber").html(userNumber);
        gameChecker();
    }
});
$("#heartless-soldier").click(function () {
    if (gameOver === false) {

        userNumber = userNumber + heartlessValues[1];
        heartlessSoldier.play();
        $("#userNumber").html(userNumber);
        gameChecker();
    }
});
$("#heartless-neoshadow").click(function () {
    if (gameOver === false) {

        userNumber = userNumber + heartlessValues[2];
        heartlessNeoshadow.play();
        $("#userNumber").html(userNumber);
        gameChecker();
    }
});
$("#white-heartless").click(function () {
    if (gameOver === false) {

        userNumber = userNumber + heartlessValues[3];
        whiteHeartless.play();
        $("#userNumber").html(userNumber);
        gameChecker();
    }
});


function gameChecker() {
    if (userNumber === gameNumber) {
        gameOver = true;
        wins++;
        wins.play();
        $("#userNumber").attr("class", "winning-number");
        console.log(heartlessValues);
        setTimeout(newGame, 1850);
        console.log(heartlessValues);
    } else if (userNumber > gameNumber) {
        gameOver = true;
        losses++;
        gobust.play();
        $("#userNumber").attr("class", "losing-number");
        console.log(heartlessValues);
        setTimeout(newGame, 3000);
        console.log(heartlessValues);
    }
}

newGame();