const Square = require('../shapes/square')

test('Square render method', () => {
    const square = new Square();
    square.setColor('blue')
    square.setStrokeColor('red')
    square.setStrokeWidth('5')
    expect(square.render()).toEqual('<rect x="10" y="10" width="30" height="30" stroke="red" fill="blue" stroke-width="5"/>')
})