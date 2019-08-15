//Problem 1
let myName = prompt("What is your name?"); //This program takes the user's name and stores it in the template.
console.log(`Hi, my name is ${myName}!`);

//Problem 2
let num1 = parseInt(prompt("Choose a number.")); //This will ask user for input two times and then store it in the template.
let num2 = parseInt(prompt("Choose another number to add."));
alert(`The sum of ${num1} and ${num2} is: ${num1 + num2}`);

//Problem 3
let person = { first_name: prompt("Enter your first name."), last_name: prompt("Enter your last name.") };

function printWelcome(f, l){
    alert(`Welcome to the site ${f} ${l}!`);
}
printWelcome(person.first_name, person.last_name);