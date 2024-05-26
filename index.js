const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const questions = require('./lib/questions');

//function to write the data from the answers to its own file
const writeToFile = (fileName, data) => {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

//function to initialize the svg generation
const init = () => {
    inquirer.prompt(questions)
    .then((responses) => {
        console.log("Generating SVG...");
        writeToFile("./logo.svg", questions({ ...responses }));
        console.log('Generated logo.svg');
    });
}

init();