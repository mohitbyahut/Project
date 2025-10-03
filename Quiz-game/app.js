const quiz = [
  {
    question: "What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript"
  },
  {
    question: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Joe Biden"
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hyper Trainer Marking Language",
    ans2text: "Hyper Text Markup Language",
    ans3text: "Hyper Text Marketing Language",
    ans4text: "Hyper Text Mark Language",
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which company developed Java?",
    ans1text: "Microsoft",
    ans2text: "Sun Microsystems",
    ans3text: "Google",
    ans4text: "IBM",
    answer: "Sun Microsystems"
  },
  {
    question: "Which of these is not a JavaScript framework?",
    ans1text: "React",
    ans2text: "Angular",
    ans3text: "Django",
    ans4text: "Vue",
    answer: "Django"
  }
];






let question = document.getElementById("quiz-question");

// console.log(question);
// console.log(question.textContent);


let option_a = document.getElementById("text_option_a");
let option_b = document.getElementById("text_option_b");
let option_c = document.getElementById("text_option_c");
let option_d = document.getElementById("text_option_d");

let answerElement = document.querySelectorAll(".answer");
console.log(answerElement);


// console.log(option_a);
// console.log(option_b);
// console.log(option_c);
// console.log(option_d);
// console.log(option_a.textContent);
// console.log(option_b.textContent);
// console.log(option_c.textContent);
// console.log(option_d.textContent);


let currentQuestion = 0;
let score = 0;


question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

console.log("Answer Element", answerElement);

const submit = document.getElementById("sub");



submit.addEventListener("click", () => {
        let checkedAns = document.querySelector('input[type="radio"]:checked');
        console.log(checkedAns);
        
        if(checkedAns === null){
            alert("Please select an answer");
        } else {
            if(checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
                score++;
            }
            checkedAns.checked = false;
            currentQuestion++;
            if(currentQuestion < quiz.length){
                question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;
 checkedAns.checked = false;
            }else{
                alert("Your score is " + score + " out of " + quiz.length);
                location.reload();
            }
        }
});