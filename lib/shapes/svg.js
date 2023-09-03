class SVG {
    constructor(shape, text, textColor) {
        this.shape = shape;
        this.text = text;
        this.textColor = textColor;
    }

    generate() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.shape.render()}
            <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" font-size="50" font-family="Arial, Helvetica, sans-serif" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

module.exports = SVG;
