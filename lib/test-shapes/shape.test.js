

import { Triangle, Circle, Square } from '../shapes/shape';

describe('Triangle Class', () => {
    test('Render triangle with blue color', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Circle Class', () => {
    test('Render circle with blue color', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});

describe('Square Class', () => {
    test('Render square with blue color', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="110" y="60" width="80" height="80" fill="blue" />');
    });
});
