const normalParson = {
    firstName: "Rahim",
    lastName: "Uddin",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
console.log(normalParson.firstName);
normalParson.chargeBill(150);
normalParson.chargeBill(3000);
console.log(normalParson.salary);