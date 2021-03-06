var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/mandalorian.json"


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Error Occured", error);
    alert("something wrong wih the server! try again after some time")
}


function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedtText = json.contents.translated;
            outputDiv.innerText = translatedtText
        })
        .catch(errorHandler)


};




btnTranslate.addEventListener("click", clickHandler);