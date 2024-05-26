class Shape {
    text;
    textColor;
    fill;
    constructor(text, textColor, fill) {
        this.text = text;
        this.textColor = textColor;
        this.fill = fill;
    }
    styleText() {
        return `<text x="100px" y="100px" font-size="60px" fill="${this.textColor}">${this.text}</text>`
    }
}

class Circle extends Shape {
    render() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <circle fill="${this.fill}" cx="100" cy="100" r="90" />
        ${super.styleText()} </svg>`
    }
}

class Square extends Shape {
    render() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <rect fill="${this.fill}" x="50" y="15" height="200" width="200" />
        ${super.styleText()} </svg>`
    }
}

class Triangle extends Shape {
    render() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="${this.fill}" points="100,10 190,120 10,120" />
        ${super.styleText()} </svg>`
    }
}

module.exports = { Circle, Square, Triangle }