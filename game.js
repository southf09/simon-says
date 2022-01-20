let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosen = buttonColors[randomNumber];
  gamePattern.push(randomChosen);

  //Use jQuery to select the button with the same ID as randomChosen and figure out how to animate a flash to the button selected in step 1
  $("#" + randomChosen)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  let audio = new Audio("sounds/" + randomChosen + ".mp3");
  audio.play();
}

$(".btn").click(function (e) {
  let userChosenColor = e.target.classList[1];
  userClickedPattern.push(userChosenColor);
});

switch (userChosenColor) {
  case "green":
    let greenBtn = new Audio("sounds/green.mp3");
    greenBtn.play();
    break;

  case "red":
    let redBtn = new Audio("sounds/red.mp3");
    greenBtn.play();
    break;

  case "yellow":
    let yellowBtn = new Audio("sounds/yellow.mp3");
    yellowBtn.play();
    break;

  case "green":
    let greenBtn = new Audio("sounds/green.mp3");
    greenBtn.play();
    break;
}
