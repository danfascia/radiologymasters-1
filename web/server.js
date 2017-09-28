const express = require("express");
const app = express();

app.use("/node_modules", express.static(__dirname + "/node_modules"));
app.use("/admin", express.static(__dirname + "/admin"));

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Radiology Masters web server is running');
});