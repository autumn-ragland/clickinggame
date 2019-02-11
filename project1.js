//change background buttons
$("#back1").on("click",backRed);
function backRed() {
    $("body").toggleClass("redBack");
    $("#back1").toggleClass("selected")
}
$("#back2").on("click",backBlue);
function backBlue() {
    $("body").toggleClass("blueBack");
    $("#back2").toggleClass("selected")
}
$("#back3").on("click",backYellow);
function backYellow() {
    $("body").toggleClass("yellowBack");
    $("#back3").toggleClass("selected")
}

//player one and player two counters
var counter1 = 0;
var counter2 = 0;
//on click
$("#player1").on("click",addIt1);
function addIt1() {
    counter1++;
    $("#player1count").text(counter1);
    leadPlayer();
    stopGame();
}
$("#player2").on("click",addIt2);
function addIt2() {
    counter2++;
    $("#player2count").text(counter2);
    leadPlayer();
    stopGame();
}
//on key down (addEventListeners functions)
function addItQ(e) {
    if (e.code === "KeyQ"){
        counter1++;
        $("#player1count").text(counter1);
        leadPlayer();
        stopGame();
    }
}
function addItP(e) {
    if(e.code === "KeyP"){
        counter2++;
        $("#player2count").text(counter2);
        leadPlayer();
        stopGame();
    }
}

//who is in the lead
function leadPlayer() {
    if(counter1 > counter2){
        $("#inLead").text("Player 1")
    }
    else if(counter1 === counter2){
        $("#inLead").text("TIE")
    }
    else if(counter2 > counter1){
        $("#inLead").text("Player 2")
    }
}

//who won and stop the game
function stopGame() {
    if (counter1 === 15){
        $("#inLead").text("Winner Player 1");
        $("#player2").attr("disabled","");
        $("#player1").attr("disabled","");
        $("#mouseplay").attr("disabled","");
        $("#keyboardplay").attr("disabled","");
        document.removeEventListener("keydown", addItQ);
        document.removeEventListener("keydown",addItP);
        $("#playAgain").removeAttr("hidden");
        $("#mouseplay").removeClass("selected");
        $("#keyboardplay").removeClass("selected");
    }
    else if (counter2 === 15){
        $("#inLead").text("Winner Player 2");
        $("#player2").attr("disabled","");
        $("#player1").attr("disabled","");
        $("#mouseplay").attr("disabled","");
        $("#keyboardplay").attr("disabled","");
        document.removeEventListener("keydown", addItQ);
        document.removeEventListener("keydown",addItP);
        $("#playAgain").removeAttr("hidden");
        $("#mouseplay").removeClass("selected");
        $("#keyboardplay").removeClass("selected");
    }
}

//play again button
$("#playAgain").on("click", reload);
function reload(){
    console.log("clicked");
    counter1 = 0;
    counter2 = 0;
    $("#player2").removeAttr("disabled","");
    $("#player1").removeAttr("disabled","");
    $("#mouseplay").removeAttr("disabled","");
    $("#mouseplay").addClass("selected");
    $("#keyboardplay").removeAttr("disabled","");
    $("#player1count").text("0");
    $("#player2count").text("0");
    $("#inLead").text("-");
    $("#keyboardplay").removeClass("selected");
    $("#playAgain").attr("hidden","")
}

//keyboard or mouse gameplay
$("#keyboardplay").on("click",keyboardPlay);
function keyboardPlay(){
    $("#player1").attr("disabled","");
    $("#player2").attr("disabled","");
    $("#keyboardplay").addClass("selected");
    $("#mouseplay").removeClass("selected");
    document.addEventListener("keydown", addItQ);
    document.addEventListener("keydown", addItP);
}
$("#mouseplay").addClass("selected");
$("#mouseplay").on("click",mousePlay);
function mousePlay() {
    $("#player1").removeAttr("disabled","");
    $("#player2").removeAttr("disabled","");
    $("#mouseplay").addClass("selected");
    $("#keyboardplay").removeClass("selected");
    document.removeEventListener("keydown", addItQ);
    document.removeEventListener("keydown",addItP);
}





