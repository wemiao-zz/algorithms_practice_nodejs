module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1}],
        "semi": ["error", "always"],
        "curly": ["error"],
        "brace-style": ["warn"],
        "quotes": [2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
        "no-trailing-spaces": [2]
    }
};
