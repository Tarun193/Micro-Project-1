const express = require("express");
const path = require("path");
const fs = require("fs/promises");
const app = express()

const PORT = 3000;
app.use(express.static(path.join(__dirname, "/public")));

/**
 * This is a GET route handler for the root path ("/").
 * It is an asynchronous function that sends the 'index.html' file located in the 'public/views' directory.
 * 
 * @param {Object} req - The request object provided by Express.js
 * @param {Object} res - The response object provided by Express.js
 */
app.get("/", async (req, res) => {
    // Use the path.join method to create a path string that works across all operating systems.
    // __dirname is a Node.js global variable that gets the directory name of the current module.
    // 'public/views' is the directory where the 'index.html' file is located.
    res.sendFile(path.join(__dirname, "public/views", "index.html"))
})

/**
 * This is a GET route handler for the root path ("/about").
 */

app.get("/about", async (req, res) => {
    res.sendFile(path.join(__dirname, "public/views", "about.html"))
})

/**
 * This is a GET route handler for the root path ("/movies").
 */
app.get("/movies", async (req, res) => {
    res.sendFile(path.join(__dirname, "public/views", "movies.html"))
})

/**
 * This is a GET route handler for the root path ("/TVShows").
 */
app.get("/TVShows", async (req, res) => {
    res.sendFile(path.join(__dirname, "public/views", "TVShows.html"))
})

/**
 * This is an endpoint that handles GET requests to "/api/movies".
 * It reads a JSON file from the file system, parses it into a JavaScript object,
 * and sends the "movies" property of that object as a JSON response.
 *
 * @param {object} req - The request object, containing information about the HTTP request.
 * @param {object} res - The response object, used to send data back to the client.
 */
app.get("/api/movies", async (req, res) => {
    // Read the raw data from the JSON file in the "data" directory.
    const rawData = await fs.readFile(path.join(__dirname, "data", "db.JSON"));

    // Parse the raw data into a JavaScript object.
    const data = JSON.parse(rawData);

    // Send the "movies" property of the parsed data as a JSON response.
    res.json(data.movies)
})

/*
`* This is an endpoint that handles GET requests to "/api/TVShows".
 * It reads a JSON file from the file system, parses it into a JavaScript object,
 * and sends the "tvShows" property of that object as a JSON response.
 */

app.get("/api/TVShows", async (req, res) => {
    const rawData = await fs.readFile(path.join(__dirname, "data", "db.JSON"));
    const data = JSON.parse(rawData);
    res.json(data.tvShows);
})




app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`)
})