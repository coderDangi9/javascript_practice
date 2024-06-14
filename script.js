const PI = 3.142;
let radius;
let circumference;
let Area;
let diameter;

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  Area = PI * radius * radius;
  diameter = 2 * radius;
  document.getElementById("myH4").textContent =
    "Circumference of circle :- " + circumference + "cm";

  document.getElementById("myArea").textContent =
    "Area of Circle :- " + Area + "cm^2";

  // document.getElementById("myDiam").textContent =
  //   "Diameter :- " + diameter + "cm";
};
