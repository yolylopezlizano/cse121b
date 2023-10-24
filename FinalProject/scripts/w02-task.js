/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
const fullName = "Yolanda Lizano";

/* Step 2 - Variables */
const currentYear = new Date().getFullYear();
let profilePicture = "images/photo_yoly.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
let foodFav = ["Steak", " Seco de Carne", " Stroganoff", " Pizza", " Fritada", 
" Burguers", " Bolognese Pasta", " Fried Rice", " Ice cream", " Cake", " French fries"]
foodElement.textContent = foodFav;
let foodFav1 = foodFav.push(" Mush Potatoes");
foodElement.innerHTML += `<br>${foodFav}`;
let foodFav2 = foodFav.shift();
foodElement.innerHTML += `<br>${foodFav}`;
let foodFav3 = foodFav.pop();
foodElement.innerHTML += `<br>${foodFav}`;









