const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const questions = require('./lib/questions');

// //create a SVG class that will generate the svg itself, the text, and shape
// class Svg {
//     constructor() {
//     this.textEl = "";
//     this.shapeEl = ""; 
//     }
//     render() {
//         return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
//     }
//     styleText(textColor, text) {
//         this.textEl = `<text x="100px" y="100px" font-size="60px" fill="${textColor}">${text}</text>`
//     }
//     setShape(shape) {
//         this.shapeEl = shape.render()
//     }
// }

//function to generate the logo
const generateLogo = (data) => {
    let shape = undefined;
    if (data.shape === "Circle") {
        shape = new Circle (data.fill, data.text, data.text_color)
    } else if (data.shape ==="Triangle") {
        shape = new Triangle (data.fill, data.text, data.text_color)
    } else {
        shape = new Square (data.fill, data.text, data.text_color)
    }
    return shape.render();
}

//function to write the data from the answers to its own file
const  writeToFile = (fileName, data) => {
    const content = generateLogo(data);
    fs.writeFile(fileName, content, (error) => {
        if (error) {
            return console.log(error);
        }
     //log out a message when complete
    console.log("SVG logo generated successfully!")
    })
}

//function to initialize the svg generation
const init = () => {
    inquirer.prompt(questions)
    .then (function (data) {
        const fileName = "logo.svg";
        writeToFile(fileName, data)
    })
}

init();