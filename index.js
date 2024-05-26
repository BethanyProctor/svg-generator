const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const questions = require('./lib/questions');

const init = () => {
    inquirer.prompt(questions)
    .then
}

init();