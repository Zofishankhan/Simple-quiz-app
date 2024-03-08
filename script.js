const Questions=[
    {
        Question:"what is the largest animal in the world?",
        answer:[
            { text:"Shark", correct:"false"},
            { text:"Blue Whale", correct:"true"},
            { text:"Elephant", correct:"false"},
            { text:"Giraffe", correct:"false"}
        ]
    },
    {
        Question:"What is the capital of Australia?",
        answer:[
            { text:"Sydney", correct:"false"},
            { text:"Melbourne", correct:"false"},
            { text:"Canberra", correct:"true"},
            { text:"Perth", correct:"false"}
        ]
    },
    {
        Question:"Who painted the Mona Lisa?",
        answer:[
            { text:"Vincent van Gogh", correct:"false"},
            { text:"Pablo Picasso", correct:"false"},
            { text:"Leonardo da Vinci", correct:"true"},
            { text:"Michelangelo", correct:"false"}
        ]
    },
    {
        Question:"Which planet is known as the Red Planet?",
        answer:[
            { text:"Venus", correct:"false"},
            { text:"Mars", correct:"true"},
            { text:"Jupiter", correct:"false"},
            { text:"Saturn", correct:"false"}
        ]
    },
    {
        Question:"What is the largest ocean in the world?",
        answer:[
            { text:"Atlantic Ocean", correct:"false"},
            { text:"Indian Ocean", correct:"false"},
            { text:"Arctic Ocean", correct:"false"},
            { text:"Pacific Ocean", correct:"true"}
        ]
    },
    {
        Question:"Who wrote the play Romeo and Juliet?",
        answer:[
            { text:"William Shakespeare", correct:"true"},
            { text:"Jane Austen", correct:"false"},
            { text:"Charles Dickens", correct:"false"},
            { text:"F. Scott Fitzgerald", correct:"false"}
        ]
    },
    {
        Question:"What is the currency of Japan?",
        answer:[
            { text:"Yen", correct:"true"},
            { text:"Euro", correct:"false"},
            { text:"Dollar", correct:"false"},
            { text:"Rupee", correct:"false"}
        ]
    },
    {
        Question:"Which country is home to the famous ancient monument Stonehenge?",
        answer:[
            { text:"France", correct:"false"},
            { text:"United kingdom", correct:"true"},
            { text:"Italy", correct:"false"},
            { text:"Egypt", correct:"false"}
        ]
    },
    {
        Question:"Which country is known as the Land of the Rising Sun?",
        answer:[
            { text:"China", correct:"false"},
            { text:"South korea", correct:"false"},
            { text:"Japan", correct:"true"},
            { text:"Thailand", correct:"false"}
        ]
    },
    {
        Question:"What is the official language of Brazil?",
        answer:[
            { text:"Spanish", correct:"false"},
            { text:"Portuguese", correct:"true"},
            { text:"French", correct:"false"},
            { text:"English", correct:"false"}
        ]
    }
];

const question = document.querySelector(".question h4");
const options = document.querySelectorAll(".options");
const nxt_btn = document.querySelector(".btn button");

let currentQuestionIndex= 0;
let score= 0;



