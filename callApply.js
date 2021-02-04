// const normalParson = {
//     firstName: "Rahim",
//     lastName: "Uddin",
//     salary: 15000,
//     getFullName: function(){
//         console.log(this.firstName, this.lastName);
//     },
//     chargeBill: function(amount){
//         this.salary = this.salary - amount;
//         return this.salary;
//     }
// }
// // console.log(normalParson.firstName);
// // normalParson.chargeBill(150);
// // normalParson.chargeBill(3000);
// // console.log(normalParson.salary);






const normalParson = {
    firstName: "Rahim",
    lastName: "Uddin",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroParson = {
    firstName: "Hero",
    lastName: "Balam",
    salary: 25000
}

const friendlyParson = {
    firstName: "Hero",
    lastName: "Golam",
    salary: 25000
}

// normalParson.chargeBill();

const heroChargeBill = normalParson.chargeBill.bind(heroParson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroParson.salary);
console.log(normalParson.salary);


const friendlyChargeBill = normalParson.chargeBill.bind(friendlyParson);
friendlyChargeBill(1500);
console.log(friendlyParson.salary);