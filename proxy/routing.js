const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});

app.use("/index",function (request, response) {
    response.sendFile(__dirname + "/index.html");
  });

app.use("/about",function (request, response) {
  response.sendFile(__dirname + "/about.html");
});

app.use("/contacts", function(request, response){
    response.sendFile(__dirname + "/contacts.html");
});
 
app.listen(3005);
