const express = require('express');
const app = express();
const hostname = "localhost";
const port = 3000;

app.use(express.static(__dirname + '/public'));

// Query String Parameters
// /greet?name=jane+doe
app.get('/greet', (req, res) => {
    let name = req.query.name;
    let year = req.query.year;
    res.send(`<h1 style="text-transform:capitalize;">Hello, ${name}!</h1>
    <h3>You are ${2022 - year - 1} or ${2022 - year} years old.</h3>`);
});

// Route Parameters
// /math/num1/operation/num2
app.get('/math/:num1/:op/:num2', (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    let operation = req.params.op;

    switch (operation) {
        case "plus":
            res.send(`<h1>${num1} + ${num2} = ${num1 + num2}</h1>`);
            break;
        case "minus":
            res.send(`<h1>${num1} - ${num2} = ${num1 - num2}</h1>`);
            break;
        case "times":
            res.send(`<h1>${num1} * ${num2} = ${num1 * num2}</h1>`);
            break;
        case "divide":
            res.send(`<h1>${num1} / ${num2} = ${num1 / num2}</h1>`);
            break;
        default:
            res.send("Get help");
            break;
    }
});


app.listen(port, () => {
    console.log(`Listening on http://${hostname}:${port} ...`);
});