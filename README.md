# localhost-logger

A zero-dependency utility for logging your local network IPv4 address to the console. Useful for testing web apps on other devices.

## Usage
**CommonJS syntax**  
```js
const localLog = require("localhost-logger");

const port = 7000; // can be any number
app.listen(port, () => { // express syntax
	localLog(port); // logs: 192.XXX.X.X:port
	console.log(`Server is running on port ${port}`);
})
```

**ES6 syntax**
```js
import localLog from "localhost-logger";

const port = 7000; // can be any number
app.listen(port, () => { // express syntax
	localLog(port); // logs: 192.XXX.X.X:port
	console.log(`Server is running on port ${port}`);
})
```

## Installation
Install to your devDependencies, so you won't use it on production level.  
```sh
$ npm install localhost-logger --save-dev
```