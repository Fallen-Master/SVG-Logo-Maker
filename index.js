const inquirer = require('inquirer')

const fs = require('fs')

const {textValidate, textColorValidate, shapeColorValidate} = require('./utils/validate')


const questions = [
    {
        name:'text',
        type:'input',
        message:'Please enter at most three characters, for exmaple SVG, AOL, SPY ',
        validate: textValidate,
    },
    {
        name:'textColor',
        type:'input',
        message:'Please enter a color name (like "blue") or hexadecimal number  (like "#FF0000") for the text color',
        validate: textColorValidate
    },
    {
        name: 'shape',
        type:'list',
        message:'Please choose from one of the shapes presented',
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        name: 'shapeColor',
        type:'input',
        message:'Please enter a color name (like "blue") or hexadecimal number  (like "#FF0000") for the shape color',
        validate: shapeColorValidate
    }
]

inquirer.createPromptModule(questions).then((answers) =>{
    
})