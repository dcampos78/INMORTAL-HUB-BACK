const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const VideoGameXmen = require('../../api/models/models.Xmen/videoGames.Xmen.model');


const arrayVideoGamesXmen = [{
        title: "X-Men: Mutant Academy",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711552956/segundo%20spring/Xmen/videoGames/Xmen-mutant-academy_q8vhnc.jpg",
        platform: "PlayStation",
        year: "2000",
        studio: "Paradox Development",
        clasification: "T (Teen)",
        resume: "X-men: Mutant Academy es un videojuego de lucha en 3D/2D, el juego está basado en los personajes de Marvel Comics, los X-Men. X-men: Mutant Academy, es un juego de peleas que utiliza seis botones, tres botones para puñetazos y tres para patadas. El videojuego fue seguido por dos secuelas: X-Men: Mutant Academy 2 y X-Men: Next Dimension. Los personajes del juego pueden ser jugados tanto con sus trajes de cómics y sus trajes de la película de 2000, X-Men. Personajes que no están presentes en la película se dieron trajes de un diseño similar.Hay diez personajes seleccionables desde el Universo X-Men, todos ellos seleccionables desde el principio en el modo versus, pero los cuatro jefes deben ser desbloqueados para jugar como en todos los otros modos.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711554588/segundo%20spring/Xmen/trailers/videoGames/X_Men_Mutant_Academy_PS1_-_Retro_Bits_720p_24fps_H264-192kbit_AAC_thkyby.mp4"
    },
    {
        title: "X-Men: Mutant Academy 2",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711552959/segundo%20spring/Xmen/videoGames/Xmen-mutant-academy-2_pelnry.jpg",
        platform: "PlayStation",
        year: "2001",
        studio: "Paradox Development",
        clasification: "T (Teen)",
        resume: "X-Men: Mutant Academy 2 es un juego de lucha y acción en 2,5D. Los personajes y los entornos están modelados en 3D, pero la jugabilidad se limita a un plano 2D. Al igual que su predecesor, el juego permite al jugador elegir entre varios héroes y villanos de la franquicia X-Men e incluye muchos de los movimientos característicos de los cómics. El juego también incluye un vistazo entre bastidores a los bocetos conceptuales de X-Men: La Película, trajes y otro material similar. Se ofrecen cuatro modos de juego al jugador. Entrenamiento de la Academia - Aquí es donde se pueden desbloquear trajes alternativos. La mayoría de los personajes pueden desbloquear dos trajes, pero seis no. Arcade - En este modo, es posible desbloquear las películas finales de los personajes. Otra característica adicional es la posibilidad de desbloquear personajes extra. Esto se consigue obteniendo todas las películas finales de diferentes personajes seguidas. Psylocke se desbloquea para la fila de la izquierda tras completar el juego con Lobezno, y Juggernaut se desbloquea para la fila de la derecha tras completar el juego con todos los personajes, incluido Psylocke. Hay dos personajes especiales que se pueden desbloquear tras obtener los finales de los personajes especiales. Spider-Man se desbloquea si el jugador se encuentra con él y lo derrota en el Modo Arcade, y Xavier se desbloquea si uno se pasa con Juggernaut. Versus - Permite que dos jugadores luchen entre sí usando los personajes disponibles, siempre que dos mandos estén correctamente insertados en los puertos de los mandos. Al superar el modo Arcade, se desbloquea la arena Fiesta en la piscina, que cambia las apariencias de los personajes a temas de piscina/playa. Supervivencia - El modo Supervivencia permite al jugador elegir un único personaje e intentar derrotar a varios enemigos sin perder su propia salud. Cuando la barra de salud del jugador se agota, el juego termina. Cada partida del modo Supervivencia consta de una ronda; cuenta las victorias y las victorias perfectas (derrotas sin perder la propia salud) y, una vez derrotado, coloca al jugador en una tabla de clasificación, que inicialmente tiene a Beast en último lugar con dos victorias y cero victorias perfectas, y a Rogue en primer lugar con diez victorias y cuatro victorias perfectas.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711554690/segundo%20spring/Xmen/trailers/videoGames/X-Men__Mutant_Academy_2_PS1_2001_Video_Game_US_Trailer_240p_15fps_H264-96kbit_AAC_belgjo.mp4"
    },
    {
        title: "X-Men: Next Dimension",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711552962/segundo%20spring/Xmen/videoGames/Xmen-next-dimension_oosvut.jpg",
        platform: "PlayStation 2, GameCube, Xbox",
        year: "2002",
        studio: "Paradox Development",
        clasification: "T (Teen)",
        resume: "La mecánica del juego se adapta a una curva de aprendizaje muy gradual: los superataques se realizan pulsando dos botones de puñetazo o patada simultáneamente, y los combos multigolpe se pueden ejecutar pulsando los botones de puñetazo y patada en un orden determinado (una característica similar a los combos en cadena de Darkstalkers). El juego cuenta con un amplio sistema de combos, que incluye cadenas normales, malabares aéreos y lanzamientos aéreos. Además del sistema básico de bloqueo, los jugadores tienen a su disposición varios contraataques que pueden ejecutarse simplemente pulsando el botón de contraataque y una dirección en el mando. Los contraataques son específicos del tipo de ataque que el jugador está contrarrestando.Los escenarios de lucha son escenarios completamente renderizados en 3D con sus propios diseños. Al igual que en Dead or Alive 3, es posible derribar a un oponente a una parte diferente del escenario, que funciona como su propio escenario individual. En la Mansión-X, por ejemplo, se puede derribar a un oponente desde el Hangar al Pasillo, y luego al patio exterior donde, tras el segundo asalto, se abre la cancha de baloncesto, lo que permite volver al Hangar.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711554788/segundo%20spring/Xmen/trailers/videoGames/X-Men_Next_Dimension_Trailer_E3_2002_PS2_360p_25fps_H264-128kbit_AAC_pliyds.mp4"
    },
    {
        title: "X-Men: Wolverine's Revenge",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711553013/segundo%20spring/Xmen/videoGames/Xmen-venganza-lobezno_e6hp3r.jpg",
        platform: "PlayStation 2, GameCube, Xbox, Game Boy Advance, PC",
        year: "2003",
        studio: "GenePool Software (GBA), Vicarious Visions (GBA), GenePool Software (PC), Vicarious Visions (PS2, GC, Xbox)",
        clasification: "T (Teen)",
        resume: "Wolverine's Revenge es un juego de acción que se desarrolla desde una perspectiva en tercera persona a lo largo de seis actos. Jugando como Lobezno, el jugador puede retraer o extender sus garras de adamantium, dar puñetazos, patadas y placajes deslizantes para luchar contra varios soldados blindados y criaturas mutantes. El jugador puede ganar puntos realizando Golpes, en los que Lobezno ataca con estilo a los enemigos que le rodean, y también puede ganar una bonificación de bolos aturdiendo a un enemigo con las garras replegadas o una patada, levantándolo y lanzándolo contra otro enemigo. También se pueden utilizar movimientos de ataque para acabar con los enemigos aturdidos.El jugador también puede utilizar los sentidos aumentados de Lobezno manteniendo pulsado un botón específico. En ese momento, la pantalla (excepto la de Lobezno y los enemigos) se tiñe de naranja y permite al jugador ver las pisadas de un enemigo, su posición (indicada por una flecha roja pulsante sobre él), sus rastros de olor verdes, láseres, un fantasma de Lobezno a punto de abatirlo y minas invisibles, indicadas por grandes círculos giratorios en el suelo, así como iluminar zonas oscuras. El uso de los sentidos también pone al jugador en un modo sigiloso en el que Lobezno puede acercarse sigilosamente por detrás de un enemigo desprevenido y matarlo al instante, recompensándolo con placas de identificación, que cuando se recogen una cierta cantidad, conceden al jugador acceso a Golpes más dañinos. También puede abrazarse a las paredes para matar a los enemigos que acechan en las esquinas. El jugador también puede ganar chapas realizando golpes triples. Otra mecánica es la furia salvaje de Lobezno. Cada vez que daña a un enemigo o él mismo es dañado por un enemigo, su medidor de rabia se llena gradualmente. Cuando está lleno, o si el jugador pulsa dos veces el botón de extensión de la garra cuando aparece algún rojo en el medidor, Lobezno entra en un estado de furia temporal, en el que se mueve más rápido y mata a los enemigos con mayor celeridad durante un tiempo limitado. El jugador también puede activar la habilidad curativa de Lobezno retrayendo sus garras, a costa de poder destruir objetos destructibles o abrir vallas de un tajo.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711554875/segundo%20spring/Xmen/trailers/videoGames/X-MEN_-__Wolverine_s_Revenge__Trailer_480p_30fps_H264-128kbit_AAC_ybi2b6.mp4"
    },
    {
        title: "X-Men: Legends",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711552950/segundo%20spring/Xmen/videoGames/Xmen-legends_y49ma8.jpg",
        platform: "PlayStation 2, Xbox, GameCube",
        year: "2004",
        studio: "Raven Software",
        clasification: "T (Teen)",
        resume: "X-Men Legends es un juego de rol de acción. Los jugadores eligen un equipo de hasta cuatro personajes de un grupo más grande de X-Men. A medida que los jugadores avanzan en el juego, se desbloquean X-Men adicionales. En las versiones de consola, hasta cuatro jugadores pueden jugar en la campaña cooperativa, con la posibilidad de agregar o quitar jugadores en cualquier momento.1​ El juego cooperativo presenta un sistema de combate refinado y la capacidad de interactuar con personajes que no son jugadores . El juego también cuenta con un modo de escaramuza, que permite a los jugadores luchar entre sí o contra oleadas de enemigos controlados por computadora. A medida que los personajes obtienen puntos de experiencia , los jugadores pueden mejorar sus cuatro poderes principales y otras habilidades exclusivas de ese personaje. Los elementos que se encuentran durante el juego también se pueden equipar para mejorar aún más las habilidades de un personaje. Los personajes pueden combinar ataques para crear un combo , en el que dos o más jugadores usan sus poderes mutantes en un solo enemigo al mismo tiempo. Las habilidades especiales de los personajes se pueden usar para crear un Super Combo cuando se combinan con un Xtreme Power que está disponible en el nivel 15. La Mansión X sirve como un centro al que el equipo regresa después de cada misión. Mientras está en la mansión, un jugador controla a Alison Crestmere mientras explora y aprende sobre sí misma y los otros X-Men. Aquí los jugadores también pueden ver el arte de la pantalla de carga , las cinemáticas y las portadas de cómics adquiridos durante el juego. Se puede acceder a las biografías de los X-Men y sus enemigos en las computadoras ubicadas en la mansión. Los jugadores pueden participar en un juego de trivia de X-Men, que otorga puntos de experiencia por las respuestas correctas. Además, los jugadores pueden acceder el ordenador para jugar en la Sala de Peligro misiones de reto desbloqueables durante el desarrollo del juego. Los jugadores tienen dos vendedores disponibles para ellos: Forja, que vende equipos y Morlock Healer , que proporciona paquetes de salud y energía, así como discos de entrenamiento para usar en la Sala de peligro. Forge está disponible después de que Alison lo contacte accidentalmente desde Mansión X, y se puede acceder a Healer después de la tercera misión.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711554967/segundo%20spring/Xmen/trailers/videoGames/X-Men_Legends_PlayStation_2_Trailer_-_X-Men_Legends_Direct_480p_30fps_H264-128kbit_AAC_zcg7a8.mp4"
    },
    {
        title: "X-Men Legends II: Rise of Apocalypse",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711552953/segundo%20spring/Xmen/videoGames/Xmen-legends2_xz8wll.jpg",
        platform: "PlayStation 2, Xbox, GameCube, Microsoft Windows, PlayStation Portable",
        year: "2005",
        studio: "Raven Software",
        clasification: "T (Teen)",
        resume: "X-Men Legends II es un juego de rol y acción. Une a dos equipos de superhéroes de Marvel Comics, los heroicos X-Men y la villana Hermandad de Mutantes, que se enfrentan juntos al supervillano mutante Apocalipsis y sus secuaces. Los jugadores pueden elegir hasta cuatro personajes para usar a la vez de una lista más amplia. Los jugadores desbloquean personajes adicionales a medida que avanzan en el juego. Cuatro jugadores pueden jugar en una máquina de forma cooperativa, y los jugadores pueden unirse o abandonar en cualquier momento. El juego también cuenta con juego en línea para hasta cuatro jugadores, una primicia en la serie. Se incluye un nuevo modo de juego plus que permite a los jugadores jugar por segunda vez conservando todas las estadísticas de los personajes. A medida que los personajes ganan puntos de experiencia, pueden mejorar sus superpoderes mutantes y habilidades únicas. Los objetos encontrados durante el juego también pueden equiparse para mejorar aún más las habilidades de los personajes. Los personajes pueden combinar ataques para crear un combo, en el que dos o más jugadores golpean o patean a un solo enemigo al mismo tiempo[4] Las habilidades especiales del personaje también pueden usarse de la misma manera para crear un Super Combo que inflige un daño masivo a los enemigos. Cada personaje tiene varios poderes mutantes que los jugadores pueden asignar a los botones del mando. El juego también cuenta con un modo escaramuza, que permite a los jugadores luchar entre sí o contra oleadas de enemigos controlados por el ordenador",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711555047/segundo%20spring/Xmen/trailers/videoGames/X-Men_Legends_II__Rise_of_Apocalypse_Xbox_Trailer_-_360p_30fps_H264-128kbit_AAC_fvegx6.mp4"
    },
    {
        title: "X-Men: The Official Game",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711552947/segundo%20spring/Xmen/videoGames/Xmen-juegooficial_divqvf.jpg",
        platform: "PlayStation 2, Xbox, Xbox 360, GameCube, Microsoft Windows, Game Boy Advance, Nintendo DS",
        year: "2006",
        studio: "Beenox (PC, Xbox 360), Amaze Entertainment (PS2, Xbox, GC, GBA, DS)",
        clasification: "T (Teen)",
        resume: "Durante una sesión en la Sala de Peligro del Instituto Xavier, Logan / Lobezno lucha contra Victor Creed / Dientes de Sable, y al final acaba perdiendo la sesión, aunque había sido salvado por la oportuna llegada de Hombre de Hielo, que estaba allí para que Cíclope pudiera entrenarle, pero está demasiado lisiado de dolor para hacerlo debido a la aparente muerte de Jean Grey [N 1]. Después de que Logan entrene a Hombre de Hielo en la Sala de Peligro, el Profesor X advierte a Logan de que no vuelva a probar la Sala de Peligro en el Nivel de Peligro 7, antes de pedir a los X-Men que regresen al Lago Alkali para recuperar piezas irremplazables para Cerebro. Rondador Nocturno se infiltra en los restos de la base de William Stryker con su habilidad de teletransporte, ya que los sistemas de armamento estaban operativos de algún modo. Una vez dentro, los X-Men descubren a un grupo de agentes llamados HYDRA saqueando la base. Rondador Nocturno y Coloso van a buscar las piezas de Cerebro mientras Logan y Tormenta investigan la presencia de HYDRA. Logan y Tormenta descubren que Stryker había estado construyendo robots gigantes llamados Centinelas como otro plan para erradicar a la humanidad mutante. Hombre de Hielo impide que Pyro provoque una fusión en una central nuclear mientras Tormenta y Rondador Nocturno impiden que el Hombre Múltiple vuele un puente. Mientras tanto, Logan sigue a Deathstrike y a sus agentes de HYDRA hasta Japón. Logan se entera de que Deathstrike e HYDRA están trabajando para el Samurai de Plata. Tras luchar contra legiones de fuerzas de HYDRA y matar de nuevo a Deathstrike, Logan se enfrenta a Samurai Plateado. Samurai revela que HYDRA ayudó a Stryker a construir los Centinelas, sin darse cuenta de que planeaba volverlos contra los mutantes. El propio Samurai Plateado es un mutante, y la activación del Molde Maestro fue un error. Tras derrotar a Samurai Plateado, Logan se entera de que HYDRA tiene un dispositivo en Hong Kong que puede detener al Molde Maestro, hacia donde éste se dirige actualmente. Logan informa al Profesor Xavier, que se pone en contacto con Magneto, temiendo que los X-Men no puedan detener a los Centinelas por sí solos. Magneto y Dientes de Sable viajan a Hong Kong para ayudar a los X-Men. Xavier también revela que Jason Stryker sigue vivo; su psique ahora está fracturada en dos mitades: una mitad buena que se ha estado apareciendo a Rondador Nocturno y una mitad malvada que está controlando el Molde Maestro. Afirma que otro de sus alumnos tuvo un problema similar (refiriéndose a Jean Grey/Phoenix). Nightcrawler desactiva el centro de control del Moho Maestro, guiado por la mitad buena de Jason, que le ayuda a señalar el camino a través del laberinto del cuerpo del Moho. Nightcrawler desactiva la red neuronal del Moho Maestro, modificada por Jason para que parezca un reino demoníaco. Mientras tanto, Iceman destruye el núcleo del Molde Maestro y Logan -en otra de las alucinaciones de Jason- lucha contra varios clones feroces de sí mismo, saliendo victorioso. Rondador Nocturno intenta salvar a Jason mientras el Molde Maestro comienza a derrumbarse, pero Dientes de Sable secuestra a Jason e intenta escapar. Logan sigue el rastro de Dientes de Sable y se enfrenta a él mientras Kurt escapa con Jason. Los dos tienen una batalla feroz, que termina con Logan lanzando a Sabretooth desde una gran altura para ser empalado abajo. Jason muere, dando las gracias a Rondador Nocturno por salvarle. Magneto se marcha, jurando que su próximo encuentro con los X-Men será como enemigo.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711555132/segundo%20spring/Xmen/trailers/videoGames/X-Men__The_Official_Game_Xbox_360_Trailer_-_New_E3_Trailer_180p_30fps_H264-96kbit_AAC_m9scoq.mp4"
    },
    {
        title: "X-Men Origins: Wolverine",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711552985/segundo%20spring/Xmen/videoGames/Xmen-origenes-lobezno_secgeo.jpg",
        platform: "PlayStation 3, Xbox 360, PC",
        year: "2009",
        studio: "Raven Software",
        clasification: "M (Mature)",
        resume: "Un prólogo muestra a Wolverine cazando y siendo cazado por un grupo de soldados en un ambiente urbano desolado. Él viste un uniforme que recuerda al disfraz visto en las películas X-Men, indicando que esto toma lugar en un tiempo lejano. Sus pensamientos se derivan de un pasado olvidado. El juego empieza en África, que está implicada en ser Wakanda, gracias al interés de Stryker en los depósitos del meteorito en la región. Las misiones de África, que son presentados como flashbacks, describe los eventos que llevan a Logan a abandonar el Equipo X, mostrando que su propia moral está en conflicto con lo que el Equipo X debe hacer (es decir, matar a inocentes con fines estratégicos). Tres años después, cuando Logan se establece en Canadá con su novia, Kayla Silverfox, su hermano Victor Creed reaparece en un bar local donde Logan y él luchan. Creed sale victorioso, rompe las garras de hueso de Logan y lo deja inconsciente. Luego de despertar, Logan encuentra muerta a Kayla. El coronel William Stryker llega, ofreciendo a Logan una oportunidad para vengarse. Logan acepta y se somete a un procedimiento que deposita adamantio, un metal indestructible procesado de los depósitos de meteoritos, en sus huesos. Cuando el proceso termina, Logan oye que Stryker quiere borrar su memoria, enfureciéndose y escapando de la instalación del Lago Alkali, matando varios hombres de Stryker, incluyendo a David North. Logan viaja al sitio del Proyecto: Wideawake buscando a John Wraith, donde se enfrenta a Bolivar Trask y su Centinela cazador de mutantes. Luego ser liberado, Wraith lleva a Logan con Fred Dukes, quien lleva a Logan con Remy Lebeau, quien confunde a Logan como uno de los agentes de Stryker. Logan persigue a Lebeau al tejado del edificio, donde convence a Lebeau de llevarle a la isla base de Stryker. Al llegar a la isla, Logan se da cuenta de que Silverfox está viva y que su muerte fue una táctica para conseguir que Logan sea voluntario para el Arma X. Devastado por la verdad, Logan acepta la oferta de Stryker para borrar su memoria, pero cambia de parecer cuando Creed toma a Silverfox como rehén. Luego de la pelea de Creed y Logan, el Arma XI de Stryker, Deadpool, es enviado para matar a Wolverine, y luego de la batalla, los recuerdos de Logan son dañados cuando le disparan una bala de adamantium del revólver de Stryker. En el epílogo, Bolivar Trask, que ha perfeccionado la recreación de las partes del cuerpo humano por reemplazos robóticos, ha tomado a Logan como rehén. Logan se libera de sus cadenas, pero Trask escapa. Un ejército de Centinelas es visto a la distancia en una ciudad arruinada, destruyendo todo a la vista y Logan también citando que este mundo puede funcionar mal, pero sé como quiero arreglarlo",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711555249/segundo%20spring/Xmen/trailers/videoGames/X-Men_Origins__Wolverine_-_Gameplay_Trailer_HD_720p_30fps_H264-192kbit_AAC_r3okkz.mp4"
    },
    {
        title: "X-Men: Destiny",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711552942/segundo%20spring/Xmen/videoGames/Xmen-destiny_qhzuyq.jpg",
        platform: "PlayStation 3, Xbox 360, Wii, Nintendo DS",
        year: "2011",
        studio: "Silicon Knights",
        clasification: "T (Teen)",
        resume: "En X-Men: Destiny, los jugadores controlan a nuevos mutantes que se inscribieron a la Mansión X o se unieron a La hermandad de los mutantes, los jugadores tienen que «armar su destino» para poder salvar a los mutantes X-. Men: Destiny pone énfasis en la elección, en lugar de un juego tipo lineal más tradicional. Según el comunicado de prensa oficial, el nuevo juego de vídeo original arroja jugadores como nuevos reclutas mutantes en una historia rica, la ramificación que cuenta con un elemento profundo de elección y da a los jugadores el máximo control de su destino. A lo largo del juego, los jugadores recogen mejoras de energía llamados X-Genes. Cada X-Gene puede desbloquear tres tipos de habilidades: ofensivas, defensivas y de servicios públicos. X-genes pueden ser mezclados y sincronizados como el jugador crea conveniente para una experiencia única. Algunos minoristas han empaquetado el juego con el exclusivo pre-order bonus. Los que pre-ordenar en Amazon.com recibieron un código de desbloqueo temprano para equipo Emma Frost y X-Genes-, Best Buy ofrece un código de desbloqueo a principios de traje de Juggernaut y X-genes, y los clientes pre-pedido Game Stop recibió traje de Havok y X -Genes",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711555334/segundo%20spring/Xmen/trailers/videoGames/X-Men__Destiny_-_Launch_Trailer_Multi_720p_30fps_H264-192kbit_AAC_ugcfma.mp4"
    },
    {
        title: "X-Men: Days of Future Past",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711552944/segundo%20spring/Xmen/videoGames/uncanny-Xmen-days-of-future-past_z8nofy.jpg",
        platform: "iOS, Android",
        year: "2014",
        studio: "Gameloft",
        clasification: "T (Teen)",
        resume: "X-Men: Days of Future Past es un juego de acción y aventura para móviles basado en la historia de los cómics y la película del mismo nombre. Los jugadores controlan a varios personajes de X-Men mientras luchan contra centinelas y otros enemigos en diferentes líneas temporales. El juego es de desplazamiento lateral en 2D con controles táctiles, y los jugadores pueden desbloquear personajes adicionales y mejoras a medida que avanzan",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711555404/segundo%20spring/Xmen/trailers/videoGames/Uncanny_X-Men__Days_of_Future_Past_-_Game_Trailer_720p_30fps_H264-192kbit_AAC_omxixy.mp4"
    },
]

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allVideoGamesXmen = await VideoGameXmen.find();
        if (allVideoGamesXmen.length > 0) {
            await VideoGameXmen.collection.drop();
            console.log('Videojuegos borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Videojuegos', err);
    })
    .then(async() => {
        const VideoGamesXmenMap = arrayVideoGamesXmen.map((VideoGame) => new VideoGameXmen(VideoGame));
        await VideoGameXmen.insertMany(VideoGamesXmenMap);
        console.log('Videojuegos insertados');
    })
    .catch((err) => {
        console.log('error insertando los Videojuegos', err);
    })
    .finally(() => mongoose.disconnect());