const inquirer = require('inquirer');

const fs = require('fs');

const SVG = require('./lib/shapes/svg.js');

const { Circle, Square, Triangle } = require('./lib/shapes/shape.js');

const { textValidate, textColorValidate, shapeColorValidate } = require('./utils/validate.js');


const questions = [
    {
        name: 'text',
        type: 'input',
        message: 'Please enter at most three characters, for exmaple SVG, AOL, SPY ',
        validate: textValidate,
    },
    {
        name: 'textColor',
        type: 'input',
        message: 'Please enter a color name (like "blue") or hexadecimal number  (like "#FF0000") for the text color',
        validate: textColorValidate
    },
    {
        name: 'shape',
        type: 'list',
        message: 'Please choose from one of the shapes presented',
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        name: 'shapeColor',
        type: 'input',
        message: 'Please enter a color name (like "blue") or hexadecimal number  (like "#FF0000") for the shape color',
        validate: shapeColorValidate
    }
]
async function main() {
    const answers = await inquirer.prompt(questions);
    let shape;
    switch (answers.shape) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Square':
            shape = new Square();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
    }
    shape.setColor(answers.shapeColor);

    const svg = new SVG(shape, answers.text, answers.textColor);
    const svgContent = svg.generate();
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');

};

main()