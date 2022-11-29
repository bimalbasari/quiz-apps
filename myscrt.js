let username = document.getElementById("userName");
let resultPageusername= document.getElementById("userName1");
let form1 = document.getElementById("form1");
let userinput = document.getElementById("name");
let category = document.getElementById("category");
let category1 = document.getElementById("category_a");
let category2 = document.getElementById("category_b");
let category3 = document.getElementById("category_c");
let category4 = document.getElementById("category_d");
let form2 = document.getElementById("form2");
let time = document.getElementById("timer");
let answers = document.querySelectorAll("answer");
let question = document.getElementById("question");
let option_a = document.getElementById("option_a");
let option_b = document.getElementById("option_b");
let option_c = document.getElementById("option_c");
let option_d = document.getElementById("option_d");
let homePage = document.getElementById("homePage");
let questionpage = document.getElementById("questionpage");
let resultpage = document.getElementById("resultpage");
let next = document.getElementById("next");
let curentscore = document.getElementById("score");
let totalscore = document.getElementById("scores");
let questionNumber=document.getElementById("questionNumber");
let countOfQuestion = document.getElementById("totalQuestion");
let exit = document.getElementById("exit");
let restart = document.getElementById("reset");
let attempt = document.getElementById("attempt");
let worng= document.getElementById("worng");

// let i=0;
const Pipes_Cisterns = [
  {
    question:
      "Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:",
    A: "3*9/17 hours",

    B: "1*13/17 hours",
    C: "2*8/11 hours",
    D: "4*1/2 hours",
    Answer: "option_a",
  },
  {
    question:
      " Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long it will take to fill the tank?",
    A: "10 mins",

    B: "12 mins",
    C: "15 mins",
    D: "20 mins",

    Answer: "option_b",
  },
  {
    question:
      " Pipe A can fill a tank in 45 hrs and pipe B can fill it in 36 hrs. If both the pipes are opened in the empty tank. In how many hours will it be full?",
    A: "10 hr",

    B: "15 hr",
    C: "20 hr",
    D: "28 hr",

    Answer: "option_c",
  },
  {
    question:
      " Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
    A: "10 min. 20 sec",
    B: "11 min. 45 sec",
    C: "12 min. 30 sec",
    D: "14 min. 40 sec",

    Answer: "option_d",
  },
  {
    question:
      " Pipe A can fill a tank in 5 hours, pipe B in 10 hours and pipe C in 30 hours. If all the pipes are open, in how many hours will the tank be filled?",
    A: "2wrong",
    B: "2.5",
    C: "3",
    D: "3.5",

    Answer: "option_c",
  },
  {
    question:
      " Two pipes can fill a tank in 20 minutes and 30 minutes respectively. If both the pipes are opened simultaneously, then the tank will be filled in",
    A: "10 minutes",

    B: "12 minutes",
    C: "15 minutes",
    D: "25 minutes",

    Answer: "option_b",
  },
  {
    question:
      " A tap fill a pot in two hours because of a hole to the pot, it took 2 1/3 hours. Calculate the time needed for hole to emptied the pot completely?",
    A: "14",

    B: "12",
    C: "17",
    D: "19",

    Answer: "option_a",
  },
  {
    question:
      " A water tank is two-fifth full. Pipe A can fill a tank in 10 minutes and pipe B can empty in 6 minutes. If both the pipes are open, how long will it take to empty or fill the tank completely?",
    A: "6 min to empty",

    B: "7 min to full",
    C: "6 min to full",
    D: "7 min to empty",

    Answer: "option_a",
  },
  {
    question:
      " A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in?",
    A: "16 hrs",
    B: "20 hrs",
    C: "25 hrs",
    D: "40 hrs",

    Answer: "option_d",
  },
  {
    question:
      " A cistern is normally filled in 8 hrs. but takes 2 hrs. longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in?",
    A: "16 hrs",
    B: "40 hrs",
    C: "25 hrs",
    D: "20 hrs",

    Answer: "option_b",
  },
];
//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  questionpage.style.display = "grid";
  resultpage.style.display = "none";
});
// Exit quiz
exit.addEventListener("click", () => {
  homePage.style.display = "grid";
  questionpage.style.display = "none";
  resultpage.style.display = "none";
});
//Next Button
next.addEventListener(
  "click",
  (displayNext = () => {
    option_a.classList.remove("correct");
    option_a.classList.remove("incorrect")
    option_b.classList.remove("correct");
    option_b.classList.remove("incorrect")
    option_c.classList.remove("correct");
    option_c.classList.remove("incorrect")
    option_d.classList.remove("correct");
    option_d.classList.remove("incorrect")
    //increment questionCount
    questionCount += 1;
    questionNumber.innerHTML=`${questionCount}/${ Pipes_Cisterns.length}`;
    //if last question
    if (questionCount == Pipes_Cisterns.length) {
      //hide question container and display score
      questionpage.style.display = "none";
      resultpage.style.display = "grid";
      //user score
      // questionNumber.innerHTML=`${questionCount}/10`;
      

      totalscore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML = `${questionCount + 1} of ${
        Pipes_Cisterns.length
      } Question`;
      //display quiz
      quizCreator(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
    curentscore.innerHTML=`Score:${scoreCount}`;
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    time.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Quiz Creation
function quizCreator(i) {
  question.innerHTML = Pipes_Cisterns[i].question;
  option_a.innerHTML = Pipes_Cisterns[i].A;
  option_b.innerHTML = Pipes_Cisterns[i].B;
  option_c.innerHTML = Pipes_Cisterns[i].C;
  option_d.innerHTML = Pipes_Cisterns[i].D;
  homePage.style.display = "none";
  questionpage.style.display = "grid";
}

// Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.id;
  let attmpt =0;
  //if user clicked answer == correct option stored in object
  if (userSolution === Pipes_Cisterns[questionCount].Answer) {
    userOption.classList.add("correct");
    scoreCount++;
    attmpt+=1;
  } else {
    userOption.classList.add("incorrect");
    attmpt+=1;
  }
  attempt.innerHTML=` ${attmpt} `;
  //clear interval(stop timer)
  clearInterval(countdown);
  
    answers.disabled = true;
}

// intial setup
function initial() {
  questionCount = 1;
  scoreCount = 0;
  count = 11;
 
  questionNumber.innerHTML=`${questionCount}/${ Pipes_Cisterns.length}`;
  timerDisplay();
  quizCreator(questionCount);
  // quizDisplay(questionCount);
}
//form default function
category.addEventListener("click", function (event) {
  event.preventDefault();
});
form2.addEventListener("click", function (event) {
  event.preventDefault();
});

//when user click on Category button
category1.addEventListener("click", () => {
  initial();
});

// ------------User Details Section with wellcome massage-------------------//

form1.addEventListener("submit", function (event) {
  if (userinput.value === "") {
    alert("Plase enter your!");
  } else {
    event.preventDefault();
    username.innerHTML = `<b>Hello ${userinput.value}!</b>`;
    resultPageusername.innerHTML=userinput.value;
    form1.style.display = "none";
    document.getElementById("usermessage").style.display = "none";
    category.style.display = "grid";
  }
});
