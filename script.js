const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.getElementById("resultt");
const sound=document.getElementById("sound");
const btn=document.getElementById("search-btn2");
const cut=document.getElementById("cut");

btn.addEventListener("click",() => {
    const Word=document.getElementById("inpwrd").value;
    fetch(`${url}${Word}`).then(response => response.json())
    .then((data) => {
    console.log(data);
    result.innerHTML=`
         <div class="word">
        <h3>${Word}</h3>
        <button onclick="playsound()">
            <i class='bx bxs-volume-full'></i>
        </button>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic}</p>
    </div>
    <p class="word-mean">${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word-ex">${data[0].meanings[0].definitions[0].example}
        </p>`;

        sound.setAttribute("src",`${data[0].phonetics[0].audio}`);
    })
});
function playsound(){
    sound.play();
}
function remove(){
    const word=document.getElementById("inpwrd");
    word.value="";
}