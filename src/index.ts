import { exit } from "node:process";
import { createInterface } from "node:readline/promises";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function guess() {
  const answer = Math.floor(Math.random() * 10) + 1;
  let guess = 0;

  while (guess != answer) {
    const input = await readline.question(
      "❓ Guess a number between 1 and 10: "
    );

    guess = parseInt(input, 10);
    if (guess < answer) {
      console.log("🔻 Too low!");
    } else if (guess > answer) {
      console.log("🔺 Too high!");
    }
  }

  console.log("✅ You got it!");
  exit(0);
}

guess();
