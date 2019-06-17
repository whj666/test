const presets = [
    "@babel/react",
    [
        "@babel/env",
        {
            useBuiltIns: "usage"
        }
    ]
];

const plugins = [
    //@修饰符
    ["@babel/plugin-proposal-decorators", { legacy: true }],

    //class类里面写箭头函数
    [
        "@babel/plugin-proposal-class-properties",
        {
            loose: true
        }
    ],

    [
        "@babel/plugin-transform-runtime",
        {
            corejs: 2
        }
    ],

    [
        "import",
        {
            libraryName: "antd",
            libraryDirectory: "es",
            style: "css"
        }
    ]
];

module.exports = {
    presets,
    plugins
};
