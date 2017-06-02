var namesGreeted = {}


var checkLangauge = function() {
  if (document.getElementById('English').checked === true) {
    return 'English';
  } else if (document.getElementById('French').checked == true) {
    return 'French';
  } else if (document.getElementById('Zulu').checked == true) {
    return 'Zulu';
  }
};

function greet(name, language) {
  if (language == 'English') {
    return 'Hello, ' + name;
  } else if (language == 'French') {
    return 'Bonjour, ' + name;
  } else if (language == 'Zulu') {
    return 'Sawubona, ' + name;
  }
};

function clickCounter(name) {
  if (namesGreeted[name] === undefined) {
    namesGreeted[name] = 1;
  }
}

function localStorage() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickCount) {
      localStorage.clickCount = Number(localStorage.clickCount) + 1;
    } else {
      localStorage.clickCount = 1;
    }
    return "Names greeted: " + localStorage.clickCount;
  }
};
function clickCounter(name) {
  if (namesGreeted[name] === undefined) {
    namesGreeted[name] = 1;
  }
};

var reset = document.getElementById('myResetButton');
reset.addEventListener("click", function() {
  resetCount();
});
