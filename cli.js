const inquirer = require("inquirer")
const fs = require("fs")
const axios = require("axios")
const Spotify = require('node-spotify-api');
const userInput1 = process.argv[2];
const userInput2 = process.argv[3];


const spotify = new Spotify({
    id: "5e6e4a2863b5494ab17b600f450a7fb3",
    secret: "24b4064f659a470284b6351673b65bdb",
});

if (userInput1 === "song") {
    spotify.search({
        type: 'track',
        query: userInput2,
        limit: 1,
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });
    console.log("you entered a song!")
} else if (userInput1 === "concert") {
    let test1 = new Song()
    test1.findConcert(userInput2)
    console.log("you searched for a concert!")
} else if (userInput1 === "movie") {
    let test2 = new Song()
    test2.findMovie(userInput2)
    console.log("you entered a movie!")
} else {
    console.log("that isn't an accepted input, please search for song, concert or movie!")
}