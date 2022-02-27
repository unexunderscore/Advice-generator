// Checking the connection between js and html 
const greetings = "Hello there!";
console.log(greetings);


const dice = document.getElementById("dice");


function randomFunction() {

fetch('https://api.adviceslip.com/advice', {cache: "no-store"})
    .then((data) => data.json())
    .then((advice) => generateAdvice(advice))
}
randomFunction();

const generateAdvice = (data) => {
   let adviceText = data.slip.advice
   let adviceId = data.slip.id
   const divId = document.querySelector('.advice-id')
   const divAdvice = document.querySelector('.random-advice')

    divId.innerHTML = adviceId
    divAdvice.innerHTML = adviceText
    console.log(adviceText)
} 

dice.addEventListener("click", randomFunction);
