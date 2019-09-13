const inquirer = require("inquirer")
const fs = require("fs")
const axios = require("axios")
const Spotify = require('node-spotify-api');
const moment = require("moment")
const dotenv = require('dotenv').config()
const userInput1 = process.argv[2];
const userInput2 = process.argv[3];


const spotify = new Spotify({
    id: "5e6e4a2863b5494ab17b600f450a7fb3",
    secret: "24b4064f659a470284b6351673b65bdb",
});

const omdb = function () {
    this.findMovie = function (movie) {
        const URL2 = "http://www.omdbapi.com/?apikey=trilogy&" + movie;
        axios.get(URL2)
            .then(response => {
                let data = response.data
                console.log(data)

            });
    };
}


if (userInput1 === "song") {
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

    if (userInput1 === "movie") {
        let test = new omdb()
        test.findMovie(userInput2)
        console.log("you entered a movie!")
    }
    
    else {
                console.log("You haven't entered the a song, concert, or movie")
    }



    // let stringdata = `
    // title: ${data.title}
    // Genre: ${data.genre}
    // rating: ${data.rating.average}
    // summary: ${data.summary}`
    // console.log(stringdata)

    // const bandsintown = function () {
    //     this.findConcert = function (concert) {
    //         const URL = ""
    //         api key = a8bf7d62-1ef8-4a77-8171-470836a222b9
    //     }
    // }