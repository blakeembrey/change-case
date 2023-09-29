# Capital Case

> Transform into a space separated string with each word capitalized.

## Installation

```
npm install capital-case --save
```

## Usage

```js
import { capitalCase } from "capital-case";

capitalCase("string"); //=> "String"
capitalCase("dot.case"); //=> "Dot Case"
capitalCase("PascalCase"); //=> "Pascal Case"
capitalCase("version 1.2.10"); //=> "Version 1 2 10"
```

The function also accepts [`options`](https://github.com/blakeembrey/change-case#options).

## License

MIT
