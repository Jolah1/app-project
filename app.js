console.log('Hello Fola kiddies store');

let shoe = 100;
shoe = shoe - 10;
shoe = shoe * 20;
let name = "Folarin"; 
let checkout = true;
let box;
console.log(shoe); 

const brand = "vans sneakers";
const buyer = "pay before service";
const day = "same day delivery";
const price = "no pricing";

function logger() {
    console.log("school shoes");
    console.log("school shoes");
    console.log("school shoes");
    console.log("school shoes");
    console.log("school shoes");
}

logger();

function adder(num1, num2) {
    console.log(num1 + num2);
}
adder(5, 10);

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

toUpper(brand);
toUpper(buyer);
toUpper(day);
toUpper(price);

const myAge = 26;

const yourAge = 20;

console.log(myAge + yourAge);
const age = 16;

console.log("Hello my name is " + "Folarinwa");

console.log('hello it\'s the manager');
console.log(`hello its me ${name} and my age is ${age}`);


if (age === 18) {
    console.log("congratulations you are good to go!");
} else if (age <= 15) {
console.log("wow you are really young.....make your purchase next year");
}else {
    console.log("you are not old enough");
}

const dice1 = 6;
const dice2 = 3;

if (dice1 === 6 || dice2 === 6) {
    console.log("you rolled a double");
} else {
    console.log("Game over");
}

const schedule = ['wake up', 'pray', 'post products', 'do adverts', 'take orders', 'delivery'];

schedule.push('Hey a new thing got added');
schedule.pop();
schedule.shift('drink a lot of water');
schedule.unshift('God first');
const phoneNumbers = [08136676771, 07031563254, 08067543322];

console.log(schedule);

console.log(schedule[0]);

console.log(phoneNumbers[2]);


const user = {
    name: 'Jolly',
    age: 26,
    married: false,
    purchases: ["schoolshoes", "flat shoes", "sneakers", "slippers"]

};

console.log(user.purchases);
console.log(user.age);

const names = ['jola', 'ade', 'fola', 'sarah', 'queen', 'kay'];

for(name of names ){
    console.log(`Hello dear ${name}`);
    if (name === "queen") {
        console.log("Jola is buying a sneakers");
        break;
    }
}


let loading = 0;

while (loading < 100) {
    console.log("website on rebranding");

    loading++;
}

const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

changeColor.addEventListener('click', function(){
    text.classList.toggle("change");
})

const userList = document.querySelectorAll(".shoe-list li");

for (user of userList) {
user.addEventListener("click", function() {
this.style.color = "red";

});
}