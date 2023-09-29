# Header Case

> Transform into a dash separated string of capitalized words.

## Installation

```
npm install header-case --save
```

## Usage

```js
import { headerCase } from "header-case";

headerCase("string"); //=> "String"
headerCase("dot.case"); //=> "Dot-Case"
headerCase("PascalCase"); //=> "Pascal-Case"
headerCase("version 1.2.10"); //=> "Version-1-2-10"
```

The function also accepts [`options`](https://github.com/blakeembrey/change-case#options).

## License

MIT
