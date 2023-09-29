# Change Case

> Transform a string between `camelCase`, `PascalCase`, `Capital Case`, `snake_case`, `kebab-case`, `CONSTANT_CASE` and others.

## Installation

```
npm install change-case --save
```

## Usage

```js
import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  kebabCase,
  noCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from "change-case";
```

### case(input: string, options?: Options)

**Options:**

- `locale?: string[] | string | false` - lower/upper according to specified locale, defaults to host environment. Set to `false` to disable.
- `separateNumbers?: boolean` Splits `foo123` into `foo 123` instead of keeping them together. Defaults to `true`.

## Change Case Keys

```js
import * as changeKeys from "change-case/keys";

changeKeys.camelCase({ TEST_KEY: true }); //=> { testKey: true }
```

Keys is a wrapper around the core case methods to support mapping objects of any case into another case.

### case(input: string, depth?: number, options?: Options)

**Depth:** Specify the depth to transfer for case transformation. Defaults to `1`.
**Options:** Same as base case library.

## License

MIT
