import data from "./data.json" assert { type: "json" };

let amounts = [];

for (let i = 0; i < data.length; i++) {
  amounts.push(data[i].amount);
}

const reScale = (array) => {
  const max = Math.max(...array);
  const barScaleFactor = 200 / (Math.floor(max / 10) * 10 + 10);
  const newArray = array.map((value) => Math.round(value * barScaleFactor));
  return newArray;
};

const days = document.querySelectorAll(".bar");
const hoverAmount = document.querySelectorAll(".amount");
const monthlyTotal = document.getElementById("monthlyTotal");

const reScaledAmounts = reScale(amounts);

for (let i = 0; i < reScaledAmounts.length; i++) {
  days[i].style.height = `${reScaledAmounts[i]}px`;
}

for (let i = 0; i < hoverAmount.length; i++) {
  hoverAmount[i].innerHTML = "$" + amounts[i];
}

monthlyTotal.innerText = "$" + amounts.reduce(
  (accumulator, value) => accumulator + value
);
