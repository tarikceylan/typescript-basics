# TypeScript Basics

This repository is for learning TypeScript Basics
TypeScript documentation can be found on [typescriptlang.org](https://www.typescriptlang.org/)

## Installing TypeScript

- To install TypeScript globally, we can simply run `npm i -g typescript`
- To confirm that TypeScript is installed properly we can run `tsc -v` command. (Returns TypeScript Version)

## Using TypeScript

- Create a `tsconfig.json` file to configure TypeScript.
- ```
  {
      "compilerOptions": {
          "target": "ES5",
          "outDir": "dist"
      }
  }
  ```

- If using a compiler like `Babel`, `target` key in `compilerOptions` object should have the value of `ESNext`, otherwise `ES5`. This value will determine which ECMAScript version is used.

- `outDir` simply states the path and file name of JavaScript code that is compiled.
