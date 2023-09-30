/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
     function add(number1, number2){
        const sum = number1 + number2
        return sum
     }

function addNumbers(){
    let add1 = Number(document.querySelector("#add1").value);
    let add2 = Number(document.querySelector("#add2").value);
      const sum = add(add1, add2)
      document.querySelector("#sum").value = sum

        console.log("Number 1:", add1)
        console.log("Number 2:", add2)
        console.log("SUM", sum)
}

document.querySelector("#addNumbers").addEventListener(`click`,addNumbers)

/* Function Expression - Subtract Numbers */
     function subtract(number1, number2){
        const difference = number1 - number2
        return difference
     }

function subtractNumbers(){
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
      const difference = subtract(subtract1, subtract2)
      document.querySelector("#difference").value = difference

        console.log("Number 1:", subtract1)
        console.log("Number 2:", subtract2)
        console.log("Difference", difference)
}

document.querySelector("#subtractNumbers").addEventListener(`click`,subtractNumbers)
     
     //Number(document.querySelector("#subtract1").value);

/* Arrow Function - Multiply Numbers */
     function factor(number1, number2){
        const product = number1 * number2
        return product
     }

function multiplyNumbers(){
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
      const product = factor(factor1, factor2)
      document.querySelector("#product").value = product

        console.log("Number 1:", factor1)
        console.log("Number 2:", factor2)
        console.log("Product", product)
}

document.querySelector("#multiplyNumbers").addEventListener(`click`,multiplyNumbers)

/* Open Function Use - Divide Numbers */
     function div(dividend, divisor){
        const quotient = dividend / divisor
        return quotient
     }

function divideNumbers(){
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
      const quotient = div(dividend, divisor)
      document.querySelector("#quotient").value = quotient

        console.log("Dividend:", dividend)
        console.log("Divisor:", divisor)
        console.log("Quotient:", quotient)
}

document.querySelector("#divideNumbers").addEventListener(`click`,divideNumbers)

/* Decision Structure */
let today = new Date();
let currentYear = "";
currentYear = today.getFullYear();
document.getElementById("year").textContent=currentYear

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const arrayElement = document.getElementById("array");
arrayElement.textContent = numbersArray;

/* Output Odds Only Array */
function odds(item) {
    if (item % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

oddNums = numbersArray.filter(odds);
const oddsElement = document.getElementById("odds");
oddsElement.textContent = oddNums;

/* Output Evens Only Array */
function evens(item) {
    if (item % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

evenNums = numbersArray.filter(evens);
const evensElement = document.getElementById("evens");
evensElement.textContent = evenNums;

/* Output Sum of Org. Array */
const initialValue = 0;
const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
const sumOfArrayElement = document.getElementById("sumOfArray");
sumOfArrayElement.textContent = sumOfArray;

/* Output Multiplied by 2 Array */
const multiplied = numbersArray.map((x)=>x*2);
const multipliedElement = document.getElementById("multiplied");
multipliedElement.textContent = multiplied;

/* Output Sum of Multiplied by 2 Array */
const initialValue1 = 0;
const sumOfMultiplied = multiplied.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue1);
const sumOfMultipliedElement = document.getElementById("sumOfMultiplied");
sumOfMultipliedElement.textContent = sumOfMultiplied;