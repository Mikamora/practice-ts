//myName stores the word michael, const keeps that variable from changing.
//nine equals the sum of 2 numbers to be 9
let myName : string = "Michael";
const States : number = 50;
let nine : number = 5 + 4;
let veggies: Array<string> = ['Lettuce', 'Onion', 'Celery'];
let pet = {
    Breed: "black cat",
    Name: "Samantha"
}
let sam : Person = {
    Age: 21,
    Name: "sam"
}
let harry : Person = {
    Age: 22,
    Name: "harry"
}
let kas : Person = {
    Age: 20,
    Name: "kas"
}
let rudy : Person = {
    Age: 19,
    Name: "rudy"
}
let garey : Person = {
    Age: 99,
    Name: "garey"
}
//I could also initialize the objects in the array like ex. let people [{age:#, name:name}, etc.] ; if theres a chance of using it again I should make it seperate.
let people : Array<Person> = [garey, sam, kas, rudy, harry];
let hwLength = getLength(sayHello());

//alerts
alert(sayHello());
checkAge(21, "Charles");
checkAge(27, "Abby");
checkAge(18, "James");
checkAge(17, "John");

console.log(pet.Name + " is a " + pet.Breed);

for(let i = 0; i < veggies.length; i++){
    console.log(veggies[i]);
}

for(let i = 0; i < people.length; i++){
    var a = people[i].Age;
    var b = people[i].Name;
    checkAge(a, b);
}

if(hwLength % 2 == 0){
    console.log("The World is nice and even!!");
} else{
    console.log("The world is an odd place!");
}

function getLength(word: string){
    return word.length;
}

function sayHello() {
    return "Hello World!";
}

function checkAge(age: number, name: string) {
    if (age < 21) {
        alert("sorry " + name + ", you are not old enough to view this page!");
    }
    else {
    }
}

interface Person {
    Age: number;
    Name: string;
}