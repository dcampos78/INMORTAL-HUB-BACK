const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MovieHungerGames = require('../../api/models/models.HungerGames/movies.HungerGames.model');

const arrayMoviesHungerGames = [
  {
    title: 'Los Juegos del Hambre',
    picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710441452/JuegosDelHambre/Movies/1_movie_JuegosDelHambre_yzueak.png',
    director: 'Gary Ross',
    year: 2012,
    duration: "142 min",
    country: "EEUU",
    genre: 'Ciencia Ficción, Acción, Drama, Distopía',
    clasification: "PG-13",
    resume: 'Cada año, en las ruinas de lo que en su día fue Norteamérica, el Capitolio de la nación de Panem obliga a cada uno de sus doce distritos a enviar un chico o chica adolescente a competir en los Juegos del Hambre. Los Juegos del Hambre, un retorcido castigo por un levantamiento que tuvo lugar en el pasado y una táctica de intimidación gubernamental continuada, son un acontecimiento retransmitido por televisión en todo el país en el que los "Tributos" deben luchar entre sí hasta que sólo quede un superviviente.                                      Katniss Everdeen, de dieciséis años de edad, se presenta como voluntaria en lugar de su hermana para participar en los juegos, y se ve obligada a confiar en su aguzado instinto, así como en los consejos de un antiguo vencedor borracho, Haymitch Abernathy, cuando termina enfrentada a otros Tributos que han sido objeto de un entrenamiento intensivo y que se han estado preparando para estos Juegos durante toda su vida. Si quiere volver a su casa en el Distrito 12, Katniss deberá tomar decisiones imposibles en la arena en las que tendrá que contraponer la supervivencia a la humanidad, y la vida al amor.',
    // trailer: 'https://www.youtube.com/watch?v=_8Ktfs2mBDY',
    trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1710440698/JuegosDelHambre/Trailers/Los_Juegos_del_Hambre_-_Tr%C3%A1iler_Oficial_HD_1080p_25fps_H264-128kbit_AAC_ij1qmq.mp4',
  },
  {
    title: 'Los Juegos del Hambre, En Llamas',
    picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710441434/JuegosDelHambre/Movies/2_movie_JuegosDelHambreEnLlamas_w1apga.jpg',
    director: 'Francis Lawrence',
    year: 2013,
    duration: "146 min",
    country: "EEUU",
    genre: 'Ciencia Ficción, Acción, Drama, Distopía',
    clasification: "PG-13",
    books: "",
    characters: [],
    resume: 'Katniss Everdeen regresa sana y salva a casa tras ganar la 74ª edición anual de los Juegos del Hambre, junto a su compañero tributo Peeta Mellark. Ganar significa tener que dejar atrás a su familia y amigos, para emprender una "Gira de la Victoria" por los diferentes distritos. Por el camino, Katniss se da cuenta de que está comenzando a gestarse una rebelión, pero el Capitolio sigue manteniéndolo todo perfectamente bajo control, mientras el presidente Snow prepara la 75ª edición anual de los Juegos del Hambre (El Vasallaje de los Veinticinco), una competición que podría cambiar Panem para siempre.',
    // trailer: 'https://www.youtube.com/watch?v=tZbaZtCUOUQ',
    trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1710440675/JuegosDelHambre/Trailers/Los_Juegos_del_Hambre__En_llamas_-_Trailer_en_espa%C3%B1ol_HD_1080p_24fps_H264-128kbit_AAC_cjbb7v.mp4',
  },
  {
    title: 'Los Juegos del Hambre, Sinsajo Parte 1',
    picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710441441/JuegosDelHambre/Movies/3_movie_JuegosDelHambreSinsajo1_cwhiuo.jpg',
    director: 'Francis Lawrence',
    year: 2014,
    duration: "123 min",
    country: "EEUU",
    genre: 'Ciencia Ficción, Acción, Drama, Distopía',
    clasification: "PG-13",
    books: "",
    characters: [],
    resume: 'Sitúa a Katniss Everdeen en el Distrito 13 tras, literalmente, destrozar los juegos para siempre. Bajo el liderazgo de la Presidenta Coin y contando con las advertencias de los amigos en quien confía, Katniss expande sus alas al tiempo que lucha por salvar a Peeta y a una nación conmovida por su coraje.',
    // trailer: 'https://www.youtube.com/watch?v=wks6bqEzf-o',
    trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1710440635/JuegosDelHambre/Trailers/Los_Juegos_del_Hambre_Sinsajo__Parte_1_-_Teaser_trailer_2_en_espa%C3%B1ol_HD_1080p_24fps_H264-128kbit_AAC_cu7whr.mp4',
  },
  {
    title: 'Los Juegos del Hambre, Sinsajo Parte 2',
    picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710441444/JuegosDelHambre/Movies/4_movie_JuegosDelHambreSinsajo2_tlmwzw.jpg',
    director: 'Francis Lawrence',
    year: 2015,
    duration: "137 min",
    country: "EEUU",
    genre: 'Ciencia Ficción, Acción, Drama, Distopía',
    clasification: "PG-13",
    books: "",
    characters: [],
    resume: 'Katniss Everdeen se da cuenta de que ya no sólo está en juego su supervivencia, sino también el futuro. Con Panem sumida en una guerra a gran escala, Katniss tendrá que plantar cara al presidente Snow en el enfrentamiento final. Katniss, acompañada por un grupo de sus mejores amigos, que incluye a Gale, Finnick y Peeta, emprende una misión con la unidad del Distrito 13, en la que arriesgan sus vidas para liberar a los ciudadanos de Panem y orquestan un intento de asesinato del presidente Snow, cada vez más obsesionado con destruirla. Las trampas mortales, los enemigos y las decisiones morales que aguardan a Katniss la pondrán en mayores aprietos que ninguna arena de Los Juegos del Hambre.',
    // trailer: 'https://www.youtube.com/watch?v=3-ar77u-Mww',
    trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1710440696/JuegosDelHambre/Trailers/Los_Juegos_del_Hambre__Sinsajo_-_Parte_2_-_Trailer_espa%C3%B1ol_HD_720p_24fps_H264-192kbit_AAC_pzn8ni.mp4',
  },
  {
    title: 'Los Juegos del Hambre, Balada de Pájaros Cantores y Serpientes',
    picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710441447/JuegosDelHambre/Movies/5_movie_JuegosDelHambreBaladaPajarosSerpientes_zdrplt.jpg',
    director: 'Francis Lawrence',
    year: 2023,
    duration: "158 min",
    country: "EEUU",
    genre: 'Ciencia Ficción, Acción, Drama, Distopía',
    clasification: "PG-13",
    books: "",
    characters: [],
    resume: 'Esta entrega de la saga sigue a un joven Coriolanus, la última esperanza de la familia Snow, cuyo linaje ha caído en desgracia en el Capitolio de la posguerra. Con su sustento amenazado, Snow acepta a regañadientes el encargo de ser el mentor de Lucy Gray Baird -una Tributo del empobrecido Distrito 12- en los 10º Juegos del Hambre. Pero después de que el carisma de Lucy Gray cautive al público de Panem, Snow ve la oportunidad de cambiar el destino de ambos. Con todo por lo que ha trabajado pendiendo de un hilo, Snow se une a Lucy Gray para cambiar las probabilidades a su favor. Luchando contra sus instintos tanto para el bien como para el mal, Snow emprende una carrera contrarreloj para sobrevivir y revelar si finalmente se convertirá en un pájaro cantor... o en una serpiente.',
    // trailer: 'https://www.youtube.com/watch?v=ZMFd5JSV3lM',
    trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1710440698/JuegosDelHambre/Trailers/Los_Juegos_del_Hambre_Balada_de_P%C3%A1jaros_Cantores_y_Serpientes___Tr%C3%A1iler_oficial_subtitulado_1080p_24fps_H264-128kbit_AAC_szegge.mp4',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allMoviesHungerGames = await MovieHungerGames.find();
    if (allMoviesHungerGames.length > 0) {
      await MovieHungerGames.collection.drop();
      console.log('películas borradas');
    }
  })
  .catch((err) => {
    console.log('error borrando las películas', err);
  })
  .then(async () => {
    const moviesHungerGamesMap = arrayMoviesHungerGames.map((movie) => new MovieHungerGames(movie));
    await MovieHungerGames.insertMany(moviesHungerGamesMap);
    console.log('películas insertados');
  })
  .catch((err) => {
    console.log('error insertando los películas', err);
  })
  .finally(() => mongoose.disconnect());
