const Shape = require('./shape')

class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20" stroke="${this.strokeColor}" fill="${this.color}" stroke-width="${this.strokeWidth}"/>`
    }
}

module.exports = Circle