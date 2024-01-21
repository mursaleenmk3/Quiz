let questions=[
    {
        question:"What does HTML stand for?",
        answers:[
            {text:"Hyper Text Markup Language",correct:true},
            {text:"Hyperlink Text Markup Language",correct:false},
            {text:"High-Level Text Markup Language",correct:false},
            {text:"Hyper Transfer Markup Language",correct:false}
        ]
        
    },
    {
        question:"Which programming language is known for its use in developing web applications and dynamic websites?",
        answers:[
            {text:"Java",correct:false},
            {text:"Python",correct:false},
            {text:" PHP",correct:true},
            {text:"C++",correct:false}
        ]
        
    },
    {
        question:"What is the purpose of a firewall in computer networks?",
        answers:[
            {text:"To protect against viruses",correct:false},
            {text:"To prevent unauthorized access",correct:true},
            {text:" To improve internet speed",correct:false},
            {text:"To store data securely",correct:false}
        ]
        
    },
    {
        question:"In the context of databases, what does SQL stand for?",
        answers:[
            {text:"Structured Query Language",correct:true},
            {text:"Simple Query Language",correct:false},
            {text:" Server Quality Language",correct:false},
            {text:"Scripted Question Language",correct:false}
            
 
 
  
        ]
        
    },
    {
        question:" What is the role of RAM in a computer system?",
        answers:[
            {text:"Long-term storage",correct:false},
            {text:"Temporary data storage",correct:true},
            {text:" Graphics processing",correct:false},
            {text:"Network connectivity",correct:false}
            
 
 
  
        ]

        
    },
    {
        question:" Which encryption protocol secures data transmission over the internet?",
        answers:[
            {text:"HTTPS",correct:true},
            {text:"FTP",correct:false},
            {text:" TCP",correct:false},
            {text:"IPsec",correct:false}
            
 
 
  
        ]

        
    },
    {
        question:"  In networking, what does DNS stand for?",
        answers:[
            {text:"Domain Name System",correct:true},
            {text:"Dynamic Network Server",correct:false},
            {text:"  Data Node Security",correct:false},
            {text:"Digital Network Service",correct:false}
            
 
 
  
        ]
      
  
 


        
    },
    {
        question:"  Which programming paradigm emphasizes the use of functions and avoids changing state and mutable data?",
        answers:[
            {text:"Object-oriented programming",correct:false},
            {text:"Functional programming",correct:true},
            {text:" Procedural programming",correct:false},
            {text:"Logical programming",correct:false}
            
 
 
  
        ]
       
        
        
    }
]

let questionText=document.getElementById("question")
let options=document.getElementById("options")
let button=document.getElementById("next-btn")
let qno=document.querySelector(".qno")
let currentQuestionIndex=0
let score=0

let startQuiz=()=>{
    currentQuestionIndex=0
    score=0
    button.innerHTML="Next"
    showQuestons()

}
let showQuestons=()=>{
    resetState()
    let currentQuestion=questions[currentQuestionIndex]
    let questionNo=currentQuestionIndex+1
    qno.innerHTML=`${questionNo} \\ ${questions.length}`
    questionText.innerHTML=questionNo+" ."+currentQuestion.question
    currentQuestion.answers.forEach(ansnwer=>{
        let div=document.createElement("div")
        div.innerHTML=ansnwer.text
        div.classList.add("optn")
        options.append(div)
        if(ansnwer.correct){
            div.dataset.correct=ansnwer.correct
        }
        div.addEventListener("click",selectAnswer)
    })
}
let selectAnswer=(e)=>{
    const selectedbtn=e.target
    const isCorrect=selectedbtn.dataset.correct==="true"
    if(isCorrect){
        selectedbtn.classList.add("correct")
        score++
    }else{
        selectedbtn.classList.add("incorrect")
    }
    Array.from(options.children).forEach(opt=>{
        if(opt.dataset.correct==="true")
        {
            opt.classList.add("correct")
        }
        opt.classList.add("disabled")
    })
    button.style.display="block"
}
let resetState=()=>{
    button.style.display="none"
    while(options.firstChild){
        options.removeChild(options.firstChild)
    }
}
button.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNxtBtn()
    }else{
        startQuiz()
    }
})
let handleNxtBtn=()=>{
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length)
    {
        showQuestons()
    }else{
        showScore()
}
}
let showScore=()=>{
    resetState()
    questionText.innerHTML=`your score is ${score} out of ${questions.length}`
    button.innerHTML="Play Again"
    button.style.display="block"

}
startQuiz()