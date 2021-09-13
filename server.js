const express = require('express');
const jokeRoutes = require('./routes/jokes.routes');

const app = express();
const port = 8000;

require('./configuration/db.config.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

jokeRoutes(app);

app.listen(port, () => console.log(`Servidor corriendo en puerto: ${port}`))