import express from "express";
import * as http from "http";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    // Set the API endpoint and API key
    const apiKey = process.env.API_KEY;
    const endpoint = `http://api.ipstack.com/${ip}?access_key=${apiKey}`;

    // Make the request
    http.get(endpoint, (response) => {
        let data = "";

        // A chunk of data has been received.
        response.on("data", (chunk) => {
            data += chunk;
        });

        // The whole response has been received.
        response.on("end", () => {
            console.log(JSON.parse(data));
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

    res.redirect("https://www.google.com");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
