const Questions=[
    {
        Question:"what is the largest animal in the world?",
        options:[
            { text:"Shark", correct:"false"},
            { text:"Blue Whale", correct:"true"},
            { text:"Elephant", correct:"false"},
            { text:"Giraffe", correct:"false"}
        ]
    },
    {
        Question:"What is the capital of Australia?",
        options:[
            { text:"Sydney", correct:"false"},
            { text:"Melbourne", correct:"false"},
            { text:"Canberra", correct:"true"},
            { text:"Perth", correct:"false"}
        ]
    },
    {
        Question:"Who painted the Mona Lisa?",
        options:[
            { text:"Vincent van Gogh", correct:"false"},
            { text:"Pablo Picasso", correct:"false"},
            { text:"Leonardo da Vinci", correct:"true"},
            { text:"Michelangelo", correct:"false"}
        ]
    },
    {
        Question:"Which planet is known as the Red Planet?",
        options:[
            { text:"Venus", correct:"false"},
            { text:"Mars", correct:"true"},
            { text:"Jupiter", correct:"false"},
            { text:"Saturn", correct:"false"}
        ]
    },
    {
        Question:"What is the largest ocean in the world?",
        options:[
            { text:"Atlantic Ocean", correct:"false"},
            { text:"Indian Ocean", correct:"false"},
            { text:"Arctic Ocean", correct:"false"},
            { text:"Pacific Ocean", correct:"true"}
        ]
    },
    {
        Question:"Who wrote the play Romeo and Juliet?",
        options:[
            { text:"William Shakespeare", correct:"true"},
            { text:"Jane Austen", correct:"false"},
            { text:"Charles Dickens", correct:"false"},
            { text:"F. Scott Fitzgerald", correct:"false"}
        ]
    },
    {
        Question:"What is the currency of Japan?",
        options:[
            { text:"Yen", correct:"true"},
            { text:"Euro", correct:"false"},
            { text:"Dollar", correct:"false"},
            { text:"Rupee", correct:"false"}
        ]
    },
    {
        Question:"Which country is home to the famous ancient monument Stonehenge?",
        options:[
            { text:"France", correct:"false"},
            { text:"United kingdom", correct:"true"},
            { text:"Italy", correct:"false"},
            { text:"Egypt", correct:"false"}
        ]
    },
    {
        Question:"Which country is known as the Land of the Rising Sun?",
        options:[
            { text:"China", correct:"false"},
            { text:"South korea", correct:"false"},
            { text:"Japan", correct:"true"},
            { text:"Thailand", correct:"false"}
        ]
    },
    {
        Question:"What is the official language of Brazil?",
        options:[
            { text:"Spanish", correct:"false"},
            { text:"Portuguese", correct:"true"},
            { text:"French", correct:"false"},
            { text:"English", correct:"false"}
        ]
    }
];

let ques=document.querySelector(".question h4");
let opts=document.querySelector(".options");
let nxt_btn=document.querySelector(".btn button");

let curr_ques_idx=0;
let score=0;

function startQuiz(){
    opts.style.display="block";
    curr_ques_idx=0;
    score=0;
    nxt_btn.innerText="next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let curr_ques = Questions[curr_ques_idx];
    let question_no = curr_ques_idx + 1;
    let question = question_no + "." + curr_ques.Question;
    ques.innerHTML=question;

    curr_ques.options.forEach(option =>{
        const new_opt=document.createElement("div");
        new_opt.innerHTML=option.text;
        new_opt.classList.add("option");
        opts.appendChild(new_opt);
        if(option.correct){
            new_opt.dataset.correct=option.correct;
        }
        new_opt.addEventListener("click",selectAnswer);
    })
    function selectAnswer(e){
        let selected_opt=e.target;
        const isCorrect=selected_opt.dataset.correct ==="true";
        if(isCorrect){
            selected_opt.classList.add("correct");
            score++;
        }else{
            selected_opt.classList.add("incorrect");
        }
        Array.from(opts.children).forEach(new_opt=>{
            if(new_opt.dataset.correct==="true"){
                new_opt.classList.add("correct");
            }
            new_opt.disabled="true";
        });
        nxt_btn.style.display="block";
    }
}
function resetState(){
    nxt_btn.style.display="none";
    while(opts.firstChild){
        opts.removeChild(opts.firstChild);
    }
}
function showScore(){
    ques.innerText=`You scored ${score} out of ${Questions.length}`;
    nxt_btn.innerText="Play again";
    opts.style.display="none";
    nxt_btn.style.display="block";
    nxt_btn.style.margin="20px";
}
function handleNextButton(){
    curr_ques_idx++;
    if(curr_ques_idx < Questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nxt_btn.addEventListener("click",()=>{
    if(curr_ques_idx < Questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
