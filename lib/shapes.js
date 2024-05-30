class Shape {
    text;
    textColor;
    fill;
    constructor(text, textColor, fill) {
        this.text = text;
        this.textColor = textColor;
        this.fill = fill;
        this.textEl = "";
        this.shapeEl = "";
    }
    render() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }
    styleText(textColor, text) {
        this.textEl `<text x="100px" y="100px" font-size="60px" fill="${textColor}">${text}</text>`
    }
    setShape(shape) {
        this.shapeEl = shape.render()
    }
}

class Circle extends Shape {
    render() {
        return `<circle fill="${fill}" cx="100" cy="100" r="90" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect fill="${fill}" x="50" y="15" height="200" width="200" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon fill="${fill}" points="100,10 190,120 10,120" />`
    }
}

module.exports = { Shape, Circle, Square, Triangle }