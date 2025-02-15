const images = [
  "Dice-1.svg",
  "Dice-2.svg",
  "Dice-3.svg",
  "Dice-4.svg",
  "Dice-5.svg",
  "Dice-6.svg",
];

const diceContainer = document.getElementById("dice-container");
const diceCountSelect = document.getElementById("dice-count");


function createDiceElements(count) {
  diceContainer.innerHTML = "";
  for (let i = 0; i < count; i++) {
      const img = document.createElement("img");
      img.classList.add("dice");
      img.setAttribute("id", `dice-${i + 1}`);
      diceContainer.appendChild(img);
  }
}


diceCountSelect.addEventListener("change", function () {
  createDiceElements(Number(diceCountSelect.value));
});


function RollDice() {
  const dice = document.querySelectorAll(".dice");
  dice.forEach(die => die.classList.add("roll"));

  setTimeout(() => {
      let total = 0;
      dice.forEach((die, index) => {
          const rollValue = Math.floor(Math.random() * 6);
          die.setAttribute("src", images[rollValue]);
          total += rollValue + 1;
      });

      document.getElementById("total").innerHTML = `Ваше число: ${total}`;
      dice.forEach(die => die.classList.remove("roll"));
  }, 1000);
}

createDiceElements(2);
