class Employee {
    constructor(name, id, email) {
        if (!name) {
            throw new Error("You are missing the name.");
        }
        if (!id) {
            throw new Error("You are missing the id.");
        }
        if (!email) {
            throw new Error("You are missing the email.");
        }
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