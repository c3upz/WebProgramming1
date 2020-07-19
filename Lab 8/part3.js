var http = require('http');
console.log("hi");
http.createServer(function (req, res) {
	const MAX = 6;
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.write('<table border="1">');
	for (var r = 1; r <= MAX; r++) {
		res.write("<tr> \n");
		for (var c = 1; c <= MAX; c++) {
			var result = r * c;
			res.write("<td>" + r + " * " + c + " = " + result + "<td> \n");
		}
		res.write("</tr>");
	}
	res.write('</table>');
	res.end();
}).listen(3000);