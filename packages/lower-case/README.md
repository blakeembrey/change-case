# Lower Case

> Transforms the string to lower case.

## Installation

```
npm install lower-case --save
```

## Usage

```js
import { lowerCase, localeLowerCase } from "lower-case";

lowerCase("string"); //=> "string"
lowerCase("PascalCase"); //=> "pascalcase"

localeLowerCase("STRING", "tr"); //=> "strıng"
```

## License

MIT
