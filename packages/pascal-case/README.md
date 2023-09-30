# Pascal Case

> Transform into a string of capitalized words without separators.

## Installation

```
npm install pascal-case --save
```

## Usage

```js
import { pascalCase } from "pascal-case";

pascalCase("string"); //=> "String"
pascalCase("dot.case"); //=> "DotCase"
pascalCase("PascalCase"); //=> "PascalCase"
pascalCase("version 1.2.10"); //=> "Version_1_2_10"
```

## License

MIT
