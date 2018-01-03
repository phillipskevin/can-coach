# can-devtools-poc

[![Build Status](https://travis-ci.org/phillipskevin/can-devtools-poc.svg?branch=master)](https://travis-ci.org/phillipskevin/can-devtools-poc)

Proof-of-concept for in-browser devtools for CanJS

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'can-devtools-poc';
```

### CommonJS use

Use `require` to load `can-devtools-poc` and everything else
needed to create a template that uses `can-devtools-poc`:

```js
var plugin = require("can-devtools-poc");
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/can-devtools-poc/dist/global/can-devtools-poc.js'></script>
```
