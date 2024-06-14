let i = 0;

const decBtn = document.getElementById("myDec");
const incBtn = document.getElementById("myInc");
const resetBtn = document.getElementById("myReset");
const valueChange = document.getElementById("myVal");

decBtn.onclick = function () {
  i--;
  valueChange.textContent = i;
};
incBtn.onclick = function () {
  i++;
  valueChange.textContent = i;
};
resetBtn.onclick = function () {
  i = 0;
  valueChange.textContent = i;
};
