# Camel Case

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

The function also accepts [`options`](https://github.com/blakeembrey/change-case#options).

### Merge Numbers

If you'd like to remove the behavior prefixing `_` before numbers, you can use `camelCaseTransformMerge`:

```js
import { camelCaseTransformMerge } from "camel-case";

camelCase("version 12", { transform: camelCaseTransformMerge }); //=> "version12"
```

## License

MIT
