let music = new Audio("music.mp3");
let Audioturn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;

// function to change turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// function to check win
const checkWin = () => {
  let boxTexts = document.getElementsByClassName('texts');
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  wins.forEach(e => {
    if (
      (boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) &&
      (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) &&
      (boxTexts[e[0]].innerText !== "")
    ) {
      document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " Won";
      isGameOver = true;
      gameOver.play();
      document.querySelector('.imgBox img').style.display = "block";
    }
  });
};

// Game Logic
let boxes = document.getElementsByClassName("boxes");
Array.from(boxes).forEach(element => {
  let boxText = element.querySelector('.texts');
  element.addEventListener('click', () => {
    if (boxText.innerText === '' && !isGameOver) {
      boxText.innerText = turn;
      turn = changeTurn();
      Audioturn.play();
      checkWin();
      if (!isGameOver) {
        document.querySelector('.info').innerText = "Turn for " + turn;
      }
    }
  });
});

// Reset Button Logic
document.getElementById('reset').addEventListener('click', () => {
  let boxTexts = document.querySelectorAll('.texts');
  Array.from(boxTexts).forEach(element => {
    element.innerText = "";
  });
  turn = "X";
  isGameOver = false;
  document.querySelector('.info').innerText = "Turn for " + turn;
  document.querySelector('.imgBox img').style.display = "none";
});
