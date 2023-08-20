const inquirer = require('inquirer')

const fs = require('fs')


const quiestions = [
    {
        name:'text',
        type:'input',
        message:'Please enter at most three characters, for exmaple SVG, AOL, SPY '
    },
    {
        name:'textColor',
        type:'input',
        message:'Please enter a color name (like "blue") or hexadecimal number  (like "#FF0000") for the text color'
    },
    {
        name: 'shape',
        type:'list',
        message:'Please choose from one of the shapes presented',
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        name: 'shape color',
        type:'input',
        message:'Please enter a color name or hexadecimal number for the shape color'
    }
]

function init()