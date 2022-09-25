// Dependencies
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const department = require(__dirname,'./library/department');
const employee = require(__dirname, './library/employee');
const role = require(__dirname, './library/role')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// Connect to database
const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      // MySQL Username
      user: 'root',
      // MySQL Password
      password: 'root',
      database: 'employeeTracker_db'
    },
    console.log(`Connected to the employeeTracker_db database.`)
  );

  app.use((req, res) => {
    res.status(404).end();
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });