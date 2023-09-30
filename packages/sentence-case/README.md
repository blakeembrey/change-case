# Sentence Case

> Transform into a lower case with spaces between words, then capitalize the string.

## Installation

```
npm install sentence-case --save
```

## Usage

```js
import { sentenceCase } from "sentence-case";

sentenceCase("string"); //=> "String"
sentenceCase("dot.case"); //=> "Dot case"
sentenceCase("PascalCase"); //=> "Pascal case"
sentenceCase("version 1.2.10"); //=> "Version 1 2 10"
```

## License

MIT
