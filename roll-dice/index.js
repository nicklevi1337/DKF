const images = [
  "Dice-1.svg",
  "Dice-2.svg",
  "Dice-3.svg",
  "Dice-4.svg",
  "Dice-5.svg",
  "Dice-6.svg",
];

const dice = document.querySelectorAll("img");

function RollDice() {
  dice.forEach(function (die) {
    die.classList.add("roll");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("roll");
    });

    const dice1val = Math.floor(Math.random() * 6);
    const dice2val = Math.floor(Math.random() * 6);
    console.log(dice1val, dice2val);
    document.querySelector("#dice-1").setAttribute("src", images[dice1val]);
    document.querySelector("#dice-2").setAttribute("src", images[dice2val]);
    document.querySelector("#total").innerHTML = "Ваше  число " + (dice1val + 1 + (dice2val + 1));
  }, 1000);
}
RollDice();
