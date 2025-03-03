let q1val = 0
let q2val = 0
let q3val = 0
let q4val = 0
let q5val = 0
let q6val = 0
let q7val = 0
let q8val = 0
let q9val = 0
let q10val = 0
let q11val = 0
let q12val = 0

questionvals = [0,0,0,0,0,0,0,0,0,0,0,0]

const germanyqvals = [3, 2, 3, 2, 3, 4, 2, 4, 4, 4, 5, 3]
const brazilqvals = [5, 5, 4, 3, 3, 2, 4, 3, 3, 3, 4, 3]
const egyptqvals = [4, 3, 5, 2, 4, 5, 3, 4, 4, 5, 5, 4]
const japanqvals = [3, 3, 5, 3, 4, 4, 4, 3, 5, 3, 3, 4]
const australiaqvals = [5, 3, 4, 2, 3, 3, 3, 4, 3, 3, 4, 3]

germanyscore = 0
brazilscore = 0
australiascore = 0
japanscore = 0
egyptscore = 0


function setFoodValue(color){
    document.querySelector('.answers').style.backgroundColor = color;
}
function setQ1AnswerValue(score){   
    document.getElementById('q1val').innerHTML = score
    questionvals[0] = score;
    console.log(questionvals[0] + 5)
}

function setQ2AnswerValue(score){
    document.getElementById('q2val').innerHTML = score
    questionvals[1] = score;
}

function setQ3AnswerValue(score){
    document.getElementById('q3val').innerHTML = score
    questionvals[2] = score;
}

function setQ4AnswerValue(score){

    document.getElementById('q4val').innerHTML = score;
    questionvals[3] = score;
}

function setQ5AnswerValue(score){
    document.getElementById('q5val').innerHTML = score
    questionvals[4] = score;
}

function setQ6AnswerValue(score){
    document.getElementById('q6val').innerHTML = score
    questionvals[5] = score;
}

function setQ7AnswerValue(score){
    document.getElementById('q7val').innerHTML = score
    questionvals[6] = score;
}

function setQ8AnswerValue(score){
    document.getElementById('q8val').innerHTML = score
    questionvals[7] = score;
}

function setQ9AnswerValue(score){
    document.getElementById('q9val').innerHTML = score
    questionvals[8] = score;
}

function setQ10AnswerValue(score){
    document.getElementById('q10val').innerHTML = score;
    
    questionvals[9] = score;
}

function setQ11AnswerValue(score){
    document.getElementById('q11val').innerHTML = score
    questionvals[10] = score;
}

function setQ12AnswerValue(score){
    document.getElementById('q12val').innerHTML = score
    questionvals[11] = score;
}

function calculateQuizScores(){
    for (x = 0; x < brazilqvals.length; x++){
        brazilscore += Math.abs(brazilqvals[x] ** 2 - questionvals[x] ** 2)
        console.log(brazilscore)
    }
    for (x = 0; x < germanyqvals.length; x++){
        germanyscore += Math.abs(germanyqvals[x] ** 2 - questionvals[x] ** 2)
    }
    for (x = 0; x < australiaqvals.length; x++){
        australiascore += Math.abs(australiaqvals[x] ** 2 - questionvals[x] ** 2)
    }
    for (x = 0; x < egyptqvals.length; x++){
        egyptscore += Math.abs(egyptqvals[x] ** 2 - questionvals[x] ** 2)
    }
    for (x = 0; x < japanqvals.length; x++){
        japanscore += Math.abs(japanqvals[x] ** 2 - questionvals[x] ** 2)
    }    
    scores = [brazilscore, germanyscore, australiascore, egyptscore, japanscore]
    lowestscore = Math.min(...scores)
    console.log(lowestscore)

    if(lowestscore == brazilscore){
        window.open("Brazil.html")
    }
    if(lowestscore == germanyscore){
        window.open("Germany.html")
    }
    if(lowestscore == australiascore){
        window.open("Australia.html")
    }
    if(lowestscore == egyptscore){
        window.open("Egypt.html")
    }
    if(lowestscore == japanscore){
        window.open("japan.html")
    }
}
