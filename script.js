let homePage = document.getElementById("homePage");
let userName = document.getElementById("userName");
let inputName = document.getElementById("inputname");
let enterBtn = document.getElementById("enter");
let categoryPage = document.getElementById("category");
let categoryA = document.getElementById("category_a");
let categoryB = document.getElementById("category_b");
let categoryC = document.getElementById("category_c");
let categoryD = document.getElementById("category_d");
let resultName = document.getElementById("userName1");
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let questionPage = document.getElementById("questionpage");
let questionNumber = document.getElementById("questionNumber");
let Timer = document.getElementById("timer");
let Score = document.getElementById("score");
let question = document.getElementById("question");
let optionA = document.getElementById("option_a");
let optionB = document.getElementById("option_b");
let optionC = document.getElementById("option_c");
let optionD = document.getElementById("option_d");
let nextQuestion = document.getElementById("next");
let resultPage = document.getElementById("resultpage");
let Attempt = document.getElementById("attempt");
let totalScores = document.getElementById("scores");
let worngAnswer = document.getElementById("worng");
let percenTage = document.getElementById("percentage");
let reStartBtn = document.getElementById("reset");
let exitBtn = document.getElementById("exit");
let totalTimes = document.getElementById("totalTime");
// let options = question.querySelectorAll(".answer");
// -----------------------------Pipes_Cisterns---------------------------------------//
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
// ----------------------------- Probability---------------------------------------//
const Probability = [
  {
    question:
      "An event in the probability that will never be happened is called as -",

    A: "Unsure event",
    B: "Sure event",
    C: "Possible event",
    D: "Impossible evImpossible event",
    Answer: "option_d",
  },
  {
    question: "What will be the value of P(not E) if P(E) = 0.07?",

    A: "90",
    B: "007",
    C: "93",
    D: "72  ",
    Answer: "option_c",
  },
  {
    question:
      "What will be the probability of getting odd numbers if a dice is thrown?",

    A: "1/2",
    B: "2",
    C: "4/2",
    D: "5/2",
    Answer: "option_a",
  },

  {
    question:
      "What is the probability of getting a sum as 3 if a dice is thrown?",

    A: "2/18",
    B: "1/18",
    C: "4",
    D: "1/36",

    Answer: "option_b",
  },
  {
    question:
      "What is the probability of getting an even number when a dice is thrown?",

    A: "1/6",
    B: "1/2",
    C: "1/3",
    D: "1/4",

    Answer: "option_b",
  },
  {
    question:
      "The probability of getting two tails when two coins are tossed is -",

    A: "1/6",
    B: "1/2",
    C: "1/3",
    D: "1/4",

    Answer: "option_d",
  },
  {
    question:
      "What is the probability of getting the sum as a prime number if two dice are thrown?",

    A: "5/24",
    B: "5/12",
    C: "5/30",
    D: "1/4",

    Answer: "option_b",
  },
  {
    question:
      "What is the probability of getting atleast one head if three unbiased coins are tossed?",

    A: "7/8",
    B: "1/2",
    C: "5/8",
    D: "8/9",

    Answer: "option_a",
  },
  {
    question:
      "What is the probability of getting 1 and 5 if a dice is thrown once?",

    A: "1/6",
    B: "1/3",
    C: "2/3",
    D: "8/9",

    Answer: "option_b",
  },
  {
    question:
      "What will be the probability of losing a game if the winning probability is 0.3?",

    A: "0.5",
    B: "0.6",
    C: "0.7",
    D: "0.8",

    Answer: "option_c",
  },
];

// -----------------------------Problem age question-----------------------------//
const Problems_age = [
  {
    question:
      "Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?",

    A: "2 times",
    B: "2*1/2	times",
    C: "2*3/4	times",
    D: "3 times",
    Answer: "option_a",
  },
  {
    question:
      " 	The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",

    A: "4 years",
    B: "8 years",
    C: "10 years",
    D: "None of these",
    Answer: "option_a",
  },
  {
    question: `A father said to his son, "I was as old as you are at the present at the time of your birth". If the father's age is 38 years now, the son's age five years back was:`,

    A: "14 years",
    B: "19 years",
    C: "33 years",
    D: "38 years",
    Answer: "option_a",
  },
  {
    question:
      " 	A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",

    A: "7",
    B: "8",
    C: "9",
    D: "10",
    Answer: "option_d",
  },

  {
    question:
      "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",

    A: "24",
    B: "27",
    C: "40",
    D: "Cannot be determined",

    Answer: "option_a",
  },
  {
    question:
      " A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:",

    A: "14 years",
    B: "18 years",
    C: "20 years",
    D: "22 years",
    Answer: "option_d",
  },
  {
    question:
      " Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?",

    A: "16 years",
    B: "18 years",
    C: "20 years",

    D: "None of these",
    Answer: " option_a",
  },
  {
    question: `	The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:`,

    A: `12 years`,
    B: `14 years`,
    C: `18 years`,
    D: `20 years`,
    Answer: `option_d`,
  },
  {
    question: `At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?`,

    A: `12 years`,
    B: `15 years`,
    C: `19 and half`,
    D: `21 years`,
    Answer: `option_b`,
  },
  {
    question:
      " 	Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?",

    A: `16 years`,
    B: `18 years`,
    C: `28 years`,
    D: `24.5 years`,
    Answer: `option_b`,
  },
];
// -----------------------------Profit and loss--------------------------------//
const Profit_loss = [
  {
    question:
      "A person sold a stove for Rs. 423 and incurred a loss of 6%. At what price would it be sold so as to earn a profit of 8%?",

    a: "Rs. 525",
    b: "Rs. 500",
    c: "Rs. 490",
    d: "Rs. 486",

    Answer: "option_d",
  },
  {
    question:
      "A fruit seller buys lemons at 2 for a rupee and sells then at 5 for three rupees. His gain percent is",

    a: "10%",
    b: "15%",
    c: "20%",
    d: "25%",

    Answer: "option_c",
  },

  {
    question:
      "A sells a car to B at 10% loss. If B sells it for Rs. 54000 and gains 20%, the cost price of the car for A was",

    a: "Rs. 25000",
    b: "Rs. 50000",
    c: "Rs. 37500",
    d: "Rs. 60000",

    Answer: "option_b",
  },

  {
    question:
      "Ramesh sold a statue for a price 25% higher than the original price of the statue. He had however bought the statue at 20% discount on the original price. With the profit of Rs. 2025, find the original price of the statue.",

    a: "Rs. 6000",
    b: "Rs. 7500",
    c: "Rs. 3500",
    d: "Rs. 4500",

    Answer: "option_d",
  },
  {
    question:
      "If selling price of 40 articles is equal to cost price of 50 articles, the loss or gain percent is",

    a: "25% loss",
    b: "20% loss",
    c: "25% gain",
    d: "20% gain",

    Answer: "option_c",
  },

  {
    question:
      "Two bicycles were sold for Rs. 3990 each, gaining 5% on one and losing 5% on the other. The gain or loss percent on the whole transaction is",

    a: "Neither gain nor loss",
    b: " 2.5% gain",
    c: "2.5% loss",
    d: "0.25% loss",

    Answer: "option_d",
  },
  {
    question:
      "The ratio of cost price and selling price is 4:5. The profit percent is",

    a: "10%",
    b: "20%",
    c: "25%",
    d: "30%",

    Answer: "option_c",
  },
  {
    question:
      "If a person sells a ‘sari’ for Rs. 5200, making a profit of 30%, then the cost price of the sari is",

    a: "Rs. 4420",
    b: "Rs. 4000",
    c: "Rs. 3900",
    d: "Rs. 3800",

    Answer: "option_b",
  },
  {
    question:
      "A shopkeeper earns a profit of 15% after selling a book at 20% discount on the printed price. The ratio of the cost price and printed price of the book is?",

    a: "20:23",
    b: "23:20",
    c: "16:23",
    d: "23:16",

    Answer: "option_c",
  },
  {
    question:
      "   Simran bought pet food worth Rs. 56000. She then sold 1/3rd of it incurring a loss of 40%. What profit she must earn on rest of the supplies to nullify this loss?",

    a: " 25%",
    b: "20%",
    c: "45%",
    d: "50%",

    Answer: "option_d",
  },
];
// ----------------Weelome Massage for user----------------//
form1.addEventListener("submit", function (event) {
  if (inputName.value === "") {
    alert("Plase enter your name!");
  } else {
    event.preventDefault();
    // print user name in wecome page
    userName.innerHTML = `<b>Hello ${inputName.value}!</b>`;
    // taken value from user
    resultName.innerHTML = inputName.value;
    // hide input area
    form1.style.display = "none";
    document.getElementById("usermessage").style.display = "none";
    // displaying the category btn
    form2.style.display = "grid";
  }
});

// ----------------form default action remove----------------//
form2.addEventListener("submit", (event) => {
  event.preventDefault();
});
//----------------form default action remove----------------//
form3.addEventListener("submit", (event) => {
  event.preventDefault();
});

// ----------------Loading Questions--------------------//
let Ans;
let type;
let worng = 0;
let correct = 0;
let totalTime = 0;
let attmpt = 0;
let scoreCount = 0;
let CategoryType;
let questionCount = 0;
function catagory(typ) {
  CategoryType = typ;
  // console.log(CategoryType);
  quizCreator(questionCount);
  timerDisplay(count);
}
// console.log(CategoryType);
function quizCreator(questionCount = 0) {
  question.innerHTML = CategoryType[questionCount].question;
  optionA.innerHTML = CategoryType[questionCount].A;
  optionB.innerHTML = CategoryType[questionCount].B;
  optionC.innerHTML = CategoryType[questionCount].C;
  optionD.innerHTML = CategoryType[questionCount].D;
  // remove wecome page
  homePage.style.display = "none";
  // displaying the question page
  questionPage.style.display = "grid";
  Ans = CategoryType[questionCount].Answer;
  type = CategoryType;
  count = 11;
  // display question number
  questionNumber.innerHTML = `${questionCount + 1}/${CategoryType.length}`;
  // displaying the score
  Score.innerHTML = `Score:${scoreCount}`;
}

//----------------Timer----------------//
const timerDisplay = () => {
  // start timmer
  countdown = setInterval(() => {
    // conting value decrement
    count--;
    Timer.innerHTML = `${count}s`;
    // if  cout value is self calling the function;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};
// ----------------Answer checker----------------//

function checker(userOption) {
  // taken anser from user presed botton
  let userSolution = userOption.id;

  //if user clicked answer == correct option stored in object
  if (userSolution === Ans) {
    // adding class in user correct answer
    userOption.classList.add("correct");
    // If  right answer score +
    scoreCount++;
    // If  click Attempt+1;
    attmpt += 1;
    // If  right answer correct  +1
    correct + 1;
    // Print score in quiz page top
    Score.innerHTML = `Score:${scoreCount}`;
    // Calclute the time Taken by user
    totalTime += 10 - parseInt(Timer.innerHTML);

    // if Wrong answer
  } else {
    // adding class in user Wrong  answer
    userOption.classList.add("incorrect");
    // Calclute the time Taken by user
    totalTime += 10 - parseInt(Timer.innerHTML);
// If  click Attempt+1;
    attmpt += 1;
    // if wrong Answer wrong +1
    worng += 1;
    // Print wrong attempt 
    worngAnswer.innerHTML = worng;
  }
 // Print All attempt 
  Attempt.innerHTML = attmpt;
  //Stop timer
  clearInterval(countdown);
  //disable all options
  // options.forEach((element) => {
  //   element.disabled = true;
  // });

}

// when user click on category button 
categoryA.addEventListener("click", () => catagory(Pipes_Cisterns));
categoryB.addEventListener("click", () => catagory(Probability));
categoryC.addEventListener("click", () => catagory(Problems_age));
categoryD.addEventListener("click", () => catagory(Profit_loss));

//----------------User click on Next Button----------------//
nextQuestion.addEventListener("click",(displayNext = () => {
  // remove Class from button
    optionA.classList.remove("correct");
    optionA.classList.remove("incorrect");
    optionB.classList.remove("correct");
    optionB.classList.remove("incorrect");
    optionC.classList.remove("correct");
    optionC.classList.remove("incorrect");
    optionD.classList.remove("correct");
    optionD.classList.remove("incorrect");
    //increment questionCount
    questionCount += 1;

    //--------------if last question-----------------
    if (questionCount == CategoryType.length) {
      //hide question container and display Result
      questionPage.style.display = "none";
      resultPage.style.display = "grid";
      // Print tootal time taken by user
      totalTimes.innerHTML = totalTime;
        // Print score
      totalScores.innerHTML = scoreCount;
        // Print percentage
      percenTage.innerHTML = `${(scoreCount / CategoryType.length) * 100}%`;
      // Stop timmer
      clearInterval(countdown);
      // defolt count ststus
      count = 11;
      // if not last question
    } else {
      //display quiz
      quizCreator(questionCount);
      count = 11;
      clearInterval(countdown);
    }
    // Calling again timmer function
    timerDisplay();
  
  })
);
// when user click restsrt btn
reStartBtn.addEventListener("click", () => {
   // hide result page
   resultPage.style.display = "none";
//  displaying  question page
  questionPage.style.display = "grid";
  // stop timmer
  clearInterval(countdown);
  // ReSet all vallue 
  Ans = undefined;
  count = 11;
  questionCount = 0;
  scoreCount = 0;
  // calling display quiz function 
  quizCreator(questionCount);
  displayNext();
});
// when user click Exit quiz
exitBtn.addEventListener("click", () => {
  homePage.style.display = "grid";
  questionPage.style.display = "none";
  resultPage.style.display = "none";
   // stop timmer
   clearInterval(countdown);
   // ReSet all vallue 
  Ans = undefined;
  count = 11;
  questionCount = 0;
  scoreCount = 0;
  CategoryType=undefined;
});