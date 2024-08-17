let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result p");
// const img_div = document.querySelector(".choice img");
// const computerWon_div = document.querySelector(".computer-won p");
const rock_div = document.querySelector(".rock");
const paper_div = document.querySelector(".paper");
const scissor_div = document.querySelector(".scissor");
// const button = document.querySelector(".btn");

generator = function () {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return "r";
      break;
    case 1:
      return "p";
      break;
    case 2:
      return "s";
      break;
    default:
    // code block
  }
};
// computerWon = function () {
//   if (computerScore > userScore) {
//     choice.src = "";
//     computerWon_div.innerText = `computer won by ${
//       computerScore - userScore
//     } 💻`;
//     button.innerHTML = "play again";
//   }
// };
game = function (input) {
  switch (input) {
    case "rp":
      computerScore++;
      computerScore_span.innerHTML = computerScore;
      result_div.innerText = "paper covers rock.you loose😞!";
      break;
    case "rs":
      userScore++;
      userScore_span.innerHTML = userScore;
      result_div.innerText = "rock covers scissor.you win😁!";
      break;
    case "pr":
      userScore++;
      userScore_span.innerHTML = userScore;
      result_div.innerText = "paper covers rock.you win😁!";
      break;
    case "ps":
      computerScore++;
      computerScore_span.innerHTML = computerScore;
      result_div.innerText = "scissor covers paper.you loose😞!";
      break;
    case "sr":
      computerScore++;
      computerScore_span.innerHTML = computerScore;
      result_div.innerText = "rock covers scissor.you loose😞!";
      break;
    case "sp":
      userScore++;
      userScore_span.innerHTML = userScore;
      result_div.innerText = "scissor covers paper.you win😁!";
      break;
    default:
      result_div.innerText = "it's a draw👀";
    // computerWon();
  }
};
rock_div.addEventListener("click", () => {
  game(`r${generator()}`);
});
paper_div.addEventListener("click", () => {
  generator();
  game(`p${generator()}`);
});
scissor_div.addEventListener("click", () => {
  generator();
  game(`s${generator()}`);
});
