// OFF = 0, WARN = 1, ERROR = 2;

module.exports = exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "no-unused-vars": 1
    }
}
