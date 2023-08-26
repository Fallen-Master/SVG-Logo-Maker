

const { Triangle, Circle, Square } = require('../shapes/shape');

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
