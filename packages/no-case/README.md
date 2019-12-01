# No Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform into a lower cased string with spaces between words.

## Installation

```
npm install no-case --save
```

## Usage

```js
import { noCase } from "no-case";

noCase("string"); //=> "string"
noCase("dot.case"); //=> "dot case"
noCase("PascalCase"); //=> "pascal case"
noCase("version 1.2.10"); //=> "version 1 2 10"
```

### Options

- **`splitRegexp`** RegExp used to split into word segments.
- **`stripRegexp`** RegExp used to remove extraneous characters.
- **`delimiter`** Value used between words (default: `" "`).
- **`transform`** Used to transform each word segment individually (default: `lowerCase`).

#### Customize Split

If you find the default split hard to use, you can write a new one. The example below will change the behavior to `word2019 -> word 2019` and `minifyURLs -> minify urls`. Without this change, the default split will be confused.

```js
const options = {
  splitRegexp: /([a-z])([A-Z0-9])/g
};
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/no-case.svg?style=flat
[npm-url]: https://npmjs.org/package/no-case
[downloads-image]: https://img.shields.io/npm/dm/no-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/no-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/no-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=no-case
