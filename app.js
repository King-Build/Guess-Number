let randomNumber = Math.floor(Math.random() * 100);
let guessNumber = prompt('Guess Number 0 to 100');
while (randomNumber != guessNumber) {
    if (randomNumber < guessNumber) {
        guessNumber = prompt('Your number is Bigger');
    } else {
        guessNumber = prompt('Your number is Smaller');
    }
}
if (randomNumber == guessNumber) {
    alert('Congratulations ' + guessNumber + ' is Correct');
} else {
    alert('Wrong');
}
console.log(randomNumber);






















