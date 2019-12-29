class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

const employees = [
    new Employee("tom", 1, "tfargent@gmail.com")
];
console.log(employees)
module.exports = {
    Employee,
    employees
};