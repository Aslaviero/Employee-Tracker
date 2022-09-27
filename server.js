// Dependencies
const express = require('express');
const mysql = require('mysql2');
const db = require('./db/connection')
const inquirer = require('inquirer');
const cTable = require('./node_modules/console.table');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res) => {
 res.status(404).end();
});

db.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the employeeTracker database.');
});
  

//Main menu that you first see when doing node server.js
function mainMenuPrompt() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'Mainmenu',
      message: 'What would you like to do?',
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Delete Employee', 'Delete Role', 'Delete Department', 'Quit']
    }
  ]).then((answers) => {
      switch(answers.Mainmenu) {
        case 'View All Employees':
          viewAllEmployees();
          break;
        case 'Add Employee':
         AddEmployee();
            break;
        case 'Update Employee Role':
          updateEmployeeRole();
          break;
        case 'View All Roles':
          viewAllRoles();
          break;
        case 'Add Role':
          AddRole();
          break;
        case 'View All Departments':
          viewAllDepartments();
          break;
        case 'Add Department':
          addDempartment();
          break; 
        case 'Delete Employee':
            deleteEmployee();
            break;
        case 'Delete Role':
          deleteRole();
          break;
        case 'Delete Department':
          deleteDempartment();
          break;
        case 'Quit':
          quit();
          break;
      }
  })
};

// View All Employees
function viewAllEmployees() {
  db.connect(function(err) {
    if (err) throw err;
    db.query("SELECT * FROM employee", function (err, result) {
      if (err) throw err;
      console.table(result);
    });
  });
};

// Add Employee
function AddEmployee() {
  inquirer.prompt([
    {
    type: 'input',
    name: 'first_name',
    message:'Enter first name of new Employee.'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter last name of new Employee'
    },
    {
      type: 'number',
      name: 'role_id',
      message: 'Enter ID of employees new role'
    },
    {
      type: 'number',
      name: 'manager_id',
      message: 'Enter ID of new employees manager'
    }  
  ]).then((result, err) => {
    db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',[res.first_name, res.last_name, res.role_id, res.manager_id] + `SELECT * FROM employee`)
    if(err) throw err;
    console.table(result);
  })
};

// Update Employee Role
function updateEmployeeRole() {

}

// view All Roles
function viewAllRoles() {
  db.connect(function(err) {
    if (err) throw err;
    db.query("SELECT * FROM roles", function (err, result) {
      if (err) throw err;
      console.table(result);
    });
  });
};

// Add Role
function AddRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Create new Role'
    },
    {
      type: 'number',
      name: 'salary',
      message: 'Enter the salary amount for the new role'
    },
    {
      type: 'number',
      name: 'department_id',
      message: 'Enter department id for new role'
    }
  ]).then((result, err) => {
    db.query('INSERT INTO roles (title, salary, deparment_id) VALUES (?, ?, ?)',[result.title, result.salary, result.department_id])
    if(err) throw err;
    console.table(result);
  });
};

// view All Departments
function viewAllDepartments() {
  db.connect(function(err) {
    if (err) throw err;
    db.query("SELECT * FROM department", function (err, result) {
      if (err) throw err;
      console.table(result);
    });
  });
};

// add Dempartment
function addDempartment() {

}

// Delete Employee
function deleteEmployee() {

}

// Delete Role
function deleteRole() {

}

// Delete Department
function deleteDempartment() {

}

// Quit
function quit() {

}