let inputWord = document.getElementById("word");
const searchBtn = document.getElementById("searchBtn");
let wordDisplay = document.getElementById("wordDisplay");
let partOfSpeech = document.getElementById("partOfSpeech");
let meaning= document.getElementById("meaning");
let synonyms = document.getElementById("synonyms");
let meaningDisplay = document.querySelector(".meaningDisplay");



searchBtn.addEventListener("click",()=>{
meaningDisplay.style.display="flex";
let wordEntered =inputWord.value;
let promise =  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordEntered}`);

promise.then((res)=>{
    return res.json();
})
.then((data)=>{
    wordDisplay.innerText = wordEntered ;
    partOfSpeech.innerText = data[0].meanings[0].partOfSpeech ;
    meaning.innerText =data[0].meanings[0].definitions[1].definition;
    synonyms.innerText=data[0].meanings[0].synonyms; 
})
.catch((error) => {
    console.error('Error:', error);
    wordDisplay.innerText = "Word not found !";
    partOfSpeech.innerText = "";
    meaning.innerText = "";
    synonyms.innerText = "";
});
})






















