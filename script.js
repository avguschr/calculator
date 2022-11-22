let change = document.getElementById("change");
let output = document.getElementById("output");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");

let str = "";

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    str = calcResult(str);
  }
});

calc = (str) => {
  return Function(`'use strict'; return (${str})`)();
};

clear.onclick = () => {
  str = "";
  output.value = "";
};

document.querySelectorAll(".action").forEach((action) => {
  action.onclick = function () {
    str = str + this.innerHTML;
    output.value = str;
  };
});

const numbers = document.querySelectorAll(".num").forEach((num) => {
  num.onclick = function () {
    str = str + this.innerHTML;
    output.value = str;
  };
});

calcResult = (str) => {
  if (str) {
    str = calc(str);
    output.value = str;
    return str;
  }
};

equal.onclick = () => {
  str = calcResult(str);
};

change.onclick = () => {
  str = calcResult(str) * -1;
  output.value = str
};
