const Question =document.querySelector('#question');
const choices=Array.from(document.querySelectorAll('.choice-text'));
const progressText=document.querySelector('#progressText');
const scoreText=document.querySelector('#score');
const progressBarFull=document.querySelector('#progressBarFull');


let currentQuestion={}
let acceptingAnswers=true
let score=0
let questionCounter=0
let availableQuestions=[]

let questions=[
    {
        question:'what is 2+2?',
        choice1:'2',
        choice2:'3',
        choice3:'4',
        choice4:'5',
        answer:3
    },
    {
        question:'The tallest building in the world is located in which city?',
        choice1:'Dubai',
        choice2:'New York',
        choice3:'Shanghai',
        choice4:'None of the abov',
        answer:1
    },
    {
        question:'what percent of American adults believe that chocolate milk comes from brown cows',
        choice1:'20%',
        choice2:'18%',
        choice3:'7%',
        choice4:'33%',
        answer:1
    },
    {
        question:'Approximately what percent of U.S power outages are caused by squirrels?',
        choice1:'10-20%',
        choice2:'5-10%',
        choice3:'15-20%',
        choice4:'30-40%',
        answer:4
    } 
]

const score_points=100
const max_question=4


startGame = () =>{
    questionCounter=0
    score=0
    availableQuestions=[...questions]
    // console.log(availableQuestions)
    getNewQuestion()
}
getNewQuestion = () =>{
    if (availableQuestions.length===0 || questionCounter>max_question){
        localStorage.setItem('mostRecentScore',score)
        return window.location.assign("end.html")
    }
    questionCounter++
    progressText.innerText=`Question  ${questionCounter} of ${max_question}`
    progressBarFull.style.width=`${(questionCounter/max_question)*100 }%`


const questionIndex=Math.floor(Math.random() * availableQuestions.length)


currentQuestion=availableQuestions[questionIndex]
// question.innerText=currentQuestion.question
question.innerText=currentQuestion.question


choices.forEach(choice =>{
    const number=choice.dataset['number']
    choice.innerText=currentQuestion['choice' + number]
})

availableQuestions.splice(questionIndex,1)

acceptingAnswers=true
} 

choices.forEach(choice =>{
    choice.addEventListener('click',e =>{
        if(!acceptingAnswers) return 
        acceptingAnswers=false 
        const selectedChoice=e.target
        const selectedAnswer=selectedChoice.dataset['number']

        let classToApply=selectedAnswer ==currentQuestion.answer ? 'correct' :'incorrect'
 if(classToApply === 'correct'){
    incrementScore(score_points )
 }

 selectedChoice.parentElement.classList.add(classToApply)

 setTimeout(() => {
    selectedChoice.parentElement.classList.remove(classToApply)
    getNewQuestion()
 },1000)

    } )
})


incrementScore = num =>{
    score+=num
    scoreText.innerText=score
}

startGame()



