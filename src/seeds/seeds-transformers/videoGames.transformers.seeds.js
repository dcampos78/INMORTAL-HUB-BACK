const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const VideoGametransformers = require('../../api/models/models.Transformers/videoGames.Transformers.model');


const arrayVideoGamestransformers = [{
        title: "Transformers: La Guerra por Cybertron",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711391938/segundo%20spring/transformers/videogames/Transformers_La_Guerra_por_Cybertron_idjikq.jpg",
        platform: "PlayStation, Xbox, PC",
        year: "2010",
        studio: "High Moon Studios",
        clasification: "T (Adolescentes)",
        resume: "Transformers: War for Cybertron es un videojuego de acción y shooter en tercera persona basado en la franquicia Transformers, desarrollado por High Moon Studios y publicado por Activision. El juego salió a la venta el 22 de junio de 2010 para Microsoft Windows, PlayStation 3, Wii y Xbox 360. Dos versiones portátiles del juego fueron lanzadas para Nintendo DS, con una presentando la campaña de los Autobots y la otra la de los Decepticons. Ambientado en Cybertron, el planeta natal de los Transformers, antes de su llegada a la Tierra, el juego muestra la mortal guerra civil entre Autobots y Decepticons. Los jugadores pueden elegir cualquiera de las facciones, ya que cada una tiene su propia campaña separada (aunque la Decepticon es cronológicamente la primera). La trama del juego gira en torno a una sustancia conocida como Dark Energon, una versión más peligrosa y destructiva del Energon, que alimenta a los Transformers. Mientras el malvado líder Decepticon Megatron busca esta sustancia para sí mismo, creyendo que le permitirá devolver el planeta a su edad de oro, los Autobots, liderados por Optimus Prime, intentan detenerlo, sabiendo que en cambio condenaría a su mundo natal.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711393526/segundo%20spring/transformers/trailers%20videogames/Transformers__War_for_Cybertron_-_Full_Trailer_720p_30fps_H264-192kbit_AAC_qgk8ti.mp4",
    },
    {
        title: "Transformers: La Caída de Cybertron",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711391934/segundo%20spring/transformers/videogames/Transformers_La_Ca%C3%ADda_de_Cybertron_mayjhf.jpg",
        platform: "PlayStation, Xbox, PC",
        year: "2012",
        studio: "High Moon Studios",
        clasification: "T (Adolescentes)",
        resume: "Se puede jugar con los Autobots, cuyo objetivo es proteger a Cybertron de los Decepticons.[cita requerida] Si se juega con los Decepticons, se tendrá que eliminar a los Autobots. Sin embargo, cumplen una historia en común en la que ambas campañas se mezclan formando lo que parece ser la batalla final que tienen ambos bandos por Cybertron la cual desafortunadamente es perdida. Todo comienza con Optimus viendo que el ejército Decepticon era imparable asesinando y secuestrando Autobots. Después del secuestro de Grimlock, Optimus decide rescatarlo, pero no lo encuentra. Entonces, ve que con la cabeza de Trypticon, los Decepticons estaban atacando el Arca, la nave Autobot en la que huirían a la tierra. Optimus, sin más opciones, se enfrenta a varios enemigos hasta llegar a Metroplex y reactivarlo. Este destruye al resto de los Decepticons y se despide de Optimus. Cuando Metroplex es derribado, Optimus y un grupo de Autobots liderados por Jazz, el primer teniente de Optimus, deciden seguir con la búsqueda de Grimlock, pero cuando tuvieron que atravesar una puerta, esta explotó y de allí salen los Decepticons, Brawl, Onslaught y Starscream, quien comandaba la misión y era el primer teniente de Megatron a quien odiaba. Los Decepticons capturan a Optimus y se lo entregan a Megatron quien cuando estaba a punto de matar a Prime, aparece Metroplex quien no solo resultó estar vivo, sino que destruye la base Decepticon, libera a Optimus, y mata a Megatron. Starscream se convierte en el nuevo líder Decepticon. Al mando de Starscream, los Decepticons inician varias misiones las cuales fallan para matar Autobots. Soundwave, está harto de Starscream y arrestó por su deslealtad a los Combaticons, decide revivir a Megatron y fácilmente lo renueva y este vuelve al mando, solo que echando a Starscream de los Decepticons. Este vuelve para contraatacar, pero es capturado. Allí se encuentra con Grimlock, se libera y noquea a Starscream dejándolo en shock y raramente aparece en el resto del juego. Grimlock reúne a sus Dinobots y juntos vuelven con Optimus. Los Autobots estaban casi listos para irse a bordo del Arca, solo que, esta no tenía energía, entonces, Metroplex ofrece la suya y muere. Cuando los Autobots parten de Cybertron su nave es abordada por los Decepticons. Bumblebee, después de algunos llegó con Optimus el cual mantenía un combate a muerte con Megatron. Este noquea a Bumblebee en un intento por salvar a Optimus ya que estaba a de morir. Después de una lucha a muerte entre Optimus y Megatron, la nave Autobot se sale de control al igual que la Decepticon (construida con los restos de Trypticon) y se van todos en un estado éxtasis a la Tierra cayendo como meteoritos.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711393782/segundo%20spring/transformers/trailers%20videogames/Tr%C3%A1iler_de_Transformers_La_ca%C3%ADda_de_Cybertron_720p_60fps_H264-128kbit_AAC_g9pxhw.mp4",
    },
    {
        title: "Transformers: Devastation",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711391951/segundo%20spring/transformers/videogames/Transformers_Devastation_dclrme.jpg",
        platform: "PlayStation, Xbox, PC",
        year: "2015",
        studio: "PlatinumGames",
        clasification: "T (Adolescentes)",
        resume: "Transformers: Devastation es un juego de acción similar a otros títulos de PlatinumGames (por ejemplo, Bayonetta). Los jugadores controlan a uno de los cinco Autobots: Optimus Prime, Bumblebee, Sideswipe, Wheeljack y Grimlock, mientras luchan contra los Decepticons y los Insecticons que se interponen en su camino. Cada uno de los Autobots es capaz de utilizar una variedad de ataques cuerpo a cuerpo y armas a distancia, y son capaces de transformarse en modo vehículo en cualquier momento. Al igual que en Bayonetta, al esquivar con éxito los ataques se activa el Enfoque, que ralentiza el tiempo alrededor del jugador, permitiéndole contraatacar a sus oponentes. Cada Autobot también tiene una habilidad especial única y un poderoso ataque Overdrive que puede realizarse con suficiente energía. El juego consta de siete capítulos, cada uno de los cuales se divide en varias minas, incluidas algunas misiones secundarias opcionales. Los jugadores se clasifican en cada misión en función de su rendimiento general. Los jugadores pueden ganar créditos y nuevas armas derrotando enemigos, destruyendo ciertos objetos y resolviendo puzles ocultos en cada capítulo. Los créditos se pueden usar para comprar nuevos objetos, movimientos y armas, forjar T.E.C.H. para aumentar las estadísticas pasivas, sintetizar armas para hacerlas más fuertes o aumentar las estadísticas de cada Autobot. También se pueden encontrar objetos coleccionables especiales en cada capítulo que desbloquean ilustraciones de personajes y conceptos. El juego cuenta con varios niveles de dificultad, que se desbloquean al superar el juego varias veces. Un modo Desafío adicional ofrece 50 misiones independientes.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711394094/segundo%20spring/transformers/trailers%20videogames/TRANSFORMERS__Devastation_-_Launch_Trailer___PS4_1080p_60fps_H264-128kbit_AAC_tck51f.mp4",
    },
    {
        title: "Transformers: El Juego",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711391954/segundo%20spring/transformers/videogames/Transformers_El_Juego_rhbskt.jpg",
        platform: "PlayStation, Xbox, PC",
        year: "2007",
        studio: "Traveller's Tales",
        clasification: "T (Adolescentes)",
        resume: "Transformers: The Game es un videojuego de acción y aventura basado en la película de imagen real de 2007 Transformers. El juego sigue de cerca la historia de la película, que presenta la llegada a la Tierra de los Autobots y Decepticons después de una guerra entre ellos que ha devastado su planeta natal de Cybertron. Mientras intentan ocultar su existencia a la humanidad, ambas facciones buscan un poderoso artefacto llamado AllSpark, que podría usarse para restaurar Cybertron a su antigua gloria, pero también para esclavizar a la población de la Tierra. El juego presenta un formato de campaña dividida, donde los jugadores pueden elegir unirse a los Autobots o a los Decepticons, y completan varias misiones para la facción que elijan. El juego fue lanzado en Norteamérica en junio de 2007 recibiendo críticas mixtas a positivas. Las versiones de consolas domésticas y PC fueron desarrolladas por Traveller's Tales para PlayStation 2, Xbox 360, Wii, PlayStation 3 y PC. Una versión diferente de PlayStation Portable fue desarrollada por Savage Entertainment. Transformers Autobots y Transformers Decepticons son las versiones de Nintendo DS de Transfomers: The Game. Vicarious Visions, quien se encargó de llevar la adaptación a la Nintendo DS, optó por adaptar la versión de DS en dos juegos separados. Autobots siguiente la perspectiva de los héroes, mientras que Decepticons sigue la de los villanos. A diferencia de los juegos con SKUs múltiples como Pokémon que cuentan con sólo pequeñas diferencias entre las versiones, son dos juegos distintos, comparten algunas similitudes básicas, pero con personajes únicos, misiones y localizaciones.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711394988/segundo%20spring/transformers/trailers%20videogames/Transformers_The_Game_-_Trailer_1_720p_30fps_H264-192kbit_AAC_oapvse.mp4",
    },
    {
        title: "Transformers: La Venganza de los Caídos - El Videojuego",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711391941/segundo%20spring/transformers/videogames/Transformers_La_Venganza_de_los_Ca%C3%ADdos_-_El_Videojuego_sohyof.jpg",
        platform: "PlayStation, Xbox, PC",
        year: "2009",
        studio: "Luxoflux",
        clasification: "T (Adolescentes)",
        resume: "Transformers: Revenge of the Fallen es un videojuego de disparos en tercera persona de 2009 basado en la película del mismo nombre. Es la secuela de Transformers: The Game, y el segundo videojuego basado en la serie de películas de Transformers. Las versiones del juego para PlayStation 3 y Xbox 360 fueron desarrolladas por Luxoflux, y portadas a la PC por Beenox Studios. Las versiones de PlayStation 2 y Wii fueron desarrolladas por Krome Studios, y la versión para PlayStation Portable fue desarrollada por Savage Entertainment. Todas las versiones del juego fueron publicadas por Activision y lanzadas el 23 de junio de 2009, un día antes del estreno de la película en los Estados Unidos. Australia recibió el juego un día después, y Europa el 26 de junio. Todas las versiones del juego siguen vagamente la trama de la película en la que se basan. Tras la muerte de su líder, Megatron, los Decepticons se han escondido en la Tierra, mientras que los Autobots han formado una alianza con la humanidad para cazarlos. Los Decepticons están siendo ayudados en secreto por un nuevo enemigo, The Fallen, quien busca activar una máquina antigua que les proporcionaría suficiente Energon para derrotar a los Autobots, destruyendo el Sol y toda la vida en la Tierra en el proceso. Las versiones de PC, PS3 y Xbox 360 cuentan con un formato de campaña dividida, pudiendo elegir entre una campaña Autobot y una Decepticon. Las versiones de PS2 y Wii combinan las historias Autobot y Decepticon en una campaña que alterna entre facciones. Transformers Revenge of the Fallen: Autobots y Transformers Revenge of the Fallen: Decepticons son las versiones para Nintendo DS del juego, desarrolladas por Vicarious Visions. Similar a Transformers: Autobots y Transformers: Decepticons, la versión de DS se divide en dos juegos separados. Autobots sigue la perspectiva de los héroes, mientras que Decepticons sigue la perspectiva de los villanos.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711395066/segundo%20spring/transformers/trailers%20videogames/Transformers_La_Venganza_de_los_Caidos_el_videojuego_Trailer_214p_30fps_H264-96kbit_AAC_pnlr4g.mp4",
    },
    {
        title: "Transformers: El Lado Oscuro de la Luna - El Videojuego",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711391958/segundo%20spring/transformers/videogames/Transformers_El_Lado_Oscuro_de_la_Luna_-_El_Videojuego_hpztve.jpg",
        platform: "PlayStation, Xbox, PC",
        year: "2011",
        studio: "Behaviour Interactive",
        clasification: "T (Adolescentes)",
        resume: "Transformers: Dark of the Moon (comercializado como Transformers: Dark of the Moon - Stealth Force Edition para productos de Nintendo) es un videojuego de acción-aventura y disparos en tercera persona basado en la película del mismo nombre. Fue lanzado el 14 de junio de 2011 en Norteamérica. Es la secuela de Transformers: La venganza de los caídos, y la tercera parte de la adaptación a videojuegos de la saga Transformers. A diferencia de los dos primeros juegos, Dark of the Moon sigue una historia original, ambientada antes de los eventos de la película en la que se basa, y presenta solo una campaña, que alterna entre los Autobots y los Decepticons. Un spin-off, Transformers: Rise of the Dark Spark, fue lanzado en junio de 2014. Transformers: Dark of the Moon fue revelado por primera vez el 12 de febrero de 2011, junto al lanzamiento del tráiler del juego. Todas las versiones del juego fueron publicadas por Activision en junio de 2011 y recibieron críticas mixtas. Las versiones de PlayStation 3 y Xbox 360 del juego fueron desarrolladas por High Moon Studios, quien desarrolló previamente Transformers: War for Cybertron, mientras que las versiones de Wii, Nintendo DS y Nintendo 3DS fueron desarrollados por Behaviour Interactive. Electronic Arts también lanzó encarnaciones móviles del juego para Symbian, iOS y BlackBerry. Las versiones para DS del juego, conocidas como Transformers Dark of the Moon: Autobots y Transformers Dark of the Moon: Decepticons son, al igual que sus predecesores, dos juegos separados que siguen la perspectiva de cada facción.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711395275/segundo%20spring/transformers/trailers%20videogames/TRANSFORMERS_DARK_OF_THE_MOON_THE_GAME_-_TRAILER_480p_30fps_H264-128kbit_AAC_re2xme.mp4",
    }
]

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allVideoGamestransformers = await VideoGametransformers.find();
        if (allVideoGamestransformers.length > 0) {
            await VideoGametransformers.collection.drop();
            console.log('Videojuegos borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Videojuegos', err);
    })
    .then(async() => {
        const VideoGamestransformersMap = arrayVideoGamestransformers.map((VideoGame) => new VideoGametransformers(VideoGame));
        await VideoGametransformers.insertMany(VideoGamestransformersMap);
        console.log('Videojuegos insertados');
    })
    .catch((err) => {
        console.log('error insertando los Videojuegos', err);
    })
    .finally(() => mongoose.disconnect());