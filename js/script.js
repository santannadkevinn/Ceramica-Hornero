//animação do mennu de destaque
var i = 0;
// var A = 0;
var tag = document.getElementById("title");
var html = document.getElementById("title").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 170;

function typeWriter() {
      if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();