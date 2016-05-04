"use strict";

const express 	= require("express");
const app		= express();
const http 		= require("http").Server(app);
const port 		= 1234;

app.use('/jspm_packages',  express.static(__dirname + '/jspm_packages'));
app.use("/config.js", express.static(__dirname + "/config.js"));
app.use(express.static(__dirname + "/client"));

http.listen(port, () => {

	console.log("app alive @ " + port);

});