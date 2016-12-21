import preset2015 from 'babel-preset-es2015';
import presetReact from 'babel-preset-react';
import presetStage1 from 'babel-preset-stage-1';

import transformReactRemovePropTypes from 'babel-plugin-transform-react-remove-prop-types';
import transformObjectAssign from 'babel-plugin-transform-object-assign';
import transform2015TemplateLiterals from 'babel-plugin-transform-es2015-template-literals';
import transformExponentiationOperator from 'babel-plugin-transform-exponentiation-operator';
import transformTrailingFunctionCommas from 'babel-plugin-syntax-trailing-function-commas';
import transformObjectRestSpread from 'babel-plugin-transform-object-rest-spread';

import presetReactHMRE from 'babel-preset-react-hmre';


const configs = {
    presets: [
        [preset2015, {
            loose: true,
        }],
        presetReact,
        presetStage1,
    ],
    plugins: [
        [
            transformReactRemovePropTypes, {
                mode: 'wrap',
            },
        ],
        transformObjectAssign,
        [transform2015TemplateLiterals, {
            spec: true,
        }],
        transformExponentiationOperator,
        transformTrailingFunctionCommas,
        [transformObjectRestSpread, {
            useBuiltIns: true,
        }],
    ],
    env: {
        start: {
            presets: [
                presetReactHMRE,
            ],
        },
    },
};

export default configs;
