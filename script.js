"use strict";
// ================= Navbar =====================
const navbar = document.querySelector("nav");
const listItems = document.querySelectorAll("li");

const navBarList = document.querySelector(".navbar__list");
const navToggleBtn = document.querySelector(".Navbar__Link-toggle");
navbar.addEventListener("click", (e) => {
  console.log(listItems);
  if (e.target.classList.contains("list-item")) {
    const choosedEx = e.target;
    listItems.forEach((item, index) => {
      document.querySelector(`#ex__${index + 1}`).classList.add("hidden");
    });
    console.log(e.target.dataset.tab);
    document
      .querySelector(`#ex__${choosedEx.dataset.tab}`)
      .classList.remove("hidden");
    navBarList.classList.toggle("Navbar__Toggle");
  } else return;
});
navToggleBtn.addEventListener("click", (e) => {
  navBarList.classList.toggle("Navbar__Toggle");
  document.documentElement.scrollTop = 0;
});

// ================== Permutation de deux nombres ==================
const swapBtn = document.getElementById("ex1--swap");
const ex1Form = document.querySelector("#ex1--démo form");
const deteleNums = document.querySelector("#ex1--delete");
const sourceCodeEx1 = document.querySelector("#ex1--source-code");
const ex1Error = document.querySelector("#ex1--error");
const jsCodeEx1 = document.createElement("pre");
document.getElementById("ex1--number__1").value = "";
document.getElementById("ex1--number__2").value = "";
swapBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let number1 = document.getElementById("ex1--number__1").value;
  let number2 = document.getElementById("ex1--number__2").value;
  if (!number1 || !number2) {
    ex1Error.innerHTML = "please enter the two numbers";
  } else {
    ex1Error.innerHTML = "";
    jsCodeEx1.innerHTML = `const swapBtn = document.getElementById("ex1--swap");
const ex1Form = document.querySelector("#ex1--démo form");
const deteleNums = document.querySelector("#ex1--delete");
const sourceCodeEx1 = document.querySelector
("#ex1--source-code");
const ex1Error = document.querySelector("#ex1--error");
const jsCodeEx1 = document.createElement("pre");
document.getElementById("ex1--number__1").value = "";
document.getElementById("ex1--number__2").value = "";
swapBtn.addEventListener("click", (e) => {
e.preventDefault();
let number1 = document.getElementById("ex1--number__1")
.value;
let number2 = document.getElementById("ex1--number__2")
.value;
if (!number1 || !number2) {
  ex1Error.innerHTML = "please enter the two numbers";
} else {
  ex1Error.innerHTML = "";
  const temp = number1;
  number1 = number2;
  number2 = temp;
  document.getElementById("ex1--number__1").value =
   number1;
  document.getElementById("ex1--number__2").value = 
  number2;
  sourceCodeEx1.appendChild(jsCodeEx1);
}
});
deteleNums.addEventListener("click", (e) => {
e.preventDefault();
jsCodeEx1.innerHTML = "";
document.getElementById("ex1--number__1").value = "";
document.getElementById("ex1--number__2").value = "";
});`;
    const temp = number1;
    number1 = number2;
    number2 = temp;
    document.getElementById("ex1--number__1").value = number1;
    document.getElementById("ex1--number__2").value = number2;
    sourceCodeEx1.appendChild(jsCodeEx1);
  }
});
deteleNums.addEventListener("click", (e) => {
  e.preventDefault();
  jsCodeEx1.innerHTML = "";
  document.getElementById("ex1--number__1").value = "";
  document.getElementById("ex1--number__2").value = "";
});
// ================== Valider une date =======================
const validateDateBtn = document.querySelector("#ex2--validate");
const sourceCodeEx2 = document.querySelector("#ex2--source-code");
const resultEx2 = document.querySelector("#ex2--result");
const jsCodeEx2 = document.createElement("pre");
const checkDate = (j, m, a) => {
  let leapYear = a % 400 == 0 || (a % 4 == 0 && a % 100 != 0);
  let case1 =
    a > 0 &&
    (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) &&
    j >= 1 &&
    j <= 31;
  let case2 =
    a > 0 && (m == 4 || m == 6 || m == 9 || m == 11) && j >= 1 && j <= 30;
  let case3 = a > 0 && m == 2 && !leapYear && j >= 1 && j <= 28;
  let case4 = a > 0 && m == 2 && leapYear && j >= 1 && j <= 29;
  if (case1 || case2 || case3 || case4) {
    resultEx2.innerHTML = "Valid date";
    jsCodeEx2.innerHTML = `const validateDateBtn = 
    document.querySelector
    ("#ex2--validate");
const sourceCodeEx2 = document.querySelector
("#ex2--source-code");
let dayEx2 = Number(document.querySelector("#ex2--day")
.value);
let monthEx2 = Number(document.querySelector
  ("#ex2--month").value);
let yearEx2 = Number(document.querySelector("#ex2--year")
.value);
const checkDate = (j, m, a) => {
const resultEx2 = document.querySelector("#ex2--result");
const jsCodeEx2 = document.createElement("pre");
let leapYear = a % 400 == 0 || (a % 4 == 0 && a % 100 != 0);
let case1 =
a > 0 &&
(m == 1 || m == 3 ||
   m == 5 || m == 7 
  || m == 8 || m == 10
   || m =12) &&
j >= 1 &&
j <= 31;
let case2 =
  a > 0 && (m == 4 || m == 6
     || m == 9 || m == 11)
   && j >= 1 && j <= 30;
let case3 = a > 0 && m == 2
 && !leapYear && j >= 1
 && j <= 28;
let case4 = a > 0 && m == 2
 && leapYear && j >= 1
 && j <= 29;
if (case1 || case2 || case3 || case4) {
  resultEx2.innerHTML = "Valid date";
  jsCodeEx2.innerHTML = "CODE HERE";
  sourceCodeEx2.appendChild(jsCodeEx2);
} else {
  resultEx2.innerHTML = "Invalid date";
  jsCodeEx2.innerHTML = "CODE HERE";
  sourceCodeEx2.appendChild(jsCodeEx2);
}
};
validateDateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkDate(dayEx2, monthEx2, yearEx2);
});`;
    sourceCodeEx2.appendChild(jsCodeEx2);
  } else {
    resultEx2.innerHTML = "Invalid date";
    jsCodeEx2.innerHTML = `const validateDateBtn = 
    document.querySelector
    ("#ex2--validate");
const sourceCodeEx2 = document.querySelector
("#ex2--source-code");
let dayEx2 = Number(document.querySelector("#ex2--day")
.value);
let monthEx2 = Number(document.querySelector
  ("#ex2--month").value);
let yearEx2 = Number(document.querySelector("#ex2--year")
.value);
const checkDate = (j, m, a) => {
const resultEx2 = document.querySelector("#ex2--result");
const jsCodeEx2 = document.createElement("pre");
let leapYear = a % 400 == 0 || (a % 4 == 0 && a % 100 != 0);
let case1 =
a > 0 &&
(m == 1 || m == 3 || m == 5 ||
   m == 7 || m == 8 ||
    m == 10 || m =12) &&
j >= 1 &&
j <= 31;
let case2 =
a > 0 && (m == 4 || m == 6 ||
   m == 9 || m == 11)
 && j >= 1 && j <= 30;
let case3 = a > 0 && m == 2 && !leapYear 
&& j >= 1 && j <= 28;
let case4 = a > 0 && m == 2 && leapYear
 && j >= 1 && j <= 29;
if (case1 || case2 || case3 || case4) {
  resultEx2.innerHTML = "Valid date";
  jsCodeEx2.innerHTML = "CODE HERE";
  sourceCodeEx2.appendChild(jsCodeEx2);
} else {
  resultEx2.innerHTML = "Invalid date";
  jsCodeEx2.innerHTML = "CODE HERE";
  sourceCodeEx2.appendChild(jsCodeEx2);
}
};
validateDateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkDate(dayEx2, monthEx2, yearEx2);
});`;
    sourceCodeEx2.appendChild(jsCodeEx2);
  }
};
validateDateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let dayEx2 = Number(document.querySelector("#ex2--day").value);
  let monthEx2 = Number(document.querySelector("#ex2--month").value);
  let yearEx2 = Number(document.querySelector("#ex2--year").value);
  checkDate(dayEx2, monthEx2, yearEx2);
});

// ================= Recherche et suppression dans une chaine ==============
const searchBtn = document.querySelector("#ex7--searchBtn");
const deleteBtn = document.querySelector("#ex7--deleteBtn");
let searchingResult, arrSentence, word;
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const sentence = document.querySelector("#ex7--sentence").value;
  word = document.querySelector("#ex7--word").value.trim();
  const result = document.querySelector("#result");
  arrSentence = sentence.split(" ");
  searchingResult = arrSentence.includes(word);
  if (searchingResult) result.innerHTML = "Found It";
  else result.innerHTML = "Didn't found It";
});
deleteBtn.addEventListener("click", (e) => {
  const newSentence = document.querySelector("#newSentence");
  e.preventDefault();
  if (searchingResult) {
    const deletedWord = arrSentence.splice(arrSentence.indexOf(word), 1);
    newSentence.innerHTML = arrSentence.join(" ");
    searchingResult = false;
  } else {
    newSentence.innerHTML = "No word to erase, search for another word please";
  }
});
// ============ Tri d'un tableau =============
let sortArr = (inputArr) => {
  let len = inputArr.length;
  let checked;
  do {
    checked = false;
    for (let i = 0; i < len - 1; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        checked = true;
      }
    }
  } while (checked);
  return inputArr;
};
const tableBtn = document.querySelector("#tableBtn");
const inputs = document.querySelector("#ex8--inputs");
let userNum;
tableBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const existedInputs = document.querySelectorAll("#ex8--inputs input");
  existedInputs.forEach((input) => {
    input.remove();
  });
  userNum = document.querySelector("#ex8--number").value;
  for (let i = 0; i < userNum; i++) {
    const createdInput = document.createElement("input");
    createdInput.setAttribute("type", "number");
    inputs.appendChild(createdInput);
  }
});
const sortBtn = document.querySelector("#ex8--sortBtn");
sortBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const enteredInputs = document.querySelectorAll("#ex8--inputs input");
  const sortedArr = [];
  enteredInputs.forEach((ele) => {
    sortedArr.push(Number(ele.value));
  });

  sortArr(sortedArr);

  const sortedInputs = document.querySelector("#ex8--sorted");
  console.log(userNum);
  for (let i = 0; i < userNum; i++) {
    const createdInput = document.createElement("input");
    createdInput.setAttribute("type", "number");
    createdInput.value = sortedArr[i];
    sortedInputs.append(createdInput);
  }
});
// =================== Recherche dans un tableau =====================
const tableBtn10 = document.querySelector("#tableBtn10");
const inputs10 = document.querySelector("#ex10--inputs");
const resultEx10 = document.querySelector("#ex10--result");
const searchEx10 = document.querySelector("#searchEx10");
let userNum10;
tableBtn10.addEventListener("click", (e) => {
  e.preventDefault();
  userNum10 = document.querySelector("#ex10--number").value;
  for (let i = 0; i < userNum10; i++) {
    const createdInput = document.createElement("input");
    createdInput.setAttribute("type", "number");
    inputs10.appendChild(createdInput);
  }
});
searchEx10.addEventListener("click", (e) => {
  e.preventDefault();
  const inputs10 = document.querySelectorAll("#ex10--inputs input");
  const arr = [];
  const searchThis10 = document.querySelector("#searchThis10").value;
  const result10 = document.querySelector("#result10");
  inputs10.forEach((ele) => {
    arr.push(ele.value);
  });
  let foundIt = false;
  for (let i = 0; i < arr.length && !foundIt; i++) {
    if (arr[i] === searchThis10) {
      foundIt = true;
    }
  }
  foundIt
    ? (result10.innerHTML = "Found it")
    : (result10.innerHTML = "Didn't find it");
  if (!searchThis10) result10.innerHTML = "Please enter a number";
});
// ==================== Nombre de voyelles =====================
const voyelles = ["a", "e", "i", "u", "o", "y"];
const searchEx9 = document.querySelector("#ex9--search");
const resultEx9 = document.querySelector("#ex9--result");
const calcVowels = (str) => {
  let countTimes = 0;
  str = str.toLowerCase();
  for (let j = 0; j < voyelles.length; j++) {
    for (let i = 0; i < str.length; i++) {
      if (voyelles[j] === str[i]) countTimes++;
    }
  }
  return countTimes;
};
searchEx9.addEventListener("click", (e) => {
  e.preventDefault();
  let inputEx9 = document.querySelector("#ex9--input").value;
  resultEx9.innerHTML = `This sentence have ${calcVowels(inputEx9)} vowells`;
});

// ========== Table de multiplication ===============
const submitEx2 = document.querySelector("#ex3--submit");
const resultEx3 = document.querySelector("#ex3--result");
const jsCodeEx3 = document.createElement("pre");
const sourceCodeEx3 = document.querySelector("#ex3--source-code");
document.querySelector("#ex3--input").value = "";
submitEx2.addEventListener("click", (e) => {
  let multiplication = "";
  const numberEx2 = document.querySelector("#ex3--input").value;
  for (let i = 1; i <= 10; i++) {
    multiplication += `${Number(numberEx2)} * ${i} = ${
      Number(numberEx2) * i
    } <br>`;
  }
  resultEx3.innerHTML = multiplication;
  jsCodeEx3.textContent = `const submitEx2 = document.querySelector("#ex3--submit");
const resultEx3 = document.querySelector("#ex3--result");
const jsCodeEx3 = document.createElement("pre");
document.querySelector("#ex3--input").value = "";
submitEx2.addEventListener("click", (e) => {
let multiplication = "";
const numberEx2 = document.querySelector("#ex3--input")
.value;
for (let i = 1; i <= 10; i++) {
multiplication += 'dollarsign{Number(numberEx2)}
 * dollarsign{i}=dollarsig{
Number(numberEx2) * i
} <br>';
}
resultEx3.innerHTML = multiplication;
});`;
  sourceCodeEx3.appendChild(jsCodeEx3);
});
// ================ Losange en étoiles =================
const btnEx5 = document.querySelector("#ex5--submit");
const resultEx5 = document.querySelector("#ex5--result");
const drawStars = function (rows, result) {
  let lignes = rows;
  rows = rows / 2 + 0.5;
  let str = "";
  if (lignes % 2 == 1) {
    for (let i = 1; i <= rows; i++) {
      for (let spaces = 0; spaces < rows - i; spaces++) {
        str += "&nbsp";
      }
      for (let stars = 0; stars < i * 2 - 1; stars++) {
        str += "*";
      }
      str += "<br>";
    }
    for (let i = rows - 1; i >= 1; i--) {
      for (let spaces = 0; spaces < rows - i; spaces++) {
        str += "&nbsp";
      }
      for (let stars = 0; stars < i * 2 - 1; stars++) {
        str += "*";
      }
      str += "<br>";
    }
    return (result.innerHTML = str);
  } else return (result.innerHTML = "Please enter an odd number");
};
btnEx5.addEventListener("click", (e) => {
  e.preventDefault();
  const resultEx5P = document.querySelector("#ex5--result p");
  let inputEx5 = document.querySelector("#ex5--input").value;
  drawStars(inputEx5, resultEx5P);
});
// ======================= Devine le nombre ========================
let chances = 10;
let count = 0;
let won = false;
let ex3Result = document.querySelector("#ex4--result");
let attempts = document.querySelector("#ex4--démo form p span");
ex3Result.innerHTML = `Please enter a number between 1 and 50`;
function guessNumber(random) {
  console.log(random);
  let number = document.querySelector("#ex4--input").value;
  attempts.innerHTML = `${chances}/10`;
  if (number <= 50 && number > 0 && won == false) {
    while (number !== random && chances > 0) {
      if (random > number) {
        ex3Result.innerHTML = "Please go higher !";
        chances--;
        count++;
        attempts.innerHTML = `${chances}/10`;
      } else {
        ex3Result.innerHTML = "Please go lower";
        chances--;
        count++;
        attempts.innerHTML = `${chances}/10`;
      }
      break;
    }
  }
  if (number == random) {
    won = true;
    ex3Result.innerHTML = `You won after ${count} attempts.`;
    document.querySelector("#ex4--input").setAttribute("readonly", true);
  }
  if (chances === 0) ex3Result.innerHTML = "YOU LOST";
}
const ex4Btn = document.querySelector("#ex4--submit");
const sourceCodeEx4 = document.querySelector("#ex4--source-code");
const preEx4 = document.createElement("pre");
const ex4PlayAgain = document.querySelector("#ex4--playAgain");
let randomNum = Math.floor(Math.random() * 50) + 1;
ex4Btn.addEventListener("click", (e) => {
  e.preventDefault();
  guessNumber(randomNum);
  preEx4.innerHTML = `let chances = 10;
let count = 0;
function guessNumber(random) {
console.log(random);
let number = document.querySelector("#ex4--input").value;
let attempts = document.querySelector
("#ex4--démo form p span");
let ex3Result = document.querySelector("#ex4--result");
if (number <= 50 && number > 0) {
  while (number !== random && chances > 0) {
    ex3Result.innerHTML = "Réesseyez encore !";
    chances--;
    count++;
    attempts.innerHTML = '${chances}/10';
    break;
  }
}

if (number == random) {
  ex3Result.innerHTML = 'You won after ${count} attempts.'';
}
if (chances === 0) ex3Result.innerHTML = "YOU LOST";
}
const ex4Btn = document.querySelector("#ex4--submit");
const sourceCodeEx4 = document.querySelector
('#ex4--source-code');
const preEx4 = document.createElement('pre');
let randomNum = Math.floor(Math.random() * 50) + 1;
ex4Btn.addEventListener("click", (e) => {
  e.preventDefault();
  guessNumber(randomNum);;
});`;
  sourceCodeEx4.appendChild(preEx4);
});
ex4PlayAgain.addEventListener("click", (e) => {
  randomNum = Math.floor(Math.random() * 50) + 1;
  document.querySelector("#ex4--input").value = "";
  ex3Result.innerHTML = `Please enter a number between 1 and 50`;
  chances = 10;
  count = 0;
  won = false;
  document.querySelector("#ex4--input").removeAttribute("readonly");
  guessNumber(randomNum);
});
// ================ Calculatrice =================
let resultEx6 = document.querySelector("#ex6--result").value;
const additionEx6 = document.querySelector("#ex6--addition");
const substractionEx6 = document.querySelector("#ex6--substraction");
const multiplicationEx6 = document.querySelector("#ex6--multiplication");
const dividingEx6 = document.querySelector("#ex6--dividing");
const deleteEx6 = document.querySelector("#ex6--delete");
const addition = (num1, num2) => {
  return Number(num1) + Number(num2);
};
const substraction = (num1, num2) => {
  return Number(num1) - Number(num2);
};
const multiplication = (num1, num2) => {
  return Number(num1) * Number(num2);
};
const dividing = (num1, num2) => {
  return Number(num1) / Number(num2);
};
additionEx6.addEventListener("click", (e) => {
  let num1Ex6 = document.querySelector("#ex6--num1").value;
  let num2Ex6 = document.querySelector("#ex6--num2").value;
  document.querySelector("#ex6--result").value = addition(num1Ex6, num2Ex6);
});
substractionEx6.addEventListener("click", (e) => {
  let num1Ex6 = document.querySelector("#ex6--num1").value;
  let num2Ex6 = document.querySelector("#ex6--num2").value;
  document.querySelector("#ex6--result").value = substraction(num1Ex6, num2Ex6);
});
multiplicationEx6.addEventListener("click", (e) => {
  let num1Ex6 = document.querySelector("#ex6--num1").value;
  let num2Ex6 = document.querySelector("#ex6--num2").value;
  document.querySelector("#ex6--result").value = multiplication(
    num1Ex6,
    num2Ex6
  );
});
dividingEx6.addEventListener("click", (e) => {
  let num1Ex6 = document.querySelector("#ex6--num1").value;
  let num2Ex6 = document.querySelector("#ex6--num2").value;
  document.querySelector("#ex6--result").value = dividing(num1Ex6, num2Ex6);
});
// ==========================================================
