const Circle = require('../shapes/circle')

test('Circle render method', () => {
    const circle = new Circle();
    circle.setColor('blue')
    circle.setStrokeColor('red')
    circle.setStrokeWidth('5')
    expect(circle.render()).toEqual('<circle cx="25" cy="75" r="20" stroke="red" fill="blue" stroke-width="5"/>')
})

