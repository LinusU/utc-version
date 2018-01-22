# UTC Version

Return a version string based on the current time.

## Installation

```sh
npm intall --save utc-version
```

## Usage

JavaScript:

```js
const utcVersion = require('utc-version')

console.log(utcVersion())
//=> 18.1.22.1441
```

Shell:

```sh
$ utc-version
18.1.22.1441
```

## API

### `utcVersion([date]) => string`

Return a version string based on the `Date`-object passed in. If no time is given, the current time is used.
