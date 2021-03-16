//myName stores the word michael, const keeps that variable from changing.
//nine equals the sum of 2 numbers to be 9
var myName = "Michael";
var States = 50;
var nine = 5 + 4;
var veggies = ['Lettuce', 'Onion', 'Celery'];
var pet = {
    Breed: "black cat",
    Name: "Samantha"
};
var sam = {
    Age: 21,
    Name: "sam"
};
var harry = {
    Age: 22,
    Name: "harry"
};
var kas = {
    Age: 20,
    Name: "kas"
};
var rudy = {
    Age: 19,
    Name: "rudy"
};
var garey = {
    Age: 99,
    Name: "garey"
};
//I could also initialize the objects in the array like ex. let people [{age:#, name:name}, etc.] ; if theres a chance of using it again I should make it seperate.
var people = [garey, sam, kas, rudy, harry];
var hwLength = getLength(sayHello());
//alerts
alert(sayHello());
checkAge(21, "Charles");
checkAge(27, "Abby");
checkAge(18, "James");
checkAge(17, "John");
console.log(pet.Name + " is a " + pet.Breed);
for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
for (var i = 0; i < people.length; i++) {
    var a = people[i].Age;
    var b = people[i].Name;
    checkAge(a, b);
}
if (hwLength % 2 == 0) {
    console.log("The World is nice and even!!");
}
else {
    console.log("The world is an odd place!");
}
function getLength(word) {
    return word.length;
}
function sayHello() {
    return "Hello World!";
}
function checkAge(age, name) {
    if (age < 21) {
        alert("sorry " + name + ", you are not old enough to view this page!");
    }
    else {
    }
}
