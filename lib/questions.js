const questions = [
    {
        type: "input",
        name: "shape",
        message: "Choose a shape for your SVG:",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "text",
        message: "Enter up to three characters:"
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter a color keyword (or hexadecimal number) for the TEXT:"
    },
    {
        type: "input",
        name: "fill",
        message: "Enter a color keyword (or hexadecimal number) for the BACKGROUND:"
    }
]

module.exports = questions