document.addEventListener("DOMContentLoaded", function(event) {
  console.log('dom loaded');


  var mineCell = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'];
  var allBombs = ['b', 'f', 'j', 'l', 'm', 'o', 'u', 'x'];
  var a = document.getElementById('a'); //START element.addEventListener('click', callback)
  a.addEventListener('click', callback);

  var b = document.getElementById('b');
  b.addEventListener('click', endGame);

  var c = document.getElementById('c');
  c.addEventListener('click', callback);

  var d = document.getElementById('d');
  d.addEventListener('click', callback);

  var e = document.getElementById('e');
  e.addEventListener('click', callback);

  var f = document.getElementById('f');
  f.addEventListener('click', endGame);

  var g = document.getElementById('g');
  g.addEventListener('click', callback);

  var h = document.getElementById('h');
  h.addEventListener('click', callback);

  var i = document.getElementById('i');
  i.addEventListener('click', callback);

  var j = document.getElementById('j');
  j.addEventListener('click', endGame);

  var k = document.getElementById('k');
  k.addEventListener('click', callback);

  var l = document.getElementById('l');
  l.addEventListener('click', endGame);

  var m = document.getElementById('m');
  m.addEventListener('click', endGame);

  var o = document.getElementById('o');
  o.addEventListener('click', endGame);

  var p = document.getElementById('p');
  p.addEventListener('click', callback);

  var q = document.getElementById('q');
  q.addEventListener('click', callback);

  var r = document.getElementById('r');
  r.addEventListener('click', callback);

  var s = document.getElementById('s');
  s.addEventListener('click', callback);

  var t = document.getElementById('t');
  t.addEventListener('click', callback);

  var u = document.getElementById('u');
  u.addEventListener('click', endGame);

  var v = document.getElementById('v');
  v.addEventListener('click', callback);

  var w = document.getElementById('w');
  w.addEventListener('click', callback);

  var x = document.getElementById('x');
  x.addEventListener('click', endGame);

  var y = document.getElementById('y');
  y.addEventListener('click', callback); // END of element.addEventListener('click', callback)

  function endGame(ev) {
    for (var i = 0; i < endGame.length; i++) {
      alert("Game Over!");
        document.getElementById('imgb').style.visibility='visible';
        document.getElementById('imgf').style.visibility='visible';
        document.getElementById('imgj').style.visibility='visible';
        document.getElementById('imgl').style.visibility='visible';
        document.getElementById('imgm').style.visibility='visible';
        document.getElementById('imgo').style.visibility='visible';
        document.getElementById('imgu').style.visibility='visible';
        document.getElementById('imgx').style.visibility='visible';
    }
}

// HERE is the problem -- So I am trying to figure out a way to make every div change colors one at a time.
// not all at once.
  function callback(ev) {
        document.getElementById("a").style.backgroundColor = "#DB7093";
        document.getElementById("c").style.backgroundColor = "#DB7093";
        document.getElementById("d").style.backgroundColor = "#DB7093";
        document.getElementById("e").style.backgroundColor = "#DB7093";
        document.getElementById("f").style.backgroundColor = "#DB7093";
        document.getElementById("g").style.backgroundColor = "#DB7093";
        document.getElementById("h").style.backgroundColor = "#DB7093";
        document.getElementById("i").style.backgroundColor = "#DB7093";
        document.getElementById("j").style.backgroundColor = "#DB7093";
        document.getElementById("k").style.backgroundColor = "#DB7093";
        document.getElementById("n").style.backgroundColor = "#DB7093";
        document.getElementById("p").style.backgroundColor = "#DB7093";
        document.getElementById("q").style.backgroundColor = "#DB7093";
        document.getElementById("r").style.backgroundColor = "#DB7093";
        document.getElementById("s").style.backgroundColor = "#DB7093";
        document.getElementById("t").style.backgroundColor = "#DB7093";
        document.getElementById("v").style.backgroundColor = "#DB7093";
        document.getElementById("w").style.backgroundColor = "#DB7093";
        document.getElementById("y").style.backgroundColor = "#DB7093";
      }

      //PROBLEM ends here


// LIZA SAYS TO:
  // get the element's id

  //search the bombs array for that id
    // if it's not in the array, then the game continues
    // if it's in the array, then it's Game Over!

  //OTHER NOTES:
  // create a HTML element, attach it to the source, create a var,

 // end callback fxn

}); // end dom loaded fxn
