# Camel Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform into a string with the separator denoted by the next word capitalized.

## Installation

```
npm install camel-case --save
```

## Usage

```js
import { camelCase } from "camel-case";

camelCase("string"); //=> "string"
camelCase("dot.case"); //=> "dotCase"
camelCase("PascalCase"); //=> "pascalCase"
camelCase("version 1.2.10"); //=> "version_1_2_10"
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/camel-case.svg?style=flat
[npm-url]: https://npmjs.org/package/camel-case
[downloads-image]: https://img.shields.io/npm/dm/camel-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/camel-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/camel-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=camel-case
