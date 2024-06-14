const mybut = document.getElementById("myButton");
const lable1 = document.getElementById("myLable1");
const lable2 = document.getElementById("myLable2");
const lable3 = document.getElementById("myLable3");

const max = 6;
const min = 1;
let random1;
let random2;
let random3;

mybut.onclick = function () {
  random1 = Math.floor(Math.random() * max) + min;
  random2 = Math.floor(Math.random() * max) + min;
  random3 = Math.floor(Math.random() * max) + min;

  lable1.textContent = random1;
  lable2.textContent = random2;
  lable3.textContent = random3;
};
