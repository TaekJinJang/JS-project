let RandomNumber = 0;
let chance = 5;
function pickRandomNumber() {
  RandomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("정답: ", RandomNumber);
}

let play = document.getElementById("play");

let number = document.getElementById("user-num");
let playchance = document.getElementById("play-chance");
let changetext = document.getElementById("play-text");
let reset = document.getElementById("reset")
play.addEventListener("click", gameplay);
reset.addEventListener("click",gamereset);

function gameplay() {
  let userNum = number.value;
  chance --;
  playchance.textContent = chance;
  if (userNum > 100) {
    changetext.textContent = "1부터 100 사이의 숫자만 가능합니다";
  } else if (userNum > RandomNumber) {
    changetext.textContent = "DOWN!!!";
  } else if (userNum < RandomNumber) {
    changetext.textContent = "UP!!!";
  } else if (userNum == RandomNumber) {
    changetext.textContent = "맞췄습니다 !!";
  }
  if (chance < 1) {
    play.Disabled = true
  }
}
pickRandomNumber();
 // 왜 버튼일 게임오버 변수 안만들고 바로disable 하면 안되는지? 
function gamereset(){
    number.value=""
    pickRandomNumber()
    changetext.textContent = "1~100까지 숫자를 맞춰주세요"
}