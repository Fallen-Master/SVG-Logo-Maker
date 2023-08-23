import inquirer from 'inquirer';

import fs from 'fs';

import { Circle, Square, Triangle } from './lib/shapes/shape.js';

import { textValidate, textColorValidate, shapeColorValidate } from './utils/validate.js';


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

    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" font-size="50" font-family="Arial, Helvetica, sans-serif" fill="${answers.textColor}">${answers.text}</text>
    </svg>`;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');

};

main()