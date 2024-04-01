const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const VideoGameMissionImposible = require('../../api/models/models.MissionImposible/videoGames.MissionImposible.model.js');


const arrayVideoGamesMissionImposible = [
    {
        title: "Mission: Impossible - Operation Surma",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710835999/misionImposible/VideoGames/mission-impossible-operation-surma-201433115369_1_fnxrb8.jpg",
        platform: "PlayStation 2, GameCube, Game Boy Advance y Xbox",
        year: "2003",
        studio: "Paradigm Entertainment Ver y modificar los datos en Wikidata",
        clasification: "PEGI12",
        resume: 'Mission: Impossible - Operation Surma es un videojuego de acción y sigilo desarrollado por Paradigm Entertainment y publicado por Atari. Lanzado en 2003, el juego está disponible para PlayStation 2, Xbox, y GameCube, con una versión para Game Boy Advance que presenta un enfoque y jugabilidad diferentes. El juego se inspira en la famosa franquicia cinematográfica Mission: Impossible, llevando a los jugadores a una aventura llena de espionaje, intriga y acción encubierta, característica de la serie. Un grupo terrorista conocido como Surma posee un moderno y peligroso virus conocido como "Gusano de hielo". Este virus es capaz de burlar hasta los más avanzados sistemas de seguridad y permitir robos a gran escala como secretos militares, investigaciones de armamento occidentales, etc. El agente Ethan Hunt y la agencia FMI (Fuerza de Misión: Impossible) habían planeado minuciosamente una operación que fracasa víctima de un sabotaje. Por este motivo, deciden tomar cartas en el asunto. En seguida se dan cuenta de que la base de datos de la FMI ha sido pirateada, y tanto Ethan Hunt como el resto de la agencia comienzan una cacería por atrapar al enemigo tiene acceso a todos sus archivos más secretos, descubrir su identidad y recuperar el "Gusano de hielo".',
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711266236/misionImposible/VideoGames/gameplay/Mission_Impossible__Operation_Surma_..._PS2_Gameplay_720p_25fps_H264-192kbit_AAC_oaszkd.mp4",
    },
    {
        title: "Mission: Impossible",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710836000/misionImposible/VideoGames/Mission_Impossible_NTSC-U1998_xla8ra.webp",
        platform: " Nintendo 64",
        year: "1998",
        studio: "Infogames",
        clasification: "PEGI12",
        resume: 'Mission: Impossible es un videojuego de acción y aventuras desarrollado por Infogrames y basado libremente en la película de 1996 del mismo nombre. Fue lanzado originalmente para la consola de videojuegos Nintendo 64 en 1998. En el juego, el jugador asume el papel de Ethan Hunt, un agente de Impossible Missions Force (IMF) que debe limpiar su nombre después de que un topo se haya infiltrado en el equipo de IMF. El juego cuenta con 20 niveles en los que el jugador debe completar varios objetivos de la misión con el uso de numerosos dispositivos de alta tecnología. Jim Phelps, líder de Impossible Missions Force (IMF), recibe un mensaje sobre un complot terrorista en una base de submarinos de la Segunda Guerra Mundial abandonada en el paralelo 70 norte, donde planean enviar misiles a un país rival. Phelps despliega a los agentes del IMF Ethan Hunt, John Clutter y Andrew Dowey para detener los planes de los terroristas infiltrándose en la base y destruyendo el submarino que sostiene los misiles. Mientras esto sucede, Alexander Golystine, un trabajador de la Embajada de Rusia en Praga, secuestra a la agente del IMF Candice Parker y roba la mitad de la lista de la CIA, que contiene los nombres reales y falsos de todos los agentes del IMF, aunque es inútil sin la otra mitad, la embajada posee una poderosa supercomputadora que puede ser capaz de descifrar el código para abrir el documento. Cuando el agente del IMF Robert Barnes desaparece después de un intento de misión de rescate, Phelps envía a Hunt para encontrar y reunir la lista, rescatar a Candice Parker y descubrir el destino de Barnes. Después de atravesar un almacén subterráneo y la sede de la KGB, Hunt encuentra a Barnes muerto en una oficina y salva a Parker. Juntos, recuperan la lista y escapan usando la cubierta de un fuego falso.',
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711265994/misionImposible/VideoGames/gameplay/Impossible_Mission_-_Nintendo_DS_720p_60fps_VP9-160kbit_Opus_p7z48o.webm",
    },
    {
        title: "Mission: Impossible",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710836120/misionImposible/VideoGames/MissionImpossibleNESBoxart1990_zdskkv.jpg",
        platform: " Nintendo Entertainment System",
        year: "1990",
        studio: "Konami/Ultra Games",
        clasification: "PEGI12",
        resume: 'El objetivo del equipo de la IMF es resolver un caso de secuestro, ya que un grupo terrorista conocido como los Siniestros 7 ha secuestrado tanto a un científico conocido como a Shannon Reed, otra operativa de la IMF. La persecución tendrá lugar a través de los canales de Venecia hasta los Alpes suizos, y el equipo deberá infiltrarse en una serie de instalaciones hostiles de varios pisos en busca de los rehenes.El juego se juega desde una perspectiva aérea. El jugador controla a tres agentes de la IMF de la serie de televisión: Max, Grant y Nicholas, cada uno de los cuales tiene habilidades diferentes necesarias para completar la misión. El personaje utilizado puede cambiarse en cualquier momento durante el juego. En la calle al comienzo del juego, los civiles no pueden ser dañados, y tales actividades seguramente llevarán la misión a un final muy embarazoso, ya que las autoridades locales procederán a arrestar al atacante. Mientras se infiltra en el escondite del enemigo, se recomienda discreción, ya que la detección por parte del sistema de vigilancia atraerá a los guardias de seguridad.',
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711267460/misionImposible/VideoGames/gameplay/Mission__Impossible_-_NES_Gameplay_240p_30fps_H264-96kbit_AAC_tav77y.mp4",
    },
    {
        title: "Impossible Mission II",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710836268/misionImposible/VideoGames/MV5BNzZjZDVkOWUtOGI2MC00ZGVlLTk3ZTktOTE4NmU2ZDU5NGU2XkEyXkFqcGdeQXVyMTEwMTQ0Njk3._V1_FMjpg_UX1000__tohoeq.jpg",
        platform: "	Amiga, Amstrad CPC, Apple II, Apple IIGS, Atari ST, Commodore 64, DOS, NES, ZX Spectrum",
        year: "1998",
        studio: "Novotrade",
        clasification: "PEGI12",
        resume: 'El juego tiene lugar en la fortaleza de Elvin, que consta de nueve torres. Cada una de las ocho torres exteriores tiene un tema específico, como computadoras, automóviles, muebles, etc. Cada torre consta de varias habitaciones conectadas por dos corredores verticales con ascensores y dos corredores horizontales que conducen a otras torres. Los corredores que conducen entre diferentes torres están bloqueados y solo pueden desbloquearse resolviendo un rompecabezas numérico. Cada torre contiene los números del cero al nueve en tres colores diferentes. La interfaz de la computadora permite al jugador probar varias combinaciones numéricas para ver si son correctas. El ascensor a la torre central se desbloquea encontrando una contraseña, que está codificada en una pieza musical. Cada una de las ocho torres exteriores tiene una pieza musical bloqueada dentro de una caja fuerte. La contraseña final consta de seis piezas musicales distintas. Dos de las piezas en las torres son duplicados. El jugador debe rebobinar la cinta para que la siguiente pieza musical grabe sobre el duplicado, borrándolo. La principal adición respecto al juego anterior es la incorporación de nuevos tipos de robots enemigos y dispositivos para que el jugador los utilice.',
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711266185/misionImposible/VideoGames/gameplay/Impossible_Mission_2_gameplay_PC_Game_1988_480p_30fps_H264-128kbit_AAC_weniwm.mp4",
    },
    {
        title: "Impossible Mission DS",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710836385/misionImposible/VideoGames/maxresdefault_jdttxq.jpg",
        platform: "Commodore 64,985: Electron, BBC, Spectrum,Amstrad CPC,Atari 7800,Master System",
        year: "1984",
        studio: "Epix",
        clasification: "PEGI12",
        resume: 'Impossible Mission es un videojuego originalmente escrito para el Commodore 64 por Dennis Caswell y publicado por Epyx en 1984. El juego presenta una variedad de mecánicas de juego de plataformas y aventuras, e incluye habla digitalizada. Impossible Mission, que sitúa al jugador en el papel de un agente secreto que se infiltra en una fortaleza enemiga, es ampliamente considerado uno de los mejores juegos para varias plataformas. Desde 1985 hasta 1988, el juego se lanzó para el Apple II, Atari 7800, ZX Spectrum, Acorn Electron, BBC Micro, Amstrad CPC y Master System.El original de Commodore 64. El jugador asume el papel de un agente secreto que debe detener a un genio malvado, el Profesor Elvin Atombender, quien se cree que está manipulando las computadoras de seguridad nacional. El jugador compite contra el reloj para volver a montar y descifrar la contraseña de la sala de control de Atombender mientras evita robots mortales. Las piezas de la contraseña se encuentran buscando muebles en las habitaciones. Al buscar, el jugador también puede restablecer todas las plataformas móviles y congelar a los robots enemigos por un tiempo limitado. El juego también presenta recompensas similares por completar rompecabezas adicionales. Los enemigos de Impossible Mission incluyen dos tipos de enemigos. Los primeros son los robots. Estos tienen un cuerpo principal cilíndrico. Sus cuerpos están electrificados, y algunos pueden usar un rayo de muerte de corto alcance. Algunos son estacionarios; otros se mueven en patrones, y otros cazan específicamente al jugador. Algunos tienen que ver realmente al jugador, y otros saben dónde está el jugador en todo momento. El segundo enemigo es una bola electrificada y flotante. La mayoría de estos persiguen al jugador. El jugador tiene seis horas de tiempo de juego para recoger 36 piezas de rompecabezas. Cada vez que el jugador muere, se restan 10 minutos del tiempo total. Las piezas del rompecabezas se ensamblan en grupos de cuatro. Las piezas del rompecabezas se superponen de modo que se pueden ensamblar tres piezas antes de que el jugador se dé cuenta de que debe comenzar de nuevo. Las piezas pueden estar en la orientación incorrecta, y el jugador puede tener que usar imágenes especulares horizontales o verticales. Además, las piezas del rompecabezas se aleatorizan en cada juego. Un rompecabezas completado forma una contraseña de nueve letras que permite al jugador llegar al Profesor Atombender.',
        trailer: "https://www.youtube.com/watch?v=ZMDthmydL1c",
    },
    {
        title: "Impossible mission PS",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710836538/misionImposible/VideoGames/Impossible_Mission_EUR_MULTI5_PSP-Coverart_jih0wm.jpg",
        platform: "PSPS,PSPVITA",
        year: "2007",
        studio: "Epix",
        clasification: "PEGI12",
        resume: 'Impossible Mission es un videojuego de acción/plataformas en 2D publicado por Play It y lanzado el 31 de agosto de 2007 para la PlayStation Portable.',
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711266084/misionImposible/VideoGames/gameplay/Impossible_Mission_PSP_Gameplay_1080p_30fps_H264-128kbit_AAC_em2ux3.mp4",
    },
    {
        title: "Mission: Impossible",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710836739/misionImposible/VideoGames/Mission_Impossible_1991_video_game_cover_uf2lea.jpg",
        trailer: "",
        platform: "DOS",
        year: "1991",
        studio: "Distinctive Software",
        clasification: "PEGI12",
        resume: 'Misión: Imposible es un videojuego de aventuras de 1991 desarrollado por Distinctive Software y publicado por Konami. Misión: Imposible es un juego en el que el jugador reúne un equipo de cuatro agentes con diferentes habilidades y capacidades. Charles Ardai revisó el juego para Computer Gaming World, y escribió que: "Un jugador que busque un buen thriller o juego de espionaje haría mejor en obtener Countdown o Covert Action en su lugar. Un jugador que busque una buena aventura de Misión: Imposible es dirigido, con pesar, a las listas nocturnas del actual TV Guide".',
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711266183/misionImposible/VideoGames/gameplay/Mission__Impossible_gameplay_PC_Game_1991_480p_30fps_H264-128kbit_AAC_laiakn.mp4",
    },
    {
        title: "Mission: Impossible",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711265762/misionImposible/VideoGames/Mission_Impossible_-_GBC_Longplay_Walkthrough_50_720p60_BQ_duwe4n.jpg",
        platform: "GameBoy Color",
        year: "2000",
        studio: "Rebellion Developments",
        clasification: "PEGI12",
        resume: 'Misión: Imposible es un videojuego de aventuras desarrollado por Rebellion Developments basado en la serie de películas Misión: Imposible. Fue lanzado para el Game Boy Color en el año 2000. Misión: Imposible es un juego de aventuras en el que el jugador debe controlar al personaje de la serie de películas, Ethan Hunt, a través de diez niveles. El juego también contiene una serie de programas de utilidad que incluyen una calculadora, una agenda de direcciones y un cuaderno que puede imprimir entradas cuando se conecta a una Game Boy Printer. Las utilidades también incluyen un transmisor de mensajes y un control remoto universal que utilizan el puerto infrarrojo del sistema.Misión: Imposible recibió críticas mixtas según el agregador de reseñas de videojuegos GameRankings. Los críticos lo compararon negativamente con Metal Gear: Ghost Babel, pero elogiaron las características adicionales del juego. La revista N64 lo describió como un juego "dolorosamente promedio", afirmando que los oponentes deambulan en patrones establecidos y que no son lo suficientemente inteligentes como para notar al jugador.',
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711266188/misionImposible/VideoGames/gameplay/Mission_Impossible_GBC_No_alarms___No_kills_360p_30fps_H264-128kbit_AAC_nwxrl5.mp4",
    },
]
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allVideoGamesMissionImposible = await VideoGameMissionImposible.find();
        if (allVideoGamesMissionImposible.length > 0) {
            await VideoGameMissionImposible.collection.drop();
            console.log('Videojuegos borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Videojuegos', err);
    })
    .then(async() => {
        const VideoGamesMissionImposibleMap = arrayVideoGamesMissionImposible.map((VideoGame) => new VideoGameMissionImposible(VideoGame));
        await VideoGameMissionImposible.insertMany(VideoGamesMissionImposibleMap);
        console.log('Videojuegos insertados');
    })
    .catch((err) => {
        console.log('error insertando los Videojuegos', err);
    })
    .finally(() => mongoose.disconnect());