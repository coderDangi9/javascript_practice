//...No Method Chaning...

let username = window.prompt("Enter your usename");
/*
username = username.trim();

let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = letter + extraChars;

console.log(username);

*/
//...Method Chaning....

username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();

console.log(username);
/*const fullName = "Sandip Dangi";
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

const email = "Sandip53@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);


*/
