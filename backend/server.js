// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT          = process.env.PORT || 8080;
const ENV           = process.env.ENV || "development";
const express       = require("express");
const bodyParser    = require("body-parser");
const cookieParser  = require('cookie-parser');
const sass          = require("node-sass-middleware");
const app           = express();
const morgan        = require('morgan');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(cookieParser())
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const tripRoutes = require("./routes/trips");
const apiRoutes = require("./routes/api");
const itineraryRoutes = require("./routes/itineraries")



// All Repository Factories (CONTAINS ALL THE DATABASE LOGICS)
const userRepositoryFactory = require("./repository/users_repository");
const activityRepositoryFactory = require("./repository/activities_repository");
const userServiceFactory = require("./service/users_service");
const activityServiceFactory = require("./service/activities_service");
const tripRepositoryFactory = require("./repository/trips_repository");
const tripsServiceFactory = require("./service/trips_service");
const itineraryRepositoryFactory = require ('./repository/itineraries_repository')

const itineraryServiceFactory = require('./service/itineraries_service');
const cityServiceFactory = require('./service/cities_service');
const cityRepositoryFactory = require('./repository/cities_repository');




// All Services (CONTAINS ALL CRUD ACTIONS THAT ULTIMATELY LEAD TO REPOSITORIES)
const usersRepository = userRepositoryFactory(db);
const userService = userServiceFactory(usersRepository);

const activtiesRepository = activityRepositoryFactory(db);
const activityService = activityServiceFactory(activtiesRepository);

const citiesRepository = cityRepositoryFactory(db);
const cityService = cityServiceFactory(citiesRepository);

const tripsRepository = tripRepositoryFactory(db);
const tripService = tripsServiceFactory(tripsRepository);



const itinerariesRepository = itineraryRepositoryFactory(db);
const itineraryService = itineraryServiceFactory(itinerariesRepository);



// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/users", usersRoutes(userService));
app.use("/api", apiRoutes(activityService,cityService));
app.use("/trips", tripRoutes(tripService));
app.use("/itineraries", itineraryRoutes(itineraryService));
// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/logout", (req, res) => {
  res.clearCookie('user')
  res.end()
})

app.listen(PORT, () => {
  console.log(`Trip Scheduler API listening on port ${PORT}`);
});
