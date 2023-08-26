

class Shape {
    constructor() {
        this.color =''
    }

    setColor(color){
        this.color = color;
    }
 
}
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
class Square extends Shape {
    render() {
        return`<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`
    }
    
}
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 0 300, 182 0, 182" fill="${this.color}" />`
    }
}

module.exports = {Triangle, Circle, Square};