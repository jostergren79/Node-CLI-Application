// here is the imports liri required in my version

const inquirer = require("inquirer")
const fs = require("fs")
const axios = require("axios")
const Spotify = require('node-spotify-api');
const moment = require("moment")
const dotenv = require('dotenv').config()

//  liri captures the user input of song movie or concert user the process.argv index values of 2 and 3 

const userInput1 = process.argv[2];
const userInput2 = process.argv[3];

// this is a spotify object that contains my id and secret

const spotify = new Spotify({
    id: "5e6e4a2863b5494ab17b600f450a7fb3",
    secret: "24b4064f659a470284b6351673b65bdb",
});

// this represents the variable spotify function. This uses spotify.search which is built in to the spotify api search function

const spotify = function () {
    spotify.search({
    type: 'track',
    query: userInput2,
    limit: 1,
}, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    console.log(data.name);
});
}

// this is the omdb axios requirest that should return a movie object and console log the data

const omdb = function () {
    this.findMovie = function (movie) {
        const URL2 = "http://www.omdbapi.com/?apikey=trilogy&" + movie;
        axios.get(URL2)
            .then(response => {
                let data = response2.data
                console.log(data)

            });
    };
}

module.exports = spotify;

// this is the omdb axios requirest that should return a movie object and console log the data


const omdb = function () {
    this.findMovie = function (movie) {
        const URL2 = "http://www.omdbapi.com/?apikey=trilogy&" + movie;
        axios.get(URL2)
            .then(response => {
                let data = response2.data
                console.log(data)

            });
    };
}

module.exports = omdb;

// this is the omdb axios requirest that should return a movie object and console log the data


const bandsintown = function () {
    this.findconcert = function (concert) {
        const URL3 = "" + concert;
        axios.get(URL3)
            .then(responsea => {
                let data = response3.data
                console.log(data)

            })
    };
};

module.exports = bandsintown;

// these if, else if, and else, statements tell liri what todo with the user command line inputs 

if (userInput1 === "song") {
    let test = new Spotify()
    test.findspotify(userInput2)
    console.log("you entered a song!")
} else if (userInput1 === "movie") {
    let test1 = new omdb()
    test1.findMovie(userInput2)
    console.log("you entered a movie!")
} else if (userInput1 === "concert") {
    let test2 = new bandsintown()
    test2.findconcert(userInput2)
    console.log("you entered a concert!")
} else {
    console.log("You haven't entered the a song, concert, or movie")
} 