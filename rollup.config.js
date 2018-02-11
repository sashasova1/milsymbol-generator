import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import css from "rollup-plugin-css-only";

export default [
  {
    input: "src/index.js",
    output: {
      file: "milsymbol-unit-generator.js",
      format: "iife",
      name: "milsymbolUnitGenerator"
    },
    plugins: [
      resolve(),
      commonjs(),
      css({ output: "milsymbol-unit-generator.css" })
    ]
  }
];