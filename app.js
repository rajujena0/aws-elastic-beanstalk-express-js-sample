const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('The Man Behind Story is Unbealivable. Raju know about him'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
