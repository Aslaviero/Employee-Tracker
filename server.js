// Dependencies
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res) => {
  res.status(404).end();
});

// Connect to database
const db = mysql.createConnection(
  {
    host: '127.0.01',
    user: 'root',
    password: 'root',
    database: 'employeetracker'
  },
);

db.connect(err => {
  if (err) throw err;
  console.log("\n WELCOME TO EMPLOYEE TRACKER \n");
  startPrompt();
});



//Main menu that you first see when start up the program
function startPrompt() {
  inquirer.prompt(
    {
      type: 'list',
      name: 'mainMenu',
      message: 'What would you like to do?',
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Delete Employee', 'Delete Role', 'Delete Department', 'Quit']
    }
  ).then((answers) => {
    switch (answers.Mainmenu) {
      case 'View All Employees':
        viewAllEmployees();
        break;
      case 'Add Employee':
        addEmployee();
        break;
      case 'Update Employee Role':
        updateEmployeeRole();
        break;
      case 'View All Roles':
        viewAllRoles();
        break;
      case 'Add Role':
        addRole();
        break;
      case 'View All Departments':
        viewAllDepartments();
        break;
      case 'Add Department':
        addDepartment();
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
 viewAllEmployees = () => {
    db.query("SELECT * FROM employee", (err, result) => {
      if (err) throw err;
      console.table(result);
      startPrompt();
    });
};

// view All Roles
function viewAllRoles() {
    db.query("SELECT * FROM roles", (err, result) => {
      if (err) throw err;
      console.table(result);
      startPrompt();
    });
  };

// view All Departments
function viewAllDepartments() {
    db.query("SELECT * FROM department",  (err, result) => {
      if (err) throw err;
      console.table(result);
      startPrompt();
    });
};


// Add Employee
function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter first name of new Employee.'
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
    db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [result.first_name, result.last_name, result.role_id, result.manager_id])
    if (err) throw err;
    console.log('New Employee Added!');
    startPrompt();
  })
};

// Add Role
function addRole() {
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
    db.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [result.title, result.salary, result.department_id])
    if (err) throw err;
    console.log('New Role Added!');
    startPrompt();
  })
};

// Add Department
function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'department_name',
      message: 'Create new Department'
    }
  ]).then((result, err) => {
    db.query('INSERT INTO department (department_name) VALUES (?)', [result.department_name])
    if (err) throw err;
    console.log('New Department Added!');
    startPrompt();
  })
};



// Quit
function quit() {
db.end();
}

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
