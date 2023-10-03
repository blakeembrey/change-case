# Change Case

> Transform a string between `camelCase`, `PascalCase`, `Capital Case`, `snake_case`, `kebab-case`, `CONSTANT_CASE` and others.

## Installation

```
npm install change-case --save
```

## Usage

These case change functions are included:

| Method            | Result      |
| ----------------- | ----------- |
| `camelCase`       | `twoWords`  |
| `capitalCase`     | `Two Words` |
| `constantCase`    | `TWO_WORDS` |
| `dotCase`         | `two.words` |
| `kebabCase`       | `two-words` |
| `noCase`          | `two words` |
| `pascalCase`      | `TwoWords`  |
| `pascalSnakeCase` | `Two_Words` |
| `pathCase`        | `two/words` |
| `sentenceCase`    | `Two words` |
| `snakeCase`       | `two_words` |
| `trainCase`       | `Two-Words` |

All core methods accept [`options`](#options) as the second argument.

### Options

- `locale?: string[] | string | false` - lower/upper according to specified locale, defaults to host environment. Set to `false` to disable.
- `separateNumbers?: boolean` Splits `foo123` into `foo 123` instead of keeping them together. Defaults to `true`.

### Split

**Change case** also exports a `split` function which can be used to build your own case formatting methods. It accepts a string and returns each "word" as an array. For example:

```js
split("fooBar")
  .map((x) => x.toLowerCase())
  .join("_"); //=> "foo_bar"
```

## Change Case Keys

```js
import * as changeKeys from "change-case/keys";

changeKeys.camelCase({ TEST_KEY: true }); //=> { testKey: true }
```

Keys is a wrapper around all case methods to support transforming objects to any case.

### API

- **input: unknown** Any JavaScript value.
- **depth: number** Specify the depth to transfer for case transformation. Defaults to `1`.
- **options: object** Same as base case library.

## TypeScript and ESM

This package is a [pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) and ships with TypeScript definitions. It cannot be `require`'d or used with CommonJS module resolution in TypeScript.

## License

MIT
