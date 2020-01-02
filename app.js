const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

//prompt
var id = 0;

const engineers = [];
const interns = [];
const managers = [];

function promptUser() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Employee Name",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Employee Email",
            name: "email"

        },
        {
            type: "list",
            message: "Select Employee Role",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }
        // process results
    ]).then(function ({ name, email, role }) {
        // add one to ID
        id++;
        // depending on role, ask required extra information
        if (role == "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Enter Manager Office Number",
                    name: "officeNumber"
                }
            ]).then(function ({ officeNumber }) {
                const Emp = new Manager(name, id, email, officeNumber);
                console.log(Emp);
                managers.push(Emp);
                addMore();
            });
        };
        if (role == "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Enter Github Username",
                    name: "github"
                }
            ]).then(function ({ github }) {
                const Emp = new Engineer(name, id, email, github);
                console.log(Emp);
                engineers.push(Emp);
                addMore();
            });
        };
        if (role == "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Enter Intern's School",
                    name: "school"
                }
            ]).then(function ({ school }) {
                const Emp = new Intern(name, id, email, school);
                console.log(Emp);
                interns.push(Emp);
                addMore();
            });
        };

        // ask if adding another employee
    })

    function addMore() {
        inquirer.prompt([
            {
                type: "list",
                message: "Add another employee?",
                name: "choice",
                choices: [
                    "Yes",
                    "No"
                ]
            }
        ]).then(function ({ choice }) {
            if (choice == "No") {
                endTest();
            }
            else (promptUser())
        })
    }

}
promptUser();

function endTest() { 
    console.log(managers);
    console.log(engineers);
    console.log(interns);
 }

 
//separate groups to separate arrays