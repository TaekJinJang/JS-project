let RandomNumber = 0;
let chance = 5;
let gameOver = false;
function pickRandomNumber() {
  RandomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("정답: ", RandomNumber);
}

let play = document.getElementById("play");

let number = document.getElementById("user-num");
let playChance = document.getElementById("play-chance");
let changeText = document.getElementById("play-text");
let reset = document.getElementById("reset");
let history=[]
play.addEventListener("click", gamePlay);
reset.addEventListener("click", gameReset);
number.addEventListener("focus",function () {
  number.value = "";
})
function gamePlay() {
  let userNum = number.value;

  if(userNum<1 || userNum > 100){
    changeText.textContent = "1과 100 사이의 숫자만 가능합니다."
    return;
  }
  if(history.includes(userNum)){
    changeText.textContent = "중복된 값입니다."
    return;
  }
  chance--;
  playChance.textContent = chance;
  
  if (userNum > 100) {
    changeText.textContent = "1부터 100 사이의 숫자만 가능합니다";
  } else if (userNum > RandomNumber) {
    changeText.textContent = "DOWN!!!";
  } else if (userNum < RandomNumber) {
    changeText.textContent = "UP!!!";
  } else if (userNum == RandomNumber) {
    changeText.textContent = "맞췄습니다 !!";
    play.disabled=true;
  }

  history.push(userNum);
  

  if (chance < 1) {
    play.disabled = true;
  }
 // number.value = "";
}
pickRandomNumber();

function gameReset() {
  number.value = "";
  pickRandomNumber();
  changeText.textContent = "1~100까지 숫자를 맞춰주세요";
  chance = 5;
  playChance.textContent = chance;
  play.disabled=false;
}
