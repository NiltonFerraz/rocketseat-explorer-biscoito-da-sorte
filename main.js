const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("#btnReset")
let hoverElement = document.getElementById('hoverElement');
let wordsElement = document.getElementById("phrase");


let cookieWords = [
    "A vida é cheia de surpresas agradáveis. Esteja pronto para receber a sua.",
    "Grandes oportunidades estão a caminho. Aproveite-as!",
    "A felicidade está ao seu alcance. Siga seu coração.",
    "Cada dia é uma nova chance de ser feliz. Faça o seu melhor.",
    "Você é mais forte do que pensa. Acredite em si mesmo."
];

document.addEventListener("DOMContentLoaded", function () {

    hoverElement.addEventListener('mouseover', function () {
        randomNumber = Math.round(Math.random() * 5)
        // console.log(randomNumber);

        let delay = randomNumber * 500;
        
        if (randomNumber != 0) {
            var wordsRandom = cookieWords[Math.floor(Math.random() * cookieWords.length)];
            var pElement = document.querySelector('screen2 p');
            setTimeout(function () {
                toggleScreen()
                // pElement.classList.add(wordsRandom);
                wordsElement.textContent = wordsRandom;
            }, delay);
        }
    });

    btnReset.addEventListener('click', handleResetClick)
});

const btnTry = document.querySelector("#btnTry")
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
document.addEventListener('keydown', enterPress)

function handleResetClick() {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 5)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function enterPress(e) {
    if (e.key == 'Enter' && screen1.classList.contains('.hide')) {
        handleResetClick()
    }
}
