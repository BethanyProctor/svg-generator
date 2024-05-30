const fs = require('fs');
const inquirer = require('inquirer');
const { Shape, Circle, Square, Triangle } = require('./lib/shapes');
const questions = require('./lib/questions');

//function to write the data from the answers to its own file
const writeToFile = (fileName, data) => {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

//function to initialize the svg generation
const init = async () => {
    let svgString = "";
    let svgFile = "./logo.svg";

    const responses = await inquirer.prompt(questions)
    //set user shape
    userShapeType = responses.shape;
    //set user text
    let userText = "";
    //make sure the text entered is only 1-3 characters
    if (responses.text.length > 0 && responses.text.length < 4) {
        userText = responses.text
    } else {
        console.log("Please enter 1-3 characters.")
        return;
    }    
    //set user text color
    userFontColor = responses["text-color"];
    //set user fill color
    userFillColor = responses.fill;

    //create new instance of shape chosen
    let userShape;
    if (userShapeType === "Circle") {
        userShape = new Circle();
    } else if (userShapeType === "Square") {
        userShape = new Square();
    } else {
        userShape = new Triangle();
    }

    //create a new instance of the SVG with all elements
    const svg = new Shape();
    svg.styleText(userFontColor, userText);
    svg.setShape(userShape);
    svgString = svg.render();

    //print the shape in a seperate file
    console.log("Generating SVG...");
    writeToFile("./logo.svg", questions({ ...responses }));
    console.log('Generated logo.svg');
}

init();