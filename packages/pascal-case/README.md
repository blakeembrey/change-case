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

The function also accepts [`options`](https://github.com/blakeembrey/change-case#options).

### Merge Numbers

If you'd like to remove the behavior prefixing `_` before numbers, you can use `pascalCaseTransformMerge`:

```js
import { pascalCaseTransformMerge } from "pascal-case";

pascalCase("version 12", { transform: pascalCaseTransformMerge }); //=> "Version12"
```

## License

MIT
