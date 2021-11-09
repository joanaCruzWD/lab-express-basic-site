const express = require('express');
const app = express();

app.use(express.static("public"));

//*Routes

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/views/home.html");
})
app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/public/views/about.html");
})
app.get('/movies', (req, res) => {
    res.sendFile(__dirname + "/public/views/movies.html");
})
app.listen(3030, () => {
    console.log("Server is running!");
})
