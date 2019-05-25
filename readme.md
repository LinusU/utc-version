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

console.log(utcVersion({ apple: true }))
//=> 18.1.22i157

console.log(utcVersion({ short: true }))
//=> 18.1.22
```

Shell:

```sh
$ utc-version
18.1.22.1441

$ utc-version --apple
18.1.22i157

$ utc-version --short
18.1.22
```

## API

### `utcVersion([date], [options]) => string`

Return a version string based on the `Date`-object passed in. If no time is given, the current time is used.

If `options.apple` is truthy, the version string will be compatible with Apples restrictions on `CFBundleVersion`. The format will be `year.month.day` followed by `i` and a number between 1 and 255 inclusively. The `i` number is increased rughly every 5 minutes and 39 seconds.

If `options.short` is truthy, the format will be `year.month.day`, without seconds.
