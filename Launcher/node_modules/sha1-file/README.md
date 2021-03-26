# sha1-file [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/sha1-file/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/sha1-file)

Get the SHA1 of a file.

[![NPM Badge](https://nodei.co/npm/sha1-file.png)](https://npmjs.com/package/sha1-file)

## Install

```sh
npm install sha1-file
```

## Usage

```js
const sha1File = require("sha1-file");

sha1File.sync("file.txt");
//=> "a0b65939670bc2c010f4d5d6a0b3e4e4590fb92b"
```

## API

### sha1File(filepath)

Returns a promise for the file hash.

### sha1File.sync(filepath)

Returns the file hash.
