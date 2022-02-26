// Checking the connection between js and html 
const greetings = "Hello there!";
console.log(greetings);


function randomFunction() {
location.reload(); 
}   

fetch('https://api.adviceslip.com/advice')
    .then( (data) => data.json())
    .then( (advice) => generateAdvice(advice))


const generateAdvice = (data) => {
   const adviceText = data.slip.advice
   let adviceId = data.slip.id
   const divId = document.querySelector('.advice-id')
   const divAdvice = document.querySelector('.random-advice')

    divId.innerHTML = adviceId
    divAdvice.innerHTML = adviceText
}


