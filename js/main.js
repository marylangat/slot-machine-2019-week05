// Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like normal slot machine and they win 10x their bet.

//totalMoney var

//eventmin
    //checkForWin
  //if (won)
    //addMoneyTotal
  //else
     //removeMoneyTotal
  //update dom

//eventmax
  //checkForWin
    //if (won)
      //addMoneyTotal
    //else
      //removeMoneyTotal
//update dom

//checkForWin
    //let reel1 = Math.random
    //let reel2 = Math.random
    //let reel3 = Math.random

    // if(reel1 === reel2 && reel2 === reel3){
    //   return true
    // }else{
    //   return false
    // }
    //
//document.getElementById("minbet").onclick = eventmin
const icons = ["🧜🏽‍♀️", "🦑", "🌊", "🐚", "🐬"];

const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");




let betAmt = 0;
let currentEarnings = 1000;
const maxBet = document.querySelector("#maxBet");
const minBet = document.querySelector("#minBet");
const payMsg = document.querySelector(".payoutMessage");
const earnings = document.querySelector(".currentEarnings");
const totalBet = document.querySelector(".totalBet");


const highestBet = 50;
const lowestBet = 5;
maxBet.addEventListener("click", () => {
  if (currentEarnings - betAmt <= 0) {
    alert("You ran out of money");
  } else {
      setBet(highestBet);
    }
  });

minBet.addEventListener("click", () => {
  if (currentEarnings - betAmt <= 0) {
    alert("You ran out of money");
  } else {
      setBet(lowestBet);
    }
  });

document.querySelector("#spinBtn").addEventListener("click", runMachine);


function randomIcon(){
  return Math.floor(Math.random() * icons.length);
}

function runMachine(){
  const spins = spinReel();
  const winnings = checkForWin(spins);
  console.log(winnings);
  setEarnings(betAmt + winnings);
  setBet(betAmt);
}

function spinReel(){
  if (betAmt === 0) {
    alert("Please place your bet to spin!");
  } else {
    reel1.innerHTML = "";
    reel2.innerHTML = "";
    reel3.innerHTML ="";
    const spins = [
      icons[randomIcon()], icons[randomIcon()], icons[randomIcon()]
    ];
    setTimeout(function () {
      reel1.innerHTML = spins[0];
    }, 500);
    setTimeout(function () {
      reel2.innerHTML = spins[1];
    }, 800);
    setTimeout(function () {
      reel3.innerHTML = spins[2];
    }, 1100);
    return spins;
  }

    }

function checkForWin(spins){
  if(spins[0] === spins[1] && spins[0] === spins[2]){
  payMsg.innerHTML = `<span class = "payoutMessage"> congratulations you have won 5X your bet ammount! $${
    betAmt * 5
  } earned!</span>`;
  return betAmt*4;
  }else {
    payMsg.innerHTML = `<span class="payoutMessage">Better luck next time!</span>`;
    return -betAmt*2;
  }
}
function setEarnings(value) {
  currentEarnings += value;
  earnings.innerHTML = `Current Earnings: $${currentEarnings}`;
}
function setBet(value) {
  betAmt = value;
  totalBet.innerHTML = `Current Bet: $${betAmt}`;
}
