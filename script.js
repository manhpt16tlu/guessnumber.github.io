'use strict';

let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1; //khởi tạo số ngẫu nhiên

let yourScore = 20; // khởi tạo điểm
document.querySelector('.score').textContent = yourScore;
document.querySelector('.highscore').textContent = highScore;

//sự kiện click
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    //input rỗng
    document.querySelector('.message').textContent = 'No number';
  } else if (guessNumber === secretNumber) {
    //đoán đúng
    document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highScore < yourScore) {
      highScore = yourScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber > secretNumber) {
    //đoán cao hơn
    if (yourScore > 1) {
      document.querySelector('.message').textContent = 'Too high';
      yourScore--;
      document.querySelector('.score').textContent = yourScore;
    } else {
      document.querySelector('.message').textContent =
        'You lose,pls refresh your browser :(';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNumber < secretNumber) {
    //đoán thấp hơn
    if (yourScore > 1) {
      document.querySelector('.message').textContent = 'Too low';
      yourScore--;
      document.querySelector('.score').textContent = yourScore;
    } else {
      document.querySelector('.message').textContent =
        'You lose,pls refresh your browser :(';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//sự kiện reset
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  yourScore = 20;
  document.querySelector('.score').textContent = yourScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
