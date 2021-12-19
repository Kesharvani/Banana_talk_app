var listenerr=document.querySelector("#btn");
var inputselector=document.querySelector("#ipt");
var outputselector=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json";
function getURL(text){

    return serverURL+"?"+"text="+text;
}
function translateintobanana(){
var inputText=inputselector.value;

fetch(getURL(inputText))
.then(response=>response.json())
.then(out=>{
    var transfer = out.contents.translated
    outputselector.innerText=transfer})
}


listenerr.addEventListener("click" , translateintobanana);

