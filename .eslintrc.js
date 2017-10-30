/*******************************
 *
 *
 * - Contains global linting rules for everything in the dev/design folder tree
 *
 *
 *******************************/
module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        // enable additional rules
        "indent": ["error", 2],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",

        "react/jsx-uses-vars": [2]
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
        "mocha": true
    },
    "globals": {
        "chai": true
    },
    "plugins": [
        "react"
    ]
}