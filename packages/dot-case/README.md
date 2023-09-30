# Dot Case

> Transform into a lower case string with a period between words.

## Installation

```
npm install dot-case --save
```

## Usage

```js
import { dotCase } from "dot-case";

dotCase("string"); //=> "string"
dotCase("dot.case"); //=> "dot.case"
dotCase("PascalCase"); //=> "pascal.case"
dotCase("version 1.2.10"); //=> "version.1.2.10"
```

## License

MIT
