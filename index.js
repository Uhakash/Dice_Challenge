var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var dice = "images/dice" + String(randomNumber1) + ".png";
document.querySelector(".img1").setAttribute("src", dice);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
dice = "images/dice" + String(randomNumber2) + ".png";
document.querySelector(".img2").setAttribute("src", dice);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🎉Player1 wins🎊";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "🎉Player2 wins🎊";
} else {
  document.querySelector("h1").innerText = "🎉Draw🎊";
}
