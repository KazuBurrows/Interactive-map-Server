const express = require('express');
const app = express();
// const http = require('http');
const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    console.log("Here");
    res.json({message : "Connected to api."})


})




const mapRouter = require('./routes/map');
// Link route to the map router
app.use('/map', mapRouter);

app.listen(port, () => {
    console.log("heroku test port -->", port)
})
// const server = http.createServer(app);
// server.listen(port);
// server.use(cors());