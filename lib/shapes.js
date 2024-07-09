class Shape {
    fill;
    text;
    textColor;
    constructor(fill, text, textColor) {
        this.fill = fill;
        this.text = text;
        this.textColor = textColor;
    }
    setFill(fill) {
        this.fill = fill;
    }
    setText(text) {
        this.text = text;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    render() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <circle fill="${this.fill}" cx="50%" cy="50%" r="100" />
        <text x="50px" y="150px" font-size="60px" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

class Square extends Shape {
    render() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <rect fill="${this.color}" x="50" y="15" height="200" width="200" />
        <text x="70px" y="100px" font-size="60px" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

class Triangle extends Shape {
    render() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="${this.color}" points="100,10 190,120 10,120" />
        <text x="50px" y="100px" font-size="60px" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports = { Circle, Square, Triangle }