const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Terminator = require('../../api/models/models.Terminator/videoGames.Terminator.model.js');


const arrayVideoGamesTerminator = [
    {
        title: "The Terminator: Dawn of Fate",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711303029/segundo%20spring/terminator/videogame/The_Terminator-_Dawn_of_Fate_hzfhnn.jpg",
        platform: "	PlayStation 2, Xbox",
        year: "2002",
        studio: "InfoGrames",
        clasification: "PG12",
        resume: '"Terminator: Dawn of Fate" es una precuela de las dos primeras películas. Está ambientada en el futuro durante una guerra post-apocalíptica entre humanos y máquinas. John Connor lidera la resistencia humana contra las máquinas Terminator, que son dirigidas por Skynet. El juego presenta tres miembros jugables de la resistencia: Kyle Reese, Catherine Luna y Justin Perry. El juego termina con Kyle Reese siendo enviado al pasado para evitar que un Terminator mate a la madre de John, Sarah Connor, antes de que él nazca. El final precede a los eventos representados en la película de 1984 "The Terminator"."Terminator: Dawn of Fate" es un juego de disparos en tercera persona. Los ángulos de la cámara están preestablecidos en posiciones fijas y cambian con cada nueva área que el jugador ingresa. El jugador también puede cambiar a una perspectiva en primera persona para apuntar más fácilmente, pero no puede moverse mientras está en este modo. El juego cuenta con 10 niveles, cada uno asignando al jugador diversos objetivos de misión. El jugador puede usar una variedad de armas, incluyendo pistolas, rifles de asalto, lanzacohetes, bombas de cilindro, explosivos C4 y un bastón de plasma. También hay torretas de armas ubicadas en todo el juego. El jugador también puede participar en combate cuerpo a cuerpo, y se puede activar un impulso de adrenalina para aumentar la efectividad de tales ataques.',
        trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711303511/segundo%20spring/terminator/videogame/gameplay/The_Terminator__Dawn_of_Fate_-_2002_Trailers_High_Quality_1080p_60fps_H264-128kbit_AAC_cuucff.mp4',
    },
    {
        title: "Terminator: Resistance",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710598987/segundo%20spring/terminator/videogame/terminator_resistance_fzrqgi.webp",
        platform: "PS5",
        year: "2021",
        studio: "Reef Entertaiment",
        clasification: "PG12",
        resume: 'Vive los acontecimientos que conducen a la batalla final por el destino de la humanidad en la guerra contra las máquinas. Terminator: Resistance es un shooter en primera persona ambientado en la "guerra futura" que solo se vislumbró brevemente en las fantásticas películas, ‘The Terminator’ y ‘Terminator 2: el juicio final’.También dispones de varias mejoras para el sistema PlayStation®5, incluyendo más velocidad, menos tiempos de carga y las nuevas funciones del mando DualSense.¡Líate a tiros o infíltrate y atraviesa las defensas de Skynet’s!¡Interactúa con un variopinto grupo de supervivientes y altera sus destinos!En el nuevo modo Infiltrado, conviértete en el icónico infiltrado de la T-800 series y aniquila las fuerzas de la resistencia.',
        trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711303470/segundo%20spring/terminator/videogame/gameplay/TERMINATOR_RESISTENCE_-_AN%C3%81LISIS_REVIEW_EN_PS4_720p_30fps_H264-192kbit_AAC_wttkmm.mp4',
    },
    {
        title: "Terminator III: The redeption",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711303416/segundo%20spring/terminator/videogame/82465--terminator-3-the-redemption_dsumo8.png",
        platform: "PlayStation 2, Xbox, GameCube",
        year: "2004",
        studio: "Atari",
        clasification: "PG12",
        resume: '"Terminator 3: The Redemption" presenta varios estilos de juego presentados desde una perspectiva en tercera persona a lo largo de 14 niveles, los cuales se basan parcialmente en la película "Terminator 3: Rise of the Machines", mientras expanden la historia previa de la película. El jugador toma el papel de un Terminator T-850. Varios niveles se juegan a pie mientras el jugador lucha contra otros Terminators. El jugador puede utilizar varias armas contra los enemigos, y también puede enfrentarlos en combate cuerpo a cuerpo. Además, el jugador puede utilizar señales de tráfico desprendidas como armas. Además, el jugador puede utilizar el modo de escaneo rojo del T-850, durante el cual puede infligir un mayor daño a los enemigos. Puntos, conocidos como "Terabytes", están dispersos por todo el juego y se pueden recolectar para mejorar el modo de escaneo.Además, el juego presenta niveles de conducción que incluyen una variedad de vehículos diferentes, incluyendo un coche fúnebre, una camioneta y un coche de policía. También se incluyen niveles de disparos en rieles en los que el jugador está en un vehículo en movimiento y debe disparar a los Terminators que se aproximan. Como en la película, el T-X es el enemigo principal encontrado a lo largo del juego. Se incluye un modo cooperativo para dos jugadores como un juego de disparos en rieles en el que los jugadores deben defenderse contra los Terminators que se aproximan.',
        trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711303445/segundo%20spring/terminator/videogame/gameplay/Terminator_3__The_Redemption_PlayStation_2_Trailer_-_480p_30fps_H264-128kbit_AAC_ll8umt.mp4',
    },
    {
        title: "Terminator II: The judgment Day",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711303405/segundo%20spring/terminator/videogame/Terminator_2_Game_Boy_cover_art_pd5ty5.jpg",
        platform: "	Arcade, Amiga, MS-DOS, Game Boy, Game Gear, Genesis, Master System, Super NES",
        year: "1992",
        studio: "Midway",
        clasification: "PG12",
        resume: ' La historia del juego sigue la línea de la película Terminator 2: Judgment Day: salvar al líder de la Resistencia Humana, John Connor, y a su madre Sarah del T-1000, un Terminator prototipo avanzado decidido a matarlos a ambos.El jugador asume el papel de un ciborg Terminator T-800, ya capturado y reprogramado por la resistencia humana, y lucha junto a ellos contra Skynet en el año 2029. Eventualmente, el T-800 y John Connor penetran en la sede de Skynet y destruyen la CPU del sistema. Descubriendo el equipo de desplazamiento temporal, el T-800 es enviado de vuelta en el tiempo a la infancia de John, con la misión de protegerlo del T-1000 que Skynet ya ha enviado. En el pasado, John, Sarah y el T-800 lanzan un ataque contra Cyberdyne Systems para prevenir el desarrollo y la creación de Skynet. El T-1000 alcanza al grupo y los persigue en un helicóptero policial y un camión de nitrógeno líquido. El T-800 puede congelar y hacer pedazos al T-1000 con nitrógeno líquido, pero este se derrite rápidamente y se reforma para continuar su persecución de John. En última instancia, el T-800 debe detener al T-1000 de matar a John y hacerlo explotar en un tanque de acero fundido para destruirlo.Dos finales son posibles, dependiendo del resultado del ataque a Cyberdyne. Si todo el equipo es destruido, el jugador recibe un mensaje de que el Día del Juicio ha sido evitado; de lo contrario, la investigación de la empresa continuará y el Día del Juicio permanece como una posibilidad',
        trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711303445/segundo%20spring/terminator/videogame/gameplay/Terminator_3__The_Redemption_PlayStation_2_Trailer_-_480p_30fps_H264-128kbit_AAC_ll8umt.mp4',
    },
    {
        title: "Terminator III: La rebelion de las Maquinas",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710598974/segundo%20spring/terminator/videogame/terminator-dark-fate-defiance-20235311265191_1_zqnely.jpg",
        platform: "		PlayStation 2, XBOX, Game Boy Advance, móvil",
        year: "2003",
        studio: "Atari",
        clasification: "PG12",
        resume: ' Terminator 3: Rise of the Machines (Terminator 3: la rebelión de las Máquinas en Latinoamérica y España) es un videojego de disparos en primera persona de la película del mismo nombre. Fue lanzado el 11 de noviembre de 2003 para Xbox y PlayStation 2​ Una versión para Game Boy Advance se estrenó el 23 de noviembre de 2003. Un juego de rompecabezas también fue lanzado para los teléfonos móviles. Se planeó lanzar una versión para Gamecube pero fue cancelada por ser innecesaria',
        trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711303445/segundo%20spring/terminator/videogame/gameplay/Terminator_3__The_Redemption_PlayStation_2_Trailer_-_480p_30fps_H264-128kbit_AAC_ll8umt.mp4',
    },
    {
        title: "Terminator Survival Proyect",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710598981/segundo%20spring/terminator/videogame/terminator_survivors_c5pl41.jpg",
        platform: "	PS-5, XBOX ONE , PC",
        year: "2024",
        studio: "Midway",
        clasification: "PG12",
        resume: "El editor y desarrollador de juegos Nacon ha anunciado una nueva presentación para más adelante este mes, que incluirá algunos proyectos bastante importantes de sus estudios internos y asociados. Apodada 'Nacon Connect' — como se ha vuelto la norma para el equipo — esta presentación de 30 minutos tendrá lugar el 29 de febrero a las 10 a.m. PT / 1 p.m. ET / 6 p.m. GMT a través de Twitch y YouTube.El juego principal aquí probablemente sea el próximo título de Terminator del equipo, después de haber lanzado Terminator: Resistance en 2019. Este 'Proyecto de Supervivencia' basado en la famosa franquicia fue anunciado en 2022 con un teaser muy misterioso - y no hemos visto nada desde entonces.Así que puedes esperar un vistazo más profundo a ese junto con nuevas presentaciones para Ravenswatch, Crown Wars: The Black Prince, GreedFall II: The Dying World y el próximo juego de carreras de mundo abierto Test Drive Unlimited Solar Crown.Después del evento principal, el desarrollador de GreedFall, Spiders, llevará a cabo su propia presentación 'post-show' sobre la secuela próxima, así que los fans del RPG de culto de 2019 deberían obtener un valor adicional del evento de Nacon del próximo mes. ¡Consulta el enlace a continuación para ver lo que ofreció la presentación del año pasado!",
        trailer: 'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711303487/segundo%20spring/terminator/videogame/gameplay/Terminator_Survival_Project___NEW_Terminator_Open_World_Survival_Gameplay_2023_480p_25fps_H264-128kbit_AAC_sbh9p7.mp4',
    },

]
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allVideoGamesTerminator = await Terminator.find();
        if (allVideoGamesTerminator.length > 0) {
            await Terminator.collection.drop();
            console.log('Videojuegos borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Videojuegos', err);
    })
    .then(async() => {
        const VideoGamesTerminatorMap = arrayVideoGamesTerminator.map((VideoGame) => new Terminator(VideoGame));
        await Terminator.insertMany(VideoGamesTerminatorMap);
        console.log('Videojuegos insertados');
    })
    .catch((err) => {
        console.log('error insertando los Videojuegos', err);
    })
    .finally(() => mongoose.disconnect());