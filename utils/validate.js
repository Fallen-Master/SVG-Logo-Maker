const chroma = require('chroma-js')


function textValidate(text) {
    if (text.length > 3){
        return "Text must be maximum of 3 characters long.";
    }
    return true;
}

function textColorValidate(textColor){
    if (!chroma.valid(textColor)){
        return "Please enter a valid color name or hexadecimal number";
    }
    return true;
}

function shapeColorValidate(shapeColor){
    if (!chroma.valid(shapeColor)){
    return "Please enter a valid color name or hexadecimal number";
    }
    return true;
}

module.exports =  {textValidate, textColorValidate, shapeColorValidate}
