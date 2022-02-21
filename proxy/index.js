const express = require("express");
const app = express();
 
app.get("/", function(request, response){
    response.send("<h1>Главная страница</h1>");
});

app.use("/about",function (request, response) {
  response.sendFile(__dirname + "/about.html");
});
 
app.listen(3001);
