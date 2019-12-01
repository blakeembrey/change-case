# Pascal Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform into a string of capitalized words without separators.

## Installation

```
npm install pascal-case --save
```

## Usage

```js
import { pascalCase } from "pascal-case";

pascalCase("string"); //=> "String"
pascalCase("dot.case"); //=> "DotCase"
pascalCase("PascalCase"); //=> "PascalCase"
pascalCase("version 1.2.10"); //=> "Version_1_2_10"
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/pascal-case.svg?style=flat
[npm-url]: https://npmjs.org/package/pascal-case
[downloads-image]: https://img.shields.io/npm/dm/pascal-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/pascal-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/pascal-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=pascal-case
