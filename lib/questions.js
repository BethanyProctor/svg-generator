const questions = [
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for your SVG:",
        choices: [
            "Circle",
            "Triangle",
            "Square"
        ]
    },
    {
        type: "input",
        name: "text",
        message: "Enter up to three characters:"
    },
    {
        type: "input",
        name: "text_color",
        message: "Enter a color keyword (or hexadecimal number) for the TEXT:"
    },
    {
        type: "input",
        name: "fill",
        message: "Enter a color keyword (or hexadecimal number) for the BACKGROUND:"
    }
]

module.exports = questions