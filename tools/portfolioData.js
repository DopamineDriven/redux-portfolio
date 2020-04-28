const portfolioPicOne = require("./images/14.jpg");
const portfolioPicTwo = require("./images/13.jpg");
const portfolioPicThree = require("./images/11.jpg");
const portfolioPicFour = require("./images/7.jpg");
const portfolioPicFive = require("./images/10.jpg");
const portfolioPicSix = require("./images/8.jpg");
const portfolioPicSeven = require("./images/4.jpg");
const portfolioPicEight = require("./images/3.jpg");
const portfolioPicNine = require("./images/2.jpg");
const portfolioPicTen = require("./images/15.jpg");
const portfolioPicEleven = require("./images/16.jpg");
const portfolioPicTwelve = require("./images/17.jpg");

const port = [
  {
    id: 17,
    title: "Consilience",
    bootcamp: true,
    independent: true,
    favorite: true,
    image: portfolioPicTwelve,
    url: "https://classroom-consilience.herokuapp.com/",
    overview: "MERN, JWTs, backward compatibility",
  },
  {
    id: 16,
    title: "Google Books Search & Save",
    bootcamp: true,
    independent: true,
    favorite: true,
    image: portfolioPicEleven,
    url: "https://react-google-books-app.herokuapp.com/",
    overview: "MERN, backward compatibility, axios",
  },
  {
    id: 14,
    title: "PWA Budget Tracker",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicOne,
    url: "https://budget-trackr.herokuapp.com/",
    overview: "PWA, Mongo, Node, Express",
  },
  {
    id: 13,
    title: "Employee Directory",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicTwo,
    url: "https://vast-inlet-61488.herokuapp.com/",
    overview: "React, React Hooks, axios",
  },
  {
    id: 11,
    title: "Workout Tracker",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicThree,
    url: "https://exercise-trackr.herokuapp.com/",
    overview: "Mongo, Mongoose, Express, Node",
  },
  {
    id: 7,
    title: "Rec-reate",
    bootcamp: true,
    independent: true,
    favorite: true,
    image: portfolioPicFour,
    url: "https://rec-reate.herokuapp.com/",
    overview: "Sequelize, Express, Node, Passport, Handlebars",
  },
  {
    id: 10,
    title: "Weather Dashboard",
    bootcamp: true,
    independent: false,
    favorite: false,
    image: portfolioPicFive,
    url: "https://dopaminedriven.github.io/WeatherDashboard/",
    overview: "API, AJAX, JavaScript, jQuery",
  },
  {
    id: 8,
    title: "Burger App",
    bootcamp: true,
    independent: false,
    favorite: false,
    image: portfolioPicSix,
    url: "https://infinite-stream-25057.herokuapp.com/",
    overview: "MySQL, Handlebars, Node, Express, jQuery",
  },
  {
    id: 4,
    title: "Express Note Taker",
    bootcamp: true,
    independent: false,
    favorite: false,
    image: portfolioPicSeven,
    url: "https://express-note-taking-app.herokuapp.com/",
    overview: "Express, Node, local storage, jQuery",
  },
  {
    id: 3,
    title: "Employee Roster Generator",
    bootcamp: true,
    independent: false,
    favorite: false,
    image: portfolioPicEight,
    url: "https://www.youtube.com/watch?v=1aqZo6awj38",
    overview: "Node CLI, Jest, MySQL, Inquirer",
  },
  {
    id: 2,
    title: "GitHub Profile Generator",
    bootcamp: true,
    independent: false,
    favorite: false,
    image: portfolioPicNine,
    url: "https://www.youtube.com/watch?v=T1ln-xt-Dm4",
    overview: "Node CLI, Axios, Electron",
  },
  {
    id: 15,
    title: "Resume",
    bootcamp: false,
    independent: true,
    favorite: false,
    image: portfolioPicTen,
    url: "https://drive.google.com/open?id=1_29o_wtck0PoFzBwj1cvwlS7YknuE9dj",
    overveiw: "Overview",
  },
];

module.exports = {
  port,
};
