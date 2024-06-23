const mycheckBox = document.getElementById("myChecked");
const visaCard = document.getElementById("VisaBtn");
const atmCard = document.getElementById("Atmbtn");
const devitCard = document.getElementById("Devitbtn");
const Submit = document.getElementById("mySubmit");

mySubmit.onclick = function () {
  if (mycheckBox.checked) {
    SubResult.textContent = "Thank you for Subscribing";
  } else if (VisaBtn.checked || Atmbtn.checked || Devitbtn.checked) {
    PaymentResult.textContent = " Your paying method is Successful";
  } else {
    SubResult.textContent = "";
  }
};
