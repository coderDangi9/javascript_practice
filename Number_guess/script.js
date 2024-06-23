const minNum = 50;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum) + 1) + minNum;

console.log(answer);

let attempt = 0;
let guess;
let running = true;

while ((running = true)) {
  guess = window.prompt(`Guess a number betn ${minNum}-${maxNum}`);
  guess = Number(guess);
  console.log(typeof guess, guess);

  if (isNaN(guess)) {
    window.alert("invalid number.");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Enter a valid number.");
  } else {
    attempt++;
    if (guess < answer) {
      window.alert("Too Low! Try again");
    } else if (guess > answer) {
      window.alert("Too High! Try Again");
    } else {
      window.alert("Congrats, right answer");
      running = false;
    }
  }
}
