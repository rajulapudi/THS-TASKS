const express = require("express")
const server = express();
const port =3000 || process.allowedNodeEnvironmentFlags.port;

console.log(typeof(server));
console.log(typeof(express));
