const express = require('express');
const app = express();


const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello from users World!');
})

const users = [
{id: 1, name: "John Doe", email: "john@example.com"},
{id: 2, name: "Jane Doe", email: "jane@example.com"},
{id: 3, name: "Jim Don", email: "jim@example.com"}

];

app.get('/users', (req, res) => {
    res.send(users);
})

app.get('/product', (req, res) => {
    res.send('Products are ready');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})