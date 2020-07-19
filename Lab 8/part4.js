var fs = require("fs");
var http = require("http");

http
	.createServer(function (req, res) {
		fs.readFile("part4.html", function (err, data) {
			if (err) {
				throw err;
			}

			res.writeHead(200, {
				"Content-Type": "text/html"
			});

			fs.appendFile("part4.html", data, function (err) {
				if (err) throw err;
				console.log("YAY we updated content");
			});

			res.write(data);
			res.end();
		});
	})
	.listen(6711);