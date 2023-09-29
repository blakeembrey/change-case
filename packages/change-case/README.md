# Change Case

> Transform a string between `camelCase`, `PascalCase`, `Capital Case`, `snake_case`, `kebab-case`, `CONSTANT_CASE` and others.

## Installation

```
npm install change-case --save
```

## Usage

These case change functions are included:

| Method         | Result      |
| -------------- | ----------- |
| `camelCase`    | `twoWords`  |
| `capitalCase`  | `Two Words` |
| `constantCase` | `TWO_WORDS` |
| `dotCase`      | `two.words` |
| `trainCase`    | `Two-Words` |
| `kebabCase`    | `two-words` |
| `noCase`       | `two words` |
| `pascalCase`   | `TwoWords`  |
| `pathCase`     | `two/words` |
| `sentenceCase` | `Two words` |
| `snakeCase`    | `two_words` |

All core methods accept [`options`](#options) as the second argument.

#### Options

- `locale?: string[] | string | false` - lower/upper according to specified locale, defaults to host environment. Set to `false` to disable.
- `separateNumbers?: boolean` Splits `foo123` into `foo 123` instead of keeping them together. Defaults to `true`.

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

## License

MIT
