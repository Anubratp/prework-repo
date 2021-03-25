//Global Variables
var clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
var guessCounter = 0;
var mistakeCount;
var pattern;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var maxTime = 30;
var x;
var timedelay = 1000;

console.log("timedelay3:" + timedelay);

x = setTimeout(function CountDownTimer() {
  document.getElementById("demo").innerHTML = maxTime;
  if (gamePlaying) {
    if (maxTime == -1) {
      stopGame();
      alert("Outta Time!");
      refreshTimer();
    } else maxTime--;
  }
  x = setTimeout(CountDownTimer, 1000);
}, timedelay + 3000);

function refreshTimer() {
  clearInterval();
  maxTime = 30;
}

function randomizePattern() {
  var pattern = new Array(12);

  for (var i = 0; i < pattern.length - 1; i++)
    pattern[i] = Math.floor(Math.random() * 15 + 1);
  return pattern;
}

function startGame() {
  //initialize game variables
  pattern = randomizePattern();
  mistakeCount = 2;
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  clueHoldTime = 1000;
  refreshTimer();
  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.63,
  2: 293.66,
  3: 329.63,
  4: 349.23,
  5: 392.0,
  6: 440.0,
  7: 493.88,
  8: 523.25,
  9: 587.33,
  10: 659.25,
  11: 698.46,
  12: 783.99,
  13: 880.0,
  14: 987.77,
  15: 1046.5,
  16: 1174.66
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function repeatClueSequence() {
  guessCounter = 0;
  var temp = progress;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= temp; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    if (i != 0) clueHoldTime /= 1.125;
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  timedelay = delay + 250;
  console.log("timelag: " + timedelay);
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won.");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // add game logic here
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      refreshTimer();
      if (progress == pattern.length - 1) winGame();
      else {
        progress++;
        playClueSequence();
      }
    } else guessCounter++;
  } else if (mistakeCount == 0) loseGame();
  else {
    mistakeCount--;
    repeatClueSequence();
    refreshTimer();
    x;
    alert(`Beware! Only ${mistakeCount + 1} attempts remaining!!`);
  }
}
