
var btn  = document.querySelector('#btn');
var clickCount = 0;
//var clickCount = Number(localStorage.getItem('clickCount'));
var namesGreeted = {};

 for (var i = 0; i < namesGreeted.length; i++){
      if (namesGreeted[name] === undefined){

      greetingsCounter++;
 }
 }

 function greetings(){
   var name = document.getElementById('name').value;
  // console.log(name);
if(document.getElementById('English').checked && namesGreeted [name]=== undefined && name.length > 0){//alikho
   document.getElementById('greetMe').innerHTML = "Hello, " + welcome;
   clickCount += 1;
   namesGreeted[name] = name;
//btn.innerHTML = 'GreetMe'+clickCount;
}
else if(document.getElementById('English').checked && namesGreeted [name]!== undefined && name.length > 0){//likhona
   document.getElementById('greetMe').innerHTML = "Hello, " + name;//bulisa
//btn.innerHTML = 'GreetMe'+clickCount;
}

else if (document.getElementById('French').checked && namesGreeted [name]=== undefined && name.length > 0) {
  document.getElementById('greetMe').innerHTML = "Bonjour, " + name;
  clickCount += 1;
namesGreeted[name] = name;
}
else if (document.getElementById('French').checked && namesGreeted [name]!== undefined && name.length > 0) {
  document.getElementById('greetMe').innerHTML = "Bonjour, " + name;


}else if (document.getElementById('Zulu').checked && namesGreeted [name]=== undefined && name.length > 0){
    document.getElementById('greetMe').innerHTML = "Sawubona, " + name;
    clickCount += 1;
    namesGreeted[name] = name;
          }
  else if (document.getElementById('Zulu').checked && namesGreeted [name]!== undefined && name.length > 0) {
      document.getElementById('greetMe').innerHTML = "Bonjour, " + name;
    }

          var b = document.getElementById('reset');
          console.log('reset', b)
          b.addEventListener("click", resetCount);

       document.getElementById('counting').innerHTML = 'Counter '+ clickCount;
       document.getElementById('name').value = "";

};

function localStorage(){
if (typeof(Storage) !== "undefined"){
    if(localStorage.clickCount){
  localStorage.clickCount = Number(localStorage.clickCount)+1;
}else{
localStorage.clickCount =1;
}
  document.getElementById("result").innerHTML = "";
}
}
  function resetCount(){
  localStorage.clickCount = 0;
    document.getElementById('counting').innerHTML = 'Counter '+  localStorage.clickCount;
   console.log('reset')


};
