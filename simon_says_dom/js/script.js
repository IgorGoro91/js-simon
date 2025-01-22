
const numberList = document.getElementById(`numbers-list`)
const numArray = []

function numRandom(min,max){
    return Math.floor(Math.random() *max)+min
}


for( let i = 0; numArray.length < 5 ; i++){
    

    let numRandomico = numRandom(1, 50)

    console.log(`numero randomico ${numRandomico}`)

    if( !(numArray.includes(numRandomico))){
        numArray.push(numRandomico)
    }
    console.log(numArray)

}

for(let i = 0; i < numArray.length; i++){
    // si stampa su ogni LI del Body
    numberList.innerHTML += `<li>${numArray[i]}</li>`
}

// funzione per far scomparire i numeri  dopo un tot ti secondi

let counter = 3
const countdown = document.getElementById(`countdown`)
const answersForm = document.getElementById(`answers-form`)
const instructions = document.getElementById(`instructions`)

const timer = setInterval(function(){

    countdown.innerHTML = counter--

    if( counter < 0){
        clearInterval(timer)
        numberList.classList.add(`d-none`)
        instructions.classList.add(`d-none`)
        answersForm.classList.remove(`d-none`)
    }
},1000)

const btn = document.querySelector(`.btn-primary`)
const inputs = document.querySelectorAll(`.form-control`)
const numeriUtenteCorreti = []
const message = document.getElementById(`message`)



btn.addEventListener(`click`, function(event){
    event.preventDefault()

    for( let i =0; i < inputs.length; i++ ){
        

        if( numArray.includes(parseInt(inputs[i].value))){
            numeriUtenteCorreti.push(inputs[i].value)
        }
        console.log(numeriUtenteCorreti, inputs[i].value, numArray.includes(parseInt(inputs[i].value)))
    }

        message.innerHTML = `complimneti hai indovinato ${numeriUtenteCorreti.length}, : e sono : ${numeriUtenteCorreti.join("-")} `
    
})
    
