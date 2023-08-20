

class Shape {
    constructor() {
        this.color =''
        this.strokeWidth =''
        this.strokeColor =''
    }

    setColor(color){
        this.color = color
    }
    setStrokeWidth(strokeWidth){
        this.strokeWidth = strokeWidth
    }
    setStrokeColor(strokeColor){
        this.strokeColor = strokeColor
    }
}
class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20" stroke="${this.strokeColor}" fill="${this.color}" stroke-width="${this.strokeWidth}"/>`
    }
}
class Square extends Shape {
    render() {
        return`<rect x="10" y="10" width="30" height="30" stroke="${this.strokeColor}" fill="${this.color}" stroke-width="${this.strokeWidth}"/>`
    }
    
}
class Triangle extends Shape {
    render() {
        return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
</svg>
`
    }
}

module.exports = {Circle, Square, Triangle}