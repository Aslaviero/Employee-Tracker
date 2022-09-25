const rolePrompt = [
{
    type:'input',
    name:'name of role',
    message:'What is the name of the role?'
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