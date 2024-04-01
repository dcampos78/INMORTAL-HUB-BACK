const nodemailer = require("nodemailer")
const express = require("express");
const cors = require("cors");
// Método de config cloudinary
const { configCloudinary } = require('./src/utils/cloudinary/config.js');
const { connect } = require("./src/utils/db.js");

//Rutas Componentes Principales
const userRouter = require("./src/api/users/users.routes.js");
const uploadRoutes = require('./src/api/avatar/uploadRoutes.js');
const UserRoutes = require('./src/api/users/users.routes.js')

// Rutas Componentes hijos (universos)

// ApesPlanet
const videoGamesApesPlanetRoutes = require("./src/api/routes/routes.ApesPlanet/videoGames.ApesPlanet.routes.js");
const charactersApesPlanetRoutes = require("./src/api/routes/routes.ApesPlanet/characters.ApesPlanet.routes");
const moviesApesPlanetRoutes = require("./src/api/routes/routes.ApesPlanet/movies.ApesPlanet.routes");

// Alien
const videoGamesAlienRoutes = require("./src/api/routes/routes.Alien/videoGames.Alien.routes");
const charactersAlienRoutes = require("./src/api/routes/routes.Alien/characters.Alien.routes");
const moviesAlienRoutes = require("./src/api/routes/routes.Alien/movies.Alien.routes");

// Blade
const videoGamesBladeRoutes = require("./src/api/routes/routes.Blade/videoGames.Blade.routes.js");
const charactersBladeRoutes = require("./src/api/routes/routes.Blade/characters.Blade.routes.js");
const moviesBladeRoutes = require("./src/api/routes/routes.Blade/movies.Blade.routes.js");

// Crepusculo
const booksCrepusculoRoutes = require("./src/api/routes/routes.Crepusculo/books.Crepusculo.routes");
const charactersCrepusculoRoutes = require("./src/api/routes/routes.Crepusculo/characters.Crepusculo.routes");
const moviesCrepusculoRoutes = require("./src/api/routes/routes.Crepusculo/movies.Crepusculo.routes");

// Dune
const booksDuneRoutes = require("./src/api/routes/routes.dune/books.dune.routes");
const charactersDuneRoutes = require("./src/api/routes/routes.dune/characters.dune.routes");
const moviesDuneRoutes = require("./src/api/routes/routes.Dune/movies.Dune.routes.js");
// const countriesDuneRoutes = require("./src/api/routes/routes.dune/countries.dune.routes");
// const planetsDuneRoutes = require("./src/api/routes/routes.Dune/planets.Dune.routes.js");

// HarryPotter
const booksHarryPotterRoutes = require("./src/api/routes/routes.HarryPotter/books.HarryPotter.routes");
const charactersHarryPotterRoutes = require("./src/api/routes/routes.HarryPotter/characters.HarryPotter.routes");
const moviesHarryPotterRoutes = require("./src/api/routes/routes.HarryPotter/movies.HarryPotter.routes");

// HungerGames
const booksHungerGamesRoutes = require("./src/api/routes/routes.HungerGames/books.HungerGames.routes");
const charactersHungerGamesRoutes = require("./src/api/routes/routes.HungerGames/characters.HungerGames.routes");
const moviesHungerGamesRoutes = require("./src/api/routes/routes.HungerGames/movies.HungerGames.routes");

// IndianaJones
const booksIndianaJonesRoutes = require("./src/api/routes/routes.IndianaJones/books.IndianaJones.routes");
const charactersIndianaJonesRoutes = require("./src/api/routes/routes.IndianaJones/characters.IndianaJones.routes");
const moviesIndianaJonesRoutes = require("./src/api/routes/routes.IndianaJones/movies.IndianaJones.routes");

// JurassicPark
const booksJurassicParkRoutes = require("./src/api/routes/routes.JurassicPark/books.JurassicPark.routes");
const charactersJurassicParkRoutes = require("./src/api/routes/routes.JurassicPark/characters.JurassicPark.routes");
const moviesJurassicParkRoutes = require("./src/api/routes/routes.JurassicPark/movies.JurassicPark.routes");

// LordOfTheRings
const booksLordOfTheRingsRoutes = require("./src/api/routes/routes.LordOfTheRings/books.LordOfTheRings.routes");
const charactersLordOfTheRingsRoutes = require("./src/api/routes/routes.LordOfTheRings/characters.LordOfTheRings.routes");
const moviesLordOfTheRingsRoutes = require("./src/api/routes/routes.LordOfTheRings/movies.LordOfTheRings.routes");

// MissionImposible
const charactersMissionImposibleRoutes = require("./src/api/routes/routes.MissionImposible/characters.MissionImposible.routes.js");
const moviesMissionImposibleRoutes = require("./src/api/routes/routes.MissionImposible/movies.MissionImposible.routes");
const videoGamesMissionImposibleRoutes = require("./src/api/routes/routes.MissionImposible/videoGames.MissionImposible.routes.js");

// ResidentEvil
const videoGamesresidentEvilRoutes = require("./src/api/routes/routes.residentEvil/videoGames.residentEvil.routes");
const charactersresidentEvilRoutes = require("./src/api/routes/routes.residentEvil/characters.residentEvil.routes");
const moviesresidentEvilRoutes = require("./src/api/routes/routes.residentEvil/movies.residentEvil.routes");

// StarTrek
const booksStarTrekRoutes = require("./src/api/routes/routes.StarTrek/books.StarTrek.routes");
const charactersStarTrekRoutes = require("./src/api/routes/routes.StarTrek/characters.StarTrek.routes");
const moviesStarTrekRoutes = require("./src/api/routes/routes.StarTrek/movies.StarTrek.routes");

// StarWars
const booksStarWarsRoutes = require("./src/api/routes/routes.StarWars/books.StarWars.routes");
const charactersStarWarsRoutes = require("./src/api/routes/routes.StarWars/characters.StarWars.routes");
const moviesStarWarsRoutes = require("./src/api/routes/routes.StarWars/movies.StarWars.routes");

// Underworld
// const booksUnderworldRoutes = require("./src/api/routes/routes.Underworld/books.Underworld.routes");
// const charactersUnderworldRoutes = require("./src/api/routes/routes.Underworld/characters.Underworld.routes");
// const moviesUnderworldRoutes = require("./src/api/routes/routes.Underworld/movies.Underworld.routes");

// Transformers
const videoGamesTransformersRoutes = require("./src/api/routes/routes.Transformers/videoGames.Transformers.routes");
const charactersTransformersRoutes = require("./src/api/routes/routes.Transformers/characters.Transformers.routes");
const moviesTransformersRoutes = require("./src/api/routes/routes.Transformers/movies.Transformers.routes");

// Terminator
const videoGamesTerminatorRoutes = require("./src/api/routes/routes.Terminator/videoGames.Terminator.routes");
const charactersTerminatorRoutes = require("./src/api/routes/routes.Terminator/characters.Terminator.routes");
const moviesTerminatorRoutes = require("./src/api/routes/routes.Terminator/movies.Terminator.routes");

// Xmen
const videoGamesXmenRoutes = require("./src/api/routes/routes.Xmen/videoGames.Xmen.routes");
const charactersXmenRoutes = require("./src/api/routes/routes.Xmen/characters.Xmen.routes");
const moviesXmenRoutes = require("./src/api/routes/routes.Xmen/movies.Xmen.routes");

//

connect();

const dotenv = require('dotenv');

// Ejecutamos método para usar .env
dotenv.config();

// Ejecutar la configuación de cloudinary
configCloudinary();

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});


app.use(
    cors({
        origin: ["*"],
    })
);

//Routes
//Rutas Principales
app.use('/api/users', UserRoutes)
app.use("/public", express.static("public"));
app.use("/api", (req, res, next) => "im alive");
app.use('/api', uploadRoutes);

app.use('/user', userRouter);
// Rutas Universos

// ApesPlanet
app.use("/universes/apesPlanet/videoGames", videoGamesApesPlanetRoutes)
app.use("/universes/apesPlanet/characters", charactersApesPlanetRoutes)
app.use("/universes/apesPlanet/movies", moviesApesPlanetRoutes)

// Alien
app.use("/universes/Alien/videoGames", videoGamesAlienRoutes)
app.use("/universes/Alien/characters", charactersAlienRoutes)
app.use("/universes/Alien/movies", moviesAlienRoutes)

// Blade
app.use("/universes/Blade/videoGames", videoGamesBladeRoutes)
app.use("/universes/Blade/characters", charactersBladeRoutes)
app.use("/universes/Blade/movies", moviesBladeRoutes)

// Dune
app.use("/universes/dune/books", booksDuneRoutes)
app.use("/universes/dune/characters", charactersDuneRoutes)
    // app.use("/universes/dune/planets", planetsDuneRoutes)
    // app.use("/universes/dune/countries", countriesDuneRoutes)
app.use("/universes/dune/movies", moviesDuneRoutes)

// HarryPotter
app.use("/universes/HarryPotter/books", booksHarryPotterRoutes)
app.use("/universes/HarryPotter/characters", charactersHarryPotterRoutes)
app.use("/universes/HarryPotter/movies", moviesHarryPotterRoutes)

// LordOfTheRings
app.use("/universes/LordOfTheRings/books", booksLordOfTheRingsRoutes)
app.use("/universes/LordOfTheRings/characters", charactersLordOfTheRingsRoutes)
app.use("/universes/LordOfTheRings/movies", moviesLordOfTheRingsRoutes)

// Crepusculo
app.use("/universes/Crepusculo/books", booksCrepusculoRoutes)
app.use("/universes/Crepusculo/characters", charactersCrepusculoRoutes)
app.use("/universes/Crepusculo/movies", moviesCrepusculoRoutes)

// IndianaJones
app.use("/universes/IndianaJones/books", booksIndianaJonesRoutes)
app.use("/universes/IndianaJones/characters", charactersIndianaJonesRoutes)
app.use("/universes/IndianaJones/movies", moviesIndianaJonesRoutes)

// HungerGames
app.use("/universes/HungerGames/books", booksHungerGamesRoutes)
app.use("/universes/HungerGames/characters", charactersHungerGamesRoutes)
app.use("/universes/HungerGames/movies", moviesHungerGamesRoutes)

// JurassicPark
app.use("/universes/JurassicPark/books", booksJurassicParkRoutes)
app.use("/universes/JurassicPark/characters", charactersJurassicParkRoutes)
app.use("/universes/JurassicPark/movies", moviesJurassicParkRoutes)

// MissionImposible
app.use("/universes/MissionImposible/characters", charactersMissionImposibleRoutes)
app.use("/universes/MissionImposible/movies", moviesMissionImposibleRoutes)
app.use("/universes/MissionImposible/videoGames", videoGamesMissionImposibleRoutes)

// ResidentEvil
app.use("/universes/residentEvil/videoGames", videoGamesresidentEvilRoutes)
app.use("/universes/residentEvil/characters", charactersresidentEvilRoutes)
app.use("/universes/residentEvil/movies", moviesresidentEvilRoutes)

// StarTrek
app.use("/universes/StarTrek/books", booksStarTrekRoutes)
app.use("/universes/StarTrek/characters", charactersStarTrekRoutes)
app.use("/universes/StarTrek/movies", moviesStarTrekRoutes)

// StarWars
app.use("/universes/StarWars/books", booksStarWarsRoutes)
app.use("/universes/StarWars/characters", charactersStarWarsRoutes)
app.use("/universes/StarWars/movies", moviesStarWarsRoutes)

// Underworld
// app.use("/universes/Underworld/books", booksUnderworldRoutes)
// app.use("/universes/Underworld/characters", charactersUnderworldRoutes)
// app.use("/universes/Underworld/movies", moviesUnderworldRoutes)

// Transformers
app.use("/universes/Transformers/videoGames", videoGamesTransformersRoutes)
app.use("/universes/Transformers/characters", charactersTransformersRoutes)
app.use("/universes/Transformers/movies", moviesTransformersRoutes)

// Terminator
app.use("/universes/terminator/videoGames", videoGamesTerminatorRoutes)
app.use("/universes/terminator/characters", charactersTerminatorRoutes)
app.use("/universes/terminator/movies", moviesTerminatorRoutes)

// Xmen
app.use("/universes/Xmen/videoGames", videoGamesXmenRoutes)
app.use("/universes/Xmen/characters", charactersXmenRoutes)
app.use("/universes/Xmen/movies", moviesXmenRoutes)

//
const PORT = process.env.PORT || 8084;

const server = app.listen(PORT, () => {
    console.log(`Server listening on port 🙈: ${PORT}`);
});

app.use((req, res, next) => {
    setImmediate(() => {
        next(new Error("Something went wrong"));
    });
});

app.disable('x-powered-by')

app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});