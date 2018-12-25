module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion":6,
        "sourceType": "module"
    },
    "rules": {
        "no-console": 0,
        "indent": [0, "tab"],
        "linebreak-style": [2, "unix"],
        "quotes": [2, "single"],
        "semi": [1, "never"],
        "no-inner-declarations": 0, //禁止在嵌套的块中出现变量声明或 function 声明
        "no-empty": 0, //块语句中的内容不能为空
    }
};