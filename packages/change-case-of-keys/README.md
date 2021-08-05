# Is Upper Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transforms the keys of an object by applying a change-case function of choice on each key, recursively

## Installation

```
npm install change-case-of-keys --save
```

## Usage

```js
import { changeCaseOfKeys } from "change-case-of-keys";
import { camelCase } from 'change-case';
// or, `import { camelCase, changeCaseOfKeys } from 'change-case';

const changedObject = changeCaseOfKeys({
  first_name: 'bob',
  last_name: 'the builder',
  credentials: [{ built_things: true }],
}, camelCase);
/*
  {
    firstName: 'bob',
    lastName: 'the builder',
    credentials: [{ builtThings: true }],
  }
/*
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/change-case-of-keys.svg?style=flat
[npm-url]: https://npmjs.org/package/change-case-of-keys
[downloads-image]: https://img.shields.io/npm/dm/change-case-of-keys.svg?style=flat
[downloads-url]: https://npmjs.org/package/change-case-of-keys
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/change-case-of-keys.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=change-case-of-keys
