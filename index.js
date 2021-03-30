const os = require("os");

const localLog = (port) => {
	const nets = os.networkInterfaces();
	const results = Object.create({});
	for (const name of Object.keys(nets)) {
		for (const net of nets[name]) {
			if (net.family === "IPv4" && !net.internal) {
				if (!results[name]) {
					results[name] = [];
				}
				results[name].push(net.address);
			}
		}
	}
	let ipstring;
	results.wifi0 ? ipstring = `${results.wifi0[0]}:${port}` : ipstring = "...IPv4 not available...";
	return ipstring;
}

module.exports = localLog;