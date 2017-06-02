describe('check name', function() {
  it('should be able to greet', function() {
    assert.equal('Hello, Lubba', greetings('Lubba'));
  })
});

describe('checks Language', function(name, lanuage) {
  it('should say Hello!, Lubba when English is selected', function() {
    assert.equal(checkLanguage('Lubba', 'English'), 'Hello, Lubba');
  })
  it('should say Bonjour!, Lubba when French is selected', function() {
    assert.equal(checkLanguage('Lubba', 'French'), 'Bonjour, Lubba');
  })
  it('should say Sawubona!, Lubba when Zulu is selected', function() {
    assert.equal(checkLanguage('Lubba', 'Zulu'), 'Sawubona, Lubba');
  });
});

describe('click counter', function() {
  it('should increament when a new name is greeted.', function() {
    assert.equal(undefined, clickCounter())
  });
})

describe('local Storage', function functionName() {
  it('should count when a new name added.', function() {
    assert.equal("Names greeted: 1", localStorage())
  });
});

describe('reset counter', function() {
  it("should start to 0 when the button 'reset' is pressed", function() {
    assert.equal('Counter 0', resetCount());
  });
});

describe('Dom test', function() {
  it("should be able to get Langauge selected", function() {

    var message = document.querySelector('.message');
    var names = document.querySelector('.greetNames');
    var selectedLangauge = document.querySelectorAll('.Langauge');

    names.value = 'Lubba';
    selectedLangauge[0].checked = true;

    var selectedLangaugeData = LangaugeSelection();

    assert.equal('Lubba', selectedLangaugeData.names);
    assert.equal("English", selectedLangaugeData.Language);

    displayMessage('Hello, Lubba');
    assert.equal('Hello, Lubba', message.innerHTML);
  });
  it("should clear the message", function() {
    clearmessage('');
    assert.equal('', message.innerHTML);
  });
  it("should clear the radio buttons", function() {
    clearRadioButton();
    var input = document.querySelector("input[name='Langauge']:checked");
    assert.equal(null, input);
  });
  it("should clear the text box", function() {
    clearRadioButton('');
    assert.equal('', message.innerHTML);
  });
});
