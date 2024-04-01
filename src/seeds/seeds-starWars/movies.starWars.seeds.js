const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MovieStarWars = require('../../api/models/models.StarWars/movies.StarWars.model');

const arrayMoviesStarWars = [{
        title: 'Star Wars: Episodio I - La amenaza fantasma',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710707863/Star%20Wars/Movies/movies/starswars1_iepfh2.jpg',
        director: 'George Lucas',
        year: 1999,
        duration: '136 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG (Parental Guidance Suggested)',
        resume: 'La República Galáctica está sumida en el caos. Los impuestos de las rutas comerciales a los sistemas estelares exteriores están en disputa. Esperando resolver el asunto con un bloqueo de poderosas naves de guerra, la codiciosa Federación de Comercio ha detenido todos los envíos al pequeño planeta de Naboo. Mientras el Congreso de la República debate interminablemente esta alarmante cadena de acontecimientos, el Canciller Supremo ha enviado en secreto a dos Caballeros Jedi guardianes de la paz y la justicia en la galaxia, para resolver el conflicto....',
        // trailer: 'https://www.youtube.com/watch?v=n1CUHjrc9Sc'
        trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711212281/Star%20Wars/Trailers/Tr%C3%A1iler_Star_Wars_Episodio_I_La_amenaza_fantasma_720p_25fps_H264-192kbit_AAC_ewr0zr.mp4'
    },
    {
        title: 'Star Wars: Episodio II - El ataque de los clones',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710707869/Star%20Wars/Movies/movies/starswars2_qvu33g.jpg',
        director: 'George Lucas',
        year: 2002,
        duration: '142 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG (Parental Guidance Suggested)',
        resume: 'En el Senado Galáctico reina la inquietud. Varios miles de sistemas solares han declarado su intención de abandonar la República. Este movimiento separatista, liderado por el misterioso Conde Dooku, ha provocado que al limitado número de Caballeros Jedi les resulte difícil mantener la paz y el orden en la galaxia. La senadora Amidala, la antigua reina de Naboo, regresa al Senado Galáctico para dar su voto en la crítica cuestión de crear un EJÉRCITO DE LA REPÚBLICA que ayude a los desbordados Jedi…',
        // trailer: 'https://www.youtube.com/watch?v=DywnxIuPtUs',
        trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1710442484/Star%20Wars/Trailers/Star_Wars__Episodio_II_-_El_Ataque_de_los_Clones_-_Trailer_HD_disponible_en_plataformas_digitales_1080p_25fps_H264-128kbit_AAC_o4ekzo.mp4'
    },
    {
        title: 'Star Wars: Episodio III - La venganza de los Sith',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710707875/Star%20Wars/Movies/movies/starswars3_rzmmzj.jpg',
        director: 'George Lucas',
        year: 2005,
        duration: '140 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG-13 (Parents Strongly Cautioned)',
        resume: '¡Guerra! La República se desmorona bajo los ataques del despiadado Lord Sith, el Conde Dooku. Hay héroes en ambos bandos. El mal está por doquier. En una contundente jugada, el diabólico líder droide, el General Grievous, ha irrumpido en la capital de la República y ha secuestrado al Canciller Palpatine, líder del Senado Galáctico. Mientras el ejército droide separatista trata de huir de la capital sitiada con su valioso rehén, dos Caballeros Jedi lideran una misión desesperada para rescatar al Canciller cautivo....',
        // trailer: 'https://www.youtube.com/watch?v=kqkfjBKmWc4'
        trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1710442752/Star%20Wars/Trailers/Star_Wars__Episodio_III_-_La_Venganza_de_los_Sith_-_Trailer_HD_disponible_en_plataformas_digitales_1080p_25fps_H264-128kbit_AAC_xushx0.mp4'
    },
    {
        title: 'Star Wars: Episodio IV - Una nueva esperanza',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710707882/Star%20Wars/Movies/movies/starswars4_yly4wg.jpg',
        director: 'George Lucas',
        year: 1977,
        duration: '121 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG (Parental Guidance Suggested)',
        resume: 'Nos encontramos en un periodo de guerra civil. Las naves espaciales rebeldes, atacando desde una base oculta, han logrado su primera victoria contra el malvado Imperio Galáctico. Durante la batalla, los espías rebeldes han conseguido apoderarse de los planos secretos del arma total y definitiva del Imperio, la ESTRELLA DE LA MUERTE, una estación espacial acorazada, llevando en sí potencia suficiente para destruir a un planeta entero. Perseguida por los siniestros agentes del Imperio, la Princesa Leia vuela hacia su patria, a bordo de su nave espacial, llevando consigo los planos robados, quepueden salvar a su pueblo y devolver la libertad a la galaxia…',
        // trailer: 'https://www.youtube.com/watch?v=beAH5vea99k'
        trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1710442482/Star%20Wars/Trailers/Star_Wars__Los_%C3%9Altimos_Jedi_-_Nuevo_Tr%C3%A1iler_Oficial_en_espa%C3%B1ol_HD_798p_24fps_H264-128kbit_AAC_ndhuav.mp4'
    },
    {
        title: 'Star Wars: Episodio V - El imperio contraataca',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710707888/Star%20Wars/Movies/movies/starswars5_wwyksi.jpg',
        director: 'Irvin Kershner',
        year: 1980,
        duration: '124 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG (Parental Guidance Suggested)',
        resume: 'Son tiempos adversos para la rebelión. Aunque la Estrella de la Muerte ha sido destruida, las tropas imperiales han hecho salir a las fuerzas rebeldes de sus bases ocultas y las han perseguido a través de la galaxia. Tras escapar de la terrible Flota Imperial, un grupo de guerreros de la libertad, encabezados por Luke Skywalker, ha establecido una nueva base secreta en el remoto mundo helado de Hoth. El malvado Lord Darth Vader, obsesionado por encontrar al joven skywalker, ha eviado miles de sondas espaciales hacia las infinitas distancias del espacio....',
        // trailer: 'https://www.youtube.com/watch?v=xr3hPFJAHO4'
        trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1710442454/Star%20Wars/Trailers/Star_Wars__Episodio_V_-_El_Imperio_contraataca_-_Trailer_HD_disponible_en_formato_digital_1080p_25fps_H264-128kbit_AAC_uicd0n.mp4'
    },
    {
        title: 'Star Wars: Episodio VI - El retorno del Jedi',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710707894/Star%20Wars/Movies/movies/starswars6_bgrxdh.jpg',
        director: 'Richard Marquand',
        year: 1983,
        duration: '131 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG (Parental Guidance Suggested)',
        resume: 'Luke Skywalker ha regresado a Tatooine, su planeta de origen, para intentar rescatar a su amigo Han Solo de las garras del malvado Jabba, el Hutt. Pero Luke ignora que el IMPERIO GALÁCTICO ha comenzado en secreto la construcción de una nueva estación espacial armada, más poderosa que la temida Estrella de la Muerte. Una vez terminada, este arma suprema significará la aniquilación del pequeño grupo de rebeldes que lucha para restaurar la libertad en la galaxia....',
        // trailer: 'https://www.youtube.com/watch?v=xr3hPFJAHO4'
        trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711212416/Star%20Wars/Trailers/Star_Wars__Episodio_VI_-_El_Retorno_del_Jedi_-_Trailer_disponible_en_plataformas_digitales___HD_1080p_25fps_H264-128kbit_AAC_sldn4w.mp4'
    },
    {
        title: 'Star Wars: Episodio VII - El despertar de la fuerza',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710707851/Star%20Wars/Movies/movies/starswars7_kor9bi.jpg',
        director: 'J.J. Abrams',
        year: 2015,
        duration: '138 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG-13 (Parents Strongly Cautioned)',
        resume: 'Luke Skywalker ha desaparecido. En su ausencia, la siniestra PRIMERA ORDEN ha surgido de las cenizas del Imperio y no descansará hasta que Skywalker, el último Jedi, haya sido destruido. Con el apoyo de la REPÚBLICA, la General Leia Organa dirige una valiente RESISTENCIA. Desesperadamente busca a su hermano Luke con el fin de obtener su ayuda para restaurar la paz y la justicia en la galaxia. Leia ha enviado a su piloto más audaz en una misión secreta a Jakku, donde un viejo aliado ha descubierto una pista del paradero de Luke....',
        // trailer: 'https://www.youtube.com/watch?v=V8qlIZsutAQ'
        trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1710442762/Star%20Wars/Trailers/Star_Wars__El_Despertar_de_la_Fuerza_-_Tr%C3%A1iler_Espa%C3%B1a_Oficial___HD_800p_24fps_H264-128kbit_AAC_vnfhmh.mp4'
    },
    {
        title: 'Star Wars: Episodio VIII - Los últimos Jedi',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710707845/Star%20Wars/Movies/movies/starswars8_whzaxx.jpg',
        director: 'Rian Johnson',
        year: 2017,
        duration: '152 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG-13 (Parents Strongly Cautioned)',
        resume: 'La PRIMERA ORDEN impera. Luego de diezmar a la pacífica República, el Líder Supremo Snoke ahora envía a sus despiadadas legiones a asumir el control militar de la galaxia. Solo la General Leia Organa y su grupo de combatientes de la RESISTENCIA se oponen a la creciente tiranía, convencidos de que el Maestro Jedi Luke Skywalker regresará y restaurará la chispa de esperanza en la lucha. Pero la Resistencia ha sido expuesta. Mientras la Primera Orden se dirige  hacia la base rebelde, los valientes héroes organizan un desesperado escape....',
        // trailer: 'https://www.youtube.com/watch?v=anOJjqQb8x0'
        trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1710442482/Star%20Wars/Trailers/Star_Wars__Los_%C3%9Altimos_Jedi_-_Nuevo_Tr%C3%A1iler_Oficial_en_espa%C3%B1ol_HD_798p_24fps_H264-128kbit_AAC_ndhuav.mp4'
    },
    {
        title: 'Star Wars: Episodio IX - El ascenso de Skywalker',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710707857/Star%20Wars/Movies/movies/starswars9_nin65p.jpg',
        director: 'J.J. Abrams',
        year: 2019,
        duration: '142 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG-13 (Parents Strongly Cautioned)',
        resume: '¡Los muertos hablan! La galaxia ha escuchado una transmisión misteriosa, una amenaza de VENGANZA en la siniestra voz del fallecido EMPERADOR PALPATINE. LA GENERAL LEIA ORGANA envía agentes secretos a obtener información, mientras que REY, la última esperanza de los Jedi, entrena para luchar en contra de la diabólica PRIMERA ORDEN. Mientras tanto, el Líder Supremo KYLO REN busca furiosamente al Emperador fantasma, dispuesto a destruir cualquier amenaza a su poder....',
        // trailer: 'https://www.youtube.com/watch?v=Izme__ZsURY'
        trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1710442772/Star%20Wars/Trailers/Star_Wars__El_Ascenso_de_Skywalker___Nuevo_Tr%C3%A1iler_oficial_en_espa%C3%B1ol___HD_800p_24fps_H264-128kbit_AAC_hoioli.mp4'
    },
];

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allMoviesStarWars = await MovieStarWars.find();
        if (allMoviesStarWars.length > 0) {
            await MovieStarWars.collection.drop();
            console.log('Películas borradas');
        }
    })
    .catch((err) => {
        console.log('error borrando las películas', err);
    })
    .then(async() => {
        const moviesStarWarsMap = arrayMoviesStarWars.map((movie) => new MovieStarWars(movie));
        await MovieStarWars.insertMany(moviesStarWarsMap);
        console.log('películas insertadas');
    })
    .catch((err) => {
        console.log('error insertando las películas', err);
    })
    .finally(() => mongoose.disconnect());