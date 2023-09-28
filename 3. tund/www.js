const http = require("http");

http.createServer(function(req, res){
	//määrame tagastatavate andemete päise, et on veebileht
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Daria Bayram, veebiprogrammeerimine 2023</title></head><body>');
	res.write('<h1>Daria Bayram</h1><p>See leht on loodud <a href="https://www.tlu.ee" target="_blank">TLÜ</a> Digitehnoloogiate instituudis õppetöö raames</p><p>Kus on kodu?</p><hr><p>Kursus, mille raames leht tehti on: veebiprogrammeerimine.</p></body></html>');
	//et see kõik valmiks ja ära saadetaks:
	return res.end();
}).listen(5201);