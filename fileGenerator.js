var fileGenerator = require("./fileGenerator");
var fs = require("fs");
var inquirer = require('inquirer');

// User questions
let questions = [
    {
        type: "input",
        message: "What is the title of your repository?",
        name: "title"
    },{
        type: "input",
        message: "Please give your logo information.",
        name: "logo"
    },{
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"
    },{
        type: "input",
        message: "Please give your GitHub profile link.",
        name: "GitHub"
    },{
        type: "input",
        message: "What is your email?",
        name: "email"
    },{
        type: "list",
        name: "license",
        message: "Please select which license you would like to use.",
        choices : [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    },{
        type: "input",
        message: "Please describe the repository.",
        name: "description"

    },{
        type: "input",
        message: "Please state if others can contribute.",
        name: "contribute"
    },
    {
        type: "input",
        message: "State your accomplishments.",
        name: "accomplish"
    },{
        type: "input",
        message: "Please state provide a screenshot (1 of 2).",
        name: "scriptjs"
    },{
        type: "input",
        message: "Please state provide a screenshot (2 of 2).",
        name: "fileGnerator"
    },
    {
        type: "input",
        message: "Please state your end-goal.",
        name: "endgoal"
    }
];
