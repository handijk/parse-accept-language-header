# parse-accept-language-header

Parse an accept-language header as described in [the HTTP/1.1 spec](https://httpwg.org/specs/rfc7231.html#header.accept-language) into an navigator.languages array as described in [the html spec](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-languages-dev)

* [Installation](#installation)
* [Usage](#createAsyncgenerator)

## Installation

```
npm i parse-accept-language-header
```

## Usage

```js
import { parseAcceptLanguageHeader } from 'parse-accept-language-header';

const languages = parseAcceptLanguageHeader('fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5');

console.log(languages) // -> 'fr-CH', 'fr', 'en', 'de'
```
