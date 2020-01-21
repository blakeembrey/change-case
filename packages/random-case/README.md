# Random Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform into a string with random capitalization applied.

## Installation

```
npm install random-case --save
```

## Usage

Note that capitalization outcomes are randomized.

```js
import { randomCase } from "random-case";

randomCase("string"); //=> "sTrinG"
randomCase("dot.case"); //=> "dOt.caSE"
randomCase("PascalCase"); //=> "pASCaLCasE"
randomCase("version 1.2.10"); //=> "VErSIoN 1.2.10"
```

The function also accepts [`options`](https://github.com/blakeembrey/random-case#options).

## License

MIT

[npm-image]: https://img.shields.io/npm/v/random-case.svg?style=flat
[npm-url]: https://npmjs.org/package/random-case
[downloads-image]: https://img.shields.io/npm/dm/random-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/random-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/random-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=random-case
