 /*
  ________________   _________   ______   __________  ______
 /_  __/  _/ ____/  /_  __/   | / ____/  /_  __/ __ \/ ____/
  / /  / // /        / / / /| |/ /        / / / / / / __/   
 / / _/ // /___     / / / ___ / /___     / / / /_/ / /___   
/_/ /___/\____/    /_/ /_/  |_\____/    /_/  \____/_____/   
                                                            


*/

// intital load test and user alert explaining how to operate the game
console.log("test initial load passed");
console.log("tic tac toe initiated. reset button on the right will clear the board after each win. please note smelly code was used to write this game!")

//firstly set up event listeners for each DOM grid element so they respond to a mouse click
// inside the click function, call a number of functions which test whether the winning squares have been filled, reset the board, and decide whose go it is.

//declare global variables
var square = document.getElementsByClassName("gridBoxes");
var turnCount = "x";
var xWin = 0;
var oWin = 0;


//run a for loop to add an event listener to each square. This means they will all be listening for a mouse click. 
for(var i =0; i<square.length; i++) {

  square[i].addEventListener("click", function () {

  //define variable divId for use in later code blocks
  var divId = this.id;

  //change the innerHTML of a square depending on if noughts or crosses' turn. the nested else statement is a plaster which was meant to fix the fact my code cant stop the turn counter from counting even if a square is already selected.
  if (whoseTurn() === "noughts") {
    if (this.innerHTML===""){
      // console.log("whoseTurn is returning noughts");
      // console.log(number + " has been clicked and selected");
      // this.className += " noughts";
      this.innerHTML="o";
    } else {turnCount = turnCount-1}

    } else {
      if(this.innerHTML===""){
      // console.log("whoseTurn is returning crosses");
      // console.log(number + " has been clicked and selected"); 
      // this.className += " crosses";
      this.innerHTML="x";
    }else {turnCount = turnCount-1}}

  //testing to see if variable divId can be called okay...answer is yep!  
  // console.log(" this is the div id of grid " + divId);
  // console.log("grid " + this.id + " has a css background style of " + this.style.className )

  //define a variable to store the innerHTML of the clicked div
  var myInnerHtml = document.getElementById(this.id).innerHTML;

  // console.log("innerHTML in square changed to " + myInnerHtml);
  // console.log(document.getElementsByClassName("gridBoxes")[0].innerHTML);

  //think of ways to improve this stinky code. Ideally by using a function


  //checks if win conditions are met and alerts the winner. long stinky code i know....
  if (document.getElementsByClassName("gridBoxes")[0].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[1].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[2].innerHTML === "x" ){
    console.log("crosses has won!");
    xWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("crosses has won!");
  } else if (document.getElementsByClassName("gridBoxes")[3].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[4].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[5].innerHTML === "x" ){
    console.log("crosses has won!");
    xWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("crosses has won!");
  } else if (document.getElementsByClassName("gridBoxes")[6].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[7].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[8].innerHTML === "x" ){
    console.log("crosses has won!");
    xWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("crosses has won!");
  }else if (document.getElementsByClassName("gridBoxes")[0].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[3].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[6].innerHTML === "x" ){
    console.log("crosses has won!");
    xWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("crosses has won!");
  } else if (document.getElementsByClassName("gridBoxes")[1].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[4].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[7].innerHTML === "x" ){
    console.log("crosses has won!");
    xWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("crosses has won!");
  } else if (document.getElementsByClassName("gridBoxes")[2].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[5].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[8].innerHTML === "x" ){
    console.log("crosses has won!");
    xWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("crosses has won!");
  } else if (document.getElementsByClassName("gridBoxes")[0].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[4].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[8].innerHTML === "x" ){
    console.log("crosses has won!");
    xWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("crosses has won!");
  } else if (document.getElementsByClassName("gridBoxes")[2].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[4].innerHTML === "x" && document.getElementsByClassName("gridBoxes")[6].innerHTML === "x" ){
    console.log("crosses has won!");
    xWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("crosses has won!");
  } else if (document.getElementsByClassName("gridBoxes")[3].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[4].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[5].innerHTML === "o" ){
    console.log("noughts has won!");
    oWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("noughts has won!");
  } else if (document.getElementsByClassName("gridBoxes")[0].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[1].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[2].innerHTML === "o" ){
    console.log("noughts has won!");
    oWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("noughts has won!");
  } else if (document.getElementsByClassName("gridBoxes")[6].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[7].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[8].innerHTML === "o" ){
    console.log("noughts has won!");
    oWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("noughts has won!");
  }else if (document.getElementsByClassName("gridBoxes")[0].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[3].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[6].innerHTML === "o" ){
    console.log("noughts has won!");
    oWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("noughts has won!");
  } else if (document.getElementsByClassName("gridBoxes")[1].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[4].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[7].innerHTML === "o" ){
    console.log("noughts has won!");
    oWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("noughts has won!");
  } else if (document.getElementsByClassName("gridBoxes")[2].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[5].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[8].innerHTML === "o" ){
    console.log("noughts has won!");
    oWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("noughts has won!");
  } else if (document.getElementsByClassName("gridBoxes")[0].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[4].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[8].innerHTML === "o" ){
    console.log("noughts has won!");
    oWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("noughts has won!");
  } else if (document.getElementsByClassName("gridBoxes")[2].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[4].innerHTML === "o" && document.getElementsByClassName("gridBoxes")[6].innerHTML === "o" ){
    console.log("noughts has won!");
    oWin ++;
    document.getElementById("title").innerHTML="------------>    crosses: " + xWin + " | noughts: " + oWin + "  <------------";
    alert("noughts has won!");
  } 

  // console.log("crosses have won " + xWin + " times and noughts have won " + oWin + " times");

  })

}

//function to check whose turn it is, using the turnCount variable. Will return either a 1 or 2 depending on if it's noughts or crosses' turn.
function whoseTurn() {

  if (turnCount === "x") {
    // console.log("it's noughts turn");
    console.log("turn count is at " + turnCount);
    turnCount = "o";
    return "crosses";
  } else if (turnCount === "o") {
    // console.log("it's crosses turn");
    console.log("turn count is at " + turnCount);
    turnCount = "x";
    return "noughts";
  }
}


//add event listener to reset button so that the board clears and counters are reset ready for next game
  document.getElementById("reset").addEventListener("click", function () {
  
    for(var i =0; i<square.length; i++) {
        console.log(square[i].innerHTML="");
        turnCount="x";
        // document.getElementById("title").innerHTML=" This is a time machine...welcome to the 90's....";
    }
})




