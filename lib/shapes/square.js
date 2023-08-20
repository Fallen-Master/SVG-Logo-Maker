const Shape = require('./shape')

class Square extends Shape {
    render() {
        return`<rect x="10" y="10" width="30" height="30" stroke="${this.strokeColor}" fill="${this.color}" stroke-width="${this.strokeWidth}"/>`
    }
    
}

module.exports = Square