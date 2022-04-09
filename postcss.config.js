const tailwindcss = require("tailwindcss")

module.exports = {
    plugins: [
        tailwindcss("./tailwindcss.config.js"),
        require("autoprefixer"),
        require("postcss-import")
    ]
}
