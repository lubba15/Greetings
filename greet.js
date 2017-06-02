var myGreetButton = document.querySelector('#myGreetButton');
var clickCount = 0;
var namesGreeted = {};


function greetings() {
  const name = document.getElementById('greetNames').value;
  document.getElementById('greetMe').innerHTML = greet(name, checkLangauge(), localStorage);
  localStorage(greet());
   };
