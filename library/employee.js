const employeePrompt = [
    {
        type:'input',
        name:'first',
        message:"What is the employee's first name?"
    },
    {
        type:'input',
        name:'last',
        message:"What is the employee's last name?"
    },
    {
        type:'input',
        name:'salary',
        message:'What is the salary for this role?'
    },
    {
        list:'choices',
        name:'department',
        message:'What department does this role fall under?',
        choices:['HR','Marketing','Operations','Finance']
    }
    
    ];