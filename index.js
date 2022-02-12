//Starting an express app
const express = require('express');
const app = express();

//Enabling the usage of static files from the 'public' folder
app.use(express.static('public'));


//Setting the port for the app at localhost:3000
const port = process.env.PORT || 3000;
app.listen(port);

