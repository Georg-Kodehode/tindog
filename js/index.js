import { dogs } from "./data.js";
import { Dog } from "./Dog.js";

const initialDog = document.getElementById("dog-profile");
const crossBtn = document.getElementById("cross-btn");
const likeBtn = document.getElementById("heart-btn");
let currentDog = 0;
let nextDog = new Dog(dogs[currentDog]);

// create a dog when the application starts
newDog();

// listen for click events, then call the likeOrNot function
crossBtn.addEventListener("click", () => {
  likeOrNot("images/badge-nope.png");
});

// listen for click events, then call the likeOrNot function
likeBtn.addEventListener("click", () => {
  likeOrNot("images/badge-like.png");
});

// show the badge, then call newDog after 1 second
function likeOrNot(badge) {
  document.getElementById("like-or-not-img").src = badge;
  document.getElementById("like-or-not-img").style.display = "flex";
  setTimeout(() => {
    newDog();
  }, 1000);
}

// show the next dog
function newDog() {
  initialDog.innerHTML = nextDog.getDogHtml();
  console.log(currentDog);
  currentDog += 1;
  currentDog = currentDog == dogs.length ? 0 : currentDog++;
  nextDog = new Dog(dogs[currentDog]);
}
