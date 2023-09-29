# Path Case

> Transform into a lower case string with slashes between words.

## Installation

```
npm install path-case --save
```

## Usage

```js
import { pathCase } from "path-case";

pathCase("string"); //=> "string"
pathCase("dot.case"); //=> "dot/case"
pathCase("PascalCase"); //=> "pascal/case"
pathCase("version 1.2.10"); //=> "version/1/2/10"
```

The function also accepts [`options`](https://github.com/blakeembrey/change-case#options).

## License

MIT
