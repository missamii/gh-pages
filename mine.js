document.addEventListener("DOMContentLoaded", function(event) {

  // First create a empty array
  // Then I need a loop
  // Then push() the random value to get a mix of 5 values use splice() method


var mineCell = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'];
var mineCellAll = document.querySelectorAll('.mineCell');
var newArr = Array.prototype.slice.call(mineCellAll)
console.log(mineCellAll);
var bombs = [];
  for(var i = 0; i < 5; i++) {
    var randomIndex = Math.floor(Math.random() * newArr.length)
    var mineCellS = newArr[randomIndex];
    bombs.push(mineCellS);
    newArr.splice(randomIndex,1)
    console.log(newArr);
}
console.log('bombs',bombs);


// this is the button for the "New Game"
function init() {
  var button = document.getElementById("newGame");
    if (button.addEventListener) {
      button.addEventListener("click", function functionName() { alert("Yay! It'/s a New Game");

    });

    }
}




});
