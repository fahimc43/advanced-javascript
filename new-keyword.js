class person {
    constructor (firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new person('Hero', 'Balam', 20000);
console.log(heroPerson);
const friendlyPerson = new person('Hero', 'Golam', 25000);
console.log(friendlyPerson);

// Old Process >>>

function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new Person1('Grand', 'Papa', 1200);
console.log(oldPerson);