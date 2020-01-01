const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

//prompt
const id = 0;
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
    ]).then(function ({ name, email, role }){
        // add one to ID
        id++;
        // depending on role, ask required extra information
        if(role == "Manager"){
            inquirer.prompt([
                {
                    type: "input",
                    message: "Enter Manager Office Number",
                    name:"officeNumber"
                }
            ]).then(function({}))

            const Emp = new role(name, id, email, )
        }


        


    })





}


//make ID count up with each employee. 
//if or case based on role to determine what other items need be prompted.