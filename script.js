

(function (){
let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (let name in names) {

if(names[name].slice(0,1).toLowerCase()=='j'){
  byeSpeaker.speak(names[name]);
}
else{
helloSpeaker.speak(names[name]);

}
}
})();
