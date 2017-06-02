var names = document.querySelector('.greetNames');

function LangaugeSelection() {
  var input = document.querySelector("input[name='Langauge']:checked");

  return {
    names: names.value,
    Language: input.value
  }
}

var message = document.querySelector('.message');

function displayMessage(myMessage) {
  message.innerHTML = myMessage;
}

function clearmessage() {
  message.innerHTML = '';
  names.value = '';

}
var input = document.querySelectorAll("input[name='Langauge']");

function clearRadioButton() {
  for (var i = 0; i < input.length; i++) {
    var radioButton = input[i];
    radioButton.checked = false;
  }
};
