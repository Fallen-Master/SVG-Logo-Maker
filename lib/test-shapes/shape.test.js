
const SVG = require('../shapes/svg.js');

const { Triangle, Circle, Square } = require('../shapes/shape.js');

describe('SVG Class', () => {
    test('SVG generation with Triangle and Text', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        const svg = new SVG(shape, 'ABC', 'red');

        const expectedOutput = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 0 300, 182 0, 182" fill="blue" />
            <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" font-size="50" font-family="Arial, Helvetica, sans-serif" fill="red">ABC</text>
        </svg>`;
        expect(svg.generate().trim()).toEqual(expectedOutput.trim());
    });
});
describe('Triangle Class', () => {
    test('Render triangle with blue color', () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual('<polygon points="150, 0 300, 182 0, 182" fill="blue" />');
    });
});

describe('Circle Class', () => {
    test('Render circle with blue color', () => {
        const circle = new Circle();
        circle.setColor("blue");
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});

describe('Square Class', () => {
    test('Render square with blue color', () => {
        const square = new Square();
        square.setColor("blue");
        expect(square.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="blue" />');
    });
});
