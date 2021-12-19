const questionsPool = [
    {text:'What does HTML stand for?', points:null},
    {text:'What is the HTML element for inserting a line break?', points:null},
    {text:'What element do we use to link the CSS file to our HTML document', points:null},
    {text:'What element do we use to link the JS file to our HTML document', points:null},
    {text:'Write your name inside an HTML paragraph?', points:1},
    {text:'Write your name inside an HTML Heading 1?', points:1},
    {text:'What function can we use to display data in the console?', points:2},
    {text:'What method can we use to pop up an alert in the browser?', points:2},
    {text:'What function can we use to access an HTML element in javascript?', points:null},
    {text:'What display function it should be only use for testing?', points:null},
    {text:'What method or function can we use to print the content of the current window?', points:null},
    {text:'How many ways do we have to declare a variable in Javascript?', points:null},
    {text:'How do we create a variable called "a" that stores the value 123?', points:null},
    {text:'How do we create a variable called "word" that stores the value "hello"?', points:null},
]

const exercisePool = [
    {text:'I have the follow element "<div class="important-text"></div>". Write the css to change the background color of this element.', points:10, src: null},
    {text:'I want to change de color of the text of all the buttons to white. Write the css to change all the buttons text to white.', points:10, src: null},
    {text:'What is it the value of "x" in this situations?', points:10, src: './images/letScope.jpg'},
]

const questionsDiv = document.getElementById('questions')

var count = 1

function newEvaluation(){
    count = 1

    questionsDiv.innerHTML = ''
    const questions = Array.from(questionsPool)

    for(i=0;i<9;i++){
        const number = getRandomNumber(questions)
        const question = questions[number]
        addQuestion(question.text,question.points)
    
        questions.splice(number,1)
    }
    
    {
        const exercises = Array.from(exercisePool)
        const number = getRandomNumber(exercises)
        const question = exercises[number]
        addQuestion(question.text,question.points)    

        if(question.src) addImage(question.src)

        exercises.splice(number, 1)
    }
}

function newAndPrint(){
    newEvaluation()
    printTest()
}


function addQuestion(textQuestion, pointsQuestion){
    const question = document.createElement('div')
    question.setAttribute('id',`question${count}`)
    question.classList.add('question')
    
    const number = document.createElement('div')
    number.setAttribute('id',`number${count}`)
    number.classList.add('number')
    number.style.paddingInline = '0.5rem'
    number.textContent = `${count}.`
    
    const text = document.createElement('div')
    text.setAttribute('id',`text${count}`)
    text.classList.add('text')
    text.textContent = textQuestion

    question.appendChild(number)
    question.appendChild(text)

    questionsDiv.appendChild(question)
    question.style.display = 'flex'
    question.style.marginTop = '0.5rem'
    question.style.marginBottom = '1.8rem'
    question.style.gap = '5px'

    count++    
}

function getRandomNumber(pool){
    return Math.floor(Math.random() * pool.length)
}

function addImage(imagePath){
    const newImage = document.createElement('img')
    newImage.src = imagePath
    newImage.width = 300
    newImage.style.marginLeft = '20%'

    questionsDiv.appendChild(newImage)
}
