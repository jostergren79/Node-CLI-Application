// importing the following npm modules

const inquirer = require("inquirer")
const fs = require("fs")
const axios = require("axios")
const Spotify = require('node-spotify-api');
const moment = require("moment")
require("dotenv").config();
const keys = require("./key");
const spotify = new Spotify(keys.spotify);

// capturing user input

const userInput1 = process.argv[2];
const userInput2 = process.argv.slice(3).join(" ");

// spotify 

const spotifySearch = function (vData) {
    spotify.search({
        type: 'track',
        query: vData,
        limit: 1,
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        const itemsArray = data.tracks.items;
        for (let i = 0; i < itemsArray.length; i++) {
            const element = itemsArray[i];
            console.log("Name of Album ", element.album.name);
            console.log("Name of Song: ", element.name);
            console.log("Preview: ", element.preview_url);
            const artistArray = element.artists;
            for (let index = 0; index < artistArray.length; index++) {
                const element1 = artistArray[index].name;
                console.log(element1)
            }
        }
    });
}

// bandsintown

const bandsintown = function (vData) {
    const queryURL = "https://rest.bandsintown.com/artists/" + vData + "/events?app_id=codingbootcamp"
    axios.get(queryURL)
        .then((response) => {
            const eventArray = response.data;
            for (let index = 0; index < eventArray.length; index++) {
                const element = eventArray[index];
                console.log("************************************************")
                console.log(element.venue.name);
                console.log(element.datetime);
                console.log(element.venue.city);
            }
        })
};

// omdb

const omdbSearch = function (vData) {
    const queryURL = "http://www.omdbapi.com/?t=" + vData + "&apikey=trilogy"
    axios.get(queryURL)
        .then((response) => {
            const movieArray = response.data;

            console.log("************************")
            
            console.log("Title: ", movieArray.Title);
            console.log("************************")

            console.log("Year: ", movieArray.Year);
            console.log("************************")

            console.log("Rating: ", movieArray.Rated);
            console.log("************************")

            console.log("Rotten Tomatoes: ", movieArray.Ratings);
            console.log("************************")

            console.log("Country: ", movieArray.Country);
            console.log("************************")

            console.log("Language: ", movieArray.Language);
            console.log("************************")

            console.log("Actors: ", movieArray.Actors);
            console.log("************************")

            console.log("Plot: ", movieArray.Plot);
        })
};

// switch statment to process user input and respond

function userEntry(cData, vData) {
    switch (cData) {
        case "concert-this":
            bandsintown(vData);
            break;
        case "spotify-this-song":
            spotifySearch(vData);
            break;
        case "movie-this":
            omdbSearch(vData);
            break;
        case "do-what-it-says":
            // call function
            break;
            // call function
        default:
            console.log("Command not found")
            break;
    }

}

userEntry(userInput1, userInput2)