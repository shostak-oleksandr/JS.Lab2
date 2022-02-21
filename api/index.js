// підключення express
const express = require("express");

// створюємо об’єкт додатка
const app = express();

function jest_test(phrase) {
    return phrase + "!";
}

module.exports = {
    jest_test
  }

// визначаємо обробник для маршруту "/"
app.get("/", (request, response) => {
    
    // відправляємо відповідь
    response.send("<h1>Hello World!</h1>");

    jest_test();
});

// починаємо прослуховувати підключення на 3000 порту
app.listen(3000);
