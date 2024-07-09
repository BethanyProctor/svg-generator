const { Circle, Square, Triangle } = require('./shapes')

describe('Circle', () => {
    test('Test if a red circle is created', () => {
        const expectedShape = '<circle fill="red" cx="150" cy="100" r="80" />';
        const circle = new Circle();
        circle.setColor('red');
        expect(shape.render()).toEqual('<circle fill="red" cx="150" cy="100" r="80" />');
    })
})

describe('Square', () => {
    test('Test if a red square is created', () => {
        const shape = new Square();
        shape.setColor('red');
        expect(shape.render()).toEqual(`<rect fill="red" x="50" y="15" height="200" width="200" />`)
    })
})

describe('Triangle', () => {
    test('Test if a red triangle is created', () => {
        const shape = new Triangle();
        shape.setColor('red');
        expect(shape.render()).toEqual(`<polygon fill="red" height="100%" width="100%" points="100,10 150,190 50,190" />`)
    })
})