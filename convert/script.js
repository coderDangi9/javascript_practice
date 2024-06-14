let fahrenheit;
let celsius;
let kelvin;

document.getElementById("mySubmit").onclick = function () {
  fahrenheit = document.getElementById("myValue").value;

  fahrenheit = Number(fahrenheit);
  celsius = ((fahrenheit - 32) * 5) / 9;
  kelvin = celsius + 273.15;

  document.getElementById("myText").value = celsius + "C";
  document.getElementById("mykelvin").value = kelvin + "k";
};
