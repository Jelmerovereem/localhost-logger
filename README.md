# localhost-logger

A zero-dependency utility for logging your local network IPv4 address to the console. Useful for testing web apps on other devices.

## Usage
**CommonJS syntax**  
```js

const port = 7000; // can be any number
app.listen(port, () => { // express syntax
	if (process.env.NODE_ENV !== 'production') { // NODE_ENV is usually set to 'production' on hosting platforms like Heroku.
		const localLog = require("localhost-logger"); // Require localLog here, so it won't be used in a production environment.
		localLog(port); // logs: 192.XXX.X.X:port
	}
	console.log(`Server is running on port ${port}`);
})
```

**ES6 syntax**
```js
const port = 7000; // can be any number
app.listen(port, () => { // express syntax
	if (process.env.NODE_ENV !== 'production') { // NODE_ENV is usually set to 'production' on hosting platforms like Heroku.
		import("localhost-logger").then((localLog) => { // Import localLog here, so it won't be used in a production environment.
			localLog.default(port); // logs: 192.XXX.X.X:port
		});
	}
	console.log(`Server is running on port ${port}`);
})
```

## Installation
Install to your devDependencies, so you won't use it on production level.  
```sh
$ npm install localhost-logger --save-dev
```