# localhost-logger

A package to log your IPv4 address + port to your terminal, so you can debug on other devices like your phone.

## Usage
**CommonJS syntax**  
```js
const localLog = require("localhost-logger");

const port = 7000; // can be any number
app.listen(port, () => { // express syntax
	console.log(localLog(port)); // logs: 192.XXX.X.X:port
	console.log(`Server is running on port ${port}`);
})
```

**ES6 syntax**
```js
import localLog from "localhost-logger";

const port = 7000; // can be any number
app.listen(port, () => { // express syntax
	console.log(localLog(port)); // logs: 192.XXX.X.X:port
	console.log(`Server is running on port ${port}`);
})
```

## Installation
`$ npm install localhost-logger`