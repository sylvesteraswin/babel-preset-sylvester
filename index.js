function presets() {
    return {
        "presets": [
            [require('babel-preset-es2015'), { loose: true }], 
            require('babel-preset-react'), 
            require('babel-preset-stage-1')
        ],
        "plugins": [
            [
                require('babel-plugin-transform-react-remove-prop-types'), {
                    "mode": "wrap"
                }
            ],
            require('babel-plugin-transform-object-assign')
        ],
        "env": {
            "start": {
                "presets": [require('babel-preset-react-hmre')]
            }
        }
    };
}

module.exports = presets();