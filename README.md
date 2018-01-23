# can-coach

[![Build Status](https://travis-ci.org/phillipskevin/can-coach.svg?branch=master)](https://travis-ci.org/phillipskevin/can-coach)

Proof-of-concept for in-browser devtools for CanJS

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'can-coach';
```

### CommonJS use

Use `require` to load `can-coach` and everything else
needed to create a template that uses `can-coach`:

```js
var plugin = require("can-coach");
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/can-coach/dist/global/can-coach.js'></script>
```
