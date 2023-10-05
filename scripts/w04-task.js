/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Yolanda Lizano",
    photo: "images/photo_yoly.jpg",
    favoriteFoods: [
        "French Fries", 
        "Pizza", 
        "Seco de carne",
        "Burguers"
    ],
    hobbies: [
        "Reading", 
        "Walking", 
        "Handcrafts", 
        "Watch movies"
    ],
    placesLived : [] 
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({place: "Quito - Ecuador", length: "33 years"});
myProfile.placesLived.push({place: "Guayaquil - Ecuador", length: "1 year"});
myProfile.placesLived.push({place: "Houston - Texas", length: "1 year and a half"});
myProfile.placesLived.push({place: "Tulsa - Oklahoma", length: "2 years and a half"}); 


/* DOM Manipulation - Output */
/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/
const favoriteFoodsList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach((food) => {
  const listItem = document.createElement("li");
  listItem.textContent = food;
  favoriteFoodsList.appendChild(listItem);
});

/* Hobbies List */
const hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach((hobby) => {
  const listItem = document.createElement("li");
  listItem.textContent = hobby;
  hobbiesList.appendChild(listItem);
});

/* Places Lived DataList */

const placesLivedList = document.getElementById("places-lived");

myProfile.placesLived.forEach((place) => {
  const dt = document.createElement("dt");
  dt.textContent = place.place;

  const dd = document.createElement("dd");
  dd.textContent = place.length;

  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});
