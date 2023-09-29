# No Case

> Transform any case string into a lower case string with a space between each word.
> Example: `foo_bar` => `fooBar`

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

Optional `options` as the second argument:

- `separateNumbers: boolean` - Splits numbers apart from letters, e.g. `V1` -> `v 1`.
- `locale: string | false` - Lower case according to a specific `locale`, defaulting to the current system locale.

## License

MIT
