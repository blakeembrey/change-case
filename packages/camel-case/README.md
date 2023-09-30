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

## License

MIT
